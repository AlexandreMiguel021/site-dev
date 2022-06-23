import { Story, Meta } from '@storybook/react/types-6-0'
import Header, { HeaderProps } from '.'

export default {
  title: 'Header',
  component: Header
} as Meta

export const Default: Story<HeaderProps> = (args) => <Header {...args} />

Default.args = {
  title: 'A conta digital que sua empresa merece.',
  description:
    'Já imaginou ter uma conta com opção de boletos, cartão de crédito, pix e links de pagamentos, sem a necessidade de contratar com um banco? Com a conta digital da EGS Sistemas você conta com tudo isso.',
  img: '/img/headerImg.png',
  alt: 'alt img...',
  primaryBtnTxt: 'Experimente Grátis',
  secondBtnTxt: 'Fale Conosco'
}
