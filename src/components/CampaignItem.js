import React from 'react';
// moment library to do date calculations
import moment from 'moment';
import Popup from "reactjs-popup";
// library to select date when user wants to change date of campaign
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const CampaignItem = (props) => {
	// get current date using moment.js to compare status of campaign
	let current = moment().startOf('day');
	// calculate the diff in days from current date if in past will multiply by -1
	let dateDiff = moment.duration(moment(props.item.createdOn,"YYYY-MM-DD").diff(current)).asDays();
	// convert diff in days to whole number value 
	let dateDiffConversion = Math.trunc(dateDiff);
	return(
		  <tr>
		    <td className="display-grid">
		      <span className="fw-500 fs-14 heading-color">{moment(props.item.createdOn).format("MMM YYYY,Do")}</span>
		      <span className="fs-12 fs-italic sub-heading-color">
		        {dateDiff > 0 &&  `${dateDiffConversion} days ahead`}
		        {dateDiff < 0 &&  `${dateDiffConversion*-1} days ago`}
		        {dateDiff === 0 &&  "live"}
		      </span>
		    </td>
		    <td>
		      <div className="display-flex">
		        <img className="games-image" src={`${process.env.PUBLIC_URL}/${props.item.image_url}`}/>
		        <span className="display-grid pl-18">
		          <span className="fw-500 fs-14 heading-color">{props.item.name}</span>
		          <span className="fs-12 fs-italic sub-heading-color">{props.item.region}</span>
		        </span>
		      </div>
		    </td>
		    <td>
		      <div>
		         <img className="pricing-image" src={`${process.env.PUBLIC_URL}/assets/Price.png`}/>
		         <Popup  style={{width:'20%'}} trigger={<button className="ml-12 heading-color fs-12"> View Pricing</button>} position="right center" modal>
                 	{close => (
                 	<div>
                 		<div>
                 			<img className="popup-image" src={`${process.env.PUBLIC_URL}/${props.item.image_url}`}/>
                 			<div className="position-relative ml-28percent">
	                 			<p className="fw-500 fs-14 heading-color position-absolute bottom-0 left-8">{props.item.name}</p>
			                    <span className="fs-12 fs-italic sub-heading-color position-absolute bottom-0 left-8">{props.item.region}</span>
                 			</div>
                 		</div>
                 		<h5 className="mb-10 mt-24 heading-color">Pricing</h5>
             			{props.item.pricing.map((item)=>{
					    return(
						    <div className="mb-20">
						    	<span className="sub-heading-color">{item.name}</span>
						    	<span className="heading-color fw-500 mr-20 float-right">$ {item.price}</span> 
						    </div>
					    );
						})}
						<div className="text-center">
							<button className="button button-primary" onClick={() => {close()}}>
					        Close
					        </button>
				        </div>
                 	</div>
                 	)}
  				 </Popup>
		      </div>
		    </td>
		    <td>
			    <div className="display-flex">
				    <div>
				      <img className="actions-image" src={`${process.env.PUBLIC_URL}/assets/file.png`}/>
				      <span className="ml-10 heading-color fs-12">CSV</span>
				    </div>
				    <div className="ml-20">
				      <img className="actions-image ml-18" src={`${process.env.PUBLIC_URL}/assets/statistics-report.png`}/>
				      <span className="ml-10 heading-color fs-12">Report</span>
				    </div>
				    <div> 
				      <img className="actions-image ml-18" src={`${process.env.PUBLIC_URL}/assets/calendar.png`}/>
				      	<Popup  style={{width:'20%'}} trigger={<button className="ml-12 heading-color fs-12">Schedule Again</button>} position="right center" modal>
						{close => (
							<div>	
								<h6 className="text-center heading-color reshedule-campaign">Reschedule Campaign</h6>
								<div className="text-center">
								<DatePicker selected={props.editing ? Date.parse(props.newCreatedOn) : Date.parse(props.item.createdOn)} onChange={props.handleChange} inline/>
								</div>
								<div className="text-center">
									<button className="button button-primary save-schedule-date" onClick={props.editCampaign} onSelect={() => {close()}}>
							        Save
							        </button>
						        </div>
					        </div>
				        )}
		  			  </Popup>
		  			</div>
		  		</div>
		    </td>
		  </tr>
	);
};

export default CampaignItem;