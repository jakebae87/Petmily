import './Introduce.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductItem from '../Products/ProductItem';
import mockData from '../MockData/MockData_Products';

function Introduce({ props, addCart }) {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const tempData = [...mockData];
        const PopularProducts = tempData.sort((max, min) => (min.cntOfsales - max.cntOfsales));
        const NewProducts = mockData.filter(item => item.new);
        const DiscountedProducts = mockData.filter(item => item.discount);

        if (props[1] === 0) {
            setFilteredData(NewProducts);
        }
        else if (props[1] === 1) {
            setFilteredData(PopularProducts);
        }
        else {
            setFilteredData(DiscountedProducts);
        }
    }, [props]);

    return (
        <div className="Introduce">
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
                {filteredData.map((item, idx) => {
                    if (idx < 3) return (<ProductItem key={item.id} it={item} addCart={addCart} />);
                })}
            </div>
        </div>
    );
}

export default Introduce;