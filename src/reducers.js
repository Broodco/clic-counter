/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
// import languageProviderReducer from './containers/LanguageProvider/reducer';
// import globalReducer from './containers/App/reducer';

// Used to avoid errors during rendering whenever the store does not contain dynamically injected reducers
const initReducer = (state = {}, action) => {
  return state;
}

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    initReducer: initReducer,
    // language: languageProviderReducer,
    // global: globalReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
