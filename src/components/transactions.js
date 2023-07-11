import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Transactions(){
    const [budgetArray, setBudgetArray] = useState([]);

    const [totalAmount, setTotalAmount] = useState(0);

    async function fetchData(){
        try{
            let url = process.env.NODE_ENV === "production" ? `https://budgeting-app-backend-akii.onrender.com/transactions` : 
            `http://localhost:3001/transactions`


            let result = await axios.get(url);
            setBudgetArray(result.data);
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    function calculateTotal(){
        let total = 0;

        budgetArray.map((item) => {
            let transactionAmount = Number(item.amount);
            total += transactionAmount;
        })
        
        setTotalAmount(total);
    }

    useEffect(() => {
        calculateTotal();
    }, [budgetArray]);


    return(
        <div className="container mt-4">
        <h2>Current Transaction Total: <span className={totalAmount > 100 ? "text-success" : totalAmount < 0 ? "text-danger" : "text-warning"}>{totalAmount}</span></h2>

        <table className="table table-striped mt-2">
            <thead>
                <tr>
                <th scope="col">Date</th>
                <th scope="col">Transaction</th>
                <th scope="col">Amount</th>
                <th scope="col">View</th>
                </tr>
            </thead>
            <tbody>
                {
                    budgetArray.map(({id, item_name, amount, date}) => {
                        return(
                                <tr key={id}>
                                    <td>{date}</td>
                                    <td>{item_name}</td>
                                    <td>{amount}</td>
                                    <td><Link to={`/transactions/${id}`}><button style={{border: "none"}}>💵</button></Link></td>
                                </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    )
}

export default Transactions;