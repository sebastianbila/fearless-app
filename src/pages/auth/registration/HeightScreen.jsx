import React from 'react';
import {View, ImageBackground} from 'react-native'
import DismissView from "../../../components/hoc/DismissView";
import ProgressBar from "../../../components/basic/ProgressBar";
import Button from "../../../components/basic/Button";
import i18n from '../../../utils/locales/LocalesConfig'
import {StatusBar} from "expo-status-bar";
import Title from "../../../components/basic/Title";
import SwitchBox from "../../../components/basic/SwitchBox";
import {useDispatch, useSelector} from "react-redux";
import {showAlert} from "../../../redux/actions/alertAction";
import {setRegistrationData} from "../../../redux/actions/registerAction";
import css from '../../../styles/registration.css'
import {REGISTRATION_BG_IMAGE} from "../../../utils/helpers/ImageLoader";
import Input from "../../../components/basic/Input";
import {isApple} from "../../../utils/helpers/AppleDevices";

export default function HeightScreen(props) {
    const state = useSelector(state => state.registration)
    const dispatch = useDispatch()

    const [h, setH] = React.useState({
        height: '',
        heightUnit: -1
    })

    const switchBox = (id) => {
       setH({
           height: h.height,
           heightUnit: id
       })
    }

    const onNextBtnPress = () => {
        if (h.height !== '') {
            state.height = parseInt(h.height)
            state.heightUnit = h.heightUnit

            dispatch(setRegistrationData(state))
            props.navigation.navigate("level")
        } else dispatch(showAlert(i18n.t('heightValidation')))
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
                        navigateTo="weight"
                        currentPage={props.page}/>

                    <View style={css.contentContainer}>
                        <Title
                            fontFamily='SF Black'
                            text={i18n.t("heightTitle")} style={{marginBottom: 25}}/>
                        <SwitchBox
                            pos={h.heightUnit}
                            onSwitchBox={switchBox}
                            text1={i18n.t('heightCm')}
                            text2={i18n.t('heightIn')}/>

                        <View style={{marginTop: 15, width: 70}}>
                            <Input placeholder={h.heightUnit === -1 ? i18n.t('heightCm') : i18n.t('heightIn')}
                                   rounding='full'
                                   type='border'
                                   keyboardType='number-pad'
                                   maxLength={3}
                                   onChangeText={text => h.height = text}/>
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

