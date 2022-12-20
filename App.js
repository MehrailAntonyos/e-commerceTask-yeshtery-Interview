import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tab from './screens/Tab';
import Product from './screens/Product';
import { store } from './Redux/Store';
import { Provider } from 'react-redux';
import ScanCode from './screens/ScanCode';


export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Flex' screenOptions={{}}>
            <Stack.Screen name='Home' component={Tab} options={{
              headerBackVisible: false,
              headerShown: false,
            }} >

            </Stack.Screen>
            <Stack.Screen name='Product' component={Product} />
            {/* <Stack.Screen name='ProductDetails' component={Product} /> */}
            <Stack.Screen name='Scan Code' component={ScanCode} />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
  },
});
