import React, { useEffect, useState } from 'react';

import logo from './logo.svg';
import Post from './Post';
import NewPost from './NewPost';
import './App.css';


const BASE_URL = 'http://localhost:8000/'

function App() {

  const [posts, setPosts]= useState([])

  useEffect(() => {
    fetch(BASE_URL+'post/all').then(response =>{
      const json = response.json()
      console.log(json);
      if(response.ok){
        return json
      }
      throw response
    }).then( data =>{
      return data.reverse()
    }).then( data =>{
      setPosts(data)
    }).catch( err =>{
      console.log(err);
      alert(err)
    })
  }, [])

  return (
    <div className="App">
      <div className='blog_title'>Book Suggestion Blog </div>
      <div className='app_posts'>
        {
          posts.map(post => (
            <Post post={post} />
          ))
        }
      </div>
      <div className='new_post'>
        <NewPost />
      </div>
    </div>
  );
}

export default App;
