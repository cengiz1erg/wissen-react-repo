import React from 'react'

function SupplierList(props) {
  return (
    <>
    <table>
        <tr>
            <td>Id</td>
            <td>Company Name</td>
            <td>Contact Name</td>
            <td>Contact Title</td>

        </tr>
        {
            props.suppliers.map((item, key) => {
                return (<tr key={key}>
                    <td>{item.id}</td>
                    <td>{item.companyName}</td>
                    <td>{item.contactName}</td>
                    <td>{item.contactTitle}</td>
                </tr>)
            })
        }

    </table>
</>
  )
}

export default SupplierList