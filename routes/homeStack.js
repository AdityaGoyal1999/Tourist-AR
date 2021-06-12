import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LoginPage from '../screens/LoginPage';
import Stores from '../screens/Stores';
import StoreView from '../screens/StoreView';
import Checkout from '../screens/Checkout';
import VideoCall from '../screens/VideoCall';
import VoiceToText from '../screens/VoiceToText';
import PaymentSuccessful from '../screens/PaymentSucessfull';
import ChooseImage from '../screens/ChooseImage';

const screens = {
    LoginPage: {
        screen: LoginPage,
    },
    Stores: {
        screen: Stores,
    },
    StoreView:{
        screen: StoreView,
    },
    Checkout: {
        screen: Checkout,
    },
    VideoCall: {
        screen: VideoCall,
    },
    VoiceToText: {
        screen: VoiceToText,
    },
    PaymentSuccessful:{
        screen: PaymentSuccessful,
    },
    ChooseImage:{
        screen: ChooseImage,
    }

};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);