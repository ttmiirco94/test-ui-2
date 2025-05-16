import React from 'react';

const MainMenu = ({ selectedView, setSelectedView }) => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '1rem', padding: '1rem' }}>
            <button
                onClick={() => setSelectedView('view1')}
                style={{ padding: '0.5rem 1rem', backgroundColor: selectedView === 'view1' ? '#ccc' : '#eee' }}
            >
                View 1
            </button>
            <button
                onClick={() => setSelectedView('view2')}
                style={{ padding: '0.5rem 1rem', backgroundColor: selectedView === 'view2' ? '#ccc' : '#eee' }}
            >
                View 2
            </button>
        </nav>
    );
};

export default MainMenu;