
import React, { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import "./product.css";
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import Navbar from './Navbar'
import HorizontalStepper from './stepper/HorizontalStepper';

const Product = () => {
  const [selected, setSelected] = useState(null);
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(1); // New state for active step

  const handleContinue = () => {
    console.log("Continue button clicked");
    history.push('/campSetting')
  };

  return (
    <div style={{ display: 'flex', height: '114vh', backgroundColor: '#f4f7f6' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <Navbar />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h2 style={{ fontWeight: '800', fontSize: '18px' }}>Your Ad Campaigns</h2>
            <p>Launch your ad in just 4 seconds.</p>
          </div>
        </div>
        <HorizontalStepper activeStep={activeStep} setActiveStep={setActiveStep} />
        <br />

        <div>
          <h5 style={{ fontSize: '15px', fontWeight: '600', paddingTop: '21px' }}>{`Choose the product (Step 2 to 4)`}</h5>
          <br />
          <hr />
          <br />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px' // Decreased the gap between grid items
          }}>
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                id='grid1'
                key={index}
                onClick={() => setSelected(index)}
                className={`product-box ${selected === index ? "selected" : ""}`}
                style={{ cursor:'pointer'}}
              >

                <img src='https://media.istockphoto.com/id/478348860/photo/chocolate-cake-with-chocolate-fudge-drizzled-icing-and-chocolate-curls.jpg?b=1&s=612x612&w=0&k=20&c=fW3zC1L7YFp7ZqowxaeKyxcOd9bo9bhzX-0tBthYIcg=' style={{width: '50px',    height: '50px', margin: '12px 2px'}}/>
                <div className='headint'>
                <h6 style={{fontSize:'14px', fontWeight:'bold',}}>Chocolate Truffle Cake {index + 1}</h6>
                <div style={{display : 'flex'}}>Rs. 2210</div>
                </div>
                
                {selected === index && <span style={{fontSize:'18px'}} className="tick">✔</span>}
              </div>
            ))}
          </div>

          {/* "Continue" button positioned in the right-most corner */}
          <div style={{ marginTop: '56px', display: 'flex', justifyContent: 'flex-end' }}>
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
