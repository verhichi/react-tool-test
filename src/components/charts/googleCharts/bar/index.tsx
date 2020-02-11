import React from 'react'
import Chart from 'react-google-charts'
import { COLORS } from 'constants/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import './bar.css'

function Bar() {
  return (
    <div className="v-bar-cont d-flex flex-column bg-white rounded shadow-sm mb-3 mr-3">
      <div className="text-right text-muted mt-2">
        <span className="v-pointer px-3">
          <FontAwesomeIcon icon={faEllipsisV} />
        </span>
      </div>
      <div className="text-muted font-weight-bold mb-3 pl-4">
        Gender Ratio per Channel
      </div>
      <Chart
        height={'100%'}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Channel', 'Female', 'Male', 'Others'],
          ['App', 1.6, 1.1, 0.6],
          ['Web', 0.7, 0.6, 0.3],
          ['Profile', 0.6, 1.1, 0.4],
          ['Ringtone', 1.6, 0.5, 0.2],
          ['Notification', 0.5, 0.2, 0.3],
          ['Others', 0.6, 0.7, 0.4],
        ]}
        options={{
          backgroundColor: 'transparent',
          bar: {
            groupWidth: 10,
          },
          chartArea: {
            left: 80,
            top: 0,
            width: '60%',
            height: '75%',
          },
          colors: COLORS.bar,
          hAxis: {
            baselineColor: '#d8d8d8',
            gridlines: {
              color: '#d8d8d8',
            },
            textStyle: {
              color: '#6c757d',
              fontName: 'Roboto',
            },
            ticks: [0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5],
          },
          vAxis: {
            textStyle: {
              color: '#6c757d',
              fontName: 'Roboto',
            },
          },
          isStacked: true,
          // legend: 'none',
          legend: {
            position: 'bottom',
            alignment: 'center',
            textStyle: {
              color: '#6c757d',
              fontName: 'Roboto',
            },
          },
          // title: 'Age Range of Active Users',
          // titleTextStyle: {
          //   color: '#3c4859',
          //   fontName: 'Roboto',
          //   fontSize: 16,
          // },
        }}
      />
    </div>
  )
}

export default Bar
