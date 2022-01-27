import React, { Component } from "react";
import {AreaChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Line,ComposedChart,Area,Bar} from "recharts";
const data = [
{
    "name": "1",
    "uv": 2800,
    "pv": 2400,
    "amt": 2400
    },
    {
    "name": "",
    "uv": 4200,
    "pv": 4600,
    "amt": 2290
    },
    {
    "name": "",
    "uv": 4200,
    "pv": 3100,
    "amt": 2210
    },
    
    {
    "name": "13",
    "uv": 2000,
    "pv": 3700,
    "amt": 2290
    },
    {
    "name": "",
    "uv": 2000,
    "pv": 3100,
    "amt": 2290
    },
    {
    "name": "19",
    "uv": 2000,
    "pv": 4221,
    "amt": 2290
    },
    {
    "name": "",
    "uv": 2000,
    "pv": 3700,
    "amt": 2290
    },
    {
    "name": "",
    "uv": 2780,
    "pv": 4700,
    "amt": 3500
    },
    {
    "name": "31",
    "uv": 2780,
    "pv": 3500,
    "amt": 3500
    },
    {
    "name": "",
    "uv": 2780,
    "pv": 3800,
    "amt": 3500
    },
];
class ChartDashboard extends Component {
render() {
    return (
                    <div>
                        <AreaChart width={1000} height={500} data={data}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#5185F7" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#E7EFFF" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="1 1" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Area type="monotone" dataKey="pv" fill="#5185F7" fillOpacity={.8} fill="url(#colorUv)" />
                        </AreaChart>
                    </div>
        );
    }
}
export default ChartDashboard;