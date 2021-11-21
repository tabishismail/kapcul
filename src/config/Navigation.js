import React from "react";
import { EditProfile } from "../screens";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen options={{headerShown:false }} name="EditProfile" component={EditProfile}/>

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  