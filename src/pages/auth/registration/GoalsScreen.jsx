import React from 'react';
import {ImageBackground, View} from 'react-native'
import DismissView from "../../../components/hoc/DismissView";
import Title from "../../../components/basic/Title";
import ProgressBar from "../../../components/basic/ProgressBar";
import SelectBox from "../../../components/basic/SelectBox";
import {StatusBar} from "expo-status-bar";
import Button from "../../../components/basic/Button";
import i18n from '../../../utils/locales/LocalesConfig'
import {useDispatch, useSelector} from "react-redux";
import {setRegistrationData} from "../../../redux/actions/registerAction";
import css from '../../../styles/registration.css'
import {REGISTRATION_BG_IMAGE} from "../../../utils/helpers/ImageLoader";
import Switcher from "../../../utils/helpers/Switcher";
import {isApple} from "../../../utils/helpers/AppleDevices";
import Colors from "../../../utils/helpers/Colors";

export default function GoalsScreen(props) {
    const state = useSelector(state => state.registration)
    const dispatch = useDispatch()

    const [goals, setThisGoals] = React.useState([
        {id: 0, text: i18n.t("goals1Title"), subtext: i18n.t("goals1Subtitle"), selected: false},
        {id: 1, text: i18n.t("goals2Title"), subtext: i18n.t("goals2Subtitle"), selected: false},
        {id: 2, text: i18n.t("goals3Title"), subtext: i18n.t("goals3Subtitle"), selected: false},
        {id: 3, text: i18n.t("goals4Title"), subtext: i18n.t("goals4Subtitle"), selected: false},
    ])
    const switcher = new Switcher(goals, setThisGoals)

    const onNextBtnPress = () => {
        let selectedGoals = []
        goals.map(item => {
            if (item.selected) selectedGoals.push(item.id)
        })
        state.goals = selectedGoals

        dispatch(setRegistrationData(state))
        props.navigation.navigate("complete")
    }

    const renderItems = goals.map((item, key) =>
        <View style={css.item} key={key}>
            {isApple ? <StatusBar style='light'/> : null}

            <SelectBox
                style={[css.box, {height: 85}]}
                text={item.text}
                selected={item.selected}
                onPress={() => switcher.toggleItem(item.id)}
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
                        navigateTo="level"
                        currentPage={props.page}/>

                    <View style={[css.contentContainer, {width: '85%'}]}>
                        <Title text={i18n.t("goalsTitle")} style={{marginBottom: 5, textAlign: 'center'}}/>
                        <Title
                            fontSize={20}
                            color={Colors.lightGray}
                            fontFamily="SF Medium"
                            text={i18n.t("goalsSubtitle")}
                            style={{marginBottom: 25, textAlign: 'center'}}/>
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

