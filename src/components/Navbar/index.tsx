import Button from 'components/Button'
import CustomLink from 'components/CustomLink'
import Dropdown from 'components/Dropdown'
import Logo from 'components/Logo'
import Text from 'components/Text'
import solutions from 'contents/solutions'
import institutional from 'contents/institutional'
import { Twirl as Hamburger } from 'hamburger-react'
import {
  Container,
  Nav,
  SecondCol,
  FirstCol,
  WrapperContact,
  Contact,
  WrapperText,
  List,
  Spacer
} from './styles'
import { memo, useEffect, useState } from 'react'
import DropdownButton from 'components/DropdownButton'
import MediaMatch from 'components/MediaMatch'
import { useWindow } from 'hooks/useWindow'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const { windowWidth } = useWindow()
  const [clientWindowHeight, setClientWindowHeight] = useState(0)

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY)
  }

  useEffect(() => {
    if (windowWidth! > 768) {
      setOpen(false)
    }
  }, [windowWidth])

  useEffect(() => {
    if (isOpen) document.body.style.overflowY = 'hidden'

    return () => {
      document.body.style.overflowY = 'auto'
    }
  }, [isOpen])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <>
      <Nav isOpen={isOpen} scroll={clientWindowHeight! > 30}>
        <Container>
          <Logo />

          <FirstCol>
            <CustomLink url="/">
              <Text color="black" weigth="bold">
                Início
              </Text>
            </CustomLink>
            <Dropdown cols={3} items={solutions} title="Soluções">
              <WrapperText>
                <div>
                  <Text
                    component="span"
                    size="small"
                    transform="uppercase"
                    color="secondary"
                    weigth="bold"
                  >
                    Experimente
                  </Text>
                  <Text component="h3" color="title" size="large" weigth="bold">
                    Se junte a milhares de empresas
                  </Text>
                  <Text size="small">
                    Você cria a sua conta agora e já começa a usar o sistema
                    gratuitamente. Se tiver alguma dúvida, fique tranquilo,
                    vamos te ligar pra agendar um treinamento gratuito do
                    sistema.
                  </Text>
                </div>
                <Button size="medium" bgcolor="secondary">
                  <Text component="span" weigth="bold" color="secondary">
                    Acesso manual
                  </Text>
                </Button>
              </WrapperText>
            </Dropdown>
            <Dropdown title="Institucional" cols={2} items={institutional} />
          </FirstCol>

          <SecondCol>
            <WrapperContact>
              <Contact>
                <Text weigth="bold" color="black" component="span">
                  Capitais:
                </Text>
                <CustomLink url="tel:4007-2642">
                  <Text component="span" weigth="bold" color="secondary">
                    4007-2642
                  </Text>
                </CustomLink>
              </Contact>
              <Contact>
                <Text weigth="bold" color="black" component="span">
                  Capitais:
                </Text>
                <CustomLink url="tel:0800 001 2642">
                  <Text component="span" weigth="bold" color="secondary">
                    0800 001 2642
                  </Text>
                </CustomLink>
              </Contact>
            </WrapperContact>
            <Button bgcolor="primary" size="medium">
              Acessar o Sistema
            </Button>
          </SecondCol>
          <MediaMatch style={{ alignSelf: 'center' }} lessThan="medium">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </MediaMatch>
        </Container>
        {isOpen && (
          <List>
            <ul>
              <Text component="h3" weigth="bold" size="large">
                Soluções
              </Text>
              {solutions.map((item, i) => (
                <li key={i}>
                  <DropdownButton
                    description={item.description}
                    title={item.title}
                    icon={item.icon}
                    withIconLink={item.withIconLink}
                    url={item.url}
                  />
                </li>
              ))}
            </ul>
            <ul>
              <Text component="h3" weigth="bold" size="large">
                Institucional
              </Text>
              {institutional.map((item, i) => (
                <li key={i}>
                  <DropdownButton
                    description={item.description}
                    title={item.title}
                    icon={item.icon}
                    withIconLink={item.withIconLink}
                    url={item.url}
                  />
                </li>
              ))}
            </ul>
          </List>
        )}
      </Nav>
      <Spacer />
    </>
  )
}

export default memo(Navbar)
