import React from 'react'
import Chart from 'react-apexcharts'

function Bar() {
  const state = {
    options: {
      chart: {
        // stacked: true,
        toolbar: {
          show: false,
        },
      },
      title: {
        text: 'Age Range of Active Users',
      },
      labels: ['10~19', '20~29', '30~39', '40~49', '50~59', '60 or older'],
      // xaxis: {
      //   categories: [
      //     'App',
      //     'Web',
      //     'Profile',
      //     'Ringtone',
      //     'Notification',
      //     'Others',
      //   ],
      // },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              // name: {
              //   show: false,
              // },
              // value: {
              //   show: false,
              // },
              total: {
                show: true,
                showAlways: true,
              },
            },
          },
        },
        // bar: {
        //   horizontal: true,
        //   // endingShape: 'rounded',
        // },
      },
      legend: {
        position: 'bottom',
        // itemMargin: {
        //   vertical: 100,
        // },
      },
    },
    series: [10, 2, 7, 2, 2, 5],
  }

  return (
    <div className="rounded shadow-sm bg-white p-2 mb-3 mr-3">
      <Chart
        options={state.options}
        series={state.series}
        type="donut"
        width="500"
      />
    </div>
  )
}

export default Bar
