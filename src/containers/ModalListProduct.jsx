import React from 'react';
import '../styles/containers/ModalListProduct.css';
import Modal from '../components/Modal';

const ModalListProduct = ({ isOpen, data, selectProduct, handleChange, handleClick, handleClickAddFav }) => {
  return (
    <Modal isOpen={isOpen}>
      <h2 className="ModalListProduct__title">Productos</h2>
      <form>
        <select value={selectProduct} onChange={handleChange} class="form-select" aria-label="Default select example">
          <option selected>Selecciona el producto</option>
          {data.map((item) => (
            <option key={item.id} value={item.name}>{item.name}</option>
          ))}
        </select>
        <button onClick={handleClickAddFav} className="ModalListProduct__form__btn--send" type="button">
          Agregar
        </button>
        <button onClick={handleClick} className="ModalListProduct__form__btn--cancel" type="button">
          Atrás
        </button>
      </form>
    </Modal>
  );
};

export default ModalListProduct;
