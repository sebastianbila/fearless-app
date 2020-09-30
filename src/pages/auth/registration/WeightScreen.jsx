import React from 'react';
import {ImageBackground, View} from 'react-native'
import DismissView from "../../../components/hoc/DismissView";
import ProgressBar from "../../../components/basic/ProgressBar";
import Button from "../../../components/basic/Button";
import i18n from '../../../utils/locales/LocalesConfig'
import {StatusBar} from "expo-status-bar";
import Title from "../../../components/basic/Title";
import {useDispatch, useSelector} from "react-redux";
import {showAlert} from "../../../redux/actions/alertAction";
import {setRegistrationData} from "../../../redux/actions/registerAction";
import css from "../../../styles/registration.css"
import {REGISTRATION_BG_IMAGE} from "../../../utils/helpers/ImageLoader";
import Input from "../../../components/basic/Input";
import SwitchBox from "../../../components/basic/SwitchBox";
import {isApple} from "../../../utils/helpers/AppleDevices";

export default function WeightScreen(props) {
    const dispatch = useDispatch()
    const state = useSelector(state => state.registration)

    const [w, setW] = React.useState({
        weight: '',
        weightUnit: -1
    })

    const switchBox = (id) => {
        setW({
            weight: w.weight,
            weightUnit: id
        })
    }
    const onNextBtnPress = () => {
        if (w.weight !== '') {
            state.weight = parseInt(w.weight)
            state.weightUnit = w.weightUnit

            dispatch(setRegistrationData(state))
            props.navigation.navigate("height")
        } else dispatch(showAlert(i18n.t('weightValidation')))
    }

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
                        navigateTo="gender"
                        currentPage={props.page}/>

                    <View style={css.contentContainer}>
                        <Title
                            fontFamily='SF Black'
                            text={i18n.t("weightTitle")} style={{marginBottom: 25}}/>
                        <SwitchBox
                            pos={w.weightUnit}
                            onSwitchBox={switchBox}
                            text1={i18n.t('weightKg')}
                            text2={i18n.t('weightLbs')}/>

                        <View style={{marginTop: 15, width: 70}}>
                            <Input placeholder={w.weightUnit === -1 ? i18n.t('weightKg') : i18n.t('weightLbs')}
                                   rounding='full'
                                   type='border'
                                   value={w.weight || null}
                                   keyboardType='number-pad'
                                   maxLength={3}
                                   onChangeText={text => setW({...w, weight: text})}/>
                        </View>
                    </View>

                    <Button
                        text={i18n.t("btnNext")}
                        onPress={() => onNextBtnPress()}
                        style={css.btnNext}/>
                </DismissView>
            </ImageBackground>
        </View>
    );
}
