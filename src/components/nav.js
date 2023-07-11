import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav className="navbar navbar-light" style={{backgroundColor: "#26cf17"}}>
            <div className="container-fluid">
                <img src="https://media.istockphoto.com/id/1009327288/vector/dollar-currency-banknote-icon-stock-vector-illustration.jpg?s=612x612&w=0&k=20&c=7cye2qVitSlAOJGHE89-s_LT0docdcRWBU1NyTzBobU=" style={{height: "60px", borderRadius: "5px"}} className="mx-2"/>
                <Link to='/' style={{textDecoration: 'none'}}><span className="navbar-brand mb-0 h-75 text-light">Budget App</span></Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-2">
                   <Link to='/transactions' style={{textDecoration: 'none'}}><li className="text-light">All transactions</li></Link>
                </ul>
                <Link to='/transactions/new'><button type="button" className="btn btn-light py-1 px-3" style={{color: "#26cf17", border: "1px solid grey"}}>Create a new transaction</button></Link>
            </div>
        </nav>
    )
}

export default Nav;