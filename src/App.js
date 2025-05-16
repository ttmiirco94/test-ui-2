import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TabSlider from './components/TabSlider';
import MainMenu from './components/MainMenu';

function App() {
    const [selectedView, setSelectedView] = useState('view1');
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        "Bankpaket Basic",
        "Bankpaket Plus",
        "Bankpaket Zero",
        "Bankpaket Young"
    ];

    return (
        <div className="app">
            <MainMenu selectedView={selectedView} setSelectedView={setSelectedView}/>

            {selectedView === 'view1' ? (
                <>
                    <Header/>
                    <TabSlider tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
                    <Footer/>
                </>
            ) : (
                <>
                    <Header/>
                    {/* Hier können neue Komponenten für View 2 ergänzt werden */}
                    <div style={{padding: "20px", textAlign: "center"}}>
                        <h2>View 2 Inhalt</h2>
                        <p>Hier können neue Komponenten eingefügt werden.</p>
                    </div>
                    <Footer/>
                </>
            )}
        </div>
    );
}

export default App;