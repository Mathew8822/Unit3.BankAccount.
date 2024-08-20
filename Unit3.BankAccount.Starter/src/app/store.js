import { configureStore } from "@reduxjs/toolkit";
import transactionsSlice from "../features/transactions/transactionsSlice";

// TODO: Configure the store to use the reducer from the transactions slice.
export const store = configureStore({
    reducer: {
        transactions: transactionsSlice
    }
});