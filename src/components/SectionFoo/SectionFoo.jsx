import React from 'react'
import "./SectionFoo.css"
import image1 from "../../assets/Images/image1.png"
import strelka from '../../assets/svg/Strelka.svg'
import image4 from "../../assets/Images/image4.png"
import image5 from "../../assets/Images/image5.png"
import image6 from "../../assets/Images/image6.png"

function SectionFoo() {
  return (
    <div className="isko-container">
        <div className="isko-text">

        <h1>Our Blog Posts</h1>
        <h4>We are an online plant shop offering a wide range of cheap and trendy plants. </h4>
        </div>
        <div className="isko-blocks">

  <div className="isko-text-content">
         
     <div className="isko-content">

    <img src={image1} alt=''/>
    </div>
    <div className="iskobek">

    <h4>September 12  I Read in 6 minutes</h4>
    <h1>Cactus & Succulent Care Tips</h1>
    <h3>Cacti are succulents are easy care<br></br> plants for any home or patio. </h3>
    <div className="isko-h2">

    <h2>Read More</h2>
    <img src={strelka} alt=''/>
    </div>

    </div>
    </div> 
  <div className="isko-text-content">
         
     <div className="isko-content">

    <img src={image4} alt=''/>
    </div>
    <div className="iskobek">

    <h4>September 13  I Read in 2 minutes</h4>
    <h1>Top 10 Succulents for Your Home</h1>
    <h3>Cacti are succulents are easy care<br></br> plants for any home or patio. </h3>
    <div className="isko-h2">

    <h2>Read More</h2>
    <img src={strelka} alt=''/>
    </div>

    </div>
    </div> 
  <div className="isko-text-content">
         
     <div className="isko-content">

    <img src={image5} alt=''/>
    </div>
    <div className="iskobek">

    <h4>September 12  I Read in 6 minutes</h4>
    <h1>Cactus & Succulent Care Tips</h1>
    <h3>Cacti are succulents are easy care<br></br> plants for any home or patio. </h3>
    <div className="isko-h2">

    <h2>Read More</h2>
    <img src={strelka} alt=''/>
    </div>

    </div>
    </div> 
  <div className="isko-text-content">
         
     <div className="isko-content">

    <img src={image6} alt=''/>
    </div>
    <div className="iskobek">

    <h4>September 12  I Read in 6 minutes</h4>
    <h1>Best Houseplants Room by Room</h1>
    <h3>Cacti are succulents are easy care<br></br> plants for any home or patio. </h3>
    <div className="isko-h2">

    <h2>Read More</h2>
    <img src={strelka} alt=''/>
    </div>

    </div>
    </div> 
   
   
    </div>


    </div>
  )
}

export default SectionFoo
