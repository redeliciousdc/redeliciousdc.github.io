import { Link, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const NavBar = styled.nav`
  background-color: #e05263;
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
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  overflow-x: hidden;
`;

const Header = styled.header`
  text-align: center;
  color: white;
  padding: 2rem 1rem;
  background-color: #e05263;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  background: #eee;
  width: 100%;
`;

const Layout = () => {
  return (
    <PageContainer>
      <Header>
        <Title>ReDelicious</Title>
        <Subtitle>DC's Food Lab Co-op</Subtitle>
        <NavBar>
          <NavList>
            <NavItem whileHover={{ scale: 1.05 }}>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem whileHover={{ scale: 1.05 }}>
              <Link to="/events">Events</Link>
            </NavItem>
            <NavItem whileHover={{ scale: 1.05 }}>
              <Link to="/join">Join Us</Link>
            </NavItem>
            <NavItem whileHover={{ scale: 1.05 }}>
              <Link to="/members">Members</Link>
            </NavItem>
          </NavList>
        </NavBar>
      </Header>
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer>
        <p>© 2024 ReDelicious Co-op</p>
      </Footer>
    </PageContainer>
  );
};

export default Layout; 