import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/CounterSlice.jsx";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
