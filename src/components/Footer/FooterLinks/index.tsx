import Text from 'components/Text'
import Link from 'next/link'
import { Wrapper } from './styles'

export type FooterLinksProps = {
  title: string
  links: Array<{
    name: string
    url: string
  }>
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <Wrapper>
      <Text size="small" component="h4" color="text" weigth="bold">
        {title}
      </Text>
      <ul>
        {links.map(({ name, url }) => (
          <li key={name}>
            <Link href={url}>
              <a>
                <Text size="small" component="span" color="title">
                  {name}
                </Text>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

export default FooterLinks
