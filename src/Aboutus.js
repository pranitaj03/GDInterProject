import React from 'react'
import labimage from './img/gd_lab_testtube.png'
import diaimage from './img/diagno stic_needs.png'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

export default function Aboutus() {
  return (
    <div className='about_us_sec_background'>

      <div className="container py-5">
            <div className="row align-items-center">
              <h1 className='text-center'>About Us</h1>
              <hr/>
                <div className="col-lg-6 mt-5">
                <img src={labimage} alt='image1' className='img-fluid'/>
                </div>
                <div className="col-lg-6">
                    <div>
                        <h4>A growing network of State-of-the-Art laboratories</h4>
                        <p className="mb-0">
                            GD has a network of 14 National Laboratories and 5 International Laboratories which are all integrated through GD’s own Laboratory Information Management System to ensure seamless operations, uniform quality and minimal Turn Around Time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
