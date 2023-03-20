import "./Logo.css";
import euvic from "./euvic.svg"
import theGoodPeople from "./the-good-people.svg"

export const Logo = () => {
  return (
    <div className="container">
      <img src={euvic} alt="Euvic" className="euvic"/>
      <img src={theGoodPeople} alt="The Good People" className="the-good-people"/>
    </div>
  );
};
