import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import { Table } from 'antd';

function SupplierList() {


    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Company Name',
            dataIndex: 'companyName',
            key: 'companyName'
        },
        {
            title: 'Contact Name',
            dataIndex: 'contactName',
            key: 'contactName'
        },
        {
            title: 'Contact Title',
            dataIndex: 'contactTitle',
            key: 'contactTitle'
        }
    ]

    const [supplierList, setSupplierList] = useState([]);

    useEffect(() => {

        fetch("https://northwind.vercel.app/api/suppliers")
            .then(res => res.json())
            .then((data) => {
                setSupplierList(data);
            })

    }, [])

    return (
        <>
            <Table dataSource={supplierList} columns={columns}></Table>
        </>
    )
}

export default SupplierList