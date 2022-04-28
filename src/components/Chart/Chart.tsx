import { Technology } from "../../common/interface/DataTyping";
import { Chart } from "react-chartjs-2";
import { ChartData } from "chart.js";
import React from "react";
import { ChartJSOrUndefined } from "react-chartjs-2/dist/types";

type ChartProps = {
    data: Technology[];
    category: keyof Technology;
    chartRef: React.RefObject<ChartJSOrUndefined<"line", string[], string>>;
};

function LineChart({ data, category, chartRef }: ChartProps): JSX.Element {
    const chartData: ChartData<"line", string[], string> = {
        labels: Object.keys(data[0].loved),
        datasets: [
            ...data.map((data) => {
                return {
                    label: data.name,
                    data: [...Object.values(data[category]).map((d) => d.value)],
                    backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
                    borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
                };
            }),
        ],
    };

    return <Chart type="line" id="line-chart" data={chartData} ref={chartRef} options={{}} />;
}

export default LineChart;
