import "./App.css";
import { LineGraph } from "./components/Line";
import { BarGraph } from "./components/Bar";
import { PieChart } from "./components/Pie";

function App() {
  return (
    <div className="App">
      <h1>📊 My Dashboard</h1>
      <div className="charts">
        <LineGraph />
        <BarGraph />
        <PieChart />
      </div>
    </div>
  );
}

export default App;
