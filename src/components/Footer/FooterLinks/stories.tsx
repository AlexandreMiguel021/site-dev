import { Story, Meta } from '@storybook/react/types-6-0'
import FooterLinks, { FooterLinksProps } from '.'

const links = [
  {
    name: 'teste1',
    url: '/teste1'
  },
  {
    name: 'teste2',
    url: '/teste2'
  },
  {
    name: 'teste2',
    url: '/teste2'
  }
]

export default {
  title: 'FooterLinks',
  component: FooterLinks
} as Meta

export const Default: Story<FooterLinksProps> = (args) => (
  <FooterLinks {...args} />
)

Default.args = {
  title: 'Title Teste',
  links: links
}
