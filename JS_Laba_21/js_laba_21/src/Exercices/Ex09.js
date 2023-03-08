import React, { useState } from "react";

function Ex09(props) {
    const [employees] = useState(
        [
            { id: 1, firstName: 'Meg',     lastName: 'Thomas',     salary: 1220 },
            { id: 2, firstName: 'Bob',     lastName: 'Marly',      salary: 970 },
            { id: 3, firstName: 'John',    lastName: 'Snow',       salary: 540 },
            { id: 4, firstName: 'Sam',     lastName: 'Dicson',     salary: 1170 },
            { id: 5, firstName: 'Karl',    lastName: 'Grimes',     salary: 810 },
            { id: 6, firstName: 'Nea',     lastName: 'Karlson',    salary: 490 },
            { id: 7, firstName: 'Kate',    lastName: 'Denson',     salary: 6630 },
            { id: 8, firstName: 'Abraham', lastName: 'Linkoln',    salary: 1660 },
            { id: 1, firstName: 'Feng',    lastName: 'Men',        salary: 190 },
        ]
    ); 


    const sortByFirstName = () => {

        setTable(employees
            .sort(( a, b ) => {
                if (a.firstName < b.firstName) return -1;
                else if (a.firstName > b.firstName) return 1;
                else return 0;
            })
            .map(employee =>
                <tr>
                    <td>{ employee.firstName }</td>
                    <td>{ employee.lastName }</td>
                    <td>{ employee.salary }</td>
                </tr>
            )
        );
    }
    
    const sortByLastName = () => {
        
        setTable(employees
            .sort(( a, b ) => {
                if (a.lastName < b.lastName) return -1;
                else if (a.lastName > b.lastName) return 1;
                else return 0;
            })
            .map(employee =>
                <tr>
                    <td>{ employee.firstName }</td>
                    <td>{ employee.lastName }</td>
                    <td>{ employee.salary }</td>
                </tr>
            )
        );
    }
    
    const sortBySalary = () => {
        
        setTable(employees
            .sort(( a, b ) => {
                if (a.salary < b.salary) return 1;
                else if (a.salary > b.salary) return -1;
                else return 0;
            })
            .map(employee =>
                <tr>
                    <td>{ employee.firstName }</td>
                    <td>{ employee.lastName }</td>
                    <td>{ employee.salary }</td>
                </tr>
            )
        );
    }

    const [table, setTable] = useState(employees.map(employee => 
            <tr>
                <td>{ employee.firstName }</td>
                <td>{ employee.lastName }</td>
                <td>{ employee.salary }</td>
            </tr>
        ));

    return(
        <div>
            <table border="1">
                <tr>
                    <th
                        style={{ cursor: "pointer"}}
                        onClick={ () => sortByFirstName() } 
                    >First Name</th>
                    <th
                        style={{ cursor: "pointer"}}
                        onClick={ () => sortByLastName() }
                    >Last Name</th>
                    <th
                        style={{ cursor: "pointer"}}
                        onClick={ () => sortBySalary() }
                    >Salary</th>
                </tr>
                {table}
            </table>
        </div>
    );
}

export default Ex09;