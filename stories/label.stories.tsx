import React from 'react';
import Label from '../components/atoms/label/Label';

export default {
  title: 'Label',
  component: Label,
};

export const BasicLabel = () => <Label>Hello World</Label>;
export const BasicLabelStuff = () => <Label stuff=" Stuff">Hello World</Label>;
