import {View, Text, FlatList} from 'react-native'
import {SIZES} from "../../constants";

const ProductRow = () => {
    const products = [
        1, 2, 3, 4
    ]
    return (
        <View style={{marginTop: SIZES.medium}}>
            <FlatList
                data={products}
                renderItem={({item}) => (<Text>Products</Text>)}
                horizontal
                contentContainerStyle={{columnGap: SIZES.medium}}
            />
        </View>
    )
}
export default ProductRow
