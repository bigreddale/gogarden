import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {produce} from 'immer';
import getPlantData from './apis/plantDataGet.js';
import putPlantData from './apis/plantDataPut.js';
import postPlantData from './apis/./plantDataPost.js';
import deletePlantData from './apis/plantDataDelete.js'

export const fetchPlantData = createAsyncThunk(
    'fetchPlantData',
    async () => getPlantData(),
);

export const updatePlantData = createAsyncThunk(
    'updatePlantData',
    async (data) => putPlantData(data),
)

export const writePlantData = createAsyncThunk(
    'writePlantData',
    async (data) => postPlantData(data),
)

export const removePlantData = createAsyncThunk(
    'removePlantData',
    async (data) => deletePlantData(data),
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
                // API Call was successful, update the related record with data passed to the API
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
                //API Call was successful, write API returns the ID assigned by the DB as it is not part of the form data.
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
                // API Call was successful, delete the record with the id passed to the API
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

export default plantSlice.reducer;
