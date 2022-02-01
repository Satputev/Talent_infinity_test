import logo from "./logo.svg";
import "./App.css";
import Tree from "./Tree";

function App() {
  const oData = {
    companyname: "Arjun Infra pvt",
    badge: "Red",
    childCompany: [
      {
        companyname: " Good Home ltd",
        badge: "blue",
        childCompany: [
          {
            companyname: "Private build ltd",
            badge: "Green",
            childCompany: [{}],
          },
        ],
      },
      {
        companyname: "Cheap Housing ltd",
        badge: "blue",
        childCompany: [{}],
      },
    ],
  };
  return (
    <div className="App">
      <header className="App-header">
        <Tree data={[{ ...oData }]} />
      </header>
    </div>
  );
}

export default App;
