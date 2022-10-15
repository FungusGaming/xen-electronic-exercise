import React from 'react'
import BasicLayout from '../layout/BasicLayout'
import ProductTable from './ProductTable'

// TODO can add more function
const Admin = () => {
  return (
    <BasicLayout>
      <ProductTable />
    </BasicLayout>
  )
}

Admin.propTypes = {

}

export default Admin