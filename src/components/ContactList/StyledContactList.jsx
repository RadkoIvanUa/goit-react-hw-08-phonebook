import styled from 'styled-components';

export const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 800px;
  margin: 0 auto;

  button {
    display: block;
    padding: 10px;
    border: 2px solid transparent;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
    outline: none;
  }

  button:hover,
  button:focus {
    border: 2px solid red;
    cursor: pointer;
  }
`;

export const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  border-radius: 10px;
`;

export const transitionGroupStyle = {
  display: 'flex',
  flexDirection: 'column-reverse',
  maxWidth: 500,
  margin: '0 auto',
  textAlign: 'center',
  padding: 20,
  gap: 10,
};
