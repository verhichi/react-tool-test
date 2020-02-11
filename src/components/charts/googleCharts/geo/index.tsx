import React from 'react'
import Chart from 'react-google-charts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import './geo.css'

function Geo() {
  return (
    <div className="v-geo-cont d-flex flex-column bg-white rounded shadow-sm mb-3 mr-3">
      <div className="text-right text-muted mt-2">
        <span className="v-pointer px-3">
          <FontAwesomeIcon icon={faEllipsisV} />
        </span>
      </div>
      <div className="text-muted font-weight-bold mb-3 pl-4">
        Areas with the Most Play Count
      </div>
      <Chart
        // width={'500px'}
        height={'100%'}
        chartType="GeoChart"
        mapsApiKey="AIzaSyDa6gDy-SfPKqmXKQQxGT-YgKnGn3ALuW4"
        data={[
          ['Province', 'Play Count'],
          ['hokkaido', 10],
          ['aomori', 20],
          ['iwate', 30],
          ['miyagi', 30],
          ['akita', 30],
          ['yamagata', 50],
          ['fukushima', 20],
          ['ibaraki', 20],
          ['tochigi', 20],
          ['gunma', 20],
          ['saitama', 210],
          ['chiba', 230],
          ['tokyo', 350],
          ['kanagawa', 250],
          ['niigata', 510],
          ['toyama', 50],
          ['ishikawa', 50],
          ['fukui', 10],
          ['yamanashi', 20],
          ['nagano', 510],
          ['gifu', 50],
          ['shizuoka', 50],
          ['aichi', 510],
          ['mie', 530],
          ['shiga', 750],
          ['kyoto', 450],
          ['osaka', 150],
          ['hyogo', 250],
          ['nara', 50],
          ['wakayama', 50],
          ['tottori', 50],
          ['shimane', 250],
          ['okayama', 530],
          ['hiroshima', 90],
          ['yamaguchi', 10],
          ['tokushima', 20],
          ['kagawa', 80],
          ['ehime', 20],
          ['kochi', 50],
          ['fukuoka', 50],
          ['saga', 50],
          ['nagasaki', 50],
          ['kumamoto', 50],
          ['oita', 50],
          ['miyazaki', 50],
          ['kagoshima', 50],
          ['okinawa', 50],
        ]}
        options={{
          region: 'JP',
          datalessRegionColor: 'transparent',
          backgroundColor: 'transparent',
          displayMode: 'regions',
          resolution: 'provinces',
        }}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      />
    </div>
  )
}

export default Geo
