import React, {useRef} from 'react';
import {View, ImageBackground} from 'react-native'
import DismissView from "../../../components/hoc/DismissView";
import Title from "../../../components/basic/Title";
import ProgressBar from "../../../components/basic/ProgressBar";
import SelectBox from "../../../components/basic/SelectBox";
import {StatusBar} from "expo-status-bar";
import Button from "../../../components/basic/Button";
import i18n from '../../../utils/locales/LocalesConfig'
import {useDispatch, useSelector} from "react-redux";
import {showAlert} from "../../../redux/actions/alertAction";
import {setRegistrationData} from "../../../redux/actions/registerAction";
import css from '../../../styles/registration.css'
import {REGISTRATION_BG_IMAGE} from "../../../utils/helpers/ImageLoader";
import {isApple} from "../../../utils/helpers/AppleDevices";
import Switcher from "../../../utils/helpers/Switcher";

export default function LevelScreen(props) {
    const state = useSelector(state => state.registration)
    const dispatch = useDispatch()

    const [levels, setLevels] = React.useState([
        {id: 0, text: i18n.t("levelNewbieTitle"), subtext: i18n.t("levelNewbieSubtitle"), selected: false},
        {id: 1, text: i18n.t("levelBeginnerTitle"), subtext: i18n.t("levelBeginnerSubtitle"), selected: false},
        {id: 2, text: i18n.t("levelIntermediateTitle"), subtext: i18n.t("levelIntermediateSubtitle"), selected: false},
        {id: 3, text: i18n.t("levelAdvancedTitle"), subtext: i18n.t("levelAdvancedSubtitle"), selected: false},
    ])
    const selected = useRef(-1)
    const switcher = new Switcher(levels, setLevels)

    const onNextBtnPress = () => {
        if (selected.current !== -1) {
            state.level = selected.current

            dispatch(setRegistrationData(state))
            props.navigation.navigate("goals")
        } else dispatch(showAlert(i18n.t('levelValidation')))
    }

    const renderItems = levels.map((item, key) =>
        <View style={css.item} key={key}>
            {isApple ? <StatusBar style='light'/> : null}

            <SelectBox
                style={css.box}
                text={item.text}
                selected={item.selected}
                onPress={() => {
                    switcher.switchById(item.id)
                    selected.current = item.id
                }}
                subtext={item.subtext}
            />
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
                        navigateTo="height"
                        currentPage={props.page}/>

                    <View style={[css.contentContainer, {width: '85%'}]}>
                        <Title text={i18n.t("levelTitle")} style={{marginBottom: 25, textAlign: 'center'}}/>
                        <View style={css.container}>
                            {renderItems}
                        </View>
                    </View>

                    <Button
                        text="Next"
                        onPress={() => onNextBtnPress()}
                        style={css.btnNext}/>
                </DismissView>
            </ImageBackground>
        </View>
    );
}

