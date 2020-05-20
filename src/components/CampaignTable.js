import React,{Component} from 'react';
import moment from 'moment';
import Popup from "reactjs-popup";
import DatePicker from "react-datepicker";
import CampaignItem from './CampaignItem';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import "./App.js";


class CampaignTable extends Component{
	constructor(props){
	    super(props);
	    this.state = {
	      campaigns : [],
	      filteredCampaigns : [],
	      newCreatedOn : '',
	      editing:false,
		  current : moment().startOf('day')
	    }
	    // mocki.io api is used to get the starting data
	    this.apiUrl ='https://api.mocki.io/v1/7db13b8a';
	    this.handleChange = this.handleChange.bind(this);
	    this.editCampaign = this.editCampaign.bind(this);
    };

    // get the data from api if not stored in local storage and then store in localstorage 
    // as soon as the component is mounted
    async componentDidMount(){
    const json = localStorage.getItem("campaigns");
    const campaigns = JSON.parse(json);
	    if (campaigns) {
	      this.setState(() => ({ campaigns }));
	    }else{
	    	const response = await axios.get(`${this.apiUrl}/campaigns`);
		    this.setState({
		      campaigns:response.data.data
		    });
		    const json = JSON.stringify(response.data.data);
            localStorage.setItem("campaigns", json);
	    }
    }

    // save the new selected campaign date in setstate
    async handleChange(date){
    	console.log("date",date);
	    this.setState({
	      newCreatedOn: date,
	      editing:true
	    });
       console.log(this.state.newCreatedOn);
    }

    // get the data from local storage and then save the changed date of that particular
    //campaign using local storage
    editCampaign(id){
    	const json = localStorage.getItem("campaigns");
        const campaigns = JSON.parse(json);
	    campaigns.forEach((campaign, index) => {
			if (campaign.id === id) {
				campaign.createdOn = this.state.newCreatedOn;
			}
        });
	    this.setState({
	      campaigns : campaigns,
	      editing : false,
	      newCreatedOn : ''
	    });
	    const setJson = JSON.stringify(campaigns);
        localStorage.setItem("campaigns", setJson);
        alert("Campaign has been rescheduled on the selected date.");
    }

    render(){
    // get the upcoming campaigns in upcoming  campaigns tab if datediffconversion > 0
    if(this.props.filterOption === "upcoming"){
	    this.state.filteredCampaigns = this.state.campaigns.filter((item)=>{
		 	let dateDiff = moment.duration(moment(item.createdOn,"YYYY-MM-DD").diff(this.state.current)).asDays();
	        let dateDiffConversion = Math.trunc(dateDiff);
	        return dateDiffConversion > 0
	    });
	}

	// get the live campaigns in live  campaigns tab if datediffconversion === 0
    if(this.props.filterOption === "live"){
	    this.state.filteredCampaigns = this.state.campaigns.filter((item)=>{
		 	let dateDiff = moment.duration(moment(item.createdOn,"YYYY-MM-DD").diff(this.state.current)).asDays();
	        let dateDiffConversion = Math.trunc(dateDiff);
	        return dateDiffConversion === 0
	    });
	}

	// get the upcoming campaigns in upcoming  campaigns tab if datediffconversion < 0
    if(this.props.filterOption === "past"){
	    this.state.filteredCampaigns = this.state.campaigns.filter((item)=>{
		 	let dateDiff = moment.duration(moment(item.createdOn,"YYYY-MM-DD").diff(this.state.current)).asDays();
	        let dateDiffConversion = Math.trunc(dateDiff);
	        return dateDiffConversion < 0
	    });
    }

    // get each campaighn item in the table using map function
	return(
	<table>
	    <thead>
	      <tr>
	        <th>DATE</th>
	        <th>CAMPAIGN</th>
	        <th>VIEW</th>
	        <th>ACTIONS</th>
	      </tr>
	    </thead>
	    <tbody>
	    {this.state.filteredCampaigns.map((item,index)=>{
        return <CampaignItem
        key={item.id}
        item = {item}
        handleChange={this.handleChange}
        editing={this.state.editing}
        newCreatedOn={this.state.newCreatedOn}
        editCampaign = {() => {this.editCampaign(item.id); }}
        />
	    })
	    }
	    </tbody>
	</table>  
    );
    }
};

export default CampaignTable;