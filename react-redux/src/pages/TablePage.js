import Table from "../components/Table";

import React from 'react'

function TablePage() {

    const tableItems = [
        {name: 'Orange', color: 'bg-orange-500', score: 5},
        {name: 'Apple', color: 'bg-red-300', score: 4},
        {name: 'Banana', color: 'bg-yellow-500', score: 5},
        {name: 'Lime', color: 'bg-green-500', score: 4},

    ]

    const config =[
        {label: 'Name',
            render: (tableItems) => tableItems.name
        },
        {label: 'Color',
            render: (tableItems) => <div className={`p-3 m-2 ${tableItems.color}`}></div> 
        },
        {label: 'Score',
            render: (tableItems) => tableItems.score
        },
    ]
  return (
    <div>
        <Table tableItems={tableItems} config={config}/>
    </div>
  )
}

export default TablePage