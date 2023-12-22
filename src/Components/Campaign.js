
import React, { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import Cupcake from '../Images/chocoImg.png';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import "./campaign.css";
import { useHistory } from 'react-router-dom';
import Cake1 from '../Images/cake1.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import MessageIcon from '@mui/icons-material/Message';
// Define a custom Row component to keep the code DRY
const TableRow = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <tr>
     <td style={{paddingLeft:'10px'}}><input type="checkbox" /></td>
      <td style={{paddingLeft:'14px'}}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleToggle} />}
          label=""
        />
      </td>
      <td style={{ fontWeight: '600', display: 'flex', alignItems: 'center', paddingRight:'20px' }}>
        <img src={Cake1} alt="Campaign" style={{ width: '47px', height: '47px' , borderRadius:'4px'}} />
        <span style={{marginLeft: '10px'}}>Bluberry cake Campaign</span>
      </td>
      <td>25 Jul 2020 - 01 Aug 2020</td>
      <td style={{paddingLeft:'21px'}}>300</td>
      <td>INR.3,400</td>
      <td style={{paddingLeft:'12px'}}>Chennai</td>
      <td style={{paddingLeft: '24px'}}>
        <FacebookIcon/>
      </td>
      <td style={{paddingLeft:'4px'}}><span style={{ color: 'green' }}>Live now</span></td>
      <td style={{paddingLeft:'12px'}}>
        <i className="fa fa-edit" style={{ color: 'blue', marginRight: '10px', cursor: "pointer" }}></i>
        <i className="fa fa-trash" style={{ color: 'red', cursor: "pointer" }}></i>
      </td>
    </tr>
  );
};

const Campaign = () => {

    
  return (
    <div style={{ display: 'flex', height: '102vh', backgroundColor: '#f4f7f6' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <Navbar />

        {/* Campaign section heading and button */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h2 style={{ fontWeight: '800', fontSize: '24px' }}>Your Campaigns</h2>
            <p style={{ fontSize: '16px' }}>Check the list of campaigns you created</p>
          </div>
          <Link to='newCamp'>
            <button  className='create' style={{
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              fontSize: '16px'
            }}>
              <AddCircleOutlineIcon />
              Create new campaign
            </button>
          </Link>
        </div>

        {/* Search and Filter Section */}
        <div >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <input
              type="text"
              placeholder="Search for the campaign"
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ced4da',
                width: '300px',
                fontSize: '16px'
              }}
            />
            <div style={{
              display: 'flex',
              alignItems: 'center',
            }}>
              {/* Dropdowns for Platform, Status, and Date Range */}
              <select style={{ padding: '10px', borderRadius: '5px', marginRight: '10px', fontSize: '16px' }}>
                <option>All Platforms</option>
                {/* Additional options */}
              </select>
              <select style={{ padding: '10px', borderRadius: '5px', marginRight: '10px', fontSize: '16px' }}>
                <option>All Status</option>
                {/* Additional options */}
              </select>
              <select style={{ padding: '10px', borderRadius: '5px', marginRight: '10px', fontSize: '16px' }}>
                <option>Last 30 days</option>
                {/* Additional options */}
              </select>
            </div>
          </div>

          {/* The rest of your campaign-related content will go here */}
          {/* Table */}
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
            <thead>
              <tr style={{ backgroundColor: '#e9ecef', textAlign: 'left' }}>
                <th style={{ padding: '10px' }}> <input type="checkbox" /></th>
                <th style={{ padding: '10px' }}>ON/OFF</th>
                <th style={{ padding: '10px' }}>Campaign</th>
                <th style={{ padding: '10px' }}>Date Range</th>
                <th style={{ padding: '10px' }}>Clicks</th>
                <th style={{ padding: '10px' }}>Budget</th>
                <th style={{ padding: '10px' }}>Location</th>
                <th style={{ padding: '10px' }}>Platform</th>
                <th style={{ padding: '10px' }}>Status</th>
                <th style={{ padding: '10px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Render rows */}
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
