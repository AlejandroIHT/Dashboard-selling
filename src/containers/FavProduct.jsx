import React, { useState, useEffect } from 'react';
import '../styles/containers/FavProduct.css';
import { connect } from 'react-redux';
import * as favProductActions from '../actions/favProductActions';
import Table from '../components/Table';
import ButtonDelete from '../components/ButtonDelete';
import storage from '../libs/storage';
import ModalListProduct from './ModalListProduct';

const FavProduct = ({
  mainDataReducer,
  favProductReducer,
  fetchFavProductData,
}) => {
  const [data, setData] = useState([]);
  const [favData, setFavData] = useState([]);
  const [selectProduct, setSelectProduct] = useState('');
  const [modal, setModal] = useState(false);
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
      name: 'Category',
      selector: 'category',
      sortable: true,
      right: true,
    },
    {
      cell: (row) => (
        <ButtonDelete
          color="purple"
          title={row.id}
          handleClick={handleClickDeleteFavProduct}
        >
          <i className="fas fa-trash-alt" title={row.id}></i>
        </ButtonDelete>
      ),
      button: true,
    },
  ];

  useEffect(() => {
    const response = storage.instance.get('favProducts');
    if (response) {
      setData(response);
      return;
    }

    if (favProductReducer.data.productFav.length === 0) {
      fetchFavProductData();
      return;
    }
  }, []);
  
  useEffect(() => {
    if (favProductReducer.data.productFav.length !== 0 && data.length === 0) {
      setData(favProductReducer.data.productFav);
      storage.instance.post('favProducts', favProductReducer.data.productFav);
    }
  }, [favProductReducer.data.productFav]);

  useEffect(() => {
    const dataFav = mainDataReducer.mainData.product.slice();
    mainDataReducer.mainData.product.forEach((item, index) => {
      data.forEach((item2) => {
        if (item.name === item2.name) {
          dataFav.splice(dataFav.indexOf(item), 1);
        }
        return;
      });
      return;
    });
    setFavData(dataFav);
    return;
  }, [data]);

  const handleClickDeleteFavProduct = (e) => {
    const elements = data.filter((item) => item.id !== e.target.title);
    setData(elements);
    storage.instance.post('favProducts', elements);
  };

  const handleClickModal = () => setModal(!modal);

  const handleChangeSelectProduct = (e) => setSelectProduct(e.target.value);

  const handleClickAddFav = () => {
    const addProduct = data.slice();
    const product = mainDataReducer.mainData.product.filter(
      (item) => item.name === selectProduct
    );
    addProduct.push(product[0]);
    setData(addProduct);
    storage.instance.post('favProducts', addProduct);
    setSelectProduct('');
    setModal(!modal);
  };

  return (
    <>
      <div className="FavProduct">
        <div className="FavProduct__borderTop">
          <button
            onClick={handleClickModal}
            className="FavProduct__borderTop--addFav"
          >
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
      <ModalListProduct
        handleChange={handleChangeSelectProduct}
        handleClick={handleClickModal}
        handleClickAddFav={handleClickAddFav}
        isOpen={modal}
        data={favData}
        selectProduct={selectProduct}
      />
    </>
  );
};

const mapStateToProps = ({ mainDataReducer, favProductReducer }) => {
  return { mainDataReducer, favProductReducer };
};

export default connect(mapStateToProps, favProductActions)(FavProduct);
