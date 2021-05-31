import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react'
import DataCalon from '../page/DataCalon';
import Home from '../page/Home';
import Login from '../page/Login';
import MainMenu from '../page/MainMenu';
import Pilih from '../page/Pilih';
import Register from '../page/Register';

const Stack = createStackNavigator();
export class Router extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="MainMenu" component={MainMenu}/>
                <Stack.Screen name="DataCalon" component={DataCalon}/>
                <Stack.Screen name="Pilih" component={Pilih}/>
            </Stack.Navigator>
        )
    }
}

export default Router
