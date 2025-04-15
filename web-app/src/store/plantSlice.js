import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { produce } from 'immer';
import getPlantData from './fetchPlantData';
import putPlantData from './updatePlantData';
import postPlantData from './writePlantData';
import deletePlantData from './deletePlantData.js'

export const fetchPlantData = createAsyncThunk(
    'fetchPlantData',
    () => getPlantData(),
);

export const updatePlantData = createAsyncThunk(
    'updatePlantData',
    (data) => putPlantData(data),
)

export const writePlantData = createAsyncThunk(
    'writePlantData',
    (data) => postPlantData(data),
)

export const removePlantData = createAsyncThunk(
    'removePlantData',
    (data) => deletePlantData(data),
)


export const plantSlice = createSlice(
    {
        name: 'plantData',
        initialState: {
            records: [],
            fetching: false,
            updating: false,
            hasError: false,
        },
        extraReducers: (builder) => {
            builder.addCase(fetchPlantData.pending, (state) => ({
                ...state,
                fetching: true,
                hasError: false,
            }));
            builder.addCase(fetchPlantData.fulfilled, (state, action) => produce(state, (draftState) => {
                draftState.fetching = false;
                draftState.records = action.payload;
            }));
            // TODO: Handle Error state
            builder.addCase(fetchPlantData.rejected, (state) => ({
                ...state,
                fetching: false,
                hasError: true,
            }));
            builder.addCase(updatePlantData.pending, (state) => ({
                ...state,
                updating: true,
                hasError: false,
            }));
            builder.addCase(updatePlantData.fulfilled, (state, action) => produce(state, (draftState) => {
                draftState.records[action.meta.arg.id] = action.meta.arg;
                draftState.updating = false;
            }));
            // TODO: Handle Error state
            builder.addCase(updatePlantData.rejected, (state) => ({
                ...state,
                updating: false,
                hasError: true,
            }));
            builder.addCase(writePlantData.pending, (state) => ({
                ...state,
                writing: true,
                hasError: false,
            }));
            builder.addCase(writePlantData.fulfilled, (state, action) => produce(state, (draftState) => {
                draftState.records[action.payload] = {id: action.payload, ...action.meta.arg};
                draftState.writing = false;
            }));
            // TODO: Handle Error state
            builder.addCase(writePlantData.rejected, (state) => ({
                ...state,
                writing: false,
                hasError: true,
            }));
            builder.addCase(removePlantData.pending, (state) => ({
                ...state,
                removing: true,
                hasError: false,
            }));
            builder.addCase(removePlantData.fulfilled, (state, action) => produce(state, (draftState) => {
                delete draftState.records[action.meta.arg.id];
                draftState.removing = false;
            }));
            // TODO: Handle Error state
            builder.addCase(removePlantData.rejected, (state) => ({
                ...state,
                removing: false,
                hasError: true,
            }));
        },
    },
);

export const getAllRecords = (state) => state.plantData.records;
export const isFetchingTodos = (state) => state.plantData.fetching;

export default plantSlice.reducer;
