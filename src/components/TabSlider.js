import React from 'react';
import TabContent from './TabContent';

const TabSlider = ({ tabs, activeTab, setActiveTab }) => {
    return (
        <div className="tab-slider">
            <div className="tab-buttons">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={index === activeTab ? 'active' : ''}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <TabContent key={activeTab} tabIndex={activeTab} tabName={tabs[activeTab]} />
        </div>
    );
};

export default TabSlider;