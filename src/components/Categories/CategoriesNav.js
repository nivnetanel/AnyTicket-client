import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Categories.css'
import { BsHouseDoorFill, BsFillHouseFill, BsFillPuzzleFill } from 'react-icons/bs'
import { AiFillCar } from 'react-icons/ai';
import { GiFlowerPot, GiClothes,GiMicrophone,GiSoccerField } from 'react-icons/gi';
import { TiSortAlphabetically } from 'react-icons/ti';
import { MdHotel, MdFlight} from 'react-icons/md';
import { CgMoreO } from "react-icons/cg";
import { FaUmbrellaBeach } from "react-icons/fa";
import { RiHotelFill,RiFootballLine } from "react-icons/ri";

import {useRef} from 'react';

const CategoriesNav = () => {
 
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
 
  return (
<div className="container" id="categories">
            <h1>Categories</h1>
            <div>
            <Link to="/categories/all">
                <Button variant="outline-dark" id="all" onClick={handleClick}><TiSortAlphabetically />All</Button>{' '}

            </Link>
            
            <Link to="/categories/Hotel">
                <Button variant="outline-dark" id="properties" onClick={handleClick}><MdHotel />Hotel</Button>{' '}
            </Link>
            <Link to="/categories/Flight">
                <Button variant="outline-dark" id="auto" onClick={handleClick}><MdFlight />Flight</Button>{' '}
            </Link>
            <Link to="/categories/Vacation">
                <Button variant="outline-dark" id="home" onClick={handleClick}><FaUmbrellaBeach />Vacation</Button>{' '}
            </Link>
            <Link to="/categories/Concert">
                <Button variant="outline-dark" id="electronics" onClick={handleClick}><GiMicrophone />Concert</Button>{' '}
            </Link>
            <Link to="/categories/Sport">
                <Button variant="outline-dark" id="clothes" onClick={handleClick}><RiFootballLine />Sport</Button>{' '}
            </Link>
            <Link to="/categories/Other">
                <Button variant="outline-dark" id="toys" onClick={handleClick}><CgMoreO />Other</Button>{' '}
        </Link>
        <div style={{height: '2rem'}} />

        <div ref={ref}></div>
     
            </div>
        </div>
    )
}

//     <div className="container" id="categories">
//       <div class="button-images">
//       <div class="one_fourth">
//         <div class="button-container">
//           <Link to="/categories/Hotel">Hotel</Link>
//           <img src="https://cf.bstatic.com/xdata/images/landmark/square250/228373.jpg?k=5835b421a7ce1614ef58df8eb4cab4822ecf22e4ad1016c9c1f145fa2ccd2d53&o=" />
//         </div>
//       </div>
//       <div class="one_fourth">
//         <div class="button-container">
//           <Link to="/categories/Flight">Flight</Link>
        
//           <img src="https://cdn.hswstatic.com/gif/fuel-dump-1.jpg" />
//         </div>
//       </div>
//       <div class="one_fourth">
//         <div class="button-container">
//           <Link to="/categories/Vacation">Vacation</Link>
//           <div class="button-image"> 		<img src="https://www.myluxurytravel.fr/wp-content/uploads/2019/07/adults-only-min-300x300.jpg" /></div>
//         </div>
//       </div>
//       <div class="one_fourth">
//         <div class="button-container">
//           <Link to="/categories/Concert">Concert</Link>
//           <img src="https://photos.bandsintown.com/thumb/8616419.jpeg" />
//         </div>
//       </div>
//       <div class="one_fourth">
//         <div class="button-container">
//           <Link to="/categories/Sport">Sport</Link>
          
//           <img src="https://sunflowertents.com/wp-content/uploads/2017/11/Sport-Photo-300x300.jpg" />
//         </div>
//       </div>
//       <div class="one_fourth last">
//         <div class="button-container">
//           <Link to="/categories/Other">Other</Link>
//           <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/7a359c78-80d6-41f5-a666-760dea1b7533.__CR0,0,300,300_PT0_SX300_V1___.jpg" />
//         </div>
//       </div>

//         <div class="clearboth"></div>
//       </div>
  
//       <div>
//       <Button class="container" onClick={handleClick} variant="outline-dark" >Scroll to element</Button>

//       <div style={{height: '10rem'}} />

//       <div ref={ref}></div>

//       <div style={{height: '1rem'}} />

//       </div>
//     </div>
    
//   );
// };
export default CategoriesNav;
