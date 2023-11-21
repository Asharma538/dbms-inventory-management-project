import React, { useState , useEffect } from 'react'

export default function Technician() {
    const [details , setDetails] = useState([]);

    function fillData(){
        console.log(details[0]);
        var table = document.getElementById('vending-table');
        table.innerHTML = "";
        var table_row = document.createElement('tr');

        var col_names = [];
        
        for(var key in details[0]){
            if(key == "_id") continue;
            var td = document.createElement('td');
            td.innerHTML = key;
            table_row.appendChild(td);
            col_names.push(key);
        }
        table.appendChild(table_row);

        for(var i = 0 ; i<details.length ; i++){
            table_row = document.createElement('tr');
            for(var j = 0 ; j<col_names.length ; j ++){
                var td = document.createElement('td');
                td.innerHTML = details[i][col_names[j]];
                table_row.appendChild(td);
            }
            table.appendChild(table_row);
        }
    }

    useEffect(()=>{
        fillData();
    },[details])

    const get_details = () => {
        fetch('http://localhost:3000/technicians')
        .then(response => response.json())
        .then(response => setDetails(response.Details))
        .catch(err => {console.log(err)});
    }

    return (
        <div className='data-table'>
            <button onClick={get_details} className='right refresh'>
                Refresh
            </button>
            {/* {
                <pre>
                    {JSON.stringify(complaints[1])}
                </pre>
            } */}
            <br></br>
            <center>
                <table id='vending-table'>

                </table>
            </center>
        </div>
    )
}
