import { configureStore} from '@reduxjs/toolkit';
import { shazamApi } from './slice/shazamapi';
import songReducer from './features/playerSlice'

export const store = configureStore({
  reducer: {
    song:songReducer,
    [shazamApi.reducerPath]:shazamApi.reducer
  },
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(shazamApi.middleware)
});
