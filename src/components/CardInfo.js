import React from 'react';

export const CardInfo = (props) => (
    <div className="row card-info">
        <div className="col-lg-2 col-md-2 col-sm-2">
            <p>Speak out. Be heard.</p>
            <p style={{ fontSize:30, marginTop:-20 }}>Be counted</p> 
        </div>
        <div style={{marginTop:10}} className="col-lg-9 col-md-9 col-sm-9">
            <p>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It´s easy. You share opinion, we analyze and put the data in a public report.</p>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1">
            <i onClick={() => props.action()} className="fas fa-window-close"></i>
        </div>
    </div>
);
