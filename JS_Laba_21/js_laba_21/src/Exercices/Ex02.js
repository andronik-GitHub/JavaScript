import React, { useState } from 'react';

function Ex02(props)  {

    // Масив працівників
    const [employees] = useState(
        [
            { firstName: 'Meg',     lastName: 'Thomas',     salary: 1220,   totalSalary: true },
            { firstName: 'Bob',     lastName: 'Marly',      salary: 970,    totalSalary: true },
            { firstName: 'John',    lastName: 'Snow',       salary: 540,    totalSalary: true },
            { firstName: 'Sam',     lastName: 'Dicson',     salary: 1170,   totalSalary: true },
            { firstName: 'Karl',    lastName: 'Grimes',     salary: 810,    totalSalary: true },
            { firstName: 'Nea',     lastName: 'Karlson',    salary: 490,    totalSalary: true },
            { firstName: 'Kate',    lastName: 'Denson',     salary: 6630,   totalSalary: true },
            { firstName: 'Abraham', lastName: 'Linkoln',    salary: 1660,   totalSalary: true },
            { firstName: 'Dean',    lastName: 'Winchester', salary: 810,    totalSalary: true },
            { firstName: 'Feng',    lastName: 'Men',        salary: 190,    totalSalary: true },
        ]
    ); 

    let resultTotal = 0; // для вирахування початкової загальної зп
    employees.map(employee => resultTotal += employee.salary) // вираховування

    const [totalSalary, setTotalSalary] = useState(resultTotal); // створення хука
    
    function changeTotalSalary(event) {
        let fullName = (event.target.id + "").split(' ');

        if (!event.target.checked) {
            employees.forEach(emp => {
                if (emp.firstName + ' ' + emp.lastName === fullName.join(' ')) {
                    emp.totalSalary = false;
                    setTotalSalary(totalSalary - emp.salary);
                }
            });
        }
        else {
            employees.forEach(emp => {
                if (emp.firstName + ' ' + emp.lastName === fullName.join(' ')) {
                    emp.totalSalary = true;
                    setTotalSalary(totalSalary + emp.salary);
                }
            });
        }
    }

    const table = employees.map(employee => {

        return (
            <tr>
                <td>{ employee.firstName }</td>
                <td>{ employee.lastName }</td>
                <td>{ employee.salary }</td>
                <td>
                    <label>
                        <input
                            id={ employee.firstName + " " + employee.lastName}
                            type="checkbox"
                            defaultChecked
                            onClick={ changeTotalSalary }
                        />Include
                    </label>
                </td>
            </tr>
        );
    });

    return(
        <div>
            <table border='1'>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Salary</th>
                    <th>Total salary</th>
                </tr>
                { table }
            </table>
            <p>Total salary: { totalSalary }</p>
        </div>
    );
}

export default Ex02;