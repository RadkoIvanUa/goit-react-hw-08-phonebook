import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 10px;
  &.active {
    color: #1976d2;
  }
`;

export const AuthNavContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
`;
