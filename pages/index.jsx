import React from "react";
import ReactDom from "react-dom/client";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import dynamic from "next/dynamic"
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/Mapas.module.scss'
import { useState } from "react";
const MyAwesomeMap = dynamic(() => import("../components/MapaShareLocation"), { ssr:false });
const Share=()=>{
    return(
        <>
            <div id="map">
                <MyAwesomeMap/>
            </div>       
        </>
    )
}
export default Share;