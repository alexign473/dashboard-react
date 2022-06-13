import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from '@syncfusion/ej2-react-grids';

// project imports
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';
import { Layout } from '.';

export const Customers = () => {
  return (
    <Layout>
      <Header category='Page' title='Customers' />
      <GridComponent
        id='gridcomp'
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{
          allowDeleting: true,
          allowEditing: true,
        }}
        width='auto'
      >
        <ColumnsDirective>
          {customersGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </Layout>
  );
};
