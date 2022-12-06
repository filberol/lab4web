import React from "react";
import "../styles/table.css"
import "../styles/glass.css"


function tableFromArray(hits) {
    if (hits === undefined) return (<tr></tr>)
    return (
        Array.from(hits).map((hit, index) =>
            <tr key={index}>
                <td>{hit.coords}</td>
                <td>{hit.time}</td>
                <td>{hit.exec}</td>
                <td>{hit.result}</td>
            </tr>
        )
    )
}

function Table(props) {
    return (
        <div className="glass">
            <table>
                <tbody>
                <tr>
                    <th colSpan="4" className="bordered">Результаты попаданий</th>
                </tr>
                <tr>
                    <td>Координаты</td>
                    <td>Время</td>
                    <td>Исполнение</td>
                    <td>Результат</td>
                </tr>
                {
                    tableFromArray(props.hits)
                }
                </tbody>
            </table>
        </div>
    )
}

export default Table