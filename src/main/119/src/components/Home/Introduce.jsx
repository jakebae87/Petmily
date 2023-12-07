import './Introduce.css'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from 'axios';

import ProductItem from '../Products/ProductItem';

function Introduce({ props, addCart }) {
    const [productData, setProductData] = useState([]);

    let url = '';

    useEffect(() => {
        if (props[1] === 0) {
            url = 'newProductList';
        }
        else if (props[1] === 1) {
            url = 'popularProductList';
        }
        else {
            url = 'discountedProductList';
        }

        axios.get(`/rsproduct/${url}`)
            .then((response) => {
                setProductData(response.data);
                console.log(`** productData 서버연결 성공 =>`, response.data);
            })
            .catch((err) => {
                console.log(`** productData 서버연결 실패 => ${err.message}`);
            });
    }, [props]);

    return (
        <div className="Introduce">
            <hr />
            <div className="introducebox">
                <div>
                    <span>{props[0].title}</span>
                    <Link to={`${props[0].url}`}>+</Link>
                </div>

                <div>
                    <p>{props[0].content}<br /></p>
                </div>
            </div>

            <div className="productList">
                {productData.map((item, idx) => {
                    if (idx < 3) return (<ProductItem key={item.id} it={item} addCart={addCart} />);
                })}
            </div>
        </div>
    );
}

export default Introduce;