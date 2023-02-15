import './style.css'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Image, Button } from 'react-bootstrap'
import Navbar from '../../components/navbar/navbar'

function Detail() {
    const [data, setData] = useState({})
    const params = useParams()

    const getData = async () => {
        try {
            const { data } = await axios.get(`http://hplussport.com/api/products?id=${params.id}`)
            setData(data[0])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <Navbar />
            <div className="containerrs">
                <div className="contentts">
                    <Image style={{ width: '20rem' }} src={data.image} />
                    <div className="desc">
                        <h4>{data.name}</h4>
                        <p style={{ padding: '0px 0px 5px' }}>{data.description}</p>
                        <div
                            className="card-footer"
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <h4>${data.price}</h4>
                            <Button>Buy</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail
