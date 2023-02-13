import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColorScheme } from "react-native";
import { BLACK, TABBAR_DARK, TABBAR_INACTIVE_DARK, TABBAR_INACTIVE_LIGHT, YELLOW } from "../screens/colors";
import Food from "../screens/Food";
import Search from "../screens/Search";
import Calendar from "../screens/Game";
import { Ionicons } from "@expo/vector-icons";
import Game from "../screens/Game";
import Foods from "../screens/Food";

const Tab = createBottomTabNavigator();

const Tabs = () =>{
const isDark = useColorScheme() === "dark";
return (
<Tab.Navigator screenOptions={{
    tabBarStyle: {
        backgroundColor: isDark ? BLACK : "white",
        height: 60
    },
    tabBarActiveTintColor: isDark ? TABBAR_DARK : "black",
    tabBarInactiveTintColor: isDark ? TABBAR_INACTIVE_DARK : TABBAR_INACTIVE_LIGHT,
    headerStyle: {
        backgroundColor: isDark ? YELLOW :"white",
    },
    headerTitleStyle:{
        color: isDark ? "white" : YELLOW
    },
    tabBarLabelStyle:{
        fontSize: 15,
        fontWeight: "600",
        marginTop: -5,
    }
}}>
    <Tab.Screen name="Store" component={Foods} 
        options={{
        tabBarIcon:(({focused, color, size}) => {
            console.log(focused, color, size);
            return <Ionicons name={focused ? "fast-food" : "fast-food-outline"} size={size} color="{color}" />
        }),
        headerShown: false,
    }}/>
    <Tab.Screen name="Game" component={Game}
         options={{
            tabBarIcon:(({focused, color, size}) => {
                console.log(focused, color, size);
                return <Ionicons name={focused ? "game-controller" : "game-controller-outline"} size={size} color="{color}" />
            }),
            headerShown: false,
        }}/>
    <Tab.Screen name="Search" component={Search}
         options={{
            tabBarIcon:(({focused, color, size}) => {
                console.log(focused, color, size);
                return <Ionicons name={focused ? "search" : "search-outline"} size={size} color="{color}" />
            }),
            headerShown: false,
        }}
    />
</Tab.Navigator>)
};

export default Tabs;