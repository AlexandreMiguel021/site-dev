import Button from 'components/Button'
import Heading from 'components/Heading'
import SubHeading from 'components/SubHeading'
import Text from 'components/Text'
import Image from 'next/image'
import React from 'react'
import { Section, WrapperImage, Container, Col } from './styles'

const LastSection = () => {
  return (
    <Section>
      <WrapperImage>
        <Image src="/img/experimente.png" layout="fill" />
      </WrapperImage>
      <Container>
        <Col width={65}>
          <Heading>Experimente</Heading>
          <SubHeading>Se junte a milhares de empresas</SubHeading>
          <Text size="large">
            Você cria a sua conta agora e já começa a usar o sistema
            gratuitamente. Se tiver alguma dúvida, fique tranquilo, vamos te
            ligar pra agendar um treinamento gratuito do sistema.
          </Text>
          <Button size="medium" bgcolor="secondary">
            Criar Conta
          </Button>
        </Col>
      </Container>
    </Section>
  )
}

export default LastSection
