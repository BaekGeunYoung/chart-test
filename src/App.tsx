import React from 'react';
import BubbleChart from "./BubbleChart";
import PieChart from "./PieChart";
const _ = require('underscore');

const rawdata = _.map(_.range(50), () => {
    return {
        v: _.random(10, 100),
        label: 'javascript'
    };
});

const App: React.FC = () => {
  return (
    <div className="App">
      {/*<BubbleChart*/}
      {/*    data={rawdata}*/}
      {/*    width={800}*/}
      {/*    height={600}*/}
      {/*    useLabels={true}*/}
      {/*/>*/}
      <PieChart />
    </div>
  );
}

export default App;
