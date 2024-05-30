import React from 'react'
import styles from '../styles'
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Stats,
  Testimonials,
} from '../components'

const Experience = () => {
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
        </div>
      </div>
    </div>
  )
}

export default Experience
