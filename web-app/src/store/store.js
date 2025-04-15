import { configureStore } from '@reduxjs/toolkit';
import plantData from './plantSlice';

const reducer = {
    plantData,
};
export default configureStore({
    reducer,
});
