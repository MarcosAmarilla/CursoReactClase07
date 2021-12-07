import React from 'react'
import { useState, useEffect} from 'react'
import './ItemDetailContainer.css'
import { getItem } from '../../products'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ()=> {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const item = getItem ()
        item.then (item => {
            setProducts(item)
        })
        return () => {
            setProducts ([])
        }
    }, [])

    return (
        <div className="ItemListContainer" >
            <ItemDetail products={products}/>
        </div>
    )    
}

export default ItemDetailContainer