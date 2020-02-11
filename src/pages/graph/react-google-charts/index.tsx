import React from 'react'
import DonutChart from 'components/charts/googleCharts/donut'
import BarChart from 'components/charts/googleCharts/bar'
import ColumnChart from 'components/charts/googleCharts/column'
import GeoChart from 'components/charts/googleCharts/geo'

function GoogleCharts() {
  return (
    <div className="d-flex flex-wrap">
      <DonutChart />
      <BarChart />
      <ColumnChart />
      <GeoChart />
    </div>
  )
}

export default GoogleCharts
