import React, { useEffect, useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import axios from 'axios';

const DataTables = () => {
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [data, setData] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
        axios.get("https://647449617de100807b1a93a6.mockapi.io/products")
            .then((response) => {
                setProducts(response.data)
                setAllProducts(response.data)
                setData(response.data)
            })
    }, []);

    const handleSelect = (date) => {
        let filtered = allProducts.filter((product) => {
            let productDate = new Date(product['createdAt']);
            return (
                productDate >= date.selection.startDate &&
                productDate <= date.selection.endDate
            )
        })
        setStartDate(date.selection.startDate);
        setEndDate(date.selection.endDate);
        setProducts(filtered);
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    const nameFilter = (event) => {
        setProducts(data.filter(f => f.name.toLowerCase().includes(event.target.value)))
    }


    return (
        <>
        <div className='col-xl-6 col-sm-4 py-2'>

            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
        </div>

            <input type='text' className='ml-2' placeholder='Product Name' onChange={nameFilter} />

            <table className="table table-dark mt-2">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        let date = new Date(product["createdAt"])
                        return (
                            <tr key={product["id"]}>
                                <td>{product["id"]}</td>
                                <td>{product["name"]}</td>
                                <td>{date.toLocaleDateString()}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>

    )
}

export default DataTables