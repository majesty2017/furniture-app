import * as SplashScreen from 'expo-splash-screen'
import {useFonts} from "expo-font";
import {useCallback} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import {Cart, Search} from "./screens";

const Stack = createNativeStackNavigator()

export default function App() {
    const [fontsLoaded] = useFonts({
        regular: require('./assets/fonts/Poppins-Regular.ttf'),
        light: require('./assets/fonts/Poppins-Light.ttf'),
        medium: require('./assets/fonts/Poppins-Medium.ttf'),
        bold: require('./assets/fonts/Poppins-Bold.ttf'),
        semibold: require('./assets/fonts/Poppins-SemiBold.ttf'),
        extrabold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded]);
    if (!fontsLoaded) {
        return null
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Botton Navigation' component={BottomTabNavigation} options={{headerShown: false}} />
                <Stack.Screen name='Cart' component={Cart} options={{headerShown: false}} />
                <Stack.Screen name='Search' component={Search} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
