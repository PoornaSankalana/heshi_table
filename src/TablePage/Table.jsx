import React from 'react';
import { MDBDataTable } from 'mdbreact';
import './table.css';

const Table = () => {
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Office',
        field: 'office',
        width: 200
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'asc',
      },
      {
        label: 'Salary',
        field: 'salary',
        sort: 'asc',
      }
    ],
    rows: [
      {
        name: 'Tiger Nixon',
        position: 'System Architect',
        office: 'Edinburgh',
        age: '61',
        date: '2011/04/25',
        salary: '$320'
      },
      {
        name: 'Garrett Winters',
        position: 'Accountant',
        office: 'Tokyo',
        age: '63',
        date: '2011/07/25',
        salary: '$170'
      },
    ]
  };

  return (
      <div className='container'>
          <MDBDataTable
            hover
            bordered
            sortable={true}
            noBottomColumns={true}
            paging={false}
            searching={false}
            data={data}
          />
        </div>
  );
}

export default Table;