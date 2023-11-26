// in dev-tool.tsx
import { BsHouseGearFill } from "react-icons/bs";

const MyCoolComponent = (props) => {
  return (
    <div style={{
      display: 'flex',
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <a href="https://account.idxhome.com/settings/profile" target="_blank" style={{
        background: 'white',
        width: '200px',
        textAlign: 'center',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: 'black'
      }}>
        Open IDX Profile
      </a>
      <p>Trouble logging in? <a href="https://hungryram.com" target="_blank">Contact your web designer</a> for support.</p>
    </div>
  )
}

export const IdxAdmin = (config?: any) => ({
  name: 'idx-admin',
  title: 'IDX Management',
  component: MyCoolComponent,
  icon: BsHouseGearFill,
  ...config,
})