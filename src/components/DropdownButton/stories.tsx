import { Story, Meta } from '@storybook/react/types-6-0'
import { JobIcon } from 'assets/icons'
import DropdownButton, { DropdownButtonProps } from '.'

export default {
  title: 'DropdownButton',
  component: DropdownButton
} as Meta

export const Default: Story<DropdownButtonProps> = (args) => (
  <DropdownButton {...args} />
)

export const WithExternalLink: Story<DropdownButtonProps> = (args) => (
  <DropdownButton {...args} />
)

Default.args = {
  title: 'Trabalhe Conosco',
  url: '/',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
  icon: <JobIcon />
}

WithExternalLink.args = {
  title: 'Trabalhe Conosco',
  url: '/',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
  icon: <JobIcon />,
  withIconLink: true
}
