import './App.css'
import Icon from './components/Icon'
import ProfileLinkList from './components/ProfileLinkList'

function App() {
  return (
    <div className="">
      <Icon
        src="/favicon.ico"
        trim="round"
        borderBold="4px"
        borderColor="rgba(78, 78, 78, 1)"
        width="150px"
      />
      <h1>zzz' home</h1>
      <h3>↓ Click the icon to explore more information. ↓</h3>
      <ProfileLinkList />
    </div>
  )
}

export default App
