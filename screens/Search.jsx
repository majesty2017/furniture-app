import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {Feather, Ionicons} from "@expo/vector-icons";
import {COLORS, SIZES} from "../constants";
import styles from "./search.style";

const Search = () => {
    return (
        <SafeAreaView>
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Ionicons name="camera-outline" size={24} style={styles.searchIcon} />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value=""
                        onPressIn={() => {}}
                        placeholder="what are you looking for?"
                        focusable
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.searchBtn}>
                        <Feather name="search" size={SIZES.xLarge} color={COLORS.offwhite} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Search
