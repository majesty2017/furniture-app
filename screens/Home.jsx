import {ScrollView, Text, TouchableOpacity, View} from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context";
import styles from "./home.style";
import {Ionicons, Fontisto} from "@expo/vector-icons";
import {Carousel, Heading, ProductRow, Welcome} from "../components";

const Home = () => {
    return (
        <SafeAreaView>
            <View style={styles.appBarWrapper}>
                <View style={styles.appBar}>
                    <Ionicons name="location-outline" size={24} />
                    <Text style={styles.location}> Accra </Text>
                    <View style={{alignItems: "flex-end"}}>
                        <View style={styles.cartCount}>
                            <Text style={styles.cartNumber}> 8 </Text>
                        </View>
                        <TouchableOpacity>
                            <Fontisto name='shopping-bag' size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView>
                <Welcome />
                <Carousel />
                <Heading />
                <ProductRow />
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home
