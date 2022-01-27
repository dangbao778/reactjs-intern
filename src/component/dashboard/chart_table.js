import Dropdown from './dropdown';
import React, { Component } from "react";
import {AreaChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Line,ComposedChart,Area,Bar} from "recharts";
import table_chart from './css/chart-styles.module.css'
import ChartDashboard from './chart_dashboard'
class Chart extends Component {
render() {
    return (
        <div className={table_chart.charts}>
        <div className={table_chart.total_charts}>
            <div className={table_chart.charts_left_title}>
                <p className={table_chart.top_title}>Bảng thống kê theo ngày</p>
                <p className={table_chart.bottom_title}>Tháng 11/2021</p>
            </div>
            <div className={table_chart.charts_right_title}>
                <p className={table_chart.left_title}>Xem theo</p>
                <Dropdown/>
            </div>
        </div>
        <ChartDashboard/>
    </div>
        );
    }
}
export default Chart;