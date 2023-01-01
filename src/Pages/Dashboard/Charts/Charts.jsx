import React, { PureComponent } from "react";
import { ResponsiveContainer, PieChart, Pie, Legend } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

export default class Example extends PureComponent {
  // static demoUrl =
  //   "https://codesandbox.io/s/pie-chart-in-responsive-container-qyv6t";

  render() {
    return (
      <div>
        {/* <div style={{ width: "100%", height: 300, overflow: "hidden" }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie dataKey="value" data={data} fill="#8884d8" label />
            </PieChart>
          </ResponsiveContainer>
        </div> */}
        <h1 className="font-semibold text-5xl text-center mt-4">Welcome</h1>
      </div>
    );
  }
}
