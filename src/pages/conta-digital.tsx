import Button from 'components/Button'
import ButtonGroup from 'components/ButtonGroup'
import CardsBenefits from 'components/CardsBenefits'
import Col from 'components/Col'
import Header from 'components/Header'
import Heading from 'components/Heading'
import Section from 'components/Section'
import SubHeading from 'components/SubHeading'
import Text from 'components/Text'
import Layout from 'layout'
import Image from 'next/image'
import React from 'react'
import { Container } from 'styles/pages/contaDigital'
import { CheckMarkIcon } from 'assets/icons'
import pix from 'data/pix.json'
import benefits from 'data/benefits.json'
import payment from 'data/payment.json'
import ImageFill from 'components/ImageFill'
import MediaMatch from 'components/MediaMatch'
import CallToAction from 'components/CallToAction'
import AdvantagesSection from 'components/AdvantagesSection'
import advantages from 'contents/advantages'
import Grid from 'components/Grid'

const ContaDigital = () => {
  return (
    <Layout>
      <Header
        primaryBtnTxt="Experimente Grátis"
        secondBtnTxt="Fale Conosco"
        img="/img/header-conta-digital.png"
        alt="imagem teste"
        title="A conta digital que sua empresa merece."
        description="Já imaginou ter uma conta com opção de boletos, cartão de crédito, pix e links de pagamentos, sem a necessidade de contratar com um banco? Com a conta digital da EGS Sistemas você conta com tudo isso."
      />
      <Section>
        <Container>
          <Col>
            <Image src="/img/boleto.png" width={650} height={650} priority />
          </Col>
          <Col>
            <Heading>Sistema de gestão</Heading>
            <SubHeading>Boleto em poucos cliques</SubHeading>
            <Text>
              O meio mais rápido de ter o dinheiro na conta! Com o meio de
              pagamento PIX você recebe de forma instantânea e já pode começar a
              utilizar seu dinheiro.
            </Text>
            <ButtonGroup>
              <Button bgcolor="primary">Criar conta</Button>
              <Button bgcolor="secondary">Conheça o modulo ERP</Button>
            </ButtonGroup>
          </Col>
        </Container>
      </Section>
      <Section>
        <Container style={{ gap: '3rem' }}>
          <CardsBenefits texts={benefits.firstCard} />
          <CardsBenefits texts={benefits.secondCard} />
          <CardsBenefits texts={benefits.thirdCard} />
        </Container>
      </Section>

      <Section>
        <Container direction="row-reverse">
          <Col>
            <Image src="/img/pix.png" width={650} height={650} />
          </Col>
          <Col>
            <Heading>Sistema de gestão</Heading>
            <SubHeading>Dinheiro rápido na conta com pagamento PIX</SubHeading>
            <Text>
              O meio mais rápido de ter o dinheiro na conta! Com o meio de
              pagamento PIX você recebe de forma instantânea e já pode começar a
              utilizar seu dinheiro.
            </Text>
            <Grid>
              {pix.map((text, i) => (
                <Text component="span" withIcon={<CheckMarkIcon />} key={i}>
                  {text}
                </Text>
              ))}
            </Grid>
            <ButtonGroup>
              <Button bgcolor="primary">Experimente grátis</Button>
              <Button bgcolor="secondary">Fale conosco</Button>
            </ButtonGroup>
          </Col>
        </Container>
      </Section>

      <Section>
        <Container>
          <MediaMatch lessThan="medium">
            <Image src="/img/casal.png" width={628} height={685} />
          </MediaMatch>
          <ImageFill width={353} height={685} objPosition="right" mobileHidden>
            <Image src="/img/mulher-casal.png" layout="fill" />
          </ImageFill>
          &nbsp; &nbsp;
          <Col width={61}>
            <Heading>Link de pagamento</Heading>
            <SubHeading>Envie o link de cobrança em qual lugar</SubHeading>
            <Text>
              Facilite as cobranças e dê opções de pagamentos para o seu
              cliente, use a opção do cartão de crédito e conquiste novos
              clientes.
            </Text>
            <Grid>
              {payment.map((text, i) => (
                <Text component="span" withIcon={<CheckMarkIcon />} key={i}>
                  {text}
                </Text>
              ))}
            </Grid>
            <ButtonGroup>
              <Button bgcolor="primary">Experimente grátis</Button>
              <Button bgcolor="secondary">Fale conosco</Button>
            </ButtonGroup>
          </Col>
          <ImageFill width={353} height={685} mobileHidden>
            <Image src="/img/homem-casal.png" layout="fill" />
          </ImageFill>
        </Container>
      </Section>

      <Section>
        <Container>
          <Col>
            <Image src="/img/cartao.png" width={650} height={650} />
          </Col>
          <Col>
            <Heading>Sistema de gestão</Heading>
            <SubHeading>Facilite o pagamento para seu cliente</SubHeading>
            <Text>
              Facilite as cobranças e dê opções de pagamentos para o seu
              cliente, use a opção do cartão de crédito e conquiste novos
              clientes.
            </Text>
            <Grid>
              {payment.map((text, i) => (
                <Text component="span" withIcon={<CheckMarkIcon />} key={i}>
                  {text}
                </Text>
              ))}
            </Grid>
            <ButtonGroup>
              <Button bgcolor="primary">Experimente grátis</Button>
              <Button bgcolor="secondary">Fale conosco</Button>
            </ButtonGroup>
          </Col>
        </Container>
      </Section>
      <CallToAction />
      <AdvantagesSection cards={advantages} />
    </Layout>
  )
}

export default ContaDigital
