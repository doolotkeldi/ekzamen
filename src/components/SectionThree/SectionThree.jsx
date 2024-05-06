import React from 'react'
import "./SectionThree.css"
import image1 from "../../assets/Images/image1.png"
import image2 from "../../assets/Images/image2.png"


function SectionThree() {
  return (
   <div className="tima-container">

   
        <div className='tima-content'>


           
                <img src={image1} alt="" />
                <div className="tima-right">

                <h1>SUMMER CACTUS <br /> &  SUCCULENTS </h1>
     
             <p>We are an oline plant shop offring a wide <br /> range of cheap and trendy plants</p>
             <button className='cnopka'>Find More </button>
                </div>
                

          

        </div>
        <div className='tima-content'>
            
            

           
                <img src={image2} alt="" />
                <div className="tima-right">


                <h1>STYLING TRENDS<br /> &  MUCN MORE </h1>
     
             <p>We are an oline plant shop offring a wide <br /> range of cheap and trendy plants</p>
             <button className='cnopka'>Find More</button>
                </div>
                

          

        </div>

        </div>

      
 
  )
}

export default SectionThree
