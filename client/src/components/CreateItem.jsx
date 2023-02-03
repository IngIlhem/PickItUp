import React, {useState} from "react";

const CreateItem = ({addItem}) => {
const [newItem, setNewItem] = useState({})
    return (
        <div>
            <div>Add an Item</div>
            <div><input type="text" name="categoy" placeholder="Category" onChange={(e) => {
                setNewItem({...newItem, category: e.target.value})
            }}/></div>
            <div><input type="text" name="itemName" placeholder="Item Name" onChange={(e) => {
                setNewItem({...newItem, itemName: e.target.value})
            }}/></div>
            <div><textarea name="description" placeholder="Description" onChange={(e) => {
                setNewItem({...newItem, description: e.target.value})
            }} /></div>
            <div><input type="text" name="urlImage" placeholder="Image URL" onChange={(e) => {
                setNewItem({...newItem, urlImage: e.target.value})
            }}/></div>
            <div><input type="text" name="ownerName" placeholder="Owner Name" onChange={(e) => {
                setNewItem({...newItem, ownerName: e.target.value})
            }}/></div>
            <div><input type="text" name="ownerTel" placeholder="Owner Tel Number" onChange={(e) => {
                setNewItem({...newItem, ownerTel: e.target.value})
            }}/></div>
            <div><input type="text" name="ownerAdress" placeholder="Owner Adress" onChange={(e) => {
                setNewItem({...newItem, ownerAdress: e.target.value})
            }}/></div>
            <div><input type="text" name="state" placeholder="State" onChange={(e) => {
                setNewItem({...newItem, state: e.target.value})
            }}/></div>
            <button onClick={() => {addItem(newItem)}}>Submit</button>

        </div>

    )
}

export default CreateItem;