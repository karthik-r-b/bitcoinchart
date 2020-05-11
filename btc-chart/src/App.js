import React from 'react';
import io from 'socket.io-client';
import moment from 'moment';
import Chart from './components/chart/chart.component';
import Card from './components/card/card.component';
import Header from './components/header/header.component';
import {AppContainer} from './App.styles.js';

const socket = io('http://localhost:5000', {
	transports: ['websocket', 'polling']
});

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			price:null,
			lineChart: {
				labels: [],
				datasets: 
				[
					{
						type: "line",
						label: "BTC-USD "+moment().format("Do MMMM"),
						backgroundColor: "#A7CAD2",
						borderColor: "#118099",
						pointBackgroundColor: "orange",
						borderWidth: "2",
						lineTension: 0.45,
						data: []
					}
				]
			},

			lineChartOptions: {
				responsive: true,
				maintainAspectRatio: false,
				tooltips: {
					enabled: true
				},
				scales: {
					xAxes: [
						{
							ticks: {
								fontColor:'#264B6B',
								autoSkip: true,
								maxTicksLimit: 10
							}
						}
					],
					yAxes: [
						{
							ticks: {
								callback: function(value, index ,values){
									return '$'+value;
								}
							}
						}
					]
				}
			}
			/*END LINE*/
		}
	}

	async componentDidMount(){
		socket.on('data',( data => {
			const { time , price } = data;
			const previousData = this.state.lineChart.datasets[0];
			const newData = { ...previousData };
			newData.data.push(price);
			const updatedLineChart = {...this.state.lineChart, datasets: [newData],
				labels: this.state.lineChart.labels.concat(moment(Date(time)).format('hh:mm:ss a'))
			};
			
			this.setState({lineChart:updatedLineChart, price})
		}));
	}

	componentWillUnmount(){
		socket.off('data');
	}

	render(){
		const {price, lineChart, lineChartOptions} = this.state;
		return (			
			<AppContainer>				
				<Header title="Bitcoin Tracker"/>
				<Card title="BTC_USD" price={price}/>
				<Chart data={lineChart} options={lineChartOptions} />
			</AppContainer>
		);
	}
}
export default App;