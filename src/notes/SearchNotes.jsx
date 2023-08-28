/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';

const SearchNotes = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const stickyNotes = useSelector(state => state.stickyNotes);

    const handleSearch = e => {
        setSearchTerm(e.target.value);
    };

    const filteredNotes = stickyNotes.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="search-notes">
            <div className="search-input">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search by title..."
                    className="search-input__field"
                />
                <button className="search-input__button">
                    <FaSearch />
                </button>
            </div>
            <ul className="search-results">
                {filteredNotes.map(note => (
                    <li key={note.id}>
                        <h3>{note.title}</h3>
                        <p>{note.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchNotes;
