import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import '../styles/components/DataTableFavProduct.css';

const Table = ({ title, columns, data }) => {
  const paginationOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  return (
    <div className="table-responsive">
      <DataTable
        title={title}
        columns={columns}
        data={data}
        pagination
        paginationComponentOptions={paginationOptions}
        fixedHeader
        fixedHeaderScrollHeight="200px"
      />
    </div>
  );
};

export default Table;
