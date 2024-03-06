import React from 'react'
import AddPost from 'src/componets/templates/AddPost'
import PostList from 'src/componets/templates/PostList'

const DashboardPage = () => {
  return (
    <div>
      <AddPost/>
      <PostList/>
    </div>
  )
}

export default DashboardPage
