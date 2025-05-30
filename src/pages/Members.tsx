import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const MembersContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  color: #e05263;
  text-align: center;
  margin-bottom: 3rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const MemberCard = styled(motion.div)`
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #e05263;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;

const Name = styled.h2`
  color: #e05263;
  margin: 1rem 0;
`;

const Role = styled.h3`
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const Members = () => {
  const team = [
    {
      name: "Casey R.",
      role: "Fermentation Specialist",
      bio: "Fermentation specialist and co-op co-founder. Loves koji and community feasts.",
      emoji: "🧪"
    },
    {
      name: "Alex J.",
      role: "Designer & Food Waste Advocate",
      bio: "Designer and food waste advocate. Leads vinegar and kraut workshops.",
      emoji: "♻️"
    }
  ];

  return (
    <MembersContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Meet Our Team
      </Title>

      <TeamGrid>
        {team.map((member, index) => (
          <MemberCard
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
          </MemberCard>
        ))}
      </TeamGrid>
    </MembersContainer>
  );
};

export default Members; 