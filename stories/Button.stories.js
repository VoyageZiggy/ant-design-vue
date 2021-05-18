import '../components/button/style/index.less';
import { Button as AButton } from '../components/index';

export default {
  title: 'Button',
  component: AButton,
  argTypes: {
    type: { control: { type: 'select', options: ['primary', 'dashed', 'danger', 'link'] } },
    shape: { control: { type: 'select', options: ['default', 'circle', 'round'] } },
    size: { control: { type: 'select', options: ['default', 'large', 'small'] } },
    loading: { control: { type: 'boolean' }, options: [false, true] },
    disabled: { control: { type: 'boolean' }, options: [false, true] },
    click: { action: 'click' }
  }
};
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AButton },
  template: '<a-button v-bind="$props" @click="click">{{ label }}</a-button>'
});

export const primary = Template.bind({});
primary.args = {
  type: 'primary',
  label: 'button',
  size: 'default'
};
