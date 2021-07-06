import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import styled from "styled-components";
import {Trans} from "react-i18next";
const options = {
	chart: {
		type: "spline"
	},
	title: {
		text: "Glucose Readings"
	},
	// xAxis: {
	// 	categories:
	// 		props.data.ret.map(dataItem =>
	// 			tConv24(dataItem.reading_time))
	//
	// },
	yAxis: {
		title: {
			text: "Glucose"
		}
	},
	plotOptions: {
		series: {
			color: 'green'
		},
		line: {
			dataLabels: {
				enabled: true
			},
			enableMouseTracking: false
		},
	},
	series: [
		{
			name: "Daily Readings",
			data: [1, 2, 3, 66,45,47,1,2]
		}
	]
};

const MetricsStyle = styled.div`
  border: 1px solid #414142;
  margin-bottom: 70px;
  @media (max-width: 768px) {
    margin-bottom: 55px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
`

const Metrics = () => {
	return (
		<>
			<h3 className="section__title"><Trans i18nKey="description.metricsTitle"></Trans></h3>
			<MetricsStyle>
				<HighchartsReact
					highcharts={Highcharts}
					options={options}
					constructorType={"chart"}
				/>
			</MetricsStyle>
		</>
	)
}
export default Metrics