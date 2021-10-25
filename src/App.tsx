import React from 'react';
import {Provider} from 'react-redux';
import {Store} from './services/Store';
import CounterScreen from './screens/CounterScreen';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './screens/RootStackParams';
import HomeScreen from './screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStack} from './models/navigation/MainStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => (
  <Provider store={Store.instance}>
    <PersistGate loading={null} persistor={Store.persist}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={MainStack.home}>
          <Stack.Screen name={MainStack.home} component={HomeScreen} />
          <Stack.Screen name={MainStack.counter} component={CounterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
