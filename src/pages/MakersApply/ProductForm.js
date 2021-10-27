import React from 'react';
import styled from 'styled-components';
import { PRODUCT_FORM_LIST } from './data';

const ProductForm = ({ onProductFormClick, productForm }) => {
  return (
    <TourTypeWrapper>
      <Title>상품 형태</Title>
      <div>
        <ButtonWrapper>
          {PRODUCT_FORM_LIST.map(form => {
            return (
              <Button
                key={form.id}
                onClick={e => onProductFormClick(e)}
                productForm={productForm}
                from={form.form}
              >
                {form.form}
              </Button>
            );
          })}
        </ButtonWrapper>
      </div>
    </TourTypeWrapper>
  );
};

export default ProductForm;

const Title = styled.div`
  font-size: 1.2rem;
`;

const TourTypeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1024px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`;

const Button = styled.button`
  width: 158px;
  height: 50px;
  border: 1px solid #dddddd;
  font-size: 1rem;
  color: ${props => (props.productForm === props.from ? 'white' : 'gray')};
  background-color: ${props =>
    props.productForm === props.from ? 'black' : 'white'};
  cursor: pointer;
`;
