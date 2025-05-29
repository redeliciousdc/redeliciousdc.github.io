import { Link, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const NavBar = styled.nav`
  background-color: #f8e1e9;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const NavItem = styled(motion.li)`
  a {
    color: #874356;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
    &:hover {
      color: #ff6b6b;
    }
  }
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Layout = () => {
  return (
    <div>
      <NavBar>
        <NavList>
          <NavItem whileHover={{ scale: 1.1 }}>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem whileHover={{ scale: 1.1 }}>
            <Link to="/calendar">Calendar</Link>
          </NavItem>
          <NavItem whileHover={{ scale: 1.1 }}>
            <Link to="/bios">Bios</Link>
          </NavItem>
        </NavList>
      </NavBar>
      <MainContent>
        <Outlet />
      </MainContent>
    </div>
  );
};

export default Layout; 