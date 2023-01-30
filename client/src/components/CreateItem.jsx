import React, {useState} from "react";

const CreateItem = ({addItem}) => {
const [newItem, setNewItem] = useState({})
    return (
        <div>
            <div><input type="text" name="categoy" placeholder="category" onChange={(e) => {
                setNewItem({...newItem, category: e.target.value})
            }}/></div>
            <div><input type="text" name="itemName" placeholder="item name" onChange={(e) => {
                setNewItem({...newItem, itemName: e.target.value})
            }}/></div>
            <div><textarea name="description" placeholder="description" onChange={(e) => {
                setNewItem({...newItem, description: e.target.value})
            }} /></div>
            <button onClick={() => {addItem(newItem)}}>Submit</button>

        </div>

    )
}

export default CreateItem;