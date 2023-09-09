import { NavigationContainer } from '@react-navigation/native';
import { StripeProvider } from '@stripe/stripe-react-native';
import React, { useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { updateToken } from './src/apis/auth.api';
import { STRIPE_CONFIG } from './src/configs/stripe.config';
import { RootNavigation } from './src/navigations/RootNavigation';
import { persistor, store } from './src/redux/store';
import BootSplash from 'react-native-bootsplash';

function App(): JSX.Element {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    if (!AppState.isAvailable) return;
    const listener = AppState.addEventListener('change', newState => {
      const isReOpenApp =
        (appState?.current === 'inactive' ||
          appState?.current === 'background') &&
        newState === 'active';
      appState.current = AppState.currentState;

      if (!isReOpenApp) return;

      updateToken();
    });

    updateToken();

    return () => {
      listener.remove();
    };
  }, [AppState.isAvailable]);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StripeProvider publishableKey={STRIPE_CONFIG.PUBLIC_KEY}>
          <NavigationContainer onReady={() => BootSplash.hide()}>
            <RootNavigation />
          </NavigationContainer>
        </StripeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
