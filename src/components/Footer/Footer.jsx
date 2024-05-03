import React from 'react'
import "./Footer.css"
import oneblock from "./../../assets/svg/oneblock.svg"
import logoF from "./../../assets/svg/logoFooter.svg"
import location from "./../../assets/svg/location.svg"
import message from "./../../assets/svg/message.svg"
import calling from "./../../assets/svg/calling.svg"
import facebook from "./../../assets/svg/facebook.svg"
import instagram from "./../../assets/svg/instagram.svg"
import twitter from "./../../assets/svg/twitter.svg"
import linkedin from "./../../assets/svg/linkedin.svg"
import union from "./../../assets/svg/union.svg"
import image166 from "./../../assets/svg/image166.svg"




function Footer() {
  return (
    <div>
      <div className="footer-section">
        <div className="blocks">
          <div className="one-block">
          <img src={oneblock} alt="" />
            <h4>Garden Care</h4>
            <p>We are an online plant shop <p></p> offering a wide range of cheap <p></p> and trendy plants.</p>
          </div>

          <div className="one-block">
          <img src={oneblock} alt="" />
            <h4>Plant Renovation</h4>
            <p>We are an online plant shop <p></p> offering a wide range of cheap <p></p> and trendy plants.</p>
          </div>

          <div className="one-block">
          <img src={oneblock} alt="" />
            <h4>Watering Graden</h4>
            <p>We are an online plant shop <p></p> offering a wide range of cheap <p></p> and trendy plants.</p>
          </div>

          <div className="one-block">
            <h4>Would you like to join newsletters?</h4>
            <div className="button-footer">
              <input type="enter your email address..." />
              <button>Join</button>
            </div>
            <p>We usually post offers and challenges in newsletter. We’re <p></p> your online houseplant destination. We offer a wide range <p></p> of houseplants and accessories shipped directly from our <p></p> (green)house to yours!</p>

          </div>

        </div>

      </div>
      
      <div className="divir">
        <div className="divk">
          <img className='logoF' src={logoF} alt="" />
        </div>
        <div className="divki">
          <img src={location} alt="" />
          <p>70 West Buckingham Ave. <p></p> Farmingdale, NY 11735</p>
        </div>
        <div className="divki">
        <img src={message} alt="" />
          <p>contact@greenshop.com</p>
        </div>
        <div className="divki">
        <img src={calling} alt="" />
          <p>+88 01911 717 490</p>
        </div>

      </div>

      <div className="Rectangle-39">
        <div className="foote3">
          <h2>My Account</h2>
          <p>My Account <p></p> Our stores <p></p> Contact us <p></p> Career Specials</p>
        </div>
        <div className="foote3">
          <h2>Help & Guide</h2>
          <p>Help Center <p></p> How to Buy <p></p> Shipping & Delivery <p></p> Product Policy <p></p> How to Return</p>
        </div>
        <div className="foote3">
          <h2>Categories</h2>
          <p>House Plants <p></p> Potter Plants <p></p> Seeds <p></p> Small Plants <p></p> Accessories</p>
        </div>
        <div className="foote3">
          <h3>Social Media</h3>
          <div className="images-footer">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
            <img src={union} alt="" />
          </div>
          <h3>We accept</h3>
          <img src={image166} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
