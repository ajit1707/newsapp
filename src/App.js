import * as React from 'react';
import 'react-native-gesture-handler';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsScreen from './screens/NewsScreen';
import NewsDetailScreen from './screens/NewsDetailScreen';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer);

function LaunchScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        style={{
          width: '70%', height: 55, backgroundColor: '#4286f4',
          alignItems: 'center', justifyContent: 'center', borderRadius: 20
        }}
        onPress={() => navigation.navigate('NewsScreen')}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Open News</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Launch" component={LaunchScreen} options={{ headerShown: false }} />
          <Stack.Screen name="NewsScreen" component={NewsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="NewsDetailScreen" component={NewsDetailScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default App;