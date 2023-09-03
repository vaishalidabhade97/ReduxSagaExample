import React from "react";
import { Button, FlatList, ListRenderItem, Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Users, getUsersFetch } from "../redux/reducer";
import { styles } from "./styles";

const Counter: React.FC = () => {
    const {users} = useAppSelector(state => state.profile)
    const dispatch = useAppDispatch()
    const onPress = () => {
        dispatch(getUsersFetch()) 
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
                getItemLayout={(item, index) => ({length: 5, offset: 5*index, index})}
                keyExtractor={(item, index) => item.id.toString()}
                style={styles.list}
            />
        </View>
    )
}

export default Counter