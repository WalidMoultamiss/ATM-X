import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface UserState {
  score: number;
  licenseType: "A" | "B" | null;
}

const initialState: UserState = {
  score: 2,
  licenseType: "A",
};

export const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    incrementScore: (state) => {
      state.score += 1;
    },
    decrementScore: (state) => {
      state.score -= 1;
    },
    updateScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
    setLicenseType: (state, action: PayloadAction<"A" | "B" | null>) => {
      state.licenseType = action.payload;
    },
  },
});

export const { incrementScore, decrementScore, setLicenseType, updateScore } =
  UserSlice.actions;

export default UserSlice.reducer;
