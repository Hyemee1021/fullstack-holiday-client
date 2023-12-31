import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/user_sinup_login/userSlice.js";

const store = configureStore({
  reducer: {
    adminInfo: userReducer,
  },
});

export default store;
