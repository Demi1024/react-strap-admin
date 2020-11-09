import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React from 'react'

const options = {
  title: {
    text: 'My chart'
  },
  series: [{
    data: [1, 2, 3]
  }]
}

const Charts = () => {
    return(<div>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>)
}
export default Charts;
