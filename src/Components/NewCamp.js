import React, { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import "./newCamp.css";
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import HorizontalStepper from './stepper/HorizontalStepper';
import Navbar from './Navbar'
import MessageIcon from '@mui/icons-material/Message';
const NewCamp = () => {
  const [selected, setSelected] = useState(null);
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(0); // New state for active step

  const handleContinue = () => {
    console.log("Continue button clicked");
    history.push('/chooseProd')
  };

  return (
    <div style={{ display: 'flex', height: '127vh', backgroundColor: '#f4f7f6' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
      <Navbar />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h2 style={{ fontWeight: '800', fontSize: '18px' }}>Your Ad Campaigns</h2>
            <p>Launch your ad in just 4 seconds.</p>
          </div>
        </div>
        <HorizontalStepper activeStep={activeStep} setActiveStep={setActiveStep}/>
        <br/>
               
        <div>
          <h5 style={{fontSize: '15px', fontWeight: '600',paddingTop: '21px'}}>{`What you want to do? (Step 1 to 4)`}</h5>
              <br/>
              <hr/>
              <br/>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px' // Decreased the gap between grid items
          }}>
           {Array.from({ length: 9 }).map((_, index) => (
              <div
                id='grid'
                key={index}
                onClick={() => setSelected(index)}
                className={`product-box ${selected === index ? "selected" : ""}`}
                style={{ cursor:'pointer'}}
              >
                <MessageIcon/>
                <h6 style={{fontWeight:'bold'}}>Get leads as calls {index + 1}</h6>
       <a style={{fontSize:'15px'}}>Reach Broad audience and get leads through calls</a>   
           
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

export default NewCamp;
