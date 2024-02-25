import { Profile } from '../../assets'

interface styled {
    borderRadius: string | number,
    width: string | number,
    height: string | number,
    top: string | number,
    right: string | number,
    border: string | number,

}
const styleSheet: styled = {
    borderRadius: '50%',
    border: '15px solid #242424',
    width: 120,
    height: 120,
    top: -20,
    right: -20
}
const ProfileImg = () => {

    return (
        <img src={Profile} style={{ ...styleSheet, position: 'absolute', objectFit: 'contain' }} />
    )
}

export default ProfileImg