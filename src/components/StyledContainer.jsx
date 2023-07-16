import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  min-width: 320px;
  margin: 100px auto;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;
  gap: 10px;
  // border: 1px solid grey;
  border-radius: 10px;
  padding: 20px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;
