import { store, persistor } from '../Redux/store';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function MyApp({ Component, pageProps }) {
    return (
      <Provider store={store}> 
       <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    )
}

export default MyApp
