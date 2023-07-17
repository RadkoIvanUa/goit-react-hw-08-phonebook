import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const StyledUserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  p {
    margin: 0;
  }
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 22px;
  p {
    margin: 0;
  }
`;
