import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import CandidateReducer from './reducer/CandidateReducer';
import CastVoteReducer from './reducer/CastVoteReducer';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

const rootReducer = combineReducers({
  candidate: CandidateReducer,
  castVote: CastVoteReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: customizedMiddleware,
});
