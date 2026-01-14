import { configureStore, createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  searchText: string;
}

const initialState: UiState = {
  searchText: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
    clearSearchText(state) {
      state.searchText = "";
    },
  },
});

export const { setSearchText, clearSearchText } = uiSlice.actions;

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

