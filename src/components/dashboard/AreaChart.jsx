import React, { useEffect, useRef } from "react";
import { createChart, AreaSeries } from "lightweight-charts";
import styles from "./AreaChart.module.css";

const AreaChart = ({ data, title = "Evolución de datos" }) => {
  const containerRef = useRef(null);
  const chartRef = useRef(null);
  const seriesRef = useRef(null);
  const resizeObserverRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Crear el gráfico
    const chart = createChart(container, {
      width: container.clientWidth,
      height: container.clientHeight,
      layout: {
        background: { type: "solid", color: "transparent" },
        textColor: "rgba(200, 255, 230, 0.9)",
      },
      grid: {
        vertLines: { color: "rgba(83, 239, 143, 0.05)" },
        horzLines: { color: "rgba(83, 239, 143, 0.05)" },
      },
      rightPriceScale: {
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
      },
      crosshair: {
        mode: 0,
      },
    });

    chartRef.current = chart;

    const areaSeries = chart.addSeries(AreaSeries, {
      lineColor: "#53EF8F",
      topColor: "rgba(83, 239, 143, 0.3)",
      bottomColor: "rgba(83, 239, 143, 0.02)",
      lineWidth: 2,
    });

    seriesRef.current = areaSeries;

    const defaultData = [
      { time: "2025-10-21", value: 25.5 },
      { time: "2025-10-22", value: 29.1 },
      { time: "2025-10-23", value: 23.7 },
      { time: "2025-10-24", value: 36.8 },
      { time: "2025-10-25", value: 34.2 },
      { time: "2025-10-26", value: 28.6 },
      { time: "2025-10-27", value: 32.4 },
      { time: "2025-10-28", value: 27.9 },
      { time: "2025-10-29", value: 57.9 },
      { time: "2025-10-30", value: 37.9 },
      { time: "2025-10-31", value: 17.9 },
      { time: "2025-11-01", value: 77.9 },
      { time: "2025-11-02", value: 7.9 },
    ];

    areaSeries.setData(data ?? defaultData);
    chart.timeScale().fitContent();

    const handleResize = () => {
      chart.applyOptions({
        width: container.clientWidth,
        height: container.clientHeight,
      });
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(container);
    resizeObserverRef.current = ro;

    return () => {
      ro.disconnect();
      chart.remove();
    };
  }, [data]);

  return (
    <div className={styles.card}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.container}>
        <div ref={containerRef} className={styles.chartContainer} />
      </div>
    </div>
  );
};

export default AreaChart;
