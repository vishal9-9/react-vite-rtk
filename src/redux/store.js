import { configureStore } from "@reduxjs/toolkit";

import testSlice from "./counter/testSlice";


export default configureStore({
    reducer: {
        test: testSlice,
    },
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
