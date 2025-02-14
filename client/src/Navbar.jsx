import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo"><Link className="navbar-logo" to="/">💸 Ledgerify - Expense Tracker</Link></div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add-expense">Add Expense</Link>
        </li>
        <li>
          <Link to="/expense-list">Expense List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
