import React from 'react'

function Table({ tableItems, config }) {

    const renderedHeader = config.map((column) => (
        <th key={column.label}>{column.label}</th>
    ));



    const renderedItems = tableItems.map((rowData) => {

        const renderedCells = config.map((column) => {
            return <td className='p-3 text-start'>{column.render(rowData)}</td>
        });

        return (
            <tr className='border-b' key={rowData.name}>
                {renderedCells}
            </tr>
        )
    });

    return (
        <table className='table-auto border-spacing-2'>
            <thead>
                <tr className='border-b-2'>
                    {renderedHeader}
                </tr>
            </thead>

            <tbody>
                {renderedItems}
            </tbody>
        </table>
    )
}

export default Table