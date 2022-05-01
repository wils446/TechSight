import { Technology } from "../../common/interface/DataTyping";
import { Chart } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";
import React from "react";
import { ChartJSOrUndefined } from "react-chartjs-2/dist/types";

type ChartProps = {
    data: Technology[];
    category: keyof Technology;
    chartRef: React.RefObject<ChartJSOrUndefined<"line", string[], string>>;
};

const LineChart: React.FC<ChartProps> = ({ data, category, chartRef }) => {
    const chartData: ChartData<"line", string[], string> = {
        labels: Object.keys(data[0].loved),
        datasets: [
            ...data.map((data) => {
                const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
                return {
                    label: data.name,
                    data: [...Object.values(data[category]).map((d) => d.value)],
                    borderColor: color,
                    backgroundColor: color,
                    fill: false,
                };
            }),
        ],
    };

    const chartOptions: ChartOptions = {
        responsive: true,
        interaction: {
            mode: "nearest",
        },
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    title: (tooltipItems) => {
                        return `Year : ${tooltipItems[0].label}`;
                    },
                },
                mode: "index",
                intersect: false,
            },
        },
        hover: {
            mode: "nearest",
            intersect: false,
        },
        elements: {
            line: {
                tension: 0.1,
            },
        },
    };

    return <Chart className="line-chart" type="line" data={chartData} ref={chartRef} options={chartOptions} />;
};

export default LineChart;
