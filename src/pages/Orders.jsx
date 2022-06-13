import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from '@syncfusion/ej2-react-grids';

// project imports
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';
import { Layout } from '.';

export const Orders = () => {
  return (
    <Layout>
      <Header category='Page' title='Orders' />
      <GridComponent id='gridcomp' dataSource={ordersData} allowPaging allowSorting>
        <ColumnsDirective>
          {ordersGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]}
        />
      </GridComponent>
    </Layout>
  );
};
