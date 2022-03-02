import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Navigation from './navigation/navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
export default function App() {
  const store = createStore(reducer)
  return (
    <Provider store={store}>
   <Navigation/>
   </Provider>
   );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
