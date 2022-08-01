import { createSlice } from '@reduxjs/toolkit';

const timeoutTimer = 3000;

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
      setTimeout(() => {
        if(state.autoClose) {
          resetMessage()
        }
      }, timeoutTimer)
    },
    closeMessage: () => {
      resetMessage()
    },
    resetMessage: (state) => {
      state.content = initialState.content
      state.isShowMessage = initialState.isShowMessage;
      state.autoClose = initialState.autoClose;
    }
  }
})

export const { setMessage, closeMessage, resetMessage } = messageSlice.actions;
export const ctaMessage = (state) => state.message;

export default messageSlice.reducer;