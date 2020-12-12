import React from 'react';
import {Application, Router, Get, Post} from '@restjs/core';
import MainController from "./controllers/MainController";
import TranslationFilter from "./filters/TranslationFilter";

const app : React.ReactElement = (
    <Application
        onListen={()=>{
            console.log('Rest-JS app is running on : http://localhost:3000');
        }}
    >
        <Router
            path="/"
            controller={MainController}
            filters={[TranslationFilter]}
        >
            <Get path="/" handle="index"/>
            <Get path="/about-us" handle="deletedPage"/>

        </Router>
    </Application>
)

Application.run(app);
