import { useNavigate } from 'react-router-dom'; // Import useNavigate

const GovernmentPage = () => {
  const tiles = ['Roads', 'Stoplights', 'Streetlights', 'ATMs'];
  const navigate = useNavigate(); // Initialize navigate function

  const handleClick = (tile: string) => {
    navigate(`/${tile.toLowerCase()}-forum`); // Navigate to the corresponding forum
  };

  return (
    <div className="government-page">
      <div
        className="vertical-list"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '10px',
          marginTop: '20px', // Added margin to bring buttons down
        }}
      >
        {tiles.map((tile) => (
          <button
            key={tile}
            className="government-tile"
            style={{
              width: '120px', // Increased width
              height: '80px', // Reduced height
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              border: '1px solid #ccc',
              backgroundColor: '#f9f9f9',
              borderRadius: '5px',
              transition: 'background-color 0.3s, color 0.3s', // Smooth transition
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'blue';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f9f9f9';
              e.currentTarget.style.color = 'black';
            }}
            onClick={() => handleClick(tile)} // Navigate on click
          >
            {tile}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GovernmentPage;
