import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const BiosContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  color: #874356;
  text-align: center;
  margin-bottom: 3rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const BioCard = styled(motion.div)`
  background-color: #faf0f3;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #ff6b6b;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;

const Name = styled.h2`
  color: #874356;
  margin: 1rem 0;
`;

const Role = styled.h3`
  color: #ff6b6b;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const Bios = () => {
  const team = [
    {
      name: "Alice Wonder",
      role: "Mushroom Expert",
      bio: "Leading mycologist with 10 years of experience in fungi research.",
      emoji: "🍄"
    },
    {
      name: "Bob Forest",
      role: "Foraging Guide",
      bio: "Professional forager and wilderness expert. Knows all the best mushroom spots!",
      emoji: "🌲"
    },
    {
      name: "Carol Nature",
      role: "Workshop Coordinator",
      bio: "Organizes our amazing mushroom workshops and educational events.",
      emoji: "📚"
    }
  ];

  return (
    <BiosContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Meet Our Fungi Friends 🍄
      </Title>

      <TeamGrid>
        {team.map((member, index) => (
          <BioCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <Avatar>{member.emoji}</Avatar>
            <Name>{member.name}</Name>
            <Role>{member.role}</Role>
            <p>{member.bio}</p>
          </BioCard>
        ))}
      </TeamGrid>
    </BiosContainer>
  );
};

export default Bios; 