import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  role: '0',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },
    resetUser: (state) => {
      state.role = initialState.role;
    }
  }
})

export const { setRole, resetUser } = userSlice.actions;
export const userRole = (state) => state.user.role;

export default userSlice.reducer;