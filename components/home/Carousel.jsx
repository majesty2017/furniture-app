import {View, StyleSheet, Image} from 'react-native'
import React from 'react'
import {SlideImg1, SlideImg2, SlideImg3} from "../../assets/images";
import {COLORS, SIZES} from "../../constants";
import {SliderBox} from "react-native-image-slider-box";

const Carousel = () => {
    const slides = [
        SlideImg1,
        SlideImg2,
        SlideImg3
    ]
    return (
        <View>
            <View style={styles.carouselContainer}>
                <SliderBox
                    images={slides}
                    dotColor={COLORS.primary}
                    inactiveDotColor={COLORS.secondary}
                    imageComponentStyle={{borderRadius: 15, width: "92%", marginTop: 15}}
                    autoplay
                    circleLoop
                />
            </View>
        </View>
    )
}
export default Carousel

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: "center"
    }
})
