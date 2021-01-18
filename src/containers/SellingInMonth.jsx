import React, { useState, useEffect } from 'react';
import '../styles/containers/SellingInMonth.css';
import { connect } from 'react-redux';
import Table from '../components/Table';
import Search from '../components/Search';
import * as salesNowActions from '../actions/salesNowActions';

const SellingInMonth = ({ salesNowReducer, fetchSalesNowData, lenguage }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const columns = [
    {
      name: 'Id',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Sale',
      selector: 'salesNow',
      sortable: true,
      right: true,
    },
  ];

  /** Sales now data request */
  useEffect(() => {
    if (salesNowReducer.data.products.length === 0) {
      fetchSalesNowData();
      return;
    }
  }, []);

  /** Add data in search state */
  useEffect(() => {
    setData(salesNowReducer.data.products);
    if (search.length === 0) setSearch(salesNowReducer.data.products);
  }, [salesNowReducer.data.products]);

  /** Search function */
  const handleChangeSearch = (e) => {
    setSearchInput(e.target.value);
    const match = data.filter((item) => {
      return item.name.toUpperCase().includes(e.target.value.toUpperCase());
    });
    setSearch(match);
  };

  return (
    <div className="SellingInMonth">
      <div className="SellingInMonth__borderTop">
        <Search
          placeholder={lenguage === 'es' ? 'Producto...' : 'Product...'}
          handleChange={handleChangeSearch}
          value={searchInput}
        />
        <button className="SellingInMonth__borderTop--move">
          <i class="fas fa-grip-horizontal"></i>
        </button>
      </div>
      <div className="SellingInMonth__table">
        <Table
          title={
            lenguage === 'es' ? 'Ventas mes actual' : 'Current month sales'
          }
          data={search}
          columns={columns}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ salesNowReducer }) => {
  return { salesNowReducer };
};

export default connect(mapStateToProps, salesNowActions)(SellingInMonth);
