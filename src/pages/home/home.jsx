import './style.scoped.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SetData } from '../../store/reducer/users'
import useApi from '../../helpers/useApi'
import Cards from '../../components/cards/card'
import Navbar from '../../components/header/index'

function Home() {
    const { isAuth } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const api = useApi()
    const [products, setProd] = useState([])

    const getData = async () => {
        try {
            const { data } = await api.requests({
                method: 'GET',
                url: '/products'
            })
            setProd(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getUser = async () => {
        try {
            const { data } = await api.requests({
                method: 'GET',
                url: '/users'
            })
            dispatch(SetData(data.data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (isAuth) {
            getUser()
        }
    }, [isAuth])

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="containers">
            <Navbar />
            <main>
                <section className="config">
                    <h2>Products</h2>
                    <div className="input">
                        <input type="text" placeholder="price" />
                    </div>
                </section>
                <section className="prod">
                    {products.map((v) => {
                        return <Cards id={v.id} image={v.image} name={v.name} price={v.price} />
                    })}
                </section>
            </main>
        </div>
    )
}

export default Home
