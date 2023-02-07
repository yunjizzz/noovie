import React from "react";
import {View, Text} from "react-native";
import styled from "styled-components/native";

const Header = styled.View``;

const Body = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: red;
`
const Footer = styled.View``;

const Content = styled.Text`
    font-size: 60px;
    color: white;
    font-weight: 400;
`;

const Food = ({}) => (
    <>
    <Header></Header>
    <Body style={{}}>
        <Content>Food</Content>
    </Body>
    <Footer></Footer>
    </>
);


export default Food;