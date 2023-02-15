import React from 'react'
import { FaShoppingCart, FaSignOutAlt } from 'react-icons/fa'

function Navbar() {
    return (
        <nav className="navbar navbar-light">
            <div className="navbar-text ml-auto d-flex">
                <button className="btn btn-sm btn-outline-success mr-2">
                    <FaShoppingCart></FaShoppingCart>
                </button>
                <div className="mr-2">
                    <button type="button" className="btn btn-sm btn-success">
                        <span className="badge badge-pill badge-light mr-2">{0}</span>
                        <span className="price" style={{ fontWeight: 'bold' }}>
                            $0
                        </span>
                    </button>
                </div>
                <button className="btn btn-sm btn-outline-secondary">
                    <FaSignOutAlt />
                </button>
            </div>
        </nav>
    )
}

export default Navbar
