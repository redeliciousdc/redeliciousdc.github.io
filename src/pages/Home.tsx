import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  text-align: center;
`;

const Title = styled(motion.h1)`
  color: #874356;
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const MushroomSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const MushroomCard = styled(motion.div)`
  background-color: #faf0f3;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to the Magical Mushroom Kingdom! 🍄
      </Title>
      
      <p>Discover the wonderful world of fungi with us!</p>
      
      <MushroomSection>
        <MushroomCard
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h2>Upcoming Events</h2>
          <p>Join us for mushroom foraging, workshops, and more!</p>
        </MushroomCard>
        
        <MushroomCard
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h2>Meet Our Team</h2>
          <p>Get to know our passionate fungi enthusiasts!</p>
        </MushroomCard>
        
        <MushroomCard
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h2>Latest News</h2>
          <p>Stay updated with the latest mushroom discoveries!</p>
        </MushroomCard>
      </MushroomSection>
    </HomeContainer>
  );
};

export default Home; 