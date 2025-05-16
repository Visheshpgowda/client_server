import './Home.css'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

const Home = () => {
  const [posts, setPosts] = useState();
  const url = "https://client-server-k60n.onrender.com/api/v1"

  const loadPosts = async () => {
    try {
      const response = await axios.get(`${url}/getposts`);
      setPosts(response.data.responseData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadPosts();
    // eslint-disable-next-line
  }, [])

  return (
    <div className='Home'>
      {
        posts?.map((post) => {
          return <Card key={post._id} post={post} />
        })
      }
    </div>
  )
}

export default Home
