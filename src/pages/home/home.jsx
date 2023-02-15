import './style.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from '../../components/cards/card'
import Navbar from '../../components/navbar/navbar'

function Home() {
    const [products, setProd] = useState([])

    const getData = async () => {
        try {
            const { data } = await axios.get('http://hplussport.com/api/products/order/price')
            setProd(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="container">
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
