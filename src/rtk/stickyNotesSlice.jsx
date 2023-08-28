/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const stickyNoteSlice = createSlice({
    name: "stickyNotes",
    initialState,
    reducers: {
        createStickyNote: (state, action) => {
            const { id, title, content } = action.payload;
            const colors = ["blue", "green", "red", "pink", "purple", "cyan"];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

            const newNote = {
                id,
                title,
                content,
                color: randomColor,
            };

            state.push(newNote);
        },
        updateStickyNote: (state, action) => {
            const { id, title, content } = action.payload;
            const existingNote = state.find(note => note.id === id);
            if (existingNote) {
                existingNote.title = title;
                existingNote.content = content;
            }
        },
        deleteStickyNote: (state, action) => {
            const { id } = action.payload;
            const existingNoteIndex = state.findIndex(note => note.id === id);

            if (existingNoteIndex !== -1) {
                state.splice(existingNoteIndex, 1);
            }
        },
        setStickyNoteColor: (state, action) => {
            const { id, color } = action.payload;
            const existingNote = state.find(note => note.id === id);
            if (existingNote) {
                existingNote.color = color;
            }
        },
    },
});

export const {
    createStickyNote,
    updateStickyNote,
    deleteStickyNote,
    setStickyNoteColor,
} = stickyNoteSlice.actions;

export default stickyNoteSlice.reducer;
