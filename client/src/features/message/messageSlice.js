import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShowMessage: false,
  content: '',
  autoClose: false,
}

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.content = action.payload;
      state.isShowMessage = true;
      state.autoClose = true;
    },
    resetMessage: (state) => {
      state.content = initialState.content;
      state.isShowMessage = initialState.isShowMessage;
      state.autoClose = initialState.autoClose;
    }
  }
})

export const { setMessage, resetMessage } = messageSlice.actions;
export const ctaMessage = (state) => state.message;
export const ctaMessageAutoClose = (state) => state.message.autoClose;

export default messageSlice.reducer;