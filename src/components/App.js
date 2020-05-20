import axios from 'axios';
import React,{Component} from 'react';
import CampaignTable from './CampaignTable';
// react-tabs library to make tabs
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from './Header';
import './App.css';
// i18-next to use translations
import { useTranslation } from 'react-i18next';

const App = () => {
    const { t, i18n } = useTranslation();
    function handleClick(lang){
      i18n.changeLanguage(lang);
    }

    // language selector using react-i18next
    return (
      <div className="App">
        <div className="lang-div">
          <label className="lang-label">Select Language :</label>
          <button style={{ marginTop: '10px',marginRight: '15px',color: '#069',cursor: 'pointer'}} onClick={() => handleClick('en')}>
            English
          </button>
          <button style={{color: '#069',cursor: 'pointer'}} onClick={() => handleClick('german')}>
            German
          </button>
        </div>
        <Header />
        <div className="container overflowx-auto">
        <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
        <h4 className="table-heading">Manage Campaigns</h4>
          <TabList>
            <Tab>{t('tabs.1')}</Tab>
            <Tab>{t('tabs.2')}</Tab>
            <Tab>{t('tabs.3')}</Tab>
          </TabList>
          <TabPanel>
            <CampaignTable filterOption="upcoming"/>
          </TabPanel>
          <TabPanel>
            <CampaignTable filterOption="live"/>
          </TabPanel>
          <TabPanel>
            <CampaignTable filterOption="past"/>
          </TabPanel>
        </Tabs>
        </div>
      </div>
    );
  }

export default App;