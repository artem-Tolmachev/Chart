import * as React from 'react';
import { useKlines } from '../../hooks/useKlines';
import {  CandlestickSeries, ColorType, createChart, HistogramSeries } from 'lightweight-charts';
import { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import { useAppSelector } from 'store/store';
import { InitiaLChartSettings } from 'types';

function Chart() {
    const chart = useRef<HTMLDivElement | null>(null);
    const chartSettings = useAppSelector<InitiaLChartSettings>((store) => store.coins.chartSettings)
    const { data, volume } = useKlines(chartSettings);
    const memoizedData = React.useMemo(() => data, [JSON.stringify(data)]);
    const memoizedVolume = React.useMemo(() => volume, [JSON.stringify(volume)]);

    useEffect(() => {
        if (!chart.current) return;
        const chartOptions = {
            layout: {
                textColor: '#fff',
                background: { type: ColorType.Solid, color: '#131722', fontSize: 20 }
            },
            grid: {
                vertLines: {
                    color: 'rgba(255,255,255,0.1)', // "толще" выглядит с меньшей прозрачностью
                    style: 0, // 0: Solid, 1: Dotted, 2: Dashed
                    visible: true,
                },
                horzLines: {
                    color: 'rgba(255,255,255,0.1)',
                    style: 0,
                    visible: true,
                }
            }

        };

        const Chart = createChart(chart.current, chartOptions);
        const candlestickSeries = Chart.addSeries(CandlestickSeries, { upColor: '#26a69a', downColor: '#ef5350', borderVisible: false, wickUpColor: '#26a69a', wickDownColor: '#ef5350' });

        const histogramSeries = Chart.addSeries(HistogramSeries, {
            priceFormat: {
                type: 'volume'
            },
            priceScaleId: '',
            color: '#26a69a'
        });
        histogramSeries.priceScale().applyOptions({
            scaleMargins: {
                top: 0.9,
                bottom: 0
            }
        })
        histogramSeries.setData(volume);
        candlestickSeries.setData(data);
        Chart.timeScale().fitContent();

        return () => {
            Chart.remove()
        }
    }, [memoizedData, memoizedVolume])


    return (
        <>
            <div className={styles.section}>
                <div className={styles.wrapper}>
                    <div className={styles.chart} ref={chart} >                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chart;