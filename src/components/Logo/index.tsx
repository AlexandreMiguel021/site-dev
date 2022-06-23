import Image from 'next/image'
import Link from 'next/link'
import { LogoWrapper } from './styles'

const Logo = () => {
  return (
    <LogoWrapper>
      <Link href="/">
        <a>
          <Image src="/img/logo-egs.svg" width={70} height={70} />
        </a>
      </Link>
    </LogoWrapper>
  )
}

export default Logo
