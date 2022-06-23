import { Story, Meta } from '@storybook/react/types-6-0'
import CardsBenefits, { CardsBenefitsProps } from '.'

const texts = [
  'Automatiza a gestão de cobrança online;',
  'Gerencie os pagamentos cobrados e recebidos;',
  'Automatiza a gestão de cobrança online;',
  'Emissão de boletos bancários personalizados com logomarca;'
]

export default {
  title: 'CardsBenefits',
  component: CardsBenefits
} as Meta

export const Default: Story<CardsBenefitsProps> = (args) => (
  <CardsBenefits {...args} />
)

Default.args = {
  texts: texts
}
