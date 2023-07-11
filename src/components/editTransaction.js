import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditTransaction(){
    const { id } = useParams();
    
    const navigate = useNavigate();

    const [itemName, setItemName] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [from, setFrom] = useState("");


    async function fetchData(){
        try{
            let url = process.env.NODE_ENV === "production" ? `https://budgeting-app-backend-akii.onrender.com/transactions/${id}` : 
            `http://localhost:3001/transactions/${id}`


            let result = await axios.get(url);

            const {
                item_name,
                amount,
                date,
                from,
                category
            } = result.data;

            setItemName(item_name);
            setAmount(amount);
            setDate(date);
            setFrom(from);
            setCategory(category);
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    async function handleSubmit(e){
        e.preventDefault();
        try{
            let url = process.env.NODE_ENV === "production" ? `https://budgeting-app-backend-akii.onrender.com/transactions/${id}` : 
            `http://localhost:3001/transactions/${id}`


            let result = await axios.put(url, {
                item_name: itemName,
                amount: amount,
                date: date,
                category: category,
                from: from
            })
            alert("You have successfully updated this transaction, you'll now be redirected to the home page.");
            navigate('/transactions');
        }
        catch(e){
            console.log(e)
        }
    }

    function handleBack(){
        navigate(`/transactions/${id}`);
    }


    return(
        <div className="container bg-body-tertiary p-3 my-5">
        <h1>Edit Transaction</h1>
        <form onSubmit={handleSubmit}>
        <div className="form-group m-2">
            <label>Item Name</label>
            <input type="text" className="form-control" value={itemName} onChange={(e) => setItemName(e.target.value)}/>
        </div>
        <div className="form-group m-2">
            <label>Amount</label>
            <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        </div>
        <div className="form-group m-2">
            <label>Date</label>
            <input type="text" className="form-control" value={date} onChange={(e) => setDate(e.target.value)}></input>
        </div>
        <div className="form-group m-2">
            <label>Category</label>
            <input type="text" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)}/>
        </div>
        <div className="form-group m-2">
            <label>From</label>
            <input type="text" className="form-control" value={from} onChange={(e) => setFrom(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-outline-secondary m-2">Submit</button>
        <button type="submit" className="btn btn-outline-secondary m-2" onClick={handleBack}>Back</button>
        </form>
    </div>
    )
}

export default EditTransaction;