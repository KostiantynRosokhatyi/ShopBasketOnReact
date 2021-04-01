import React from 'react'
import styles from './ProductStyle.module.css'

function ProductCard (props) {
    const {product} = props
    return (
        <div>{product}</div>
    )
}

export default ProductCard