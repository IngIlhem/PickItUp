import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import $ from 'jquery'
import List from './components/List.jsx'
import ShowDetails from './components/ShowDetails.jsx'
import CreateItem from './components/CreateItem.jsx'
import Header from './components/Header.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetails from './components/ItemDetails.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'

const App = () => {
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [currentItem, setcurrentItem]= useState({});

  const displayItem = (item)=>{
    setcurrentItem(item);
    setShow(true);

  }

  useEffect(() => {
    axios
    .get('/api/items')
    .then(response => {
      console.log(response);
      setItems(response.data);
    })
    .catch(err => {
      console.log('error:', err);
    });
  }, [])

  const addItem = (item) => {
    console.log(item);
    axios
    .post('/api/items', item)
    .then(response => {
      // console.log(response)
      setItems([...items, data]);
    })
    .catch(err => console.log(err));
  };

  

  return (

      <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<CreateItem addItem={addItem}/>} exact />
          <Route path="/items" element={<List items={items} displayItem={displayItem} currentItem={currentItem} show={show}/>} exact />
          <Route path="/about" element={<About />} exact />
        </Routes>
      </main>
    </React.Fragment>
  
  )
}

ReactDOM.render(<BrowserRouter>
<React.StrictMode>
   <App /> </React.StrictMode></BrowserRouter>, document.getElementById('app'))
