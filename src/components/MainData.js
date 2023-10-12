import { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart as Chartjs,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

Chartjs.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

 const MainData = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv");
      console.log(data.data);
      setChartData({
        labels: data.data.map((item) => item.data_year),
        datasets: [
          {
            label: "Burglary",
            data: data.data.map((item) => item.Burglary),
            fill: true,
            borderColor: "rgb(0, 0, 255)",
            backgroundColor: "rgba(0, 0, 255 , 0.3)",
          },
        ],
      });
    };
    fetchData();
  },[]);
  return (
    <div className="absolute top-[34.0rem] left-[calc(50%_-_281.5px)] w-[35.19rem] h-[12.44rem] text-left text-[0.56rem] text-blue font-poppins">
      
      <div className="chart">
        {chartData && chartData.datasets && (
          <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: "top" },
              title: { display: true },
            },
          }}
        />
        )}
      </div>
       
    </div>
    
  );
};

export default MainData;
