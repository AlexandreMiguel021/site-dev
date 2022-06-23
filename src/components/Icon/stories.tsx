import { CheckmarkFilled16 } from '@carbon/icons-react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Icon, { IconProps } from 'components/Icon'

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<IconProps> = (args) => <Icon {...args} />

Default.args = {
  bgColor: 'success',
  children: <CheckmarkFilled16 />,
  size: 'medium'
}
