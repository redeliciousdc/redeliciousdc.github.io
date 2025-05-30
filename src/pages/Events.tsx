import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const EventsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  color: #e05263;
  text-align: center;
  margin-bottom: 3rem;
`;

const CalendarWrapper = styled.div`
  margin-bottom: 3rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const UpcomingEvents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const EventCard = styled(motion.div)`
  background-color: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const EventDate = styled.div`
  color: #e05263;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const EventTitle = styled.h3`
  margin: 0 0 0.5rem 0;
`;

const Events = () => {
  const upcomingEvents = [
    {
      date: "April 15, 2024",
      title: "Koji Workshop",
      description: "Learn the basics of koji fermentation and its applications in modern cuisine."
    },
    {
      date: "April 22, 2024",
      title: "Earth Day Community Feast",
      description: "Join us for a sustainable community dinner featuring rescued ingredients and fermented delights."
    },
    {
      date: "May 1, 2024",
      title: "Vinegar Making Workshop",
      description: "Discover how to transform surplus wine and fruit into delicious artisanal vinegars."
    }
  ];

  return (
    <EventsContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Upcoming Events
      </Title>

      <CalendarWrapper>
        <iframe 
          src="https://calendar.google.com/calendar/embed?src=yourcalendarID%40group.calendar.google.com&ctz=America%2FNew_York" 
          style={{ border: 0, width: '100%', height: '600px' }} 
          frameBorder="0" 
          scrolling="no"
        ></iframe>
      </CalendarWrapper>

      <UpcomingEvents>
        {upcomingEvents.map((event, index) => (
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
      </UpcomingEvents>
    </EventsContainer>
  );
};

export default Events; 