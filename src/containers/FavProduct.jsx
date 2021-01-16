import React, { useState } from 'react';
import '../styles/containers/FavProduct.css';
import Table from '../components/Table';
import ButtonDelete from '../components/ButtonDelete';

const FavProduct = () => {
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
    {
      cell: () => (
        <ButtonDelete color="purple">
          <i class="fas fa-trash-alt"></i>
        </ButtonDelete>
      ),
      button: true,
    },
  ];

  return (
    <div className="FavProduct">
      <div className="FavProduct__borderTop">
        <button className="FavProduct__borderTop--addFav">
          Añadir a favorito
        </button>
        <button className="FavProduct__borderTop--move">
          <i class="fas fa-grip-horizontal"></i>
        </button>
      </div>
      <div className="FavProduct__table">
        <Table title="Productos favoritos" data={data} columns={columns} />
      </div>
    </div>
  );
};

export default FavProduct;
