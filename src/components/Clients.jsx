import { clients } from '../constants'
import styles from '../styles'

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[100px] cursor-pointer`}>
          <img
            src={client.logo}
            alt={client}
            className='sm:w-[192px] w-[100px] object-contain hover:brightness-200 rounded-xl'
          />
        </div>
      ))}
    </div>
  </section>
)

export default Clients
