import React, {useEffect, useState} from 'react';
import Routes from "./routes";

function App() {
    const [productData, setProductData] = useState('');

    const [list, setList] = useState([]) ;
    const [statusOfBasket, setStatusOfBasket] = useState(true);

    const getData = () => {
        fetch('/products.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setProductData(myJson);
            });
    }
    useEffect(() => {
        getData()
    }, [])

    const tes= (value,status)=> {
        setList(value);
        setStatusOfBasket(status);
    }

    return (
        <div>
            <Routes data={productData} tes={tes} list={list} statusOfBasket={statusOfBasket}/>
        </div>
    )
}

export default App