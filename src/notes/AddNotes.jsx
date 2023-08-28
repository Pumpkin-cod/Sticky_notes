/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from "nanoid";
import { createStickyNote } from '../rtk/stickyNotesSlice';

const AddNotes = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
   

    const handleSubmit = e => {
        e.preventDefault();
        
        const newNote = {
            id: nanoid(),
            title,
            content
        };
        dispatch(createStickyNote(newNote));
        setTitle('');
        setContent('');
    };

    return (
        <div className="w-full max-w-xl mx-auto p-4 bg-white shadow-lg rounded-lg">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                        Content
                    </label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 h-32 resize-none"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Add Note
                </button>
            </form>
        </div>
        
    );
};

export default AddNotes;
