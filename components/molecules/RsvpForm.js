'use client';
import React from 'react';
import styled from 'styled-components';

export default function RsvpForm(props) {
  const { toggleModal, modal, setModal } = props;
  const [rsvp, setRsvp] = React.useState(null); // Tracks the RSVP response
  const [numberAttending, setNumberAttending] = React.useState(1);
  const [attendees, setAttendees] = React.useState([{ name: '', foodOption: 'meat' }]);

  // New state variables for form submission and success message
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleAttendeeNameChange = (index, name) => {
    const updatedAttendees = [...attendees];
    updatedAttendees[index].name = name;
    setAttendees(updatedAttendees);
  };

  const handleFoodOptionChange = (index, option) => {
    const updatedAttendees = [...attendees];
    updatedAttendees[index].foodOption = option;
    setAttendees(updatedAttendees);
  };

  const incrementNumberAttending = () => {
    if (numberAttending < 3) {
      setAttendees([...attendees, { name: '', foodOption: 'meat' }]);
      setNumberAttending(numberAttending + 1);
    }
  };

  const decrementNumberAttending = () => {
    if (numberAttending > 1) {
      setAttendees(attendees.slice(0, -1));
      setNumberAttending(numberAttending - 1);
    }
  };

  React.useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modal]);

  React.useEffect(() => {
    // Check for query parameter to see if the form was submitted
    const urlParams = new URLSearchParams(window.location.search);
    const formSubmitted = urlParams.get('submitted');

    if (formSubmitted === 'true') {
      setModal(true);
      setIsSubmitted(true);
    }

    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, []);

  if (isSubmitted) {
    return (
      <StyledModalOverlay modal={modal}>
        <StyledOverlayBackdrop onClick={toggleModal} />
        <StyledModalInner>
          <StyledCloseButton onClick={toggleModal}>X</StyledCloseButton>
          <Styledh2>Your RSVP has been sent off! Thank you so much! 🥳🥳🥳</Styledh2>
        </StyledModalInner>
      </StyledModalOverlay>
    );
  }

  return (
    <StyledModalOverlay modal={modal}>
      <StyledOverlayBackdrop onClick={toggleModal} />
      <StyledModalInner>
        <StyledCloseButton onClick={toggleModal}>X</StyledCloseButton>
        <Styledh2>
          Let us know if you’re coming! If you are, who’s coming, and what you want to eat.
        </Styledh2>
        <form name="rsvp" method="POST" data-netlify="true" action="/?submitted=true">
          <input type="hidden" name="form-name" value="rsvp" />
          <TopLevelLabel>
            Firstly, can you make it?
            <StyledRadioLabel selected={rsvp === 'yes'} onClick={() => setRsvp('yes')}>
              <StyledHiddenRadio
                type="radio"
                name="rsvp"
                value="yes"
                checked={rsvp === 'yes'}
                onChange={() => setRsvp('yes')} // Add this line
              />
              <span>👍</span>
              <span>Yes! We’ll be there!</span>
            </StyledRadioLabel>
            <StyledRadioLabel selected={rsvp === 'no'} onClick={() => setRsvp('no')}>
              <StyledHiddenRadio
                type="radio"
                name="rsvp"
                value="no"
                checked={rsvp === 'no'}
                onChange={() => setRsvp('no')} // Add this line
              />
              <span>👎</span>
              <span>Sadly not, but congratulations!</span>
            </StyledRadioLabel>
          </TopLevelLabel>
          <TopLevelLabel>
            Email address:
            <input type="text" name="email" placeholder="example@examplemail.com" />
          </TopLevelLabel>
          <TopLevelLabel>
            Phone number:
            <input type="text" name="phone" placeholder="01234 567890" />
          </TopLevelLabel>
          {rsvp === 'yes' && (
            <>
              <TopLevelLabel>
                Number Attending:
                <StyledNumberPicker>
                  <StyledButton type="button" onClick={decrementNumberAttending}>
                    -
                  </StyledButton>
                  <PeopleAttending>
                    {numberAttending === 1 ? `Just 1 🥳` : `${numberAttending} people coming 🥳`}
                  </PeopleAttending>
                  <StyledButton type="button" onClick={incrementNumberAttending}>
                    +
                  </StyledButton>
                </StyledNumberPicker>
              </TopLevelLabel>
              {attendees.slice(0, numberAttending).map((attendee, i) => (
                <PersonContainer key={i}>
                  <TopLevelLabel>
                    Person {i + 1} Name:
                    <input
                      type="text"
                      name={`attendeeName${i}`}
                      placeholder='e.g. "John Doe"'
                      value={attendee.name}
                      onChange={(e) => handleAttendeeNameChange(i, e.target.value)}
                    />
                  </TopLevelLabel>
                  <StyledRadioLabel
                    selected={attendee.foodOption === 'meat'}
                    onClick={() => handleFoodOptionChange(i, 'meat')}
                  >
                    <StyledHiddenRadio
                      type="radio"
                      name={`foodOption${i}`}
                      value="meat"
                      checked={attendee.foodOption === 'meat'}
                      onChange={() => handleFoodOptionChange(i, 'meat')} // Add this line
                    />
                    <span>🥩</span>
                    <span>I’d like meat please</span>
                  </StyledRadioLabel>
                  <StyledRadioLabel
                    selected={attendee.foodOption === 'veggie'}
                    onClick={() => handleFoodOptionChange(i, 'veggie')}
                  >
                    <StyledHiddenRadio
                      type="radio"
                      name={`foodOption${i}`}
                      value="veggie"
                      checked={attendee.foodOption === 'veggie'}
                      onChange={() => handleFoodOptionChange(i, 'veggie')} // Add this line
                    />
                    <span>🥕</span>
                    <span>I’d like the veggie option</span>
                  </StyledRadioLabel>
                </PersonContainer>
              ))}
            </>
          )}
          <TopLevelLabel>
            Comments:
            <textarea name="comments" placeholder="Add any additional comments here"></textarea>
          </TopLevelLabel>
          <input type="submit" value="💌 Send your RSVP" disabled={isSubmitting} />
        </form>
      </StyledModalInner>
    </StyledModalOverlay>
  );
}

