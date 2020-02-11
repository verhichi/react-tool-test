import React from 'react'
import BarChart from 'components/charts/apexCharts/bar'
import DonutChart from 'components/charts/apexCharts/donut'

function ApexCharts() {
  return (
    <div className="d-flex flex-wrap">
      <DonutChart />
      <BarChart />
    </div>
  )
}

export default ApexCharts
