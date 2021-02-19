import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler'
import Store from './src/redux/store/store'
import { Provider } from 'react-redux'

const Stack = createStackNavigator();

import HelloTabs from './src/navigation/navigation'

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Hello" component={HelloTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
}

export default App;
