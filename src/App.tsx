import "./App.css";
import { Registration } from "./pages/Registration/Registration";
import { Logo } from "./theme/Logo/Logo";

export const App = () => {
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
