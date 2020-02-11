import React from 'react'
import Chart from 'react-apexcharts'

function Bar() {
  const state = {
    options: {
      chart: {
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      title: {
        text: 'Gender Ratio per Channel',
      },
      xaxis: {
        categories: [
          'App',
          'Web',
          'Profile',
          'Ringtone',
          'Notification',
          'Others',
        ],
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          // endingShape: 'rounded',
        },
      },
    },
    series: [
      {
        name: 'Female',
        data: [1.6, 0.7, 0.6, 1.6, 0.5, 0.6],
      },
      {
        name: 'Male',
        data: [1.1, 0.6, 1.1, 0.5, 0.2, 0.7],
      },
      {
        name: 'Others',
        data: [0.6, 0.3, 0.4, 0.2, 0.3, 0.4],
      },
    ],
  }

  return (
    <div className="rounded shadow-sm bg-white p-2 mb-3 mr-3">
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width="500"
      />
    </div>
  )
}

export default Bar
