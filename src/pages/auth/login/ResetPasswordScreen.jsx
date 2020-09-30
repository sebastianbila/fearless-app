import React, {useRef} from 'react';
import {Platform, Text, View} from "react-native";
import DismissView from "../../../components/hoc/DismissView";
import Button from "../../../components/basic/Button";
import i18n from '../../../utils/locales/LocalesConfig'
import validator from "validator";
import {useDispatch} from "react-redux";
import {resetPassword} from "../../../redux/actions/authAction";
import {showAlert} from "../../../redux/actions/alertAction";
import css from '../../../styles/login.css'
import Toolbar from "../../../components/basic/Toolbar";
import Input from "../../../components/basic/Input";

export default function ResetPasswordScreen(props) {
    const nav = props.navigation
    const email = useRef('')
    const dispatch = useDispatch()

    const resetPasswordBtn = () => {
        if (validator.isEmpty(email.current.trim()))
            dispatch(showAlert(i18n.t('requireFieldValidation')))
        else if (!validator.isEmail(email.trim()))
            dispatch(showAlert(i18n.t('emailValidation')))
        else {
            email.current = ''
            dispatch(resetPassword(email.current.trim()))
        }
    }

    return (
        <DismissView style={css.wrapper}>
            <Toolbar text={i18n.t('resetPass_toolbarText')} nav={nav}/>
            <View style={css.inputContainer}>
                <Text style={css.title}>{i18n.t('resetPass_title')}</Text>
                <View style={{marginBottom: 5}}/>
                <Text style={css.subtitle}>{i18n.t('resetPass_subtitle')}</Text>
                <View style={{marginBottom: 10}}/>
                <Input
                    rounding='full'
                    placeholder={i18n.t('resetPass_emailField')}
                    keyboardType={Platform.OS === 'ios' ? 'ascii-capable' : 'email-address'}
                    onChangeText={text => email.current = text}/>

                <View style={{marginBottom: 15}}/>
                <Button
                    onPress={resetPasswordBtn}
                    text={i18n.t('resetPass_btnText')}/>
            </View>
        </DismissView>
    );
}
