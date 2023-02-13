import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Game from '../screens/Game';
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
        <Tab.Screen name="Game" component={Game} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
  );
}

export default TopBar;