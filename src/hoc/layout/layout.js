import { nest } from 'recompose';
import Layout from '../../layout/DefaultLayout';

export const withDefaultLayout =
  ContentComponent =>
    nest(Layout, ContentComponent);
