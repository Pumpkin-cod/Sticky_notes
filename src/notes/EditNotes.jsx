/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStickyNote } from '../rtk/stickyNotesSlice';
import 'tailwindcss/tailwind.css';
import ReactModal from 'react-modal';

const EditNotes = ({ noteId }) => {
    const dispatch = useDispatch();
    const stickyNotes = useSelector(state => state.stickyNotes);
    const existingNote = stickyNotes.find(note => note.id === noteId);
    const { title: existingTitle, content: existingContent } = existingNote || {
        title: '',
        content: '',
    };

    const [title, setTitle] = useState(existingTitle);
    const [content, setContent] = useState(existingContent);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEditNote = e => {
        e.preventDefault();
        const updatedNote = { id: noteId, title, content };
        dispatch(updateStickyNote(updatedNote));
        setIsModalOpen(false);
    };

    return (
        <div>
            {content && (
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ms-6"
                    onClick={() => setIsModalOpen(true)}
                >
                    Edit
                </button>
            )}
            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Edit Sticky Note"
            
            >
                <h2 className="text-xl font-semibold mb-4">Edit Sticky Note</h2>
                <form onSubmit={handleEditNote}>
                    <div className="mb-3">
                        <label htmlFor="title" className="block font-medium mb-1">
                            Title:
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="content" className="block font-medium mb-1">
                            Content:
                        </label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Update Note
                    </button>
                </form>
            </ReactModal>
        </div>
    );
};

export default EditNotes;


