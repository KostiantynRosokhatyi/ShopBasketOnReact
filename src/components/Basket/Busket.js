import React, {useState} from 'react'
import styles from './BasketStyle.module.css'
import TopBar from "../topBar/TopBar";

function Basket(props) {
    const [emptyCartOrNot, setEmptyCartOrNot] = useState(props.statusOfBasket);
    const [inputValue, setInputValue] = useState(1);
    const [listOfProducts, setListOfProducts] = useState(props.list);
    const [totalCost, setTotalCost] = useState(0);

    const [PapayaSum, setPapayaSum] = useState(0);
    const [BananasSum, setBananaSum] = useState(0);
    const [ApplesSum, setAppleSum] = useState(0);

    const bb =(valueKG,z,x) => {
        return Math.round(((z*(0.166666666667)*5)*((valueKG-(valueKG % 3)))/3)+((valueKG % 3) * x ));
    }

    const handleChange = (e) => {
        const valueKG = e.target.value;
        const nameOfPrd = e.target.id;
        setInputValue(valueKG);

        if(nameOfPrd === "Bananas"){
            setBananaSum(bb(valueKG,30,10))
            setTotalCost(bb(valueKG,30,10)+ApplesSum+PapayaSum);
        }if(nameOfPrd === "Apples"){
            setAppleSum(bb(valueKG,24,8));
            setTotalCost(bb(valueKG,24,8)+BananasSum+PapayaSum);

        }if(nameOfPrd === "Papaya") {
            setPapayaSum(bb(valueKG,30,10));
            setTotalCost(BananasSum+ApplesSum+bb(valueKG,30,10));
        }
    }

    const showMessageBuy = () => {
        alert("Congratulations! ")
    }

    const removeProductOfBucket= (e) =>{
        const value = e.target.value;
        const newSortedList = [...listOfProducts];
        const sortedList = newSortedList.filter(item => {
            return item.toLowerCase().indexOf(value.toLowerCase()) === -1;
        })
        setListOfProducts(sortedList);
        (sortedList.length === 0 )? setEmptyCartOrNot(true) : setEmptyCartOrNot(false);

        if(value === "Bananas"){
            setTotalCost(totalCost - BananasSum);
        }if(value === "Apples"){
            setTotalCost(totalCost - ApplesSum);

        }if(value === "Papaya") {
            setTotalCost(totalCost - PapayaSum);
        }
    }

    return (
        <div>
            <TopBar header="Shopping cart"/>
            <div>
                {emptyCartOrNot ? <div className={styles.cartTextIfEmpty}>Your shopping cart is empty!</div> : null}
                {listOfProducts.map((item) =>
                    <div key={item} className={styles.addedProduct}>
                        <div className={styles.nameOfProduct}>{item}</div>
                        <input className={styles.inputKilogram} type="number"
                               min="1" max="100" maxLength="2"
                               id={item} onKeyUp={handleChange}
                        />
                        <p className={styles.weightText}>Kilogram</p>

                        <button className={styles.removeButtonProduct} value={item} onClick={removeProductOfBucket}>Remove</button>
                    </div>
                )}<div>
                {!emptyCartOrNot ?
                    <div className={styles.totalCostBox}>
                    TOTAL COST
                       <p className={styles.totalAmount}>{totalCost}&#8372;</p>
                    <button className={styles.buyButton} onClick={showMessageBuy}>Buy</button></div> : null}
            </div>

            </div>
        </div>
    )
}

export default Basket