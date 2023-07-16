import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const StyledUserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  p {
    margin: 0;
  }
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &.active {
    color: white;
    font-weight: 700;
  }
`;