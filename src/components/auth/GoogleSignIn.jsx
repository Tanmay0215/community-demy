import { firebaseApp } from '../../../firebase'
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth'
import google from '../../assets/icons/google.png'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const GoogleSignIn = () => {
  const navigate = useNavigate()
  const auth = getAuth(firebaseApp)
  const googleProvider = new GoogleAuthProvider()

  const signInWithGoogle = () => {
    try {
      signInWithPopup(auth, googleProvider).then((result) => {
        const user = result.user
        console.log(user)
        toast.success(`Welcome ${user.displayName}`)
      })
    } catch (error) {
      console.error(error)
    }
  }

  //   onAuthStateChanged(auth, (user) => {
  //     toast.info(`User ${user}`)
  //     // navigate('/')
  //   })

  return (
    <button
      onClick={signInWithGoogle}
      className="border-1 py-2 px-4 rounded mt-2 flex items-center"
    >
      <img src={google} alt="google_icon" className="h-8" />
      Sign Up with Google
    </button>
  )
}

export default GoogleSignIn
