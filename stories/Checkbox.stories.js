import '../components/checkbox/style/index.less';
import { Checkbox as ACheckbox } from '../components/index';

export default {
  title: 'Checkbox',
  component: ACheckbox,
  argTypes: {
    checked: { control: { type: 'boolean' }, options: [false, true] },
    disabled: { control: { type: 'boolean' }, options: [false, true] },
    change: { action: 'change' }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ACheckbox },
  template: '<a-checkbox @change="change" v-bind="$props">{{ label }}</a-checkbox>'
});

export const primary = Template.bind({});
primary.args = {
  label: 'checkbox'
};
