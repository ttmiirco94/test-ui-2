import React, { useState } from 'react';
import Header from './components/Header';
import TabSlider from './components/TabSlider';
import './styles.css';
import Footer from "./components/Footer";

const App = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        "Bankpaket Basic",
        "Bankpaket Plus",
        "Bankpaket Zero",
        "Bankpaket Young"
    ];

    return (
        <div className="app">
            <Header />
            <TabSlider tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            <Footer />
        </div>
    );
};

export default App;