import React from "react";
import {Line} from "react-chartjs-2";
import {ChartContainer} from './chart.styles';
const Chart = ({data, options}) => {
    return(
        <ChartContainer>
            <Line data={data} options={options}/>
        </ChartContainer>
    )
}

export default Chart;