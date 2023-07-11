import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function NewTransaction(){

    const navigate = useNavigate();

    const [itemName, setItemName] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [from, setFrom] = useState("");



    function handleBack(){
        navigate(`/transactions/`);
    }



    async function handleSubmit(e){
        e.preventDefault();

        try{
            let result = await axios.post(`http://localhost:3001/transactions`, {
                id: uuidv4(),
                item_name: itemName,
                amount: amount,
                date: date,
                category: category,
                from: from
            })
            alert("You have created a new transaction! Redirecting you to the home page.");
            navigate('/transactions');
        }
        catch(e){
            console.log(e)
        }

    }


    return(
        <div className="container bg-body-tertiary p-3 my-5">
        <h1>Create a new Transaction</h1>
        <form onSubmit={handleSubmit}>
        <div className="form-group m-2">
            <label>Item Name</label>
            <input type="text" className="form-control" value={itemName} onChange={(e) => setItemName(e.target.value)} required/>
        </div>
        <div className="form-group m-2">
            <label>Amount</label>
            <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} required/>
        </div>
        <div className="form-group m-2">
            <label>Date</label>
            <input type="text" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required></input>
        </div>
        <div className="form-group m-2">
            <label>Category</label>
            <input type="text" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} required/>
        </div>
        <div className="form-group m-2">
            <label>From</label>
            <input type="text" className="form-control" value={from} onChange={(e) => setFrom(e.target.value)} required/>
        </div>
        <button type="submit" className="btn btn-outline-secondary m-2">Submit</button>
        <button type="submit" className="btn btn-outline-secondary m-2" onClick={handleBack}>Back</button>
        </form>
    </div>
    )
}

export default NewTransaction;