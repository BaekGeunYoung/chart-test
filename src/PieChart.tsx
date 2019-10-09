import React from 'react'
import CanvasJSReact from './canvasjs-2.3.2/canvasjs.react';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChart extends React.Component {
    render() {
        const options = {
            title: {
                text: "Basic Column Chart in React"
            },
            data: [{
                type: "pie",
                toolTipContent: "{label}: <strong>{y}%</strong>",
                indexLabelPlacement: "inside",
                dataPoints: [
                    {label: "Apple", y: 10},
                    {label: "Orange", y: 15},
                    {label: "Banana", y: 25},
                    {label: "Mango", y: 30},
                    {label: "Grape", y: 28}
                ]
            }]
        }

        return (
            <div>
                <div style={{'width' : '50%', 'display' : 'inline-block'}}>
                    <CanvasJSChart options={options}
                    />
                </div>
                <div style={{'width' : '50%', 'display' : 'inline-block'}}>
                    <CanvasJSChart options={options}
                    />
                </div>
                <div style={{'width' : '50%', 'display' : 'inline-block'}}>
                    <CanvasJSChart options={options}
                    />
                </div>
                <div style={{'width' : '50%', 'display' : 'inline-block'}}>
                    <CanvasJSChart options={options}
                    />
                </div>
            </div>
        );
    }
}

export default PieChart;