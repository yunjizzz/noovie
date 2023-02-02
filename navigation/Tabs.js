import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColorScheme } from "react-native";
import { BLACK, TABBAR_DARK, TABBAR_INACTIVE_DARK, TABBAR_INACTIVE_LIGHT, YELLOW } from "../screens/colors";
import Movies from "../screens/Movies";
import Search from "../screens/Search";
import Tv from "../screens/Tv";

const Tab = createBottomTabNavigator();

const Tabs = () =>{
const isDark = useColorScheme() === "dark";

return (
<Tab.Navigator screenOptions={{
    tabBarStyle: {
        backgroundColor: isDark ? BLACK : "white",
    },
    tabBarActiveTintColor: isDark ? TABBAR_DARK : "black",
    tabBarInactiveTintColor: isDark ? TABBAR_INACTIVE_DARK : TABBAR_INACTIVE_LIGHT,
    headerStyle: {
        backgroundColor: isDark ? YELLOW :"white",
    },
    headerTitleStyle:{
        color: isDark ? "white" : YELLOW
    }
}}>
    <Tab.Screen name="Movies" component={Movies}/>
    <Tab.Screen name="Tv" component={Tv}/>
    <Tab.Screen name="Search" component={Search}/>
</Tab.Navigator>)
};

export default Tabs;