import React from 'react';
import './App.css';

import SideBar from './component/drawer/drawer.component';
import Header from './component/header/header.component';

const App = () => {
  return (
    <div className="drawer-header">
      <SideBar />
      <Header />
    </div>

  )
}

export default App;