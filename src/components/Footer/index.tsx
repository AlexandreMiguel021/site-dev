import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  WppIcon,
  YoutubeIcon
} from 'assets/icons'
import CustomLink from 'components/CustomLink'
import Logo from 'components/Logo'
import Text from 'components/Text'
import { memo } from 'react'
import FooterLinks from './FooterLinks'
import {
  Address,
  Col,
  Contacts,
  Container,
  Footer as FooterStyle,
  Icons,
  WrapperLinks
} from './styles'

const links = {
  empresa: [
    {
      name: 'Planos',
      url: '/planos'
    },
    {
      name: 'Quem somos',
      url: '/quem-somos'
    },
    {
      name: 'Trabalhe Conosco',
      url: '/trabalhe-conosco'
    },
    {
      name: 'Contatos',
      url: '/contatos'
    },
    {
      name: 'Manual',
      url: '/manual'
    }
  ],
  lgpd: [
    {
      name: 'Política de privacidade',
      url: '/politica-de-privacidade'
    },
    {
      name: 'Termos de uso',
      url: '/termos-de-usu'
    }
  ],
  solutions: [
    {
      name: 'Emissor de NFe, NFSe, NFCe e MDFe',
      url: '/emissor-NF'
    },
    {
      name: 'Sistema ERP',
      url: '/sistema-erp'
    },
    {
      name: 'PDV - Frente de Caixa',
      url: '/pdv'
    },
    {
      name: 'Ecommerce',
      url: '/ecommerce'
    },
    {
      name: 'Emissor GTVe',
      url: '/emissor-gtve'
    },
    {
      name: 'Emissor CTe OS',
      url: '/emissor-cte-os'
    },
    {
      name: 'Emissor CTe/MDFe',
      url: '/emissor-cte-mdfe'
    },
    {
      name: 'Conta digital',
      url: '/conta-digital'
    },
    {
      name: 'Certificado digital',
      url: '/certificado-digital'
    }
  ]
}

const Footer = () => (
  <FooterStyle>
    <Container>
      <Col>
        <Logo />
        <Icons>
          <CustomLink url="facebook">
            <FacebookIcon />
          </CustomLink>
          <CustomLink url="Whatsapp">
            <WppIcon />
          </CustomLink>
          <CustomLink url="Instagram">
            <InstagramIcon />
          </CustomLink>
          <CustomLink url="Linkedin">
            <LinkedinIcon />
          </CustomLink>
          <CustomLink url="Youtube">
            <YoutubeIcon />
          </CustomLink>
        </Icons>
        <Contacts>
          <div>
            <Text size="small" color="title" weigth="normal">
              Capitais:
            </Text>
            <CustomLink
              color="title"
              url="tel:5540072642"
              weigth="bold"
              size="small"
            >
              4007-2642
            </CustomLink>
          </div>
          <div>
            <Text size="small" color="title" weigth="normal">
              Demais regiões:
            </Text>
            <CustomLink
              color="title"
              url="tel:08000012642"
              weigth="bold"
              size="small"
            >
              0800 001 2642
            </CustomLink>
          </div>
          <div>
            <Text size="small" color="title" weigth="normal">
              Whatsapp:
            </Text>
            <CustomLink
              color="title"
              url="https://api.whatsapp.com/send?phone=5541987714503"
              weigth="bold"
              size="small"
              target="_blank"
            >
              (41) 99890-7666
            </CustomLink>
          </div>
        </Contacts>
      </Col>
      <WrapperLinks>
        <Col>
          <FooterLinks title="Empresa" links={links.empresa} />
        </Col>
        <Col>
          <FooterLinks title="LGPD" links={links.lgpd} />
        </Col>
        <Col>
          <FooterLinks title="Empresa" links={links.solutions} />
        </Col>
      </WrapperLinks>
    </Container>
    <Address>
      <Text component="span" size="small" color="title">
        © 2021 Direitos Reservados - EGS Sistemas
      </Text>
      <Text component="span" size="small" color="title">
        R. Sete de Setembro, 58 Centro - São José dos Pinhais/PR
      </Text>
    </Address>
  </FooterStyle>
)

export default memo(Footer)
