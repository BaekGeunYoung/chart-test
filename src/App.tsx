import React from 'react';
import BubbleChart from "./BubbleChart";
const _ = require('underscore');

const rawdata = _.map(_.range(50), () => {
    return {
        v: _.random(10, 100)
    };
});

const App: React.FC = () => {
  return (
    <div className="App">
      <BubbleChart
          data={rawdata}
          width={800}
          height={600}
          useLabels={true}
      />
    </div>
  );
}

export default App;
