import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import List from './components/List.jsx'
import ShowDetails from './components/ShowDetails.jsx'
import CreateItem from './components/CreateItem.jsx'

const App = () => {
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  useEffect(() => {
    $.ajax({
      url: '/api/items',
      success: (data) => {
        console.log(data)
        setItems(data)
      },
      error: (err) => {
        console.log('err', err)
      },
    })
  }, [])

  const addItem = (item) => {
    console.log(item);
    $.ajax({
      url: '/api/items',
      success: (data) => {
        console.log(data)
       
      },
      error: (err) => {
        console.log('err', err)
      },
    })
    .then(data => {
      // console.log(response)
      setItems([...items, data]);
    })
    .catch(err => console.log(err));
  };

  const displayItem = (item)=>{
    setCurrentItem(item);
    setShow(true);
  }

  return (
    <div>
      <h1>Item List</h1>
      <ShowDetails show={show} item={currentItem}/>
      <CreateItem addItem={addItem}/>
      <List items={items} displayItem={displayItem}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
