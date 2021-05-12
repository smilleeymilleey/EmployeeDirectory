import React, { useState, useEffect } from 'react';

// bootstrap table 

function Table({ data }) {
    const [users, setUsers] = useState([]);
    const [nameSort, setNameSort] = useState(null);

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
