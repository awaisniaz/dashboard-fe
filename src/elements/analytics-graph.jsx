import { Pie } from '@ant-design/plots';
import { Column } from '@ant-design/plots';
import { Spin } from 'antd';
// eslint-disable-next-line react/prop-types
function AnalyticsGraph({type,loading,data,title,description}) {
    const config1 = {
     data:data,
          height:342,
          width:330,
        xField: 'type',
        yField: 'value',
        paddingRight:10,
        style: {
          fill: ({ value }) => {
            if (value >= 4) {
              return '#51cf66';
            }
            else if(value == 3){
              return '#ffd43b'
            }
            return '#ff922b';
          },
        },
        label: {
          text: (originData) => {
            const val = parseFloat(originData.value);
            if (val < 0.05) {
              return (val * 100).toFixed(1) + '%';
            }
            return originData.value;
          },
          offset: 5,
        },
        legend: true,
      };
    const config = {
        data:data,
        angleField: 'value',
        colorField: 'type',
        paddingRight: 40,
        height:380,
        width:270,
        style: {
          fill: ({ value }) => {
            if (value >= 4) {
              return '#51cf66';
            }
            else if(value == 3){
              return '#ffd43b'
            }
            return '#ff922b';
          },
        },
        innerRadius: 0.6,
        label: {
          text: 'value',
          style: {
            fontWeight: 'bold',
          },
        },
        legend: {
          color: {
            title: true,
            position: 'right',
            rowPadding: 2,
          },
        },
        annotations: [
          {
            type: 'text',
            style: {
              text: 'FSS Score',
              x: '50%',
              y: '50%',
              textAlign: 'center',
              fontSize: 10,
            },
          },
        ],
      };
  return (
    <div className="analytics-control">
      <div className="analytics-title">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="graph">
      {loading ?  <Spin></Spin>:type 
      === 'pie' ? <Pie {...config} />:<Column {...config1} />}
      </div>
    </div>
  );
}

export default AnalyticsGraph;
