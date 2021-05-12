import React, { useState, useEffect } from 'react';

// bootstrap table 

function Table({ data }) {
    const [users, setUsers] = useState([]);
    const [nameSort, setNameSort] = useState(null);
    const [genderFilter, setGenderFilter] = useState(null);

    function compareAscending(a, b) {
        const userA = a.name.first.toUpperCase();
        const userB = b.name.first.toUpperCase();
      
        let comparison = 0;
        if (userA > userB) {
          comparison = 1;
        } else if (userA < userB) {
          comparison = -1;
        }
        return comparison;
    }

    function compareDescending(a, b) {
        const userA = a.name.first.toUpperCase();
        const userB = b.name.first.toUpperCase();
      
        let comparison = 0;
        if (userA < userB) {
          comparison = 1;
        } else if (userA > userB) {
          comparison = -1;
        }
        return comparison;
    }

    useEffect(() => {
        if (!data) { return }

        if (!nameSort) {
            setUsers(data.results);
        } else if (nameSort === "ascending") {
            setUsers([...users].sort(compareAscending))
        } else if (nameSort === "descending") {
            setUsers([...users].sort(compareDescending))
        }
    }, [nameSort]);

    useEffect(() => {
        if (data) {
            setUsers(data.results);
        }
    }, [data]);

    
    function handleNameSort() {
        if (!nameSort) {
            setNameSort("ascending");
        } else if (nameSort === "ascending") {
            setNameSort("descending");
        } else if (nameSort === "descending") {
            setNameSort(null)
        }
    }

    // gender filter
 
    useEffect(() => {
        if (!data) { return }

        if (!genderFilter) {
            setUsers(data.results);
        } else if (genderFilter === "female") {
            setUsers([...data.results].filter(user => user.gender === "female"))
        } else if (genderFilter === "male") {
            setUsers([...data.results].filter(user => user.gender === "male"))
        }
        console.log(genderFilter)
    }, [genderFilter]);

    useEffect(() => {
        if (data) {
            setUsers(data.results);
        }
    }, [data]);



    function filterGender() {
        if (!genderFilter) {
            setGenderFilter("female");
        } else if (genderFilter === "female") {
            setGenderFilter("male");
        } else if (genderFilter === "male") {
            setGenderFilter(null)
        }
    }
    return (
        <div>
            <p>*Click on "Name" to sort Alphabetically*</p>
            <button onClick={filterGender}>Filter Gender</button>
            <table style={{width: "100%"}}>
                <tr>
                    <th onClick={handleNameSort}>
                        Name
                    </th>
                    <th>
                        Gender
                    </th>
                    <th>
                        Email
                    </th>
                </tr>
                {users.map(user => 
                    <tr>
                        <td>
                            {user.name.first + " " + user.name.last}
                        </td>
                        <td>
                            {user.gender}
                        </td>
                        <td>
                            {user.email}
                        </td>
                    </tr>
                )}
            </table>
        </div>
    )
}

export default Table
