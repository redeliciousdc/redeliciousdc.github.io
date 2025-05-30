import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  text-align: center;
`;

const Hero = styled(motion.section)`
  margin-bottom: 4rem;
`;

const Title = styled(motion.h1)`
  color: #e05263;
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const FeaturesGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const FeatureCard = styled(motion.div)`
  background-color: #fff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title>Transform Food Waste into Delicious Experiences</Title>
        <Description>
          ReDelicious is a queer-informed food lab co-op transforming food waste into delicious, 
          sustainable, and educational experiences. We host fermentation workshops, community feasts, 
          and mutual aid events throughout DC.
        </Description>
      </Hero>

      <FeaturesGrid>
        <FeatureCard
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FeatureIcon>🧪</FeatureIcon>
          <h2>Fermentation Workshops</h2>
          <p>Learn the art of fermentation through hands-on workshops. From koji to kombucha, discover the science and flavors of fermented foods.</p>
        </FeatureCard>

        <FeatureCard
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FeatureIcon>🥘</FeatureIcon>
          <h2>Community Feasts</h2>
          <p>Join our community dinners where we transform surplus ingredients into delicious meals, bringing people together through food.</p>
        </FeatureCard>

        <FeatureCard
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FeatureIcon>♻️</FeatureIcon>
          <h2>Sustainability</h2>
          <p>Learn about food waste reduction, sustainable cooking practices, and how to make the most of every ingredient.</p>
        </FeatureCard>
      </FeaturesGrid>
    </HomeContainer>
  );
};

export default Home; 