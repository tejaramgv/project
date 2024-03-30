
import {Link} from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css'

const Products=()=>(

    <div className="main">
    <div className="carousel-container">
    <Carousel showThumbs={true} autoPlay interval={2000} infiniteLoop showArrows={false} showStatus={false}>

        <div className="carousel">
          <img src="./WhatsApp Image 2024-03-27 at 10.15.41 PM.jpeg" alt="Image 1" />
        </div>
        <div className="carousel">
          <img src="./WhatsApp Image 2024-03-27 at 10.15.41 PM.jpeg" alt="Image 2" />
        </div>
        <div className="carousel">
          <img src="./WhatsApp Image 2024-03-27 at 10.15.41 PM.jpeg" alt="Image 3" />
        </div>
      </Carousel>
      <div className="text">
        <p>AN INTEGRATED SBOM & NIDS SOLUTION FOR ENHANCED SECURITY</p>
        <button><Link className="web" target="_blank" to="http://laghui.tech/">View More</Link></button>
      </div>
    </div>
    </div>
  );


export default Products;