import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const CameraFeed = ({ onCapture }) => {
  const videoRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    const constraints = {
      video: true,
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        const video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error('Error accessing webcam: ', err);
      });
  }, []);

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataURL = canvas.toDataURL('image/png');
    setCapturedImage(dataURL);
    onCapture(dataURL);
  };

  const retakeImage = () => {
    setCapturedImage(null);
  };

  return (
    <Container>
      {capturedImage ? (
        <Image src={capturedImage} alt="Captured" />
      ) : (
        <Video ref={videoRef} />
      )}
      <Button onClick={capturedImage ? retakeImage : captureImage}>
        {capturedImage ? 'Retake' : 'Capture'}
      </Button>
    </Container>
  );
};

export default CameraFeed;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFFFF;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  margin: 20px auto;
  // border: 2px solid #F41CB2;
`;


const Video = styled.video`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  margin: 27px 0;
  padding: 20px 20px;
  // border: 2px solid #F41CB2;
  background-color: black;

`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 50px;
  padding: 20px 20px;
  // border: 2px solid #F41CB2;
  background-color: #F41CB2;

`;

const Button = styled.button`
  background-color: #F41CB2;
  color: #FFFFFF;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FF912E;
  }
`;
