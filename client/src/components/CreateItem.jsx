import { Button, FormLabel, TextField } from "@mui/material";
import { Box, maxWidth } from "@mui/system";
import React, {useState} from "react";

const CreateItem = ({addItem}) => {
    
    const [newItem, setNewItem] = useState({})
    return (
        <form>
            <Box display="flex" flexDirection="column" justifyContent="center" maxWidth={700} alignContent={"center"} alignSelf="center" marginLeft="auto" marginRight="auto" marinTop={40}>
            <FormLabel>Category</FormLabel>
            <TextField margin="normal" fullWidth variant="outlined" name="categoy" placeholder="Category" onChange={(e) => {
                setNewItem({...newItem, category: e.target.value})
            }}/>
            <FormLabel>Item Name</FormLabel>
            <TextField margin="normal" fullWidth variant="outlined" name="itemName" placeholder="Item Name" onChange={(e) => {
                setNewItem({...newItem, itemName: e.target.value})
            }}/>
            <FormLabel>Description</FormLabel>
            <TextField margin="normal" fullWidth variant="outlined"  name="description" placeholder="Description" onChange={(e) => {
                setNewItem({...newItem, description: e.target.value})
            }} />
            <FormLabel>Image URL</FormLabel>
            <TextField margin="normal" fullWidth variant="outlined"  name="urlImage" placeholder="Image URL" onChange={(e) => {
                setNewItem({...newItem, urlImage: e.target.value})
            }}/>
            <FormLabel>Owner Name</FormLabel>
            <TextField margin="normal" fullWidth variant="outlined" name="ownerName" placeholder="Owner Name" onChange={(e) => {
                setNewItem({...newItem, ownerName: e.target.value})
            }}/>
            <FormLabel>Owner Tel. Number</FormLabel>
            <TextField margin="normal" fullWidth variant="outlined" type="number" name="ownerTel" placeholder="Owner Tel Number" onChange={(e) => {
                setNewItem({...newItem, ownerTel: e.target.value})
            }}/>
            <FormLabel>Owner Adress</FormLabel>
            <TextField margin="normal" fullWidth variant="outlined" name="ownerAdress" placeholder="Owner Adress" onChange={(e) => {
                setNewItem({...newItem, ownerAdress: e.target.value})
            }}/>
            <FormLabel>State</FormLabel>
            <TextField margin="normal" fullWidth variat="outlined" name="state" placeholder="State" onChange={(e) => {
                setNewItem({...newItem, state: e.target.value})
            }}/>
            <Button type="submit" variant="contained" onClick={() => {addItem(newItem)}}>Add Item</Button>
            </Box>
        </form>
    )
}

export default CreateItem;