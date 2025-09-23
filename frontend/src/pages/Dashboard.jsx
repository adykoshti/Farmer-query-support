import React from 'react'
import { Line, Bar, Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend)

export default function Dashboard(){
  const labels = ['Apr1','Apr2','Apr3','Apr4','Apr5','Apr6','Apr7','Apr8','Apr9','Apr10','Apr11','Apr12']

  // Line chart: Temperature trends
  const tempData = {
    labels,
    datasets:[
      { 
        label:'Idukki',
        data: labels.map((_,i)=>20+Math.sin(i/2)*10+ i*2),
        fill:true,
        tension:0.4,
        borderColor:"rgba(54,162,235,1)",
        backgroundColor:"rgba(54,162,235,0.2)"
      },
      { 
        label:'Kannur',
        data: labels.map((_,i)=>15+Math.cos(i/2)*8 + i*1.5),
        fill:true,
        tension:0.4,
        borderColor:"rgba(255,99,132,1)",
        backgroundColor:"rgba(255,99,132,0.2)"
      },
      { 
        label:'Nagaroor',
        data: labels.map((_,i)=>10+Math.sin(i/3)*6 + i*1),
        fill:true,
        tension:0.4,
        borderColor:"rgba(75,192,192,1)",
        backgroundColor:"rgba(75,192,192,0.2)"
      }
    ]
  }

  // Bar chart: Crop Production
  const barData = {
    labels:['Minachill','Kannur','Idukki','Nagaroor','Kottayam'],
    datasets:[{
      label:'Production',
      data:[80,65,50,40,35],
      borderRadius:8,
      backgroundColor:[
        "rgba(255, 99, 132, 0.7)",
        "rgba(54, 162, 235, 0.7)",
        "rgba(255, 206, 86, 0.7)",
        "rgba(75, 192, 192, 0.7)",
        "rgba(153, 102, 255, 0.7)"
      ]
    }]
  }

  // Doughnut chart: Irrigation Sources
  const doughnutData = {
    labels:['Dust and Construction','Waste Burning','Transport','Diesel Generator','Industries','Domestic Cooking'],
    datasets:[{
      data:[15,10,8,12,5,50],
      backgroundColor:[
        "rgba(255, 99, 132, 0.7)",
        "rgba(54, 162, 235, 0.7)",
        "rgba(255, 206, 86, 0.7)",
        "rgba(75, 192, 192, 0.7)",
        "rgba(153, 102, 255, 0.7)",
        "rgba(255, 159, 64, 0.7)"
      ],
      borderColor:"#fff",
      borderWidth:2
    }]
  }

  return (
    <div className='dashboard'>
      <div className='grid'>
        <div className='card large'>
          <div className='card-title'>Temperature trends</div>
          <Line data={tempData} />
        </div>
        <div className='card'>
          <div className='card-title'>Crop Production Rates</div>
          <Bar data={barData} />
        </div>
        <div className='card'>
          <div className='card-title'>Irrigation Source Distribution</div>
          <Doughnut data={doughnutData} />
        </div>
      </div>
    </div>
  )
}
