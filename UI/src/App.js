import './App.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        // legend: {
        //     position: 'top',
        // },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data2 = {
    // labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: { 1: 1, 2: 2 },
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            data: { 1: 13, 2: 21 },
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="chart"><Bar options={options} data={data2} /></div>
          <div className="btn-group">
              <div>
                  <div>Speed </div>
                  <button>+</button>
                  <button>-</button>

              </div>
              <div>
                  <div>Sender</div>
                  <button>add</button>
                  <button>dell</button>
              </div>
          </div>
      </header>
    </div>
  );
}

export default App;
