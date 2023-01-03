/* eslint-disable react/react-in-jsx-scope */
import {AppRegistry} from 'react-native';
import store from 'src/store/store';
import 'react-native-gesture-handler';
import App from './App';
import {name as appName} from './app.json';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

export const persister = persistStore(store);

const RootApp = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persister}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RootApp);
