import styles from '../styles'

import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppings font-semibold ss:text-[72px] text-[52px] animated-text'>
          Skyras13 Software
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>
      <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
  </section>
)

export default Hero
