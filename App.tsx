// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigations/StackNavigation';

import {GlobalEx} from './src/utils';
export default function App() {
  return (
    <NavigationContainer>
      <GlobalEx.NativeBaseProvider>
        <StackNavigation />
      </GlobalEx.NativeBaseProvider>
    </NavigationContainer>
  );
}
