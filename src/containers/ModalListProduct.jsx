import React from 'react';
import '../styles/containers/ModalListProduct.css';
import Modal from '../components/Modal';

const ModalListProduct = ({
  isOpen,
  data,
  selectProduct,
  handleChange,
  handleClick,
  handleClickAddFav,
  lenguage,
}) => {
  return (
    <Modal isOpen={isOpen}>
      <h2 className="ModalListProduct__title">
        {lenguage === 'es' && 'Productos'}
        {lenguage === 'en' && 'Products'}
      </h2>
      <form>
        <select
          value={selectProduct}
          onChange={handleChange}
          class="form-select"
          aria-label="Default select example"
        >
          <option selected>
            {lenguage === 'es' && 'Selecciona el producto'}
            {lenguage === 'en' && 'Select a product'}
          </option>
          {data.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleClickAddFav}
          className="ModalListProduct__form__btn--send"
          type="button"
        >
          {lenguage === 'es' && 'Agregar'}
          {lenguage === 'en' && 'Add'}
        </button>
        <button
          onClick={handleClick}
          className="ModalListProduct__form__btn--cancel"
          type="button"
        >
          {lenguage === 'es' && 'Atrás'}
          {lenguage === 'en' && 'Back'}
        </button>
      </form>
    </Modal>
  );
};

export default ModalListProduct;
