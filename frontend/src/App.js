import './App.css';
import RegisterPage from './component/RegisterPage';
export const SERVER_URL = "http://localhost:4000"

function App() {
  return (
    <div className="App">
      <RegisterPage />
    </div>
  );
}

export default App;
