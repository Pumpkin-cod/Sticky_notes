/* eslint-disable no-unused-vars */
import React from 'react';
import backgroundImage from '../src/assets/background.jpg';
import AddNotes from './notes/AddNotes';
import StickyNoteList from './notes/StickyNoteList';
import SearchNotes from './notes/SearchNotes';
import EditNotes from './notes/EditNotes';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');
const App = () => {
  return (
     
      <div className="bg-cover bg-center min-h-screen flex flex-col items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* <SearchNotes /> */}
      <h1 className="text-4xl font-bold text-green-400 mt-8">Sticky Notes</h1>
      <AddNotes />
      <StickyNoteList />
      <EditNotes />
    </div>
    
  );
};

export default App;


