import React, {useState, useRef} from 'react';
import {Animated, ImageBackground, Keyboard, StyleSheet, View} from 'react-native'
import DismissView from "../../../components/hoc/DismissView";
import ProgressBar from "../../../components/basic/ProgressBar";
import Button from "../../../components/basic/Button";
import {StatusBar} from "expo-status-bar";
import i18n from '../../../utils/locales/LocalesConfig'
import {useDispatch, useSelector} from "react-redux";
import v from "validator"
import {showAlert} from "../../../redux/actions/alertAction";
import {registerRequest} from "../../../redux/actions/registerAction";
import css from '../../../styles/registration.css'
import {REGISTRATION_BG_IMAGE} from "../../../utils/helpers/ImageLoader";
import {moveAnimation} from "../../../utils/helpers/Animation";
import Input from "../../../components/basic/Input";
import {isApple} from "../../../utils/helpers/AppleDevices";

export default function CompleteAccountScreen(props) {
    const username = useRef('')
    const name = useRef('')
    const email = useRef('')
    const password = useRef('')

    const state = useSelector(state => state.registration)
    const authState = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const [keyboardPos] = useState(new Animated.Value(20));

    /* Hide Keyboard */
    React.useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', e => {
                moveAnimation(keyboardPos, e.endCoordinates.height - 50, 250)
            }
        );
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
                moveAnimation(keyboardPos, 20, 250)
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    React.useEffect(() => {
        const user = authState.currentUser
        if (user !== null) {
            props.navigation.navigate("home")
        }
    }, [state])

    const onPressNextBtn = () => {
        if (!v.isEmpty(email.current) && !v.isEmpty(name.current) &&
            !v.isEmpty(email.current) && !v.isEmpty(password.current)) {
            if (!v.isEmail(email.current)) dispatch(showAlert(i18n.t("emailValidation")))
            else if (password.current.length < 6) dispatch(showAlert(i18n.t("passMinLength")))
            else {
                state.data = {
                    username: username.current,
                    name: name.current,
                    email: email.current,
                    password: password.current
                }
                dispatch(registerRequest(state))
            }
        } else dispatch(showAlert(i18n.t("requireFieldValidation")))
    }

    const inputs = [
        {name: username, placeholder: i18n.t("completeUsernameText")},
        {name: name, placeholder: i18n.t("completeNameText")},
        {name: email, placeholder: i18n.t("completeEmailText")},
        {name: password, placeholder: i18n.t("completePasswordText")}
    ]

    const renderInputs = inputs.map(({name, placeholder}, key) =>
        <View key={key} style={styles.input}>
            <Input
                secureTextEntry={name === password}
                type="border"
                rounding={name === password ? 'none' : 'bottom'}
                placeholder={placeholder}
                onChangeText={text => name.current = text}/>
        </View>
    )

    return (
        <View style={css.wrapper}>
            <ImageBackground
                style={css.image}
                source={REGISTRATION_BG_IMAGE}>

                {isApple ? <StatusBar style='light'/> : null}

                <DismissView style={css.content}>
                    <ProgressBar
                        allPages={6}
                        navigation={props.navigation}
                        navigateTo="goals"
                        currentPage={props.page}/>

                    <Animated.View style={[styles.contentContainer, {marginBottom: keyboardPos}]}>
                        {renderInputs}
                    </Animated.View>

                    <Button
                        text={i18n.t("btnNext")}
                        onPress={() => onPressNextBtn()}
                        style={css.btnNext}/>
                </DismissView>
            </ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 20
    },
    input: {
        width: '85%',
        marginBottom: 5
    },
})
