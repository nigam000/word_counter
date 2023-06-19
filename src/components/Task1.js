import React, { useState } from 'react';

function TextAreaWithCounter() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.trim().split(/\s+/).length;

  return (
    <div className='center'>
        <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        rows={4}
        cols={90}
        value={text}
        onChange={handleChange}
        placeholder="Type your text here..."
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default TextAreaWithCounter;
