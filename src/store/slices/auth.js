import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {get, create, update, remove} from '../../services';

const initialState = {
  loading: false,
  user: null,
};

export const loginAuth = createAsyncThunk('auth-school/login', async data => {
  const res = await create('login', data);
  return res.data;
});

export const RegisterAuth = createAsyncThunk(
  'auth-school/register',
  async data => {
    const res = await create('register', data);
    return res.data;
  },
);

const AuthSlice = createSlice({
  name: 'auth-school',
  initialState,
  extraReducers: builder => {
    //    loginAuth
    builder.addCase(loginAuth.pending, (state, action) => {
      state.loading = true;
      state.user = null;
    });
    builder.addCase(loginAuth.fulfilled, (state, action) => {
      state.user = action.payload.data;
      state.loading = false;
    });
    builder.addCase(loginAuth.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
    });

    builder.addCase(RegisterAuth.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(RegisterAuth.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(RegisterAuth.rejected, (state, action) => {
      state.loading = false;
    });
  },

  reducers: {},
});

const {reducer} = AuthSlice;
export const {} = AuthSlice.actions;
export default {
  reducer,
  loginAuth,
  RegisterAuth,
};
