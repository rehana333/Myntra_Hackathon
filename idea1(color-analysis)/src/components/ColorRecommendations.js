import React from 'react';
import styled from 'styled-components';

const ColorRecommendations = ({ skinTone, hairTone, undertone }) => {
  const recommendations = {
    Fair: {
      Black: {
        Cool: ["#E0BBE4", "#957DAD", "#D291BC", "#778899", "#B0C4DE", "#8A2BE2"],
        Warm: ["#FFD700", "#FFA500", "#FF8C00", "#DAA520", "#FF4500", "#FF6347"],
        Neutral: ["#C5E1A5", "#80DEEA", "#FFF59D", "#D3D3D3", "#F5DEB3", "#EEE8AA"]
      },
      Brown: {
        Cool: ["#A9A9A9", "#778899", "#B0C4DE", "#4682B4", "#6A5ACD", "#7B68EE"],
        Warm: ["#F08080", "#FA8072", "#E9967A", "#CD853F", "#D2691E", "#FF7F50"],
        Neutral: ["#FFE4C4", "#D3D3D3", "#C0C0C0", "#BDB76B", "#FFDAB9", "#E6E6FA"]
      },
      Blonde: {
        Cool: ["#E6E6FA", "#B0E0E6", "#ADD8E6", "#87CEFA", "#6495ED", "#4682B4"],
        Warm: ["#FFEBCD", "#FFDEAD", "#FFDAB9", "#FFA07A", "#F4A460", "#D2B48C"],
        Neutral: ["#FAFAD2", "#FFFACD", "#EEE8AA", "#F0E68C", "#BDB76B", "#FFD700"]
      },
      Red: {
        Cool: ["#FFB6C1", "#FF69B4", "#FF1493", "#C71585", "#DB7093", "#FF4500"],
        Warm: ["#FF6347", "#FF7F50", "#FFA07A", "#FF8C00", "#FF4500", "#FFD700"],
        Neutral: ["#FAEBD7", "#F5F5DC", "#FFE4C4", "#FFEBCD", "#FFF8DC", "#F0FFF0"]
      },
      Gray: {
        Cool: ["#B0C4DE", "#778899", "#708090", "#4682B4", "#5F9EA0", "#6495ED"],
        Warm: ["#D2B48C", "#F4A460", "#DEB887", "#D2691E", "#CD853F", "#8B4513"],
        Neutral: ["#FFF8DC", "#F5DEB3", "#EEE8AA", "#FAFAD2", "#FFE4B5", "#FFDAB9"]
      }
    },
    Medium: {
      Black: {
        Cool: ["#E0BBE4", "#957DAD", "#D291BC", "#778899", "#B0C4DE", "#8A2BE2"],
        Warm: ["#FFD700", "#FFA500", "#FF8C00", "#DAA520", "#FF4500", "#FF6347"],
        Neutral: ["#C5E1A5", "#80DEEA", "#FFF59D", "#D3D3D3", "#F5DEB3", "#EEE8AA"]
      },
      Brown: {
        Cool: ["#A9A9A9", "#778899", "#B0C4DE", "#4682B4", "#6A5ACD", "#7B68EE"],
        Warm: ["#F08080", "#FA8072", "#E9967A", "#CD853F", "#D2691E", "#FF7F50"],
        Neutral: ["#FFE4C4", "#D3D3D3", "#C0C0C0", "#BDB76B", "#FFDAB9", "#E6E6FA"]
      },
      Blonde: {
        Cool: ["#E6E6FA", "#B0E0E6", "#ADD8E6", "#87CEFA", "#6495ED", "#4682B4"],
        Warm: ["#FFEBCD", "#FFDEAD", "#FFDAB9", "#FFA07A", "#F4A460", "#D2B48C"],
        Neutral: ["#FAFAD2", "#FFFACD", "#EEE8AA", "#F0E68C", "#BDB76B", "#FFD700"]
      },
      Red: {
        Cool: ["#FFB6C1", "#FF69B4", "#FF1493", "#C71585", "#DB7093", "#FF4500"],
        Warm: ["#FF6347", "#FF7F50", "#FFA07A", "#FF8C00", "#FF4500", "#FFD700"],
        Neutral: ["#FAEBD7", "#F5F5DC", "#FFE4C4", "#FFEBCD", "#FFF8DC", "#F0FFF0"]
      },
      Gray: {
        Cool: ["#B0C4DE", "#778899", "#708090", "#4682B4", "#5F9EA0", "#6495ED"],
        Warm: ["#D2B48C", "#F4A460", "#DEB887", "#D2691E", "#CD853F", "#8B4513"],
        Neutral: ["#FFF8DC", "#F5DEB3", "#EEE8AA", "#FAFAD2", "#FFE4B5", "#FFDAB9"]
      }
    },
    Olive: {
      Black: {
        Cool: ["#4B0082", "#483D8B", "#6A5ACD", "#7B68EE", "#9370DB", "#8A2BE2"],
        Warm: ["#FFD700", "#FFA500", "#FF8C00", "#DAA520", "#FF4500", "#FF6347"],
        Neutral: ["#98FB98", "#9ACD32", "#ADFF2F", "#32CD32", "#00FF00", "#7CFC00"]
      },
      Brown: {
        Cool: ["#A52A2A", "#B22222", "#DC143C", "#B03060", "#FF1493", "#FF69B4"],
        Warm: ["#FFD700", "#FFA500", "#FF8C00", "#DAA520", "#FF4500", "#FF6347"],
        Neutral: ["#8B4513", "#A0522D", "#D2691E", "#CD853F", "#F4A460", "#DEB887"]
      },
      Blonde: {
        Cool: ["#4682B4", "#5F9EA0", "#6495ED", "#00CED1", "#20B2AA", "#40E0D0"],
        Warm: ["#FF8C00", "#FFA07A", "#FF7F50", "#CD5C5C", "#FF6347", "#FA8072"],
        Neutral: ["#D2B48C", "#F5DEB3", "#EEE8AA", "#F0E68C", "#BDB76B", "#FFD700"]
      },
      Red: {
        Cool: ["#DB7093", "#FF1493", "#FF69B4", "#FF4500", "#FF6347", "#FF7F50"],
        Warm: ["#FFA07A", "#FA8072", "#F08080", "#FF8C00", "#FFA500", "#FFD700"],
        Neutral: ["#FFF8DC", "#FAEBD7", "#F5DEB3", "#FFFACD", "#EEE8AA", "#F0E68C"]
      },
      Gray: {
        Cool: ["#778899", "#708090", "#2F4F4F", "#4682B4", "#5F9EA0", "#6495ED"],
        Warm: ["#F4A460", "#D2B48C", "#DEB887", "#CD853F", "#A0522D", "#8B4513"],
        Neutral: ["#FAFAD2", "#FFF8DC", "#F5DEB3", "#EEE8AA", "#F0E68C", "#FFD700"]
      }
    },
    Dark: {
      Black: {
        Cool: ["#4B0082", "#483D8B", "#6A5ACD", "#7B68EE", "#9370DB", "#8A2BE2"],
        Warm: ["#FFD700", "#FFA500", "#FF8C00", "#DAA520", "#FF4500", "#FF6347"],
        Neutral: ["#98FB98", "#9ACD32", "#ADFF2F", "#32CD32", "#00FF00", "#7CFC00"]
      },
      Brown: {
        Cool: ["#A52A2A", "#B22222", "#DC143C", "#B03060", "#FF1493", "#FF69B4"],
        Warm: ["#FFD700", "#FFA500", "#FF8C00", "#DAA520", "#FF4500", "#FF6347"],
        Neutral: ["#8B4513", "#A0522D", "#D2691E", "#CD853F", "#F4A460", "#DEB887"]
      },
      Blonde: {
        Cool: ["#4682B4", "#5F9EA0", "#6495ED", "#00CED1", "#20B2AA", "#40E0D0"],
        Warm: ["#FF8C00", "#FFA07A", "#FF7F50", "#CD5C5C", "#FF6347", "#FA8072"],
        Neutral: ["#D2B48C", "#F5DEB3", "#EEE8AA", "#F0E68C", "#BDB76B", "#FFD700"]
      },
      Red: {
        Cool: ["#DB7093", "#FF1493", "#FF69B4", "#FF4500", "#FF6347", "#FF7F50"],
        Warm: ["#FFA07A", "#FA8072", "#F08080", "#FF8C00", "#FFA500", "#FFD700"],
        Neutral: ["#FFF8DC", "#FAEBD7", "#F5DEB3", "#FFFACD", "#EEE8AA", "#F0E68C"]
      },
      Gray: {
        Cool: ["#778899", "#708090", "#2F4F4F", "#4682B4", "#5F9EA0", "#6495ED"],
        Warm: ["#F4A460", "#D2B48C", "#DEB887", "#CD853F", "#A0522D", "#8B4513"],
        Neutral: ["#FAFAD2", "#FFF8DC", "#F5DEB3", "#EEE8AA", "#F0E68C", "#FFD700"]
      }
    }
    // Add similar blocks for other skin tones (Medium, Olive, Dark)
  };

  const colors = (recommendations[skinTone] && recommendations[skinTone][hairTone] && recommendations[skinTone][hairTone][undertone]) || [];

  return (
    <Container>
      <h3>Recommended Colors for You</h3>
      <ColorList>
        {colors.map((color, index) => (
          <ColorItem key={index} style={{ backgroundColor: color }} />
        ))}
      </ColorList>
    </Container>
  );
};

export default ColorRecommendations;

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

const ColorList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

const ColorItem = styled.div`
  width: 50px;
  height: 50px;
  // border-radius: 50%;
  border: 2px solid #FFFFFF;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;



