import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const JoinContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow-x: hidden;
`;

const Title = styled(motion.h1)`
  color: #e05263;
  text-align: center;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #333;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #e05263;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #e05263;
  }
`;

const SubmitButton = styled(motion.button)`
  background: #e05263;
  color: white;
  border: none;
  padding: 1rem;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 1rem;

  &:hover {
    background: #d14253;
  }
`;

const Join = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission to Formspree
  };

  return (
    <JoinContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Join Our Co-op
      </Title>
      
      <Description>
        Interested in sustainable food practices, fermentation, and building community? 
        We'd love to have you join our co-op!
      </Description>

      <Form onSubmit={handleSubmit} action="https://formspree.io/f/YOUR_ID" method="POST">
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input 
            type="text" 
            id="name" 
            name="name" 
            required 
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input 
            type="email" 
            id="email" 
            name="email" 
            required 
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Why are you interested in ReDelicious?</Label>
          <TextArea 
            id="message" 
            name="message" 
            required 
          />
        </FormGroup>

        <SubmitButton
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Submit
        </SubmitButton>
      </Form>
    </JoinContainer>
  );
};

export default Join;