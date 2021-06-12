import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LoginPage from '../screens/LoginPage';
import Search from '../screens/Search';
import StoreView from '../screens/StoreView';
import Checkout from '../screens/Checkout';
import Models from '../screens/Models';
import VoiceToText from '../screens/VoiceToText';
import PaymentSuccessful from '../screens/PaymentSucessfull';
import ChooseImage from '../screens/ChooseImage';
import Model from '../screens/Model';

const screens = {
    LoginPage: {
        screen: LoginPage,
    },
    Search: {
        screen: Search,
    },
    StoreView:{
        screen: StoreView,
    },
    Checkout: {
        screen: Checkout,
    },
    Models: {
        screen: Models,
    },
    Model:{
        screen: Model,
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