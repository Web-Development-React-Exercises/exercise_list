import './App.css';
import React,{useEffect, useState} from 'react';

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(['Jouni', 'Pekka', 'Keskuu', 'Dessame'])
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
