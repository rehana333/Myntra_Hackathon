import React, { useState } from 'react';
import CameraFeed from './components/CameraFeed';
import ToneSelection from './components/ToneSelection';
import ColorRecommendations from './components/ColorRecommendations';
import GlobalStyle from './components/GlobalStyle';
import Navbar from './components/Navbar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
`;

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
`;

const App = () => {
  const [skinTone, setSkinTone] = useState('');
  const [hairTone, setHairTone] = useState('');
  const [undertone, setUndertone] = useState('');
  const [capturedImage, setCapturedImage] = useState('');

  return (
    <>
      
      <GlobalStyle />
      <Navbar />
      <Container>
      
        <CameraFeed onCapture={setCapturedImage} />
        <SideContainer>
          <ToneSelection setSkinTone={setSkinTone} setHairTone={setHairTone} setUndertone={setUndertone} />
          <ColorRecommendations skinTone={skinTone} hairTone={hairTone} undertone={undertone} />
        </SideContainer>
      </Container>
    </>
  );
};

export default App;
