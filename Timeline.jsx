

import React, { useState, useEffect } from 'react';
import './timeline.css'
import axios from 'axios';

import LikeButton from './LikeButton';


function Timeline() {
  const [posts, setPosts] = useState([]);




  useEffect(() => {
    // Fetch data from backend API
    axios.get('http://localhost:3000/api/myntra-posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  let count = 0;

  function increment() {
    count++;
    document.getElementById('counter').innerText = count;
  }

  return (
    <div className="App">
      <h1>Pick Your Favourite One !</h1>
      <div className='Post4'>
        <div className='PostHeader'>
          <img src='https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png' alt="AvatarGirl" height={30} width={30}></img>
          <span className='username'>Riya</span>
        </div>
        <div className='Post4-'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ct2zp9ZekXFhwmcHAPZXbOI4tV45k_I2aw&s' alt='Post1' height={500} width={500}></img>
        </div>
        <div className='Footer Section'>
          <LikeButton/>
        </div>
        
      </div>
      <div className='Post1'>
        <div className='PostHeader'>
          <img src='https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png' alt="AvatarGirl" height={30} width={30}></img>
          <span className='username'>Angelina</span>
        </div>
        <div className='Post1-'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnQZ6dHAbZEDRhv_--FfLHGyi8oms0hiC9YL8874OaaA0K152-RUoNogXd4cZVBlpmCZU&usqp=CAU' alt='Post1' height={500} width={500}></img>
        </div>
        <div className='Footer Section'>
          <LikeButton/>
        </div>
      </div>

      <div className='Post2'>
        <div className='PostHeader'>
          <img src='https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png' alt="AvatarGirl" height={30} width={30}></img>
          <span className='username'>Ariyana</span>
        </div>
        <div className='Post2-'>
          <img src='https://cdn.shopify.com/s/files/1/0412/0002/5751/files/Screenshot_2023-07-06_at_7.14.18_PM_1024x1024.png?v=1688651085' alt='Post2' height={500} width={500}></img>
        </div>
        <div className='Footer Section'>
          <LikeButton/>
        </div>
      </div>

      <div className='Post3'>
        <div className='PostHeader'>
          <img src='https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png' alt="AvatarGirl" height={30} width={30}></img>
          <span className='username'>Yashna</span>
        </div>
        <div className='Post3-'>
          <img src='https://www.kalkifashion.com/blogs/wp-content/uploads/2023/07/pearl_pink_embroidered_gown_with_shrug-sg112984_2_-1-729x1024.jpg' alt='Post1' height={500} width={500}></img>
        </div>
        <div className='Footer Section'>
          <LikeButton/>
        </div>
      </div>

      <div className='Post4'>
        <div className='PostHeader'>
          <img src='https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png' alt="AvatarGirl" height={30} width={30}></img>
          <span className='username'>Jiya</span>
        </div>
        <div className='Post4-'>
          <img src='https://static.vecteezy.com/system/resources/previews/029/138/484/large_2x/ai-generated-ai-generative-cultural-fusion-harmony-american-girl-in-bangladeshi-attire-free-photo.jpg' alt='Post1' height={500} width={500}></img>
        </div>
        <div className='Footer Section'>
          <LikeButton/>
        </div>
        
      </div>
      
       <div className='post-list'>
        {posts.map(post => (
          < div key={post._id} className='post-item'>
            <h2>{post.name}</h2>
            
            <img src={post.post} alt="Dress"/>
            <LikeButton/>
            <span>Liked by {post.count} people</span>
          </div>
        ))}
        </div>
      
    </div>
  );
}

export default Timeline;
