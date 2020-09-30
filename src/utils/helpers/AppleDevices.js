import {Dimensions, Platform} from "react-native";

const dim = Dimensions.get("window")

const StatusBar = {
    defaultHeight: 15,
    iphoneXHeight: 30
}

const isApple = Platform.OS === 'ios'
const isIphoneX = (isApple && (dim.height > 800 || dim.width > 800))

export default {StatusBar, isApple, isIphoneX}
export {isApple, isIphoneX}
