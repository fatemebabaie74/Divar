import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Loader from 'src/componets/modules/Loader'
import Main from 'src/componets/templates/Main'
import SideBar from 'src/componets/templates/SideBar'
import { getAllPosts } from 'src/services/User'
import { getCategory } from 'src/services/admin'

const HomePage = () => {

  const {data : posts , isLoding : postLoading} = useQuery(["post-list"] , getAllPosts)
  const {data : categories , isLoading: categoryLoading} = useQuery(["get-categories"] , getCategory )
console.log({posts , categories})
const style = {display : "flex"}

  return (
<>
    {
      postLoading ||categoryLoading ? (<Loader/>) : (

        <div style={style}>
          <SideBar categories={categories}/>
          <Main posts ={posts}/>
        </div>
      )
    }
   </>
  )
}

export default HomePage
