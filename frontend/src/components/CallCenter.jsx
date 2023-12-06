import React, { useState,useEffect } from 'react'
import Nav from './Nav';

export default function CallCenter({doLogoutCC}) {

    const doLogout = () => { // for logging user out
		doLogoutCC();
    }


    const temp = (arg) => {
        console.log(arg);
        if(window.confirm(`Are you sure that the complaint is resolved?`)){
            fetch("http://localhost:3000/delete_complaint" , {
                method : "POST",
                headers : {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(
                    {
                        complaintID : arg,
                    }
                )
            })
            .then((res) => res.json())
            .then((data) => {
                alert(data.data);
                get_data();
            })
        }
        else{

        }

    }

    // -------------------------------------------------------------------------
    // data section code                                                // START
    
    const [data , setData]= useState([]);                               // for table data
    const [options,setOptions] = useState([]);                          // for search options

    
    function fillData(){                                                // for filling data

        var table =  document.getElementById('complaints-table');       // use id of page's table
        table.innerHTML = "";

        if (data.length==0){
            var table_row = document.createElement('tr');
            var table_row_d = document.createElement('td');
            table_row_d.innerHTML = "Please refresh to see data";
            table_row.appendChild(table_row_d);
            table.appendChild(table_row);
            return;
        }
        if ("No Results" in data[0]){
            var table_row = document.createElement('tr');
            var table_row_d = document.createElement('td');
            table_row_d.innerHTML = "No data was found corresponding to the search";
            table_row.appendChild(table_row_d);
            table.appendChild(table_row);
            return;
        }
        
        var col_names = [];
        var table_row = document.createElement('tr');
        
        for(var key in data[0]){
            if (key == '_id') continue;
            var table_row_d = document.createElement('td');
            table_row_d.innerHTML = key;
            table_row.appendChild(table_row_d);
            col_names.push(key);
        }

        setOptions(col_names);
        
        var table_row_d = document.createElement('td');
        table_row_d.innerHTML = 'Status';
        table_row.appendChild(table_row_d);

        table_row.classList.add('tr-head');
        table.appendChild(table_row);
        
        col_names.push('Status');
        for(var i = 0 ; i<data.length ; i++){

            table_row = document.createElement('tr');
            for(var j = 0; j<col_names.length ; j++){
                if(col_names[j] == 'Status'){
                    var td = document.createElement('td');
                    var button = document.createElement('button');
                    button.innerHTML = 'Resolve';

                    const id_doc = data[i]._id;
                    button.onclick=(()=>{temp(id_doc);})
                    td.appendChild(button);
                    table_row.appendChild(td);
                    continue;
                }
                
                var td = document.createElement('td');
                td.innerHTML = data[i][col_names[j]];
                table_row.appendChild(td);
            }
            table.appendChild(table_row);
        }
    }


    useEffect(()=>{                                                     // for refreshing the table as the data gets updated
		fillData();
    },[data])
    

    const get_data = () => {                                            // for getting data from database
        fetch('http://localhost:3000/call_center')
        .then(response => response.json())
        .then(response => {
            setData(response.Complaints);
        }).catch(err => {
            console.log(err);
        });
    }
    
    // data section code                                                // END
    // -----------------------------------------------------------------------


    // -------------------------------------------------------------------------
    // search and dropdown code                                         // START

    const [searchText,setSearchText] = useState('');                    // for search


    const handleSearchChange = (v) => {                                 // for search text
      setSearchText(v.target.value);
    }


    const [isOpen, setIsOpen] = useState(false);                        // for dropdown
    const [selectedOption, setSelectedOption] = useState(null);         // for selected option


    const handleSelect = (option) => {                                  // for handling the selections
      setSelectedOption(option);
    };


    const handleDropdown = () => {                                      // for opening dropdowns
      setIsOpen((isOpen) => !isOpen);
    }


    const find = () => {                                                // search function
        if (searchText=='' && selectedOption==null){
            alert('Please enter some text and select a field to search');
        }
        else if (searchText==''){
            alert('Please enter some text to search');
        }
        else if (selectedOption==null){
            alert('Please select a field to search from');
        }
        else{
            fetch('http://localhost:3000/call_center_search',{
                method : 'POST',
                headers: {
                  'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                  'attribute': selectedOption,
                  'search_text':searchText
                }),
            })
            .then(response => response.json())
            .then(response => {
                if (response.Results.length==0){
                    setData([{"No Results":"No data corresponding to search was found"}]);
                }
                else{
                    setData(response.Results);
                }
            }).catch(err => {
                console.log(err);
            });
        }
    }
    
    // search and dropdown code                                         // END
    // -----------------------------------------------------------------------

    return (
        <div className='data-table'>
            <Nav doLogout={doLogout}/>
            {
                (options.length==0) ? 
                <p></p>
                :
                <>
                    <input type="text"
                        className='search-input'
                        onChange={handleSearchChange}
                        value={searchText}
                        placeholder=' Search'
                    />
                    <button onClick={find} className='find-button'> &#128269; </button>
                    <button onClick={handleDropdown} className='dropdown'>
                        <div>&#x25BC;&nbsp;&nbsp;&nbsp;&nbsp;{selectedOption || "Select a field"}</div>
                        {isOpen && (
                        <ul>
                            {options.map((option) => (
                            <li key={option} className='option-field' onClick={() => handleSelect(option)}>
                                {option}
                            </li>
                            ))}
                        </ul>
                        )}
                    </button>
                </>
            }
            <button onClick={get_data} className='right refresh'>   Refresh   </button>
            <center>
                <table id='complaints-table'></table>
            </center>
        </div>
    )
}
