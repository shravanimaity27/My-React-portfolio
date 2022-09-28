import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./headerSlice";


export default configureStore({
  reducer: {
    header: headerSlice,
 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});