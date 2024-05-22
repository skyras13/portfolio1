import styles from '../styles'

import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div
        className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient 
            rounded-[10px] mb-2'>
        <img src={discount} alt='discount' className='w-[32px] h-[32px]' />
        <p className={`${styles.paragraph} l-2`}>
          <span className='text-white'>20%</span> Discount For{' '}
          <span className='text-white'>1 Month</span> Account
        </p>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppings font-semibold ss:text-[72px] text-[52px] animated-text'>
          <span className='animated-letter'>S</span>
          <span className='animated-letter'>k</span>
          <span className='animated-letter'>y</span>
          <span className='animated-letter'>l</span>
          <span className='animated-letter'>e</span>
          <span className='animated-letter'>r</span>{' '}
          <span className='animated-letter'>R</span>
          <span className='animated-letter'>a</span>
          <span className='animated-letter'>s</span>
          <span className='animated-letter'>m</span>
          <span className='animated-letter'>u</span>
          <span className='animated-letter'>s</span>
          <span className='animated-letter'>s</span>
          <span className='animated-letter'>e</span>
          <span className='animated-letter'>n</span>
          <br className='sm:block hidden' />
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
