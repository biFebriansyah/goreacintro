import './style.scoped.scss'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaSignOutAlt, FaShoppingBag } from 'react-icons/fa'

const Carts = (props) => {
    return (
        <nav className="navbar navbar-light">
            <div className="navbar-text ml-auto d-flex">
                <button className="btn btn-sm btn-outline-primary mr-2">
                    <FaShoppingBag />
                    <span> products</span>
                </button>
                <div className="mr-2">
                    <button type="button" className="btn btn-sm btn-primary" onClick={() => props.show()}>
                        <span className="badge badge-pill badge-light mr-2">{props.qty}</span>
                        <span className="price" style={{ fontWeight: 'bold' }}>
                            $ {props.total}
                        </span>
                    </button>
                </div>
                <button className="btn btn-sm btn-outline-secondary">
                    {props.username} <FaSignOutAlt />
                </button>
            </div>
        </nav>
    )
}

function Headers(props) {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { isAuth, data } = useSelector((state) => state.users)
    const username = data.username || 'default'

    const admin = () => {
        navigate('/add')
    }
    // const isAuth = false

    return (
        <header className={`my_header bg-white-only`}>
            <div className="my_left">
                <Link to="/" className="navbar-brand login-head">
                    <span className="hidden-nav-xs m-l-sm">Fazztrack</span>
                </Link>
            </div>
            <div className="my_right">
                {!isAuth && pathname === '/' ? (
                    <>
                        <div className="my_btn">
                            <Link to="/login" className="cos_btn bg_false">
                                Login
                            </Link>
                        </div>
                        <div className="my_btn">
                            <Link to="/signup" className="cos_btn bg_true">
                                Daftar
                            </Link>
                        </div>
                    </>
                ) : isAuth && pathname === '/' ? (
                    <Carts username={username} show={admin} qty={props.qty} total={props.total} />
                ) : (
                    <div className="my_btn">
                        <Link to="/" className="cos_btn bg_false">
                            Home
                        </Link>
                    </div>
                )}
                {pathname === '/signup' ? (
                    <div className="my_btn">
                        <Link to="/login" className="cos_btn bg_true">
                            Login
                        </Link>
                    </div>
                ) : pathname === '/login' ? (
                    <div className="my_btn">
                        <Link to="/signup" className="cos_btn bg_true">
                            Daftar
                        </Link>
                    </div>
                ) : null}
            </div>
        </header>
    )
}

export default Headers
