import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./reducer/ProductSlice";

export const Store = configureStore({

    reducer: {
        product: ProductSlice
    }
})