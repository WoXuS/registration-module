import "./App.css";
import Registration from "./pages/registration/Registration";
import Logo from "./theme/logo/Logo";

const App = () => {
  return (
    <div className="App">
      <div className="registration-form">
        <Registration />
      </div>
      <div className="logo-container">
        <Logo />
      </div>
    </div>
  );
};

export default App;