// ... Styled components go here ...

const PeopleAttending = styled.div`
  font-size: 16px;
`;

const StyledCloseButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  border: solid 1px ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  margin-bottom: 40px;
  transition: all 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background};
  }
`;

const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledNumberPicker = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  border: solid 1px ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
`;

const Styledh2 = styled.h2`
  font-size: 24px;
  margin-bottom: 40px;
`;

const StyledRadioLabel = styled.label`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1rem;
  background: ${({ selected }) => (selected ? '#fff' : 'transparent')};
  border: solid 1px ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  user-select: none;
  cursor: pointer;
  font-size: 13px;
  height: 48px;
  align-items: center;
  gap: 10px;
  font-weight: 500;

  span {
    font-size: 13px;
  }

  &:focus-within {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }

  &:active {
    background: ${({ selected }) => (selected ? 'blue' : 'gray')};
  }
`;

const StyledHiddenRadio = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

const StyledModalInner = styled.div`
  max-width: 480px;
  width: 100%;
  max-height: 600px;
  background-color: ${(props) => props.theme.colors.background};
  padding: 40px;
  border-radius: 10px;
  overflow: scroll;
  position: relative;
  z-index: 101;

  form {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  input,
  textarea {
    font-size: 16px;
    background: none;
    border: none;
    padding-bottom: 8px;
    border-bottom: solid 1px ${(props) => props.theme.colors.primary};

    &::placeholder {
      color: #a7a7a7;
    }
  }

  input[type='submit'],
  input[type='reset'] {
    display: flex;
    flex-direction: row;
    padding: 0.5rem 1rem;
    background: ${(props) => props.theme.colors.primary};
    border: solid 1px ${(props) => props.theme.colors.primary};
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
    font-size: 13px;
    height: 48px;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    justify-content: center;
    text-align: center;
    color: #fff;

    span {
      font-size: 13px;
    }

    &:focus-within {
      outline: none;
      box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
    }

    &:active {
      background: ${({ selected }) => (selected ? 'blue' : 'gray')};
    }
  }
`;

const TopLevelLabel = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  gap: 10px;
  font-weight: 500;
`;

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  opacity: ${({ modal }) => (modal ? 1 : 0)};
  pointer-events: ${({ modal }) => (modal ? 'all' : 'none')};

  &.show {
    opacity: 1;
    pointer-events: all;
  }
`;

const StyledOverlayBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
