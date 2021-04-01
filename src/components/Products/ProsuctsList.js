import React, {useState} from 'react'
import ProductCard from './ProductCard';
import styles from './ProductStyle.module.css'
import TopBar from "../topBar/TopBar";
import {NavLink} from "react-router-dom";

function ProductsList(props) {
   const {productData, dataToCartFunction} = props;
   const [basketValues, setBasketValues] = useState([]);

   const handleChange = (e) => {
       const id = e.target.id;
       const domElement= document.getElementById(id);
       domElement.classList.add(styles.buttonBuyProductAdded);
       domElement.innerText=('Added to cart');
       const elementsInBasketArray = [...basketValues];
       elementsInBasketArray.indexOf(id) === -1 ? elementsInBasketArray.push(id) : alert("Already exist!");
       setBasketValues(elementsInBasketArray);
       dataToCartFunction(elementsInBasketArray, false);
       document.getElementById('123').classList.remove(styles.fullCartHide);
       document.getElementById('123').classList.add(styles.fullCart);
   }

    return (
        <div>
            <NavLink to='/basket'> <div className={styles.fullCartHide} id="123"/></NavLink>
            <TopBar header="Shop the products" basketValues={basketValues}/>
            <div className={styles.productBox}>
                {[...productData].map((contact: ({id: string | number | null | undefined; name: any; price: any; icon: any; }))  =>
                <div key={contact.id} className={styles.cardOfProduct}>
                    <img className={styles.iconProduct} src={contact.icon} alt={contact.name} width="50px" height="50px" />
                    <ProductCard product={contact.name} />
                    <div className={styles.priceStyle}>
                        <p className={styles.price}>Price: </p>
                        <ProductCard product={contact.price} />
                        <p>&#8372;</p>
                    </div>
                    <button className={styles.buttonBuyProduct} id={contact.name} onClick={handleChange}>Add to curt</button>
                </div>
                    )}
            </div>
        </div>
    )
}

export default ProductsList