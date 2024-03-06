import React from 'react'
import styles from "./PostList.module.css"
import { useQuery } from '@tanstack/react-query'
import { getPosts } from 'src/services/User'
import Loader from '../modules/Loader'
import { sp } from 'src/utils/numbers'


const PostList = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const { data , isLoading} = useQuery(["my-post-list"] , getPosts);
    console.log(data )
  return (
    <div className={styles.list}>
      {
       isLoading ? (<Loader/>) : (
        <>
       <h3>آگهی های شما</h3>
      {
        data.data.posts.map(post =>(
            <div key={post._id} className={styles.post}
            >
                <img src={`${baseUrl}${post.images[0]}`} />
                <div>
                    <p>{post.options.title}</p>
                    <span>{post.options.content}</span>
                </div>
                <div  className={styles.price}>
                    <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                    <span>{sp(post.amount)}نومان</span>
                </div>
            </div>
        ))
      }
        </>
       )
      }
    </div>
  )
}

export default PostList
