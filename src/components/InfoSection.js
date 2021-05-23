import React from 'react';
import InfoCard from './InfoCard';
import './InfoSection.css';


function InfoSection() {
  return (
      <div className='info-section'>
        <div className='container'>
          <div className='row info-row'>
          <div className='col'>
              <div className='info-text-wrapper'>
                <h2 className='heading'>
                What’s different about Manage?
                </h2>
                <p className='info-subtitle'>
                Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.                 </p>
              </div>
            </div>
          <div className='col'>
              <div className="info-card">
                <InfoCard
                  number='01' 
                  title='Track company-wide progress'
                  body='See how your day-to-day tasks fit into the wider vision. Go from tracking aprogress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'/>
                  <InfoCard
                  number='02' 
                  title='Advanced built-in reports'
                  body='Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.'/>
                  <InfoCard
                  number='03' 
                  title='Everything you need in one place'
                  body='Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.'/>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
  );
}

export default InfoSection;