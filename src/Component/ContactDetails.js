import React from 'react'
import {FiPhoneCall} from 'react-icons/fi';
import { MdLocationOn, MdOutlineMail} from 'react-icons/md';
import {BiLogoFacebook, BiLogoGmail, BiLogoInstagram, BiLogoLinkedin} from 'react-icons/bi';
import { Link } from 'react-router-dom';


function ContactDetails() {
  
  return (
    <div>
      <div className="container">
        <div className="row">
        
            <div className="col-lg-6">
            <div className="form-floating my-3">
            <input type="text" className="form-control" placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Enter full name</label>
        </div>
        <div className="form-floating my-3">
            <input type="email" className="form-control" placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
        <textarea className="form-control" id='floatingTextarea2' placeholder="Leave a comment here" style={{height:'100px'}}></textarea>
        <label htmlFor="floatingTextarea2">Comments</label>
        </div>     
        <div className="text-center my-3">
            <div className="btn btn-success">submit</div>
            </div>              
                    </div>
            <div className="col-lg-6 p-3">
                <div className="container p-2">
                  <div className="my-4 d-flex  align-items-center">
                  <FiPhoneCall size={30} style={{color: 'green'}}/>
                  <h5 className='ms-3'>91+ 9306443566</h5>                  
                  </div>
                  <div className="my-4 d-flex  align-items-center">
                  <MdOutlineMail size={30} style={{color: 'yellow'}}/>
                  <h5 className='ms-3'>panchalpritam105@gmail.com</h5>                  
                  </div>
                  <div className="my-4 d-flex  align-items-center">
                  <MdLocationOn size={30} style={{color: 'red'}}/>
                  <h5 className='ms-3'>123 H.no Nahra-Sonipat, Haryana</h5>                  
                  </div>
                  <div className="mt-3 d-flex justify-content-center">
                    <Link to="https://www.facebook.com/pritam.dangi.127" target="_blank"><BiLogoFacebook className="im m-2" size={40} style={{color:'white'}}/></Link>
                    <Link to="https://www.linkedin.com/in/parmod-panchal/" target="_blank"><BiLogoLinkedin className="im m-2" size={40} style={{color:'white'}}/></Link>
                    <Link to="https://www.instagram.com/dashing_boy_077/" target="_blank" ><BiLogoInstagram className="im m-2" size={40} style={{color:'white'}}/></Link>
                    <Link to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/panchalpritam105%40gmail.com?compose=CllgCJqXxwnzLZFMwbhnvvclGpNbrFhthjwdxmdQDBLFwsMrKSwBLjWWRbdlnXRffzQzRDRSsVq" target="_blank"><BiLogoGmail className="im m-2" size={40} style={{color:'white'}}/></Link>
                   
                    </div>
                </div>
            </div>

        </div>
      </div>
      <p className='text-center bg-danger p-2'>Copyright@pritam.com</p>
    </div>
  )
}

export default ContactDetails
