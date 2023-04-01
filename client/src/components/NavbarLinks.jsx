import React from 'react';
import styled from '@emotion/styled';

function NavLink({ title, page, link = '/' }) {
  return (
    <StyledNavLink
      href={link}
      style={{
        color: title === page ? '#bfab25' : '',
      }}
    >
      {title}
    </StyledNavLink>
  );
}

const StyledNavLink = styled.a`
  margin: 0 25px 0 25px;
  text-decoration: none;
  font-size: 0.85rem;
  color: #ffffff;

  &:hover {
    color: #bfab25;
  }
`;

export default NavLink;
