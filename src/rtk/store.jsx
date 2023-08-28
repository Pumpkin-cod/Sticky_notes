/* eslint-disable react-refresh/only-export-components */
import { configureStore } from '@reduxjs/toolkit'
import stickyNoteSlice from './stickyNotesSlice'


export default configureStore({
    reducer: {
        stickyNotes : stickyNoteSlice
    } 
})