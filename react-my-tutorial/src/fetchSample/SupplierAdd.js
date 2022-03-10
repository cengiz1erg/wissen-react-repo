import React, { useEffect, useState } from 'react'
import SupplierList from './SupplierList';

function SupplierAdd() {
    const [companyName, setCompanyName] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactTitle, setContactTitle] = useState('');
    const [suppliers, setSuppliers] = useState([]);

    const addNewSupplier = () => {

        let newCategory = { companyName: companyName, contactName: contactName, contactTitle: contactTitle };
        let requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCategory)
        }


        fetch("https://northwind.vercel.app/api/suppliers", requestOptions)
            .then(res => res.json())
            .then((data) => {
                console.log('New category!!', data);

                // getAllCategories();
                setSuppliers([...suppliers, data]);
            })
    }
    useEffect(() => {

        getAllSuppliers();

    }, [])

    const getAllSuppliers = () => {

        fetch("https://northwind.vercel.app/api/suppliers")
            .then(res => res.json())
            .then((data) => {
                setSuppliers(data);
            })

    }

  return (
    <>
    <div>
        <label>Company Name:</label>
        <input type='text' value={companyName} onChange={(e) => setCompanyName(e.target.value)}></input>
    </div>
    <div>
        <label>Contact Name:</label>
        <input type='text' value={contactName} onChange={(e) => setContactName(e.target.value)}></input>
    </div>
    <div>
        <label>Contact Title:</label>
        <input type='text' value={contactTitle} onChange={(e) => setContactTitle(e.target.value)}></input>
    </div>
    <div>
        <button onClick={() => addNewSupplier()}>Add</button>
    </div>

    <SupplierList suppliers={suppliers}></SupplierList>
</>
  )
}

export default SupplierAdd