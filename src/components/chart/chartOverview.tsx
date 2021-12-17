import React from "react";
import { useSelector } from "react-redux";
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts'
import SimpleAccordion from '../accordion/Accordion'; 
import './chartOverView.scss'; 



 function ChartOverview (props:any) {
    // getting covidCases and covidDates from redux state ; 
    let covidCases:any= useSelector((state:any)=>state.covid.cases); 
    let covidDates :any= useSelector((state:any)=>state.covid.dates);    
    // default react-apexcharts chart configurations ; 
    let options:any = {
    
      series: [{
          name: "Desktops",
          data: covidCases
      }],
      options: {
        chart: {
          height: 500,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'covid cases in Belgium  Graph  ',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: covidDates,
        }
      },
    
    
    };
        
   return(
     <div>
       <div className="row">
          <div id="chart" className="col">
              <Chart
                options={options.options}
                series={options.series}
                type="line"
                width="500"
              />
         
           </div>
           <div className="col">
              <Chart
                  options={options.options}
                  series={options.series}
                  type="bar"
                  width="500"
                />
           </div>
        </div>    
          <div className="row accordion">
            <SimpleAccordion/>
          </div>
       </div>

   )
  };

 
export default ChartOverview; 

