import React from 'react'
import CategoryForm from 'src/componets/templates/CategoryForm'
import CategoryList from 'src/componets/templates/CategoryList'

const AdminPage = () => {
  return (
    <div>
      <CategoryList/>
     <CategoryForm/>
    </div>
  )
}

export default AdminPage
