import React from 'react'
import Chart from 'react-google-charts'
import { COLORS } from 'constants/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import './column.css'

function HBar() {
  return (
    <div className="v-column-cont d-flex flex-column bg-white rounded shadow-sm mb-3 mr-3">
      <div className="text-right text-muted mt-2">
        <span className="v-pointer px-3">
          <FontAwesomeIcon icon={faEllipsisV} />
        </span>
      </div>
      <div className="text-muted font-weight-bold mb-3 pl-4">
        Monthly Play Count by Age Group
      </div>
      <Chart
        height={'100%'}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Month', '10~19', '20~29', '30~39', '40~49', '50~59', 'Others'],
          ['Jan', 135, 123, 56, 34, 12, 3],
          ['Feb', 89, 157, 54, 67, 2, 23],
          ['Mar', 56, 98, 56, 23, 99, 44],
          ['Apr', 12, 23, 56, 2, 91, 100],
          ['May', 123, 76, 34, 87, 91, 42],
          ['Jun', 34, 45, 45, 56, 12, 88],
          ['Jul', 88, 124, 33, 88, 4, 82],
          ['Aug', 88, 124, 33, 88, 4, 82],
          ['Sep', 88, 124, 33, 88, 4, 82],
          ['Oct', 88, 124, 33, 88, 4, 82],
          ['Nov', 88, 124, 33, 88, 4, 82],
          ['Dec', 88, 124, 33, 88, 4, 82],
        ]}
        options={{
          backgroundColor: 'transparent',
          bar: {
            groupWidth: 10,
          },
          chartArea: {
            left: 70,
            top: 10,
            width: '80%',
            height: '70%',
          },
          colors: COLORS.column,
          hAxis: {
            baselineColor: '#d8d8d8',
            gridlines: {
              color: '#d8d8d8',
            },
            textStyle: {
              color: '#6c757d',
              fontName: 'Roboto',
            },
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

export default HBar
