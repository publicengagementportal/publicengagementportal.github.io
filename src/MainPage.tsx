import { Link } from 'react-router-dom';
// ...existing code...

function MainPage() {
  return (
    <div>
      {/* ...existing code... */}
      <Link to="/government">
        <div className="tile">
          Government
        </div>
      </Link>
      {/* ...existing code... */}
    </div>
  );
}

export default MainPage;