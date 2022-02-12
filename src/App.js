import React from "react";
import "./App.css";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import ReactTooltip from "react-tooltip";

const App = () => {
  return (
    <div className="container">
      <h1>react-calendar-heatmap</h1>
      <div>
        <CalendarHeatmap
          // 表示させる月
          startDate={new Date("2022-01-01")}
          endDate={new Date("2022-12-31")}

          values={[
            { date: "2022-01-03", count: 1 },
            { date: "2022-02-22", count: 2 },
            { date: "2022-03-29", count: 4 },
            { date: '2022-04-01', count: 1 },
            { date: '2022-10-03', count: 2 },
            { date: '2022-10-06', count: 3 },
            { date: '2022-10-10', count: 4 },
            { date: '2022-10-07', count: 1 },
            { date: '2022-09-15', count: 3 },
            // ...and so on
          ]}

          // color
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            return `color-scale-${value.count}`;
          }}
          tooltipDataAttrs={(value) => {
            if (!value || !value.date) {
              return null;
            }
            // react-tooltipの構成
            return {
              "data-tip": `${value.date} has count: ${
                value.count
              }`,
            };
          }}
        />
      </div>
      <ReactTooltip />
    </div>
  );
};

export default App;
