
import React, { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import "./setting.css";
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import Navbar from './Navbar'
import HorizontalStepper from './stepper/HorizontalStepper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { TextField } from '@mui/material';

const Setting = () => {
const [selected, setSelected] = useState(null);
const history = useHistory();
const [activeStep, setActiveStep] = useState(2); // New state for active step

  const handleContinue = () => {
    history.push('/ready');
    console.log("Continue button clicked");
  };

  const [select, setSelect] = useState("lifetime");
  const [select2, setSelect2] = useState("radius");

  const handleSelect = (event, newSelect) => {
    if (newSelect !== null) {
      setSelect(newSelect);
    }
  };

  const handleSelect2 = (event, newSelect) => {
    if (newSelect !== null) {
      setSelect2(newSelect);
    }
  };

  return (
    <div style={{ display: 'flex', height: '160vh', backgroundColor: '#f4f7f6' }}>
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
      

        
        {/* New Code Starts Here */}
        <div style={{ marginBottom: '20px' }}>
          {/* Budget and Dates Info */}
          <div style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '10px'
          }}>
              <div>
        <h5 style={{fontSize: '15px', fontWeight: 'bold' , paddingBottom:'10px' }}>{`Campaign Settings (Step 3 to 4)`}</h5>
        </div>
        <hr/>
        <br/>
        <label style={{ fontWeight: '500', textDecoration: 'underline', paddingBottom:'18px'}}>Budget And Dates Info</label>
        <div>
  <label style={{ fontSize: '16px', fontWeight: '500' ,paddingBottom:'9px' }}>Budget Timeline</label>
  <br/>
  <ToggleButtonGroup
      value={select}
      exclusive
      onChange={handleSelect}
      aria-label="budget-timeline"
      style={{ height: '26px', borderRadius: '28px', overflow: 'hidden' }}
    >
      <ToggleButton
        value="lifetime"
        aria-label="Lifetime"
        style={{
          flex: 1,
          backgroundColor: select === 'lifetime' ? '#2196f3' : 'grey',
          color: 'white'
        }}
      >
        Lifetime
      </ToggleButton>
      <ToggleButton
        value="daily"
        aria-label="Daily"
        style={{
          flex: 1,
          backgroundColor: select === 'daily' ? '#2196f3' : 'grey',
          color: 'white',
        }}
      >
        Daily
      </ToggleButton>
    </ToggleButtonGroup>
</div>
<br/>

            {/* Start and End Date */}
            <div >
            <a style={{fontSize: '16px', fontWeight: '500'}}>Start Date:   </a><input type="date" style={{margin: '2px 7px', borderRadius: '6px', border: '1px solid grey', textAlign: 'center'}} />
           <a style={{marginLeft:'170px'}}><a style={{fontSize: '16px', fontWeight: '500'}}>End Date:  </a></a> <input type="date"  style={{margin: '2px 7px', borderRadius: '6px', border: '1px solid grey', textAlign: 'center'}}/>

            </div>
<br/>
            {/* Enter Campaign Budget */}
           <a style={{fontSize: '16px', fontWeight: '500'}} >  Enter Campaign Budget  </a><br/>
             <input type="range" min="100" max="100000" step="1000" />
<br/>
             {/* Location Info */}
             <label style={{ fontWeight: '500',  marginTop:'25px' ,textDecoration: 'underline', paddingBottom:'18px'}}>Location Info</label>

             <div>
  <label style={{ fontSize: '16px', fontWeight: '500' ,paddingBottom:'9px' }}>Location Type</label>
  <br/>
  <ToggleButtonGroup
      value={select2}
      exclusive
      onChange={handleSelect2}
      aria-label="location-type"
      style={{ height: '26px', borderRadius: '28px', overflow: 'hidden' , marginBottom:'15px' }}
    >
      <ToggleButton
        value="lifetime"
        aria-label="Lifetime"
        style={{
          flex: 1,
          backgroundColor: select2 === 'lifetime' ? '#2196f3' : 'grey',
          color: 'white'
        }}
      >
        Lifetime
      </ToggleButton>
      <ToggleButton
        value="radius"
        aria-label="Radius"
        style={{
          flex: 1,
          backgroundColor: select2 === 'radius' ? '#2196f3' : 'grey',
          color: 'white',
        }}
      >
        Radius
      </ToggleButton>
    </ToggleButtonGroup>
</div>
{/* <br/> */}

         <a style={{ fontSize: '16px', fontWeight: '500', paddingBottom:'19px'}}> Search Location </a>
             <br/>
             <TextField style={{marginTop:'12px'}} id="outlined-basic" label="Enter location" variant="outlined" /> 
<br/>
<br/>
             Select Target Radius
             <br/>
             <input type="range" min="1" max="30"/>
          </div>
        </div>
        {/* New Code Ends Here */}

        {/* "Continue" button positioned in the right-most corner */}
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={handleContinue}
            style={{
              backgroundColor: '#0d6efd',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;


