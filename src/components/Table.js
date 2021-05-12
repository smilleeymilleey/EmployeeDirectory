import React, { useState, useEffect } from 'react';

// bootstrap table 

function Table({ data }) {
    const [users, setUsers] = useState([]);
    const [nameSort, setNameSort] = useState(null);

    // nameSort
    // null = not sorted
    // ascending
    // descending
    useEffect(() => {
        console.log("nameSort changed: ", nameSort);
        
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

    return (
        <div>
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
