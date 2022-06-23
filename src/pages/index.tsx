import Header from 'components/Header'
import Partnership from 'components/Partnership'
import Section from 'components/Section'
import Solutions from 'components/Solutions'
import SubHeading from 'components/SubHeading'
import Testimonial from 'components/Testimonial'
import Text from 'components/Text'
import Layout from 'layout'
import SupportSection from 'components/SupportSection'
import Col from 'components/Col'
import Heading from 'components/Heading'
import { TestimonialsContainer } from 'styles/pages/home'
import CallToAction from 'components/CallToAction'

const Home = () => {
  return (
    <Layout>
      <Header
        primaryBtnTxt="Experimente Grátis"
        secondBtnTxt="Fale Conosco"
        img="/img/header-home.png"
        alt="imagem teste"
        title="Sistemas ágeis para você gerenciar o seu negócio"
        description="Oferecemos sistemas ágeis e descomplicados que acompanharão a sua trajetória de crescimento."
      />
      <Solutions />
      <CallToAction />
      <SupportSection />
      <Section>
        <TestimonialsContainer>
          <Col>
            <Heading>Experimente</Heading>
            <SubHeading>Se junte a milhares de empresas</SubHeading>
            <Text>
              Você cria a sua conta agora e já começa a usar o sistema
              gratuitamente. Se tiver alguma dúvida, fique tranquilo, vamos te
              ligar pra agendar um treinamento gratuito do sistema.
            </Text>
          </Col>
          <Testimonial />
        </TestimonialsContainer>
      </Section>

      <Partnership />
    </Layout>
  )
}

export default Home
