import React from 'react'
import { useNavigate } from 'react-router-dom';
import './suggestions.css';

function suggestions() {

  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate('/upload');
  };

  return (
    <div className='Theme'>
      <img src="https://static.vecteezy.com/system/resources/previews/004/846/988/non_2x/fashion-hand-lettering-inscription-motivation-and-inspiration-positive-quote-calligraphy-illustration-vector.jpg" alt="Fashion" height={100} width={250}></img>
      <h1 className='ThemeOf'>Theme of the Day :</h1>
      <h2>Cultural Fusion</h2>
      <button className='Upload' onClick={handleUploadClick}>
        <img className='imageicon' src="https://t4.ftcdn.net/jpg/04/81/13/43/360_F_481134373_0W4kg2yKeBRHNEklk4F9UXtGHdub3tYk.jpg" alt="Upload urs" height={150} width={150}></img>
        Upload
      </button>
      

    </div>
  )
}

export default suggestions