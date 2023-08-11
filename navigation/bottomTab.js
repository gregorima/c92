import { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Pesquisa from '../screens/pesquisa';
import Receitas from '../screens/receitas';

const Tab = createBottomTabNavigator()

export default class BottomTab extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Receitas') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Pesquisa') {
              iconName = focused ? 'search' : 'search-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
        >
                    <Tab.Screen component={Receitas} name='Receitas'/>
                    <Tab.Screen component={Pesquisa} name='Pesquisa'/>
                </Tab.Navigator>
            </NavigationContainer>
          );
    }
}