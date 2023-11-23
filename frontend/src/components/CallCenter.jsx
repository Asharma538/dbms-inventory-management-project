import React, { useState,useEffect } from 'react'
import Nav from './Nav';

export default function CallCenter({doLogoutCC}) {
    const [complaints , setComplaints]= useState([]);

    function fillData(){
        var table =  document.getElementById('complaints-table');
        table.innerHTML = "";
        var table_row = document.createElement('tr');
        
        var col_names = [];

        for(var key in complaints[0]){
            if (key == '_id') continue;
            var table_row_d = document.createElement('td');
            table_row_d.innerHTML = key;
            table_row.appendChild(table_row_d);
            col_names.push(key);
        }
        table.appendChild(table_row);

        for(var i = 0 ; i<complaints.length ; i++){
            table_row = document.createElement('tr');
            
            for(var j = 0; j<col_names.length ; j++){
                var td = document.createElement('td');
                td.innerHTML = complaints[i][col_names[j]];
                table_row.appendChild(td);
                
            }
            table.appendChild(table_row);
        }

    }

    useEffect(()=>{
		fillData();
    },[complaints])
    
    const get_complaints = () => {
        fetch('http://localhost:3000/call_center')
        .then(response => response.json())
        .then(response => {
            setComplaints(response.Complaints);
        }).catch(err => {
            console.log(err);
        });
    }

    const doLogout = () => {
		doLogoutCC();
    }

    return (
        <div className='data-table'>
            <Nav doLogout={doLogout}/>
            <button onClick={get_complaints} className='right refresh'>
                Refresh
            </button>
            <br></br>
            <center>
                <table id='complaints-table'>

                </table>
            </center>
        </div>
    )
}
