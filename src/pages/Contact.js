import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { IoHomeOutline } from "react-icons/io5";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import Container from '../components/Container';


const Contact = () => {
  return (
   <>

    <Meta title={"Contact Us"}/>
    <BreadCrumb title="Contact Us" />
    <Container class1='contact-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27229.75872244476!2d74.28761824462252!3d31.44937890172973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919014ca50af181%3A0x6630f48affe03d5d!2sTownship%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1707827267698!5m2!1sen!2s"
          width="600"
          height="450"
          className='border-0 w-100'
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          >
          </iframe>
          </div>
          <div className='col-12 mt-5' >
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div>
                <h3 className='contact-title mb-4'>Contact</h3>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <input type="text" className='form-control' 
                    placeholder='Name'/>
                  </div>
                  <div>
                    <input type="email" className='form-control'
                    placeholder='Email'/>
                  </div>
                  <div>
                    <input type="tel" className='form-control'
                    placeholder='Mobile Number'/>
                  </div>
                  <div>
                   <textarea 
                   name="" 
                   id=''
                   className='w-100 form-control'
                    cols="30"
                    rows='4'
                    placeholder='Comments'
                   ></textarea>
                  </div>
                  <div>
                    <button className='button border-0' >Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className='contact-title mb-4'>Get in touch with us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 Align-items-center'>
                      <IoHomeOutline className='fs-5' />
                      <address className='mb-0'>
                      9 Commercial, Near Rehmat Eye Hospital, Sector A1, Township, Lahore
                      </address>
                      </li>
                    <li className='mb-3 d-flex gap-15 Align-items-center'>
                      <BiPhoneCall className='fs-5'/>
                      <a href="tel:+92 3001326512">+92 3001326512</a>
                      </li>
                    <li className='mb-3 d-flex gap-15 Align-items-center'>
                      <AiOutlineMail className='fs-5'/>
                      <a href="mailto:ah4807325@gmail.com">ah4807325@gmail.com</a>
                      </li>
                    <li className='mb-3 d-flex gap-15 Align-items-center'>
                      <BiInfoCircle className='fs-5'/>
                      <p className='mb-0'>Monday - Friday 10 AM - 8 PM </p>
                      </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
   </>
  )
};

export default Contact
