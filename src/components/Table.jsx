import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import '../styles/components/DataTableFavProduct.css';

const Table = ({ title, columns, data, lenguage }) => {
  const paginationOptions = {
    rowsPerPageText: `${lenguage === "es" ? "Filas por página" : "Rows per page"}`,
    rangeSeparatorText: `${lenguage === "es" ? "de" : "from"}`,
    selectAllRowsItem: true,
    selectAllRowsItemText: `${lenguage === "es" ? "Todos" : "All"}`,
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
