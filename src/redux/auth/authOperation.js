import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk( 'auth/register', async() => {})
export const login = createAsyncThunk( 'auth/login', async() => {})
export const logout = createAsyncThunk( 'auth/logout', async() => {})