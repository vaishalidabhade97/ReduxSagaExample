/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
// For Redux slice hook
import Counter from './srcReduxSliceHook/component/Counter';
import { store } from './srcReduxSliceHook/redux/store';
// For Reducer hook
// import { store } from './srcReduxReducerHook/redux/store';
// import Counter from './srcReduxReducerHook/component/Counter';
// For Vanilla JS
// import Counter from './srcReduxWithoutHook/component/Counter';
// import {store} from './srcReduxWithoutHook/redux/store';



function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
export default App;
