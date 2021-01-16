import React, { useState } from 'react';
import '../styles/containers/SellingInMonth.css';
import Table from '../components/Table';

const SellingInMonth = () => {
  const [data, setData] = useState([
    {
      id: '00',
      name: 'Jaime',
      lastName: 'Pedro',
      category: 'nerd',
    },
    {
      id: '01',
      name: 'Camilo',
      lastName: 'Pedro',
      category: 'nerd',
    },
    {
      id: '02',
      name: 'Jeferson',
      lastName: 'Pedro',
      category: 'nerd',
    },
    {
      id: '03',
      name: 'Mario',
      lastName: 'Pedro',
      category: 'nerd',
    },
    {
      id: '04',
      name: 'Alejandro',
      lastName: 'Pedro',
      category: 'nerd',
    },
    {
      id: '05',
      name: 'Erick',
      lastName: 'Pedro',
      category: 'nerd',
    },
    {
      id: '06',
      name: 'Maximiliano',
      lastName: 'Pedro',
      category: 'nerd',
    },
    {
      id: '07',
      name: 'Jeferson',
      lastName: 'Pedro',
      category: 'nerd',
    },
    {
      id: '08',
      name: 'Mario',
      lastName: 'Pedro',
      category: 'nerd',
    },
    {
      id: '09',
      name: 'Alejandro',
      lastName: 'Pedro',
      category: 'nerd',
    },
    {
      id: '10',
      name: 'Erick',
      lastName: 'Pedro',
      category: 'nerd',
    },
    {
      id: '11',
      name: 'Maximiliano',
      lastName: 'Pedro',
      category: 'nerd',
    },
  ]);
  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Last name',
      selector: 'lastName',
      sortable: true,
    },
    {
      name: 'Category',
      selector: 'category',
      sortable: true,
      right: true,
    },
  ];

  return (
    <div className="SellingInMonth">
      <div className="SellingInMonth__borderTop">
        <button className="SellingInMonth__borderTop--addFav">
          Añadir a favorito
        </button>
        <button className="SellingInMonth__borderTop--move">
          <i class="fas fa-grip-horizontal"></i>
        </button>
      </div>
      <div className="SellingInMonth__table">
        <Table title="Ventas mes actual" data={data} columns={columns} />
      </div>
    </div>
  );
};

export default SellingInMonth;
