import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const allUsers = createAsyncThunk(
  'users/allUsers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/`
      );

      return response.data;
    } catch (err) {
      const message = (err.response && err.response.data) || err.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
