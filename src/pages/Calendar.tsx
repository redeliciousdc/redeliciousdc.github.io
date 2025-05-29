import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const CalendarContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  color: #874356;
  text-align: center;
  margin-bottom: 2rem;
`;

const EventList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const EventCard = styled(motion.div)`
  background-color: #faf0f3;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const EventDate = styled.div`
  color: #ff6b6b;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const EventTitle = styled.h3`
  color: #874356;
  margin: 0 0 0.5rem 0;
`;

const Calendar = () => {
  const events = [
    {
      date: "April 15, 2024",
      title: "Spring Mushroom Foraging Workshop",
      description: "Learn to identify and safely forage spring mushrooms!"
    },
    {
      date: "May 1, 2024",
      title: "Mushroom Photography Session",
      description: "Capture the beauty of fungi through your lens."
    },
    {
      date: "May 20, 2024",
      title: "Cooking with Wild Mushrooms",
      description: "A hands-on cooking class featuring seasonal wild mushrooms."
    }
  ];

  return (
    <CalendarContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Upcoming Mushroom Events 🗓️
      </Title>

      <EventList>
        {events.map((event, index) => (
          <EventCard
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <EventDate>{event.date}</EventDate>
            <EventTitle>{event.title}</EventTitle>
            <p>{event.description}</p>
          </EventCard>
        ))}
      </EventList>
    </CalendarContainer>
  );
};

export default Calendar; 