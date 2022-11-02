import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Categories.css";
import { BsFillHouseFill, BsFillPuzzleFill } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { GiFlowerPot, GiClothes } from "react-icons/gi";
import { TiSortAlphabetically } from "react-icons/ti";
import { MdPhoneAndroid } from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";

const CategoriesNav = () => {
  return (
    //     <div className="container" id="categories">
    //       <h1>Categories</h1>
    //       <Link to="/categories/all">
    //         <Button variant="dark" id="all">
    //           <TiSortAlphabetically />
    //           All
    //         </Button>{" "}
    //       </Link>
    //       <Link to="/categories/flights">
    //         <Button variant="dark" id="flights">
    //           <RiHotelFill />
    //           Hotels
    //         </Button>{" "}
    //       </Link>
    //       <Link to="/categories/auto">
    //         <Button variant="dark" id="auto">
    //           <AiFillCar />
    //           Flights
    //         </Button>{" "}
    //       </Link>
    //       <Link to="/categories/home">
    //         <Button variant="dark" id="home">
    //           <BsFillHouseFill />
    //           Vacations
    //         </Button>{" "}
    //       </Link>
    //       <Link to="/categories/electronics">
    //         <Button variant="dark" id="electronics">
    //           <MdPhoneAndroid />
    //           Concerts
    //         </Button>{" "}
    //       </Link>
    //       <Link to="/categories/clothes">
    //         <Button variant="dark" id="clothes">
    //           <GiClothes />
    //           Sport events
    //         </Button>{" "}
    //       </Link>
    //       <Link to="/categories/hotels">
    //         <Button variant="dark" id="hotels">
    //           <BsFillPuzzleFill />
    //           Attractions
    //         </Button>{" "}
    //       </Link>

    //     </div>

    <div class="button-images">
      <div class="one_fourth">
        <div class="button-container">
          <Link to="/categories/Hotel">SSSSS</Link>
          <img src="https://cf.bstatic.com/xdata/images/landmark/square250/228373.jpg?k=5835b421a7ce1614ef58df8eb4cab4822ecf22e4ad1016c9c1f145fa2ccd2d53&o=" />
        </div>
      </div>
      <div class="one_fourth">
        <div class="button-container">
          <Link to="/categories/Flight">Flight</Link>
          <img src="https://cdn.hswstatic.com/gif/fuel-dump-1.jpg" />
        </div>
      </div>
      <div class="one_fourth">
        <div class="button-container">
          <Link to="/categories/Vacation">Vacation</Link>
          <div class="button-image"> 		<img src="https://www.myluxurytravel.fr/wp-content/uploads/2019/07/adults-only-min-300x300.jpg" /></div>
        </div>
      </div>
      <div class="one_fourth">
        <div class="button-container">
          <Link to="/categories/Concert">Concert</Link>
          <img src="https://photos.bandsintown.com/thumb/8616419.jpeg" />
        </div>
      </div>
      <div class="one_fourth">
        <div class="button-container">
          <Link to="/categories/Sport">Sport</Link>
          <img src="https://sunflowertents.com/wp-content/uploads/2017/11/Sport-Photo-300x300.jpg" />
        </div>
      </div>
      <div class="one_fourth last">
        <div class="button-container">
          <Link to="/categories/Other">Other</Link>
          <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/7a359c78-80d6-41f5-a666-760dea1b7533.__CR0,0,300,300_PT0_SX300_V1___.jpg" />
        </div>
      </div>

      <div class="clearboth"></div>
    </div>
  );
};
export default CategoriesNav;
