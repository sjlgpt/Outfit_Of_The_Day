import React, { useState } from 'react';
import redHeartIcon from './Red heart.png'; 
import whiteHeartIcon from './White heart.png';
import './LikeButton.css'

const LikeButton = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);


  const toggleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);

  };

  return (
    <><button className="like-button" onClick={toggleLike}>
      <img src={isLiked ? redHeartIcon : whiteHeartIcon} alt="Heart Icon" height={30} width={30} />
    </button><p>Likes : {likeCount}</p></>
  );
};

export default LikeButton;
