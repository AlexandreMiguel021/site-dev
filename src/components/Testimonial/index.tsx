import { BoxSlid, HiddenVw } from './styles'
import Testimonials from 'components/Testimonial/Testimonials'
import { TestimonialItemProps } from 'components/Testimonial/TestimonialSlide'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export type ProductCarouselProps = {
  images: string[]
}

const slides: TestimonialItemProps[] = [
  {
    id: 1,
    texto:
      'O Grupo Ecoimport optou pelo sistemas como solução de futuro para o crescimento sustentável da empresa, objetivando a simplicidade e a apresentação de seus recursos de forma direta e bem intuitivo. O software, além de apresentar uma grande confiabilidade de seus dados, possui ferramentas que auxiliam na gestão de vários setores da empresa.',
    nome: 'Jean Frank Buzzi',
    cargo: 'Gerente Executivo',
    empresa: 'Grupo Ecoimport'
  },
  {
    id: 2,
    texto:
      'O Grupo Ecoimport optou pelo sistemas como solução de futuro para o crescimento sustentável da empresa, objetivando a simplicidade e a apresentação de seus recursos de forma direta e bem intuitivo. O software, além de apresentar uma grande confiabilidade de seus dados, possui ferramentas que auxiliam na gestão de vários setores da empresa.',
    nome: 'Jean Frank Buzzi',
    cargo: 'Gerente Executivo',
    empresa: 'Grupo Ecoimport'
  },
  {
    id: 3,
    texto:
      'A equipe com certeza nos surpreendeu com tamanha qualidade, com um nível de atendimento, orientação e agilidade na implantação do sistema. Desejamos sucesso em nossa parceria.',
    nome: 'Francisco Mascaro',
    cargo: 'Financial Manager',
    empresa: 'Fracht do Brasil Logística Ltda. – Fracht AG.'
  }
]

const Testimonial = () => (
  <HiddenVw>
    <BoxSlid>
      <Testimonials slides={slides} />
    </BoxSlid>
  </HiddenVw>
)

export default Testimonial
