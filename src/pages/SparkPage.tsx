import React, { Component, useEffect } from 'react';
import './SparkPage.css';
import axios from "axios";
import PostButton from "components/TechSpark/postButton"
import Event from '../components/TechSpark/Event'
import Login from '../components/TechSpark/Login'
import SignIn from '../components/TechSpark/SignIn'
import PostCreation from '../components/TechSpark/PostCreation'
import Register from '../components/TechSpark/Register'
function Dashboard() {

        return(
    <div className="sparkPage">
    <body>
        
        <div className="sparkNavbarSpacing"/>

        <div className="sparkTitle">Tech Spark</div>

        <div className="sparkMissionStatement">
        TechStart has partnered with the Hunter Hub to create TechSpark where we believe that young entrepreneurs have great potential to create innovative products and solutions. Our goal is to help those seeking new opportunities or collaborators by providing a space for individuals to post their ideas, find out more about technolgy focused entrepreneurship events, and connect with like minded individuals looking for specific skill sets.
        </div>
        
       <div className="sparkContentPage">
           <div className="sparkContentTitle">Whats the latest?:</div>
           <div className="sparkGrid"></div>
        </div>
    </body>   
       <div className="sparkSpacing"/>
    <div className="sparkContentPage">
        <div className="sparkContentTitle">
            See what people are saying:
            <PostButton link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>
        </div>
        <div className="sparkGrid">
            
        </div>
    </div>
    </div>
    
    
     
      
        )
    }


export default Dashboard