
import React from 'react';
import styled from 'styled-components';

const ToneSelection = ({ setSkinTone, setHairTone, setUndertone }) => {
  const skinTones = [
    { label: 'Fair', color: '#F8DAD0' },
    { label: 'Medium', color: '#FED9BC' },
    { label: 'Olive', color: '#E1B899' },
    { label: 'Dark', color: '#A87C6F' },
  ];

  const hairTones = [
    { label: 'Black', color: '#2C2C2C' },
    { label: 'Brown', color: '#6F4E37' },
    { label: 'Blonde', color: '#D2B48C' },
    { label: 'Red', color: '#A52A2A' },
  ];

  const undertones = [
    { label: 'Cool', color: '#DFAB9D' },
    { label: 'Warm', color: '#D39F66' },
    { label: 'Neutral', color: '#D6AB8D' },
  ];

  return (
    <Container>
      <SelectionGroup>
        <h3>Select Skin Tone</h3>
        <ToneList>
          {skinTones.map((tone) => (
            <ToneItem
              key={tone.label}
              style={{ backgroundColor: tone.color }}
              onClick={() => setSkinTone(tone.label)}
            />
          ))}
        </ToneList>
      </SelectionGroup>
      <SelectionGroup>
        <h3>Select Hair Tone</h3>
        <ToneList>
          {hairTones.map((tone) => (
            <ToneItem
              key={tone.label}
              style={{ backgroundColor: tone.color }}
              onClick={() => setHairTone(tone.label)}
            />
          ))}
        </ToneList>
      </SelectionGroup>
      <SelectionGroup>
        <h3>Select Undertone</h3>
        <ToneList>
          {undertones.map((tone) => (
            <ToneItem
              key={tone.label}
              style={{ backgroundColor: tone.color }}
              onClick={() => setUndertone(tone.label)}
            />
          ))}
        </ToneList>
      </SelectionGroup>
    </Container>
  );
};

export default ToneSelection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 500px;
  margin: 20px auto;
  border: 2px solid #F41CB2;
`;

const SelectionGroup = styled.div`
  margin: 20px 0;

  h3 {
    color: #000003;
    margin-bottom: 10px;
  }
`;

const ToneList = styled.div`
  display: flex;
  gap: 10px;
`;

const ToneItem = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid pink;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;