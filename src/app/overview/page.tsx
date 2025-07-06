"use client"
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { IoTrendingUp } from "react-icons/io5";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  CoreChartOptions,
} from 'chart.js';
import { faker } from '@faker-js/faker';
import * as Utils from "../../utils/Utils"
import { ArcElement } from "chart.js/auto";
import { Icon } from "@/components/Icon";


export default function Home() {

  const FirstRow = [
    { title: "Views", count: 7654, change: "10%", className: "bg-primary/20" },
    { title: "Visits", count: 3121, change: "5%", className: "bg-secondary/10 " },
    { title: "New Users", count: 678, change: "2%", className: "bg-primary/20" },
    { title: "Active Users", count: 123, change: "6%", className: "bg-secondary/10" },
  ]

  return (
    <div className="flex-1 grid grid-cols-12 gap-7  items-start auto-rows-min">
      {FirstRow.map(({ title, count, change, className }) => (
        <BetoCard key={title} className={`col-span-6 lg:col-span-3 h-32 ${className} `} >
          <>
            <div className="font-semibold">{title}</div>
            <div className="text-2xl font-semibold flex gap-4 items-center">
              {count}
              <IoTrendingUp />
              <span className="text-lg font-extralight">{change}</span>
            </div>
          </>
        </BetoCard>
      ))}
      <BetoCard className="col-span-12 lg:col-span-9 h-82" >
        <>
          <div className="flex gap-2 items-center">
            <div className="font-semibold">{"Total Users"}</div>
            <div className="flex-1 flex gap-2 items-center">
              <button className="font-light text-sm px-4 py-1 text-forground/80 rounded-xl hover:bg-forground/10">{"Total Projects"}</button>
              <button className="font-light text-sm px-4 py-1 text-forground/80 rounded-xl hover:bg-forground/10">{"Operating Status"}</button>
              <div className="flex-1 flex items-center justify-center font-extralight text-sm select-none text-forground/50">{"|"}</div>
              <div className="flex items-center gap-8">
                <div className="font-extralight text-sm select-none flex items-center gap-1"> <span className="text-[#0000004d]"><Icon icon="GoDotFill" /></span>{"This year"}</div>
                <div className="font-extralight text-sm select-none flex items-center gap-1"><span className="text-[#aec7ed]"><Icon icon="GoDotFill" /></span>{"Last year"}</div>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            <TotalUser />
          </div>
        </>
      </BetoCard>
      <BetoCard className="col-span-12 lg:col-span-3 h-82" >
        <>
          <div className="font-semibold">{"Traffic by Website"}</div>
          {
            [
              { title: 'Google', max: 3 },
              { title: 'YouTube', max: 2 },
              { title: 'Instagram', max: 4 },
              { title: 'Pinterest', max: 2 },
              { title: 'Facebook', max: 1 },
              { title: 'Twitter', max: 1 },
            ].map(
              ({ title, max }) => (
                <div key={title} className="flex-1 grid grid-cols-2 items-center">
                  <div className="text-sm font-extralight">{title}</div>
                  <div className="flex gap-1">
                    {Array.from({ length: 4 }).map(
                      (_, index) => {
                        return (
                          <span key={index} className={`${max >= (index + 1) ? "bg-forground border-forground" : "bg-forground/20 border-forground/20"} w-4 h-[0.5] border`}></span>
                        )
                      }
                    )}
                  </div>
                </div>
              )
            )
          }
        </>
      </BetoCard>
      <BetoCard className="col-span-12 lg:col-span-6 h-70" >
        <>
          <div className="font-semibold">{"Traffic by Device"}</div>
          <div className="flex-1 overflow-hidden">
            <TrafficByDevice />
          </div>
        </>
      </BetoCard>
      <BetoCard className="col-span-12 lg:col-span-6 h-70" >
        <>
          <div className="font-semibold">{"Traffic by Location"}</div>
          <div className="flex-1 flex">
            <div className="flex-1 overflow-hidden">
              <TrafficByLocation />
            </div>
            <div className="flex-1 grid items-center grid-cols-2">
              {
                [{
                  text: 'United States',
                  value: '52%',
                  color: '#30799f',
                },
                {
                  text: 'Canada',
                  value: '22%',
                  color: '#ac51c3',
                },
                {
                  text: 'Mexico',
                  value: '13%',
                  color: '#4ba57b',
                },
                {
                  text: 'Other',
                  value: '11%',
                  color: '#e3297d',
                }].map(
                  ({ text, color, value }) => (
                    <>
                      <div className="col-span-1 flex gap-2 items-center"><span style={{ color: color }}><Icon icon="GoDotFill" /></span>{text}</div>
                      <div className="col-span-1">{value}</div>
                    </>
                  )
                )
              }
            </div>
          </div>
        </>

      </BetoCard>
      <BetoCard className="col-span-12 h-70" >
        <>
          <div className="font-semibold">{"Marketing & SEO"}</div>
          <TrafficByLocation />
        </>

      </BetoCard>
    </div>
  );
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);


function TotalUser({ width = null, height = null }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.3
      },
    },
    pointBackgroundColor: '#fff',
    radius: 0,
    interaction: {
      intersect: false,
    },
    scales: {
      y: {
        display: true,
        grid: {
          display: false
        },
        ticks: {
          stepSize: 2000,
          callback: Utils.ScaleYIntoK
        },
      },
      x: {
        grid: {
          display: false
        }
      },
    }
  }

  const labels = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
        borderColor: "rgba(0, 0, 0, 0.3)",
        borderWidth: 1,
        data: [2000, 6500, 7800, 6600, 5467, 5656, 6756, 7554],
        fill: true,
      },
      {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
        borderColor: "rgba(174, 199, 237, 1)",
        borderWidth: 1,
        borderDash: [2, 2],
        borderDashOffset: 1,
        data: [2000, 5500, 6000, 4356, 3489, 6903, 7884, 8533],
        fill: false,
      }
    ]
  }

  return (
    <Line  {...{ options, data, width, height }} />
  )
}


function TrafficByDevice() {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      scales: {

      }
    },
    scales: {
      y: {
        display: true,
        ticks: {
          stepSize: 1000,
          callback: Utils.ScaleYIntoK
        },
        grid: {
          display: false
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  const labels = ['Linux', 'Mac', 'iOS', 'Window', 'Android', 'Other'];

  const data = {
    labels,
    datasets: [
      {
        data: labels.map(() => faker.number.int({ min: 0, max: 5000 })),
        backgroundColor: ['#30799f', '#ac51c3', '#4ba57b', '#e3297d', '#e35c32', '#ac51c3',],
        borderColor: ['#30799f', '#ac51c3', '#4ba57b', '#e3297d', '#e35c32', '#ac51c3',],
        borderWidth: 2,
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  };

  return (
    <Bar options={options} data={data} />
  )
}

function TrafficByLocation() {

  const options = {

  };

  const labels = ['United States', 'Canada', 'Mexico', 'Other'];

  const data = {
    labels,
    datasets: [
      {
        data: [52, 22, 13, 11],
        backgroundColor: ['#30799f', '#ac51c3', '#4ba57b', '#e3297d',],
      },
    ],
  };

  return (
    <Doughnut options={{
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
          // position: 'left', // or 'right', 'top', 'bottom'
          // align: 'start' // or 'center', 'end'
        },
        title: {
          display: false,
        },

      }
    }} data={data} />
  )
}

export const BetoCard = ({ className, children = <></> }) => {
  return (
    <div className={`bg-forground/4 rounded-2xl flex flex-col gap-4 px-6 py-6 ${className}`}>
      {children}
    </div>
  )
}