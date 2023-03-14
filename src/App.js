import "./App.css";
import Registration from "./pages/Registration/Registration";
import Logo from "./theme/Logo/Logo";

function App() {
  return (
    <div className="App">
      <div className="registration-form">
        <Registration />
      </div>
      <div className="stuff">
        <Logo />
      </div>
    </div>
  );
}

export default App;
