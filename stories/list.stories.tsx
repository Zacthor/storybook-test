import React from 'react';
import List from '../components/molecules/list/List';

export default {
  title: 'List',
  component: List,
};

export const BasicList = () => <List items={['abc', '123']} />;
