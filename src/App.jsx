import './App.css';
import portrait from "./assets/Images/PortFolioPortrait.svg";

export function Portrait() {
  return (
    < img src={portrait} alt="" />
  );
}

function App() {
  return (
    <div>
      <Portrait />
    </div>
  );

}
export default App;
