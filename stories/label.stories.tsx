import React from 'react';
import Label from '../components/atoms/Label';

export default {
  title: 'Label',
  component: Label,
};

export const BasicLabel = () => <Label color="red">Hello World</Label>;
export const BasicLabelStuff = () => <Label center={true}>Hello World</Label>;
