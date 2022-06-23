import { CheckmarkFilled16 } from '@carbon/icons-react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Icon from 'components/Icon'
import Text, { TypographyProps } from '.'

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<TypographyProps> = (args) => <Text {...args} />

Default.args = {
  children:
    'Empresas estão simplificando suas rotinas com o software da EGS Sistemas. Temos Orgulho em ser a solução escolhida por milhares de empresários.'
}

export const withIcon: Story<TypographyProps> = (args) => <Text {...args} />
withIcon.args = {
  withIcon: (
    <Icon size={'small'} bgColor="success">
      <CheckmarkFilled16 />
    </Icon>
  ),
  children:
    'Automatizamos seu processo de cobrança para diminuir sua inadimplência'
}
