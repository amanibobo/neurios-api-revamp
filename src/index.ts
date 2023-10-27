import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());

const professions = [
  {
    id: '0',
    title: 'STEM@GTRI',
    desc: 'Testing Out the Neurios Application Description Feature!',
    job_url: 'https://gtri.gatech.edu/stem',
    lat: 33.9427791846899,
    long: -84.372567236301,
  },
  {
    id: '1',
    title: 'Cisco Internship',
    desc: 'Testing Out the Neurios Application Description Feature!',
    job_url: 'https://gtri.gatech.edu/stem',
    lat: 50.9427791846899,
    long: -84.372567236301,
  },
  {
    id: '2',
    title: 'BigFuture Ambassador',
    desc: 'Testing Out the Neurios Application Description Feature!',
    job_url: 'https://gtri.gatech.edu/stem',
    lat: 10.9427791846899,
    long: -84.372567236301,
  },
  {
      id: '3',
      title: 'BigFuture Ambassador',
      desc: 'Testing Out the Neurios Application Description Feature!',
      job_url: 'https://gtri.gatech.edu/stem',
      lat: 33.9427791846899,
      long: -84.372567236301,
    },
];

//routes
app.get("/professions", (req, res) => {
    res.json(professions);
});



//start
app.listen(port, () => {
    console.log("hi there");
})