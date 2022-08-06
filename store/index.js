import data from "../components/DataWrapper/state/slice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    data,
  },
});
