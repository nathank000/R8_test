import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import View1 from './View1';
import View2 from './View2';
import View3 from './View3';


function App() {
  //keep track of the current view
  const [currentView, setCurrentView] = useState('view1');

  return (
    <div>
      {currentView === 'view1' && <View1 />}
      {currentView === 'view2' && <View2 />}
      {currentView === 'view3' && <View3 />}
      <div>
        <button onClick={() => setCurrentView('view1')}>View 1</button>
        <button onClick={() => setCurrentView('view2')}>View 2</button>
        <button onClick={() => setCurrentView('view3')}>View 3</button>    
      </div>
    </div>
  );
}


export default App;