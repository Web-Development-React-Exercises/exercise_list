import './App.css';
import React,{useEffect, useState} from 'react';

function App() {
  const [items, setItems] = useState(['Jouni', 'Pekka', 'Keskuu', 'Dessame'])

  useEffect(() => {
    console.log(items)
  },[])

  return (
    <div>
      <ul>
        {items.map(i=>
          <li key={i}>
            {i}
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
