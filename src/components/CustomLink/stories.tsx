import { Story, Meta } from '@storybook/react/types-6-0'
import CustomLink, { LinkProps } from '.'

export default {
  title: 'CustomLink',
  component: CustomLink,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<LinkProps> = (args) => <CustomLink {...args} />

Default.args = {
  children: 'Link',
  url: '/'
}
