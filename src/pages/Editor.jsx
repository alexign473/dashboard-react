import React from 'react';
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from '@syncfusion/ej2-react-richtexteditor';

// project imports
import { EditorData } from '../data/dummy';
import { Header } from '../components';
import { Layout } from '.';

export const Editor = () => {
  return (
    <Layout>
      <Header category='App' title='Editor' />
      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </Layout>
  );
};
