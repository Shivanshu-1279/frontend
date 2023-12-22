import React from 'react';
import Cupcake from '../Images/chocoImg.png';

const Navbar = () => {
  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        {/* User info and icons */}
        <div style={{ fontSize: "12px", paddingLeft: "27px", width: "166px" }}>
          Free trial ends in 2 days
        </div>
        <button style={{
          backgroundColor: '#e4cc50',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          color: '#cc4d4d',
          marginRight: '12px',
          fontSize: "12px",
          padding: "7px 8px"
        }}>
          Buy Plan
        </button>
        <i className="fa fa-bell" style={{ marginRight: '10px', cursor: 'pointer' }}></i>
        <i className="fa fa-cog" style={{ marginRight: '10px', cursor: 'pointer' }}></i>
        {/* <i className="fa fa-user" style={{ marginRight: '10px', cursor: 'pointer' }}></i> */}
        <img src={Cupcake} style={{ height: '38px', width: '35px', borderRadius: '400px' }} />
        <span style={{ fontSize: "15px", fontWeight: "700" }}>Mukund Cake Shop</span>
      </div>

      {/* Horizontal line */}
      <hr style={{ margin: '0 0 20px', border: '1px solid #ccc' }} />
    </div>
  );
}

export default Navbar;
