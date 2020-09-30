import React from 'react';
import {ImageBackground, View} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import {StatusBar} from "expo-status-bar";
import DismissView from "../../../components/hoc/DismissView";
import Title from "../../../components/basic/Title";
import Button from "../../../components/basic/Button";
import i18n from '../../../utils/locales/LocalesConfig'
import {showAlert} from "../../../redux/actions/alertAction";
import css from "../../../styles/registration.css"
import {setRegistrationData} from "../../../redux/actions/registerAction";
import {isApple} from "../../../utils/helpers/AppleDevices";
import Switcher from "../../../utils/helpers/Switcher";
import ProgressBar from "../../../components/basic/ProgressBar";
import SelectBox from "../../../components/basic/SelectBox";
import {REGISTRATION_BG_IMAGE} from "../../../utils/helpers/ImageLoader";

export default function GenderScreen(props) {
    console.log(props.page)
    const [genders, setGenders] = React.useState([
        {id: 0, text: i18n.t("genderMale"), icon: 'man', selected: false},
        {id: 1, text: i18n.t("genderFemale"), icon: 'woman', selected: false}
    ])
    const switcher = new Switcher(genders, setGenders)
    const selectedGender = React.useRef(-1);

    const state = useSelector(state => state.registration)
    const dispatch = useDispatch()

    const onPressNext = () => {
        if (selectedGender.current !== -1) {
            state.gender = selectedGender.current

            dispatch(setRegistrationData(state))
            props.navigation.navigate("weight")
        } else dispatch(showAlert(i18n.t('genderValidation')))
    }

    const renderItems = genders.map((gender, key) =>
        <View style={css.genderItem} key={key}>
            {isApple ? <StatusBar style='light'/> : null}

            <SelectBox
                key={key}
                text={gender.text}
                style={{paddingVertical: 15}}
                selected={gender.selected}
                onPress={() => {
                    switcher.switchById(gender.id)
                    selectedGender.current = gender.id
                }}
                icon={gender.icon}/>
        </View>
    )

    return (
        <View style={css.wrapper}>
            <ImageBackground
                style={css.image}
                source={REGISTRATION_BG_IMAGE}>

                <DismissView style={css.content}>

                    <ProgressBar
                        allPages={6}
                        navigation={props.navigation}
                        navigateTo="main"
                        currentPage={props.page}/>

                    <View style={css.contentContainer}>
                        <Title text={i18n.t("genderTitle")} style={{marginBottom: 25}}/>
                        <View style={css.genderContainer}>
                            {renderItems}
                        </View>
                    </View>

                    <Button
                        text={i18n.t("btnNext")}
                        onPress={() => onPressNext()}
                        style={css.btnNext}/>
                </DismissView>
            </ImageBackground>
        </View>
    );
}

