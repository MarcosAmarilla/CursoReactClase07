import React from 'react'
import { useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { getProducts } from '../../products'

const ItemListContainer = ()=> {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const list = getProducts ()
        list.then (list => {
            setProducts(list)
        })
        return () => {
            setProducts ([])
        }
    }, [])

    return (
        <div className="ItemListContainer" >
            <ItemList products={products} />
        </div>
    )    
}

export default ItemListContainer