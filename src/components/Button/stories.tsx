import { Story, Meta } from '@storybook/react/types-6-0'
import { CloseOutline16 } from '@carbon/icons-react'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Solicite uma ligação',
    fullWidth: false,
    bgcolor: 'primary',
    size: 'medium'
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  icon: <CloseOutline16 />
}
