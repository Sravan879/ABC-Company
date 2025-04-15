import React, { useState, useEffect } from 'react';
import './CMSPage.css';

function CMSPage() {
  const [input, setInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/api/heading/get')
      .then(res => res.json())
      .then(data => setInput(data.text));
  }, []);

  const handleSave = () => {
    fetch('http://localhost:8080/api/heading/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: input })
    })
    .then(res => res.json())
    .then(() => {
      setIsSaved(true);
      setIsEditing(false);
      setTimeout(() => setIsSaved(false), 2000);
    });
  };

  return (
    <div className="cms-container">
      <h2>Content Management System</h2>
      <div className="cms-card">
        <div className="cms-header">
          <span className="page-label">Heading</span>
          {isSaved && <span className="save-indicator">✓ Changes saved!</span>}
        </div>

        {isEditing ? (
          <>
            <textarea
              className="cms-textarea"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter heading text..."
            />
            <div className="cms-actions">
              <button 
                className="cms-btn cancel-btn"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
              <button 
                className="cms-btn save-btn"
                onClick={handleSave}
                disabled={!input.trim()}
              >
                Save Changes
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="heading-preview">
              <h3 style={{ color: '#222' }}>{input}</h3>
            </div>
            <div className="cms-actions">
              <button 
                className="cms-btn edit-btn"
                onClick={() => setIsEditing(true)}
              >
                Edit Heading
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CMSPage;