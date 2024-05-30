import React from 'react'
import styles from '../styles'
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Stats,
  Testimonials,
} from '../components'

const Contact = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Contact
