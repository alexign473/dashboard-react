import React from 'react';
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from '@syncfusion/ej2-react-schedule';

// project imports
import { scheduleData } from '../data/dummy';
import { Header } from '../components';
import { Layout } from '.';

export const Calendar = () => {
  return (
    <Layout>
      <Header category='App' title='Calendar' />
      <ScheduleComponent
        height='650px'
        eventSettings={{
          dataSource: scheduleData,
        }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </Layout>
  );
};
