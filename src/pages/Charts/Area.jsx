import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  SplineAreaSeries,
} from '@syncfusion/ej2-react-charts';

// project import
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';

export const Area = () => {
  const { currentMode } = useStateContext();
  return (
    <div
      className='mt-4 md:m-10 mt-24 p-10
    bg-white dark:bg-secondary-dark-bg rounded-3xl'
    >
      <ChartsHeader category='Area' title='Inflation Rate in Percentage' />
      <ChartComponent
        id='line-chart'
        height='420px'
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{
          border: {
            width: 0,
          },
        }}
        tooltip={{
          enable: true,
        }}
        background={currentMode === 'Dark' ? '#33373e' : '#fff'}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, i) => (
            <SeriesDirective key={i} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};
