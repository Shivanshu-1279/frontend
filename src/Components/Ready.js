
import React, { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import Navbar from './Navbar'
import HorizontalStepper from './stepper/HorizontalStepper';
import CR7 from '../Images/cr7.png'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import './ready.css'
const Product = () => {
  const [selected, setSelected] = useState(null);
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(3); // New state for active step
  const [selection, setselection] = useState(false);

  const handleContinue = () => {
    console.log("Continue button clicked");
    history.push('/')
  };

  return (
    <div style={{ display: 'flex', height: '120vh', backgroundColor: '#f4f7f6' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
      <Navbar />

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <h2 style={{ fontWeight: '800', fontSize: '18px' }}>Your Ad Campaigns</h2>
            <p>Launch your ad in just 4 seconds.</p>
          </div>
        </div>
        <HorizontalStepper activeStep={activeStep} setActiveStep={setActiveStep}/>
        <br/>
               
        <div>
          <h5 style={{fontSize: '15px', fontWeight: '600',paddingTop: '21px'}}>{`Choose the product (Step 4 to 4)`}</h5>
              <br/>
              <hr/>
              <br/>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            height:'215px',
            gap: '25px' // Decreased the gap between grid items
          }}>
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                id='grid'
                key={index}
                onClick={() => setSelected(index)}
                className={`product-box ${selected === index ? "selected" : ""}`}
                style={{
                 cursor:'pointer'
                }}
                >

<div className="header">
        <h2 style={{textAlign:'center', justifyContent:'center'}}>Mukund Cake Shop</h2>
        <span className="verified"></span>
        {selected === index && <span style={{fontSize:'18px'}} className="tick">✔</span>}
      </div>
      <p style={{fontSize:'12px',paddingTop: '18px' ,textAlign: 'center'}}>We are the best bakery around you. Please like my page to get updates on exciting offers.</p>
      <div className="images" style={{marginTop:'20px'}}>
        <img src='https://png.pngtree.com/background/20230519/original/pngtree-chocolate-cakes-hd-wallpaper-580p-picture-image_2655120.jpg' alt="Cupcake" />
      </div>
      <div className="like-section">
        {/* <button style={{width:'100px'}}>Like</button> */}
        <ThumbUpOffAltIcon className='button'/>
      </div>

      <div style={{ marginTop:'4px' ,display: selected === index ? "block" : "none"}} className="edit-section">
        <button style={{margin:'7px' , fontSize:'13px'}}>Change image</button>
        <button>Edit text</button>
      </div>
      
              </div>
            ))}
          </div>

             {/* "Continue" button positioned in the right-most corner */}
        <div style={{ marginTop: '186px', display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={handleContinue}
            style={{
              backgroundColor: '#0d6efd',
              color: 'white',
              border: 'none',
              padding: '7px 13px',
              borderRadius: '8px',
              cursor: 'pointer'
            }}>
            Continue
          </button>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Product;
