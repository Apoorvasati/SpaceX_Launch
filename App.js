//modified for react native web

import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import AppStateWrapper from './AppStateWrapper';


import { useDispatch, useSelector } from 'react-redux';

function App() {
  return (
  <Provider store={store}>
    <AppStateWrapper />
  </Provider>

  );

}
export default App;
