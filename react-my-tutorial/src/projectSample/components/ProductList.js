import { Button, Table } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { baseManager } from '../request/baseManager';

function ProductList(props) {
    let navigate = useNavigate();
    const deleteProduct = (id) => {
        props.remove(id)
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Category Id',
            dataIndex: 'categoryId',
            key: 'categoryId'
        },
        {
            title: 'Delete',
            dataIndex: 'id',
            key: 'id',
            render: (id) => <Button danger onClick={() => deleteProduct(id)}>Delete</Button>
        }
    ];
    return (
        <>
            <Table dataSource={props.products} columns={columns}></Table>
        </>
    )
}

export default ProductList