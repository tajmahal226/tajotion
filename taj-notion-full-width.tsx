import React, { useState } from 'react';

const TAJNotion = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="w-full min-h-screen bg-white text-gray-800 flex flex-col">
      <input
        className="text-4xl font-bold w-full outline-none p-8 text-gray-800 placeholder-gray-400"
        placeholder="Untitled"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      
      <textarea
        className="w-full flex-grow outline-none text-gray-700 p-8 resize-none"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Type your content here..."
      />

      <div className="p-4 text-sm text-gray-500 border-t border-gray-200">
        {content.length} characters
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App bg-white min-h-screen">
      <TAJNotion />
    </div>
  );
};

export default App;
