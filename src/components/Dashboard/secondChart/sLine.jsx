import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "../../../css/secondChart/sLine.css";
import LineMeter from "./line-meter";
let SLine = () => {
  const data = [
    {
      name: "Jan",
      uv: 55,
      pv: 24,
      amt: 24,
    },
    {
      name: "Feb",
      uv: 30,
      pv: 13,
      amt: 22,
    },
    {
      name: "Mar",
      uv: 20,
      pv: 98,
      amt: 22,
    },
    {
      name: "Apr",
      uv: 27,
      pv: 39,
      amt: 20,
    },
    {
      name: "May",
      uv: 18,
      pv: 48,
      amt: 21,
    },
    {
      name: "Jun",
      uv: 23,
      pv: 38,
      amt: 25,
    },
    {
      name: "Jul",
      uv: 34,
      pv: 43,
      amt: 21,
    },
  ];
  return (
    <>
      <div className="second-sline">
        <div className="chart-container">
          <div className="chart-container-fline">
            <p>Applications Recieved</p>
            <ul>
              <li>This year</li>
              <li>This Week</li>
              <li>Today</li>
            </ul>
            <div className="download-report">
              <span className="material-icons">folder</span>

            <span className="material-icons">more_vert</span>
            </div>
          </div>
          <ResponsiveContainer>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FE5260" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FE5260" stopOpacity={0} />
                </linearGradient>
                
              </defs>
              <XAxis dataKey="name" />
              <YAxis />

              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="label-container">
            <h5>Total Applications</h5>
            <ul>
                <li>
                    <LineMeter width="50" name="Applications" color="#596B7A"/>
                    <LineMeter width="80" name="Shortlisted" color="#2C9CFC"/>
                    <LineMeter width="30" name="Rejected" color="#FE5260"/>
                    <LineMeter width="10" name="On hold" color="#DABAE8"/>
                    <LineMeter width="70" name="Pipelined" color="#6542B4"/>
                </li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default SLine;
