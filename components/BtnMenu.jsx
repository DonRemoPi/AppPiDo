
import { ActiveLink } from '../components/ActiveLink'

export const BtnMenu = ({ nameBtn }) => {

  return (
    <>
      <ActiveLink
        href={nameBtn === 'Home' ? '/' : `/${nameBtn}`}
        nameBtn={nameBtn}
      >
      </ActiveLink>

    </>
  )
}

