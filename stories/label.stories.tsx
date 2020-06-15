import React from 'react';
import { action } from '@storybook/addon-actions';
import Label from '../components/atoms/label';

export default {
  title: 'Label',
  component: Label,
};

export const BasicLabel = () => <Label>Hello World</Label>;
export const BasicLabelStuff = () => <Label stuff=" Stuff">Hello World</Label>;
