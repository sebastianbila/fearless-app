import React, {useRef} from 'react';
import {Platform, Text, View} from 'react-native'
import DismissView from "../../../components/hoc/DismissView";
import Button from "../../../components/basic/Button";
import i18n from '../../../utils/locales/LocalesConfig'
import validator from 'validator'
import {useDispatch, useSelector} from "react-redux";
import {loginRequest} from "../../../redux/actions/authAction";
import {showAlert} from "../../../redux/actions/alertAction";
import css from '../../../styles/login.css'
import Input from "../../../components/basic/Input";
import Toolbar from "../../../components/basic/Toolbar";

export default function LoginScreen(props) {
    const nav = props.navigation

    const dispatch = useDispatch()
    const state = useSelector(state => state.auth)

    const email = useRef('')
    const password = useRef('')

    React.useEffect(() => {
        const user = state.currentUser
        if (user !== null) {
            props.navigation.navigate("home")
        }
    }, [state])

    const signIn = () => {
        if (validator.isEmpty(password.current.trim()) || validator.isEmpty(email.current.trim())) {
            dispatch(showAlert(i18n.t('requireFieldValidation')))
        } else {
            if (!validator.isEmail(email.current.trim())) dispatch(showAlert(i18n.t('emailValidation')))
            else if (password.current.trim().length < 6) dispatch(showAlert(i18n.t('passMinLength')))
            else dispatch(loginRequest(email.current.trim(), password.current.trim()))
        }
    }

    return (
        <DismissView style={css.wrapper}>

            <Toolbar text={i18n.t('login_toolbarText')} nav={nav}/>

            <View style={css.inputContainer}>
                <Input
                    rounding='top'
                    placeholder={i18n.t('login_emailField')}
                    keyboardType={Platform.OS === 'ios' ? 'ascii-capable' : 'email-address'}
                    onChangeText={text => email.current = text}/>

                <View style={{marginBottom: 5}}/>

                <Input
                    rounding="bottom"
                    secureTextEntry={true}
                    keyboardType={Platform.OS === 'ios' ? 'ascii-capable' : 'default'}
                    maxLength={32}
                    placeholder={i18n.t('login_passwordField')}
                    onChangeText={text => password.current = text}/>

                <View style={{marginBottom: 20}}/>
                <Button
                    onPress={() => signIn()}
                    text={i18n.t('login_btnText')}/>

                <View style={{marginBottom: 20}}/>

                <Text style={css.forgotPassword}
                      onPress={() => nav.navigate("resetPassword")}>
                    {i18n.t('login_forgotPassword')}
                </Text>
            </View>
        </DismissView>
    );
}
