import { createSlice } from '@reduxjs/toolkit';
import { allUsers } from './usersAction';

const initialState = {
  loading: false,
  success: false,
  error: false,
  message: '',
  usersData: [],
  searchData: '',
  filterData: '',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchData = action.payload;
    },
    setFilter: (state, action) => {
      state.filterData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(allUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(allUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.usersData = action.payload;
        state.success = true;
      })
      .addCase(allUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.usersData = [];
      });
  },
});

export const { setSearch, setFilter } = usersSlice.actions;

export default usersSlice.reducer;
