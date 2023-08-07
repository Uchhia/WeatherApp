import React from 'react';
import './AppContainer.css';
import Weather from '../Weather/Weather.js';

function AppContainer() {
  return (
    <div className='app-container'>
        <div className='img'>
            <Weather/>
        </div>

      
    </div>
  );
}

export default AppContainer;
