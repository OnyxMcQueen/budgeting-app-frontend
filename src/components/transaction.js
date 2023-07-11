import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Transaction(){
    const { id } = useParams();
    let navigate = useNavigate();

    const [transaction, setTransaction] = useState(null);

    async function fetchData(){
        try{
            let url = process.env.NODE_ENV === "production" ? `https://budgeting-app-backend-akii.onrender.com/transactions/${id}` : 
            `http://localhost:3001/transactions/${id}`


            let result = await axios.get(url);
            setTransaction(result.data);
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    function handleBackClick(){
        navigate('/transactions');
    }


    function handleEditClick(){
        navigate(`/transactions/${id}/edit`);
    }


    async function handleDelete(){
        try{
            let url = process.env.NODE_ENV === "production" ? `https://budgeting-app-backend-akii.onrender.com/transactions/${id}` : 
            `http://localhost:3001/transactions/${id}`


            let result = await axios.delete(url);
            alert("You have deleted this transaction successfully, redirecting to the home page.");
            navigate('/transactions');
        }
        catch(e){
            console.log(e)
        }
    }


    return(
        <div className="my-4">
            <div className="container" style={{textAlign: "center", backgroundColor: "#e6e3e3", width: "50%", border: "2px dashed black", padding: "15px"}}>
                <h1>{transaction?.item_name}</h1>
                <hr />
                <h5 className="p-2">Amount: {transaction?.amount}</h5>
                <h5 className="p-2">Date: {transaction?.date}</h5>
                <h5 className="p-2">From: {transaction?.from}</h5>
                <h5 className="p-2">Category: {transaction?.category}</h5>
            </div>
            <div className="container d-flex justify-content-center my-3">
                <button type="button" className="btn btn-outline-black mx-5" onClick={handleBackClick}>Back</button>
                <button type="button" className="btn btn-outline-black mx-5" onClick={handleEditClick}>Edit</button>
                <button type="button" className="btn btn-outline-black mx-5" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Transaction;