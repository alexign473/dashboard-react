import React from 'react';
import { KanbanComponent, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-kanban';

// project imports
import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';
import { Layout } from '.';

export const Kanban = () => {
  return (
    <Layout>
      <Header category='App' title='Kanban' />
      <KanbanComponent
        id='kanban'
        dataSource={kanbanData}
        cardSettings={{
          contentField: 'Summary',
          headerField: 'Id',
        }}
        keyField='Status'
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </Layout>
  );
};
