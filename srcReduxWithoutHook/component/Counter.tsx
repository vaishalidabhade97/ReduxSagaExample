import React from "react";
import { Button, FlatList, ListRenderItem, Text, View } from "react-native";
import { takeGetUserFetchAction } from "../redux/actionCreators";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/hooks";
import { styles } from "./styles";
import { Users } from "../redux/reducer";

const Counter: React.FC = () => {
    const {users} = useAppSelector(state => state.profile)
    const dispatch = useDispatch()
    const onPress = () => {
        dispatch(takeGetUserFetchAction()) 
    }

    const renderItem: ListRenderItem<Users> = ({item}) => {
        return (
            <View key={item.id}>
                <Text>{item.name}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Users example for Redux Saga
            </Text>
            <Button
                title="Call Api"
                onPress={onPress}
            />
            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.id.toString()}
                style={styles.list}
            />
        </View>
    )
}

export default Counter