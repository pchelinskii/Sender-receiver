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
import { Button, Container, Grid, Typography} from "@mui/material";
import {styled} from "@mui/material";
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
const MyComponent = styled('div')({
    width: 100,
    textAlign: 'center',
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
});

function App() {
  return (
      <Container maxWidth="md">
          <MyComponent>test</MyComponent>
          <Grid >
              <div className="chart"><Bar options={options} data={data2} /></div>
              <Grid container textAlign="center" justifyContent="center" spacing="25">
                  <Grid item>
                      <Typography variant="h5" mb="5px">Speed </Typography>
                      <Button variant="outlined">+</Button>
                      <Button variant="outlined">-</Button>

                  </Grid>
                  <Grid item>
                      <Typography variant="h5" mb="5px">Sender</Typography>
                      <Button variant="outlined">add</Button>
                      <Button variant="outlined">dell</Button>
                  </Grid>
              </Grid>
          </Grid>
      </Container>
  );
}

export default App;
