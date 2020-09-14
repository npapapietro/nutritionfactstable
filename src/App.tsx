import React from 'react';

import './App.scss';
import NutritionHeader from './header/NutritionHeader';
import { CholocateCookie } from './utils/Examples';
import NutritionBody from './body/NutritionBody';

function App() {
  return (
    <div className="App">
        <NutritionHeader servingSize={CholocateCookie}/>
        <NutritionBody/>
    </div>
  );
}

export default App;
