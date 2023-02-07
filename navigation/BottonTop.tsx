import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Calendar from '../screens/Calendar';
import Food from '../screens/Food';
import Search from '../screens/Search';


const Tab = createMaterialTopTabNavigator();

function TopBar() {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarItemStyle: { width: 100 },
          tabBarStyle: { backgroundColor: 'powderblue' },
        }}
      >
        <Tab.Screen name="Food" component={Food} />
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
  );
}

export default TopBar;