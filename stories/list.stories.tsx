import React from 'react';
import List from '../components/molecules/List';

export default {
  title: 'List',
  component: List,
};

export const BasicList = () => <List items={['abc', '123']} />;
