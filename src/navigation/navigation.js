import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HelloScreen from '../screen/hello'
import Screen1 from '../screen/screen1'

const Tab = createBottomTabNavigator()

const TabsScreen=()=> {
    return (
      
        <Tab.Navigator>
          <Tab.Screen name="Hello" component={HelloScreen} />
          {/* <Tab.Screen name="screen1" component={Screen1} /> */}
        </Tab.Navigator>
     
    );
  }

  export default TabsScreen