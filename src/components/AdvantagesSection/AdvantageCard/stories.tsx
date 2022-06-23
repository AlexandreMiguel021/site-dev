import { Story, Meta } from '@storybook/react/types-6-0'
import { BagIcon } from 'assets/icons'
import AdvantageCard, { AdvantageCardProps } from '.'

export default {
  title: 'AdvantageCard',
  component: AdvantageCard
} as Meta

export const Default: Story<AdvantageCardProps> = (args) => (
  <AdvantageCard {...args} />
)

Default.args = {
  icon: <BagIcon />,
  title: 'Gestão de Compras',
  description:
    'Reduza o custo e aumente a agilidade no processo de compras! Selecione somente os produtos necessários e na quantidade adequada. Escolha os melhores fornecedores e tenha o equilíbrio financeiro entre recebimentos e pagamentos.'
}
