import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { OhrmButtonComponent } from '../app/ohrm-button/ohrm-button.component';

export default {
  title: 'ohrm-button',
  component: OhrmButtonComponent,
} as Meta;

const Template: Story<OhrmButtonComponent> = (args: OhrmButtonComponent) => ({
  component: OhrmButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};