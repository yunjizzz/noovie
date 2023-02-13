import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Dimensions, Text } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import { data } from '../data.json'; 
import { CUSTOM_BLACK, CUSTOM_YELLOW } from "./colors";

const Container = styled.ScrollView`
    /* background-color: ${(props) => props.theme.mainBgColor}; */

    background-color: #222f3e;
`;

const View = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const FoodListView = styled.View`
    justify-content: center;
    align-items: center;
`;

const FoodsList = styled.View`
    padding: 25px;
    margin-bottom: 15px;
    margin-top: 15px;
    flex-direction: row;
    background-color: #feca57;
    width: 70%;
    border-radius: 30px;
    justify-content: center;
`;

const FoodsName = styled.Text`
    font-size: 20px;
    color: #222f3e ;
`;

const FoodsText = styled.Text`
    color: white;
    font-size: 50;
`

const SCREEN_HEIGHT = Dimensions.get("window").height;


data.map(
    (food) => console.log(food.name)
)


const Foods: React.FC<NativeStackScreenProps<any,"Foods">> = () => {
    return (
    <Container>
        <Swiper loop 
        timeout={3.5} 
        containerStyle={{width:"100%", height: SCREEN_HEIGHT/4}}>
            <View style={{ backgroundColor: CUSTOM_BLACK}}><FoodsText>맛집짜잔</FoodsText></View>
            <View style={{ backgroundColor: CUSTOM_YELLOW}}><FoodsText>맛집짜잔</FoodsText></View>
        </Swiper>
        <FoodListView>
           { 
            data.map((food) => <FoodsList key={food.index}><FoodsName>{food.name}</FoodsName></FoodsList>)
            }
        </FoodListView>
    </Container>
    
    )
}

export default Foods;