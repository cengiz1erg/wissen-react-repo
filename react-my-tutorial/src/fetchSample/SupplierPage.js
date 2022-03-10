import React, { useEffect, useState } from 'react'
import SupplierAdd from './SupplierAdd';
import SupplierList from './SupplierList';

function SupplierPage() {
    const [suppliers, setSuppliers] = useState([]);
    useEffect(() => {

        fetch("https://northwind.vercel.app/api/suppliers")
        .then(res => res.json())
        .then((data) => {
            setSuppliers(data);
        })
    }, [])
    return (
        <>
            <SupplierList suppliers={suppliers}></SupplierList>
        </>
    )
}

export default SupplierPage