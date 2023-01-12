import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Cart } from '../Context';
import { BsFillCartFill } from 'react-icons/bs'

function Navbar() {
  const { cart } = useContext(Cart);
  const [userData, setUserData] = useState({
    useremail: "",
    userpassword: "",
    name: "",
    number: "",
    email: "",
    password: ""
  })

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value })
  }
  const handleChangeData = async (e) => {
    e.preventDefault();

    const { useremail, userpassword, name, email, number, password } = userData;
    const res = await fetch("https://ecommerce-9ab4b-default-rtdb.firebaseio.com/sbagsform.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          useremail,
          userpassword,
          name,
          number,
          email,
          password,
        })
      });
    if (res) {
      setUserData({
        useremail: "",
        userpassword: "",
        name: "",
        number: "",
        email: "",
        password: ""
      })
    }

   }
  return (
    <>
      <div className='nav-container'>
        <div><Link to='/' style={{ textDecoration: 'none' }}><span className='icon'>sBags</span></Link></div>
        <div className='right-nav'><h6 data-bs-toggle="modal" data-bs-target="#exampleModal">Sign In</h6><Link to='cart'><span className='cart'><BsFillCartFill fontSize="25px" />
          <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: "#473C33" }}>
            {cart.length}
            <span className="visually-hidden">unread messages</span>
          </span></span></Link></div>
      </div>
      {/* SIGN IN Modal *********************************/}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content" style={{ maxWidth: "400px" }}>
            <div className="modal-header" style={{ borderBottom: "none" }}>
              <h1 className="modal-title fs-5" id="exampleModalLabel">Sign In With Your account</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action='' style={{ padding: "15px 20px" }} method='POST'>
                <div className="mb-4">
                  <input type="email" className="form-control" name='useremail' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Email' value={userData.useremail} onChange={getUserData} required />
                </div>
                <div className="mb-4">
                  <input type="password" className="form-control" name='userpassword' id="exampleInputPassword1" placeholder='Password' value={userData.userpassword} onChange={getUserData} required />
                </div>
                <div>
                  <button type='submit' className='submit-btn' onClick={handleChangeData}>Submit</button>
                </div>
                <div className='sign-out-text'>Don't you have an account? <span data-bs-toggle="modal" data-bs-target="#exampleModal2">Sign up here</span></div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* SIGN OUT Modal ****************************/}
      <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content" style={{ maxWidth: "420px" }}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel2">Create Your Account</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action='' method='POST'>
                <div className="mb-4">
                  <input type="text" className="form-control" name='name' id="exampleInputText" aria-describedby="emailHelp" placeholder='Your Name' value={userData.name} onChange={getUserData} required />
                </div>
                <div className="mb-4">
                  <input type="text" className="form-control" name='number' id="exampleInputPhoneNumber" aria-describedby="emailHelp" placeholder='Your Phone Number' value={userData.number} onChange={getUserData} required />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Email' value={userData.email} onChange={getUserData} required />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-4">
                  <input type="password" className="form-control" name='password' id="exampleInputPassword1" placeholder='Password' value={userData.password} onChange={getUserData} required />
                  <div id="passwordHelpBlock" className="form-text">
                    Your password must be 8 characters long.
                  </div>
                </div>
                <div>
                  <button type='submit' className='submit-btn' onClick={handleChangeData}>Create Account</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Navbar;
