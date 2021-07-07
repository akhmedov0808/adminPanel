import React from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import {useLoad} from "../hooks/request";
import {STUDENT_LIST} from "../urls";

export default function ReactExcel() {
    const studentList = useLoad({url: STUDENT_LIST})
    return (
        <div>
            <table
                className='table'
                id='emp-table'>
                <thead>
                <tr>
                    <th>Ism</th>
                    <th>Familiya</th>
                    <th>Otchestva</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Azizjon</td>
                    <td>Axmedov</td>
                    <td>Baxodirovich</td>
                </tr>
                </tbody>
            </table>
            <ReactHTMLTableToExcel
                className='button is-info'
                table='emp-table'
                filename='Emp Excel file'
                sheet='Sheet'
                buttonText='Export to Excel'/>
        </div>
    )
}
