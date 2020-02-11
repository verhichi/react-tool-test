import React from 'react'
import Chart from 'react-google-charts'
import { COLORS } from 'constants/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import './donut.css'

function Donut() {
  return (
    <div className="v-donut-cont d-flex flex-column bg-white rounded shadow-sm mb-3 mr-3">
      <div className="text-right text-muted mt-2">
        <span className="v-pointer px-3">
          <FontAwesomeIcon icon={faEllipsisV} />
        </span>
      </div>
      <div className="text-muted font-weight-bold mb-3 pl-4">
        Age Range of Active Users
      </div>
      <div className="flex-grow-1 position-relative">
        <div className="v-donut-center position-absolute">
          <div className="h5 m-0">9,524K</div>
          <div>Plays</div>
        </div>
        <Chart
          height={'100%'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Age', 'Count'],
            ['10~19', 10],
            ['20~29', 2],
            ['30~39', 7],
            ['40~49', 2],
            ['50~59', 2],
            ['60 or older', 5],
          ]}
          options={{
            backgroundColor: 'transparent',
            chartArea: {
              top: 10,
              width: '80%',
              height: '75%',
            },
            colors: COLORS.donut,
            // legend: 'none',
            legend: {
              position: 'bottom',
              alignment: 'center',
              maxLines: 3,
            },
            pieHole: 0.7,
            pieSliceText: 'none',
            // title: 'Age Range of Active Users',
            // titleTextStyle: {
            //   color: '#3c4859',
            //   fontName: 'Roboto',
            //   fontSize: 16,
            // },
          }}
        />
      </div>
    </div>
  )
}

export default Donut
