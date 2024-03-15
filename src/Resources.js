import React from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddHomeIcon from '@mui/icons-material/AddHome';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';

export default function Resources() {
  return (
    <div>
      <div className='about_us_sec_background'>

        <div className="container py-5">
            <div className="row align-items-center">
                <h1 className='text-center'>Resources</h1>
                <hr/>
                
                <div className="col-md-6 offset-md-3">
                    <div>
                        <h4>A growing network of State-of-the-Art laboratories</h4>
                        <p className="mb-0">
                            GD has a network of 14 National Laboratories and 5 International Laboratories which are all integrated through GD’s own Laboratory Information Management System to ensure seamless operations, uniform quality and minimal Turn Around Time.
                        </p>
                    </div>
                </div>
            </div>

            <div className='row mt-5 gd_info'>
                <h4 className='text-center'>Below are the Material Icons</h4>
                
                <div className='text-center'>
                    <AccessAlarmIcon/>
                    <AddBoxIcon/>
                    <AddHomeIcon/>
                    <AlarmOnIcon/>
                    <AddPhotoAlternateIcon/>
                    <CallMissedOutgoingIcon/>

                </div>
                
            </div>

        </div>




</div>
    </div>
  )
}
