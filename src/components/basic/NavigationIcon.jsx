import React from 'react';
import {getIcon} from "../../../assets/icons/icon_navigation";
import {SvgXml} from "react-native-svg";
import Colors from "../../utils/helpers/Colors";

export default function NavigationIcon(props) {
    const color = props.fill || Colors.gray
    let icon = getIcon(props.icon)

    return (
        <SvgXml
            xml={icon}
            fill={color}
        />
    )
}




