import React from 'react';

// bootstrap table 

function Table({ data }) {
    return (
        <div>
            <table style={{width: "100%"}}>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Gender
                    </th>
                    <th>
                        Email
                    </th>
                </tr>
                {data && data.results.map(user => 
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
