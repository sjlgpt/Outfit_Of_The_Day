import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sidenav.css';






function SideNav() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/leaderboard');
    };
    
    
  return (
    <div className='sidenav'>
        <img className="sidenav__logo "src="https://sellerseva.com/wp-content/uploads/2022/11/Myntra-Logo-New.png" alt="Myntra" height="100" width="200"></img>
        <div className='side__buttons'>
        <button className='sidenav__button'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrfVvIlLb0jOKGcmfqMWVziY0PVoPAChCHyA&s" alt="Home" height="18" width="18"></img>
                <span>Home</span>
            </button>
            <button className='sidenav__button'>
                <img src="https://cdn-icons-png.freepik.com/256/141/141944.png?semt=ais_hybrid" alt="Search" height="18" width="18"></img>
                <span>Search</span>
            </button>
            <button   className='sidenav__button' onClick={handleButtonClick}>
                <img src="https://cdn-icons-png.flaticon.com/512/4489/4489655.png" alt="LeaderBoard" height={18} width={18}></img>
                <span>LeaderBoard</span>
            
        
            </button>
            <button className='sidenav__button'>
                <img src="https://icons.veryicon.com/png/o/miscellaneous/ui-basic-linear-icon/like-106.png" alt="Likes" height={18} width={18}></img>
                <span>Likes</span> 
            </button>
            
            <button className='sidenav__button'>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/001/500/312/small_2x/bullet-menu-icon-free-vector.jpg" alt="Menu" height={18} width={18}></img>
                <span>More</span>
            </button>
    </div>
    </div>
  )
}

export default SideNav