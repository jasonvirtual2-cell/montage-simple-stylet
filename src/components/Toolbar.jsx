import React from 'react';
import './Toolbar.css';

const Toolbar = ({ onNewProject, onSave, onExport }) => {
    return (
        <div className="toolbar">
            <button onClick={onNewProject}>New Project</button>
            <button onClick={onSave}>Save</button>
            <button onClick={onExport}>Export</button>
        </div>
    );
};

export default Toolbar;