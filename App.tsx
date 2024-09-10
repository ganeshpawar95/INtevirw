// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigations/StackNavigation';
import {Provider} from 'react-redux';
import store from './src/store/store';
import {GlobalEx} from './src/utils';
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <GlobalEx.NativeBaseProvider>
          <StackNavigation />
          <GlobalEx.Toast />
        </GlobalEx.NativeBaseProvider>
      </Provider>
    </NavigationContainer>
  );
}
