import { Chart, ChartData, registerables } from "chart.js";
import { useRef, useEffect } from "react";
import { YearsData } from "../../common/interfaces/DataTyping";

type BarChartProps = {
    data: YearsData;
    color: string;
};

export default function BarChart({ data, color }: BarChartProps): JSX.Element {
    const formatData = (data: YearsData): ChartData => ({
        labels: Object.keys(data),
        datasets: [
            {
                data: Object.values(data).map((d) => d.value),
                backgroundColor: color,
                borderColor: color,
            },
        ],
    });

    const chartRef = useRef<Chart | null>();

    Chart.register(...registerables);
    const canvasCallback = (canvas: HTMLCanvasElement | null) => {
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (ctx) {
            if (chartRef.current) chartRef.current.destroy();
            chartRef.current = new Chart(ctx, {
                type: "bar",
                data: formatData(data),
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            grid: {
                                display: false,
                            },
                        },
                        y: {
                            grid: {
                                display: false,
                            },
                        },
                    },
                    plugins: {
                        legend: { display: false },
                    },
                },
            });
        }
    };

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.data = formatData(data);
            chartRef.current.update();
        }
    }, [data]);

    return (
        <div>
            <canvas ref={canvasCallback}></canvas>
        </div>
    );
}
