import {Link} from 'react-router-dom'
import './index.css'

const Home=()=>(
    <>
   
    <div className="home">
        <div className="para">
            <h1>"Welcome to<span> Vaaj Labs</span> - Where Technology Innovates!"</h1>
            <h2>Providing techical needs to customers-Application Development&
Cyber Security Solutions</h2>
<Link className="btn" to="/services">Services</Link>
        </div>

<img src="./t2.jpg"/>    </div>

{/* <div className="boxes">
    <div className="sub">
        <h2>IT Services</h2>
        <img className="subimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsn20u2itt3eOsb876zGxZDi2BCEkaYYOjJw&usqp=CAU"/>
        <p>1500<span>+</span></p>
    </div>
    <div className="sub">   <h2>Cyber Security</h2>
        <img className="subimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTwMwnQ5nyYU8I8xkkoTTy4mleVG8xLEdCQA&usqp=CAU   "/>
        <p>5000<span>+</span></p></div>
</div> */}
    
    </>
)
export default Home