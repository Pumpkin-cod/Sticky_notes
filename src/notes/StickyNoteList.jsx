/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStickyNote, updateStickyNote } from '../rtk/stickyNotesSlice';
import EditNotes from './EditNotes'; 

const StickyNoteList = () => {
    const stickyNotes = useSelector(state => state.stickyNotes);
    const dispatch = useDispatch();

    const handleDelete = id => {
        dispatch(deleteStickyNote({ id }));
    };

    return (
        <div className="grid grid-cols-4 gap-4 mt-4">
            {stickyNotes.length === 0 ? (
                <p>No sticky notes available.</p>
            ) : (
                stickyNotes.map(stickyNote => (
                    <div key={stickyNote.id} style={{ background: stickyNote.color }} className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-lg break-words text-white font-semibold">{stickyNote.title}</h3>
                        <p className="mt-2 text-white break-words">{stickyNote.content}</p>
                        <div className="flex justify-end mt-4">
                            <button onClick={() => handleDelete(stickyNote.id)} className="px-4 py-2 bg-red-500 text-white rounded-md">Delete</button>
                            <EditNotes noteId={stickyNote.id} />
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default StickyNoteList;



