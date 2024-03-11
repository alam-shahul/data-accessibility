import { useState, useEffect, useRef } from 'react';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import { LineChart } from '@mui/x-charts/LineChart';

function AccessibleData(props) {
  const [graphDisplay, setGraphDisplay] = useState('none')
  return (
    <div className="visualization">
      <div className="visualization-title">
        <div className="visualization-header">
        Welcome to Data Visualization and Accessibility!
        </div>
      </div>
      <div className="accessible-data-text">
        <div>Instructions:</div>
        <ListItem sx={{ display: 'list-item' }}>Below is a hidden graph that can only be interpreted using an screenreader. After listening to the screenreader
		reading of the alt text, try drawing the graph yourself.</ListItem>
        <ListItem sx={{ display: 'list-item' }}>After you've tried drawing the graph, click this <Button variant="outlined" onClick={() => setGraphDisplay('block')}>button</Button> to see the original graph.</ListItem>
		<div className="visually-hidden" aria-label="A line chart showing the average popularity of Taylor Swift songs over the years
		according to public Spotify data. The year is plotted on the x-axis, and the average song popularity for that year is plotted
		on the y-axis. The line is blue, and the markers for each datapoint are white circles with blue outlines. There are datapoints
		for the following years: 2006, 2008, 2010, 2012, 2014, 2017, 2019, 2020, 2021, 2022 and 2023. The popularity at each year is,
		respectively, 62.93, 46.47, 51.82, 46.42, 56.81, 49.04, 82.33, 67.29, 72.49, 74.78 and 74.36.">
		</div>
      </div>
	  <LineChart sx={{ display: graphDisplay}} xAxis={[
	    	{
	  	  data: [2006, 2008, 2010, 2012, 2014, 2017, 2019, 2020, 2021, 2022, 2023 ],
        	  valueFormatter: (value) => value.toString(),
	  	  label: "Release Year"
	      }
	    ]}
	    yAxis={[
	      {
	  	  label: "Average Spotify Popularity",
	  	  min: 0
	    	}
	    ]}
	    series={[
	      {
	        data: [62.93, 46.47, 51.82, 46.42, 56.81, 49.04, 82.33, 67.29, 72.49, 74.78, 74.36],
	  	  label: "Taylor Swift Song Popularity Over the Years"
	      },
	    ]}
	    width={1000}
	    height={600}
	  />
    </div>
  );
}

export default AccessibleData;
