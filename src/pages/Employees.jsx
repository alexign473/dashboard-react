import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Inject,
  Toolbar,
} from '@syncfusion/ej2-react-grids';

import { employeesData, contextMenuItems, employeesGrid } from '../data/dummy';
import { Header } from '../components';
import { Layout } from '.';

export const Employees = () => {
  return (
    <Layout>
      <Header category='Page' title='Employees' />
      <GridComponent
        id='gridcomp'
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width='auto'
      >
        <ColumnsDirective>
          {employeesGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </Layout>
  );
};
