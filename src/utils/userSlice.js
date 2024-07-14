import { createSlice, current } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      //   console.log(current(state));
      //   console.log(action);
      //   console.log(state);
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

// console.log(userSlice);

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
