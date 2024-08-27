import ProfileLinkList from './components/ProfileLinkList'
import Icon from './components/Icon'
import './App.css'
import { useWindowSize } from './utils/hooks/useWindowSize'

function App() {
  let infoText = '↓ Click the icon to explore more information. ↓'
  if (useWindowSize().width <= 768) {
    infoText = 'Tap the icon to explore more information.'
  }

  return (
    <div className="">
      <main>
        <div className="title-area">
          <Icon
            src="/favicon.ico"
            trim="round"
            borderBold="4px"
            borderColor="rgba(78, 78, 78, 1)"
            width="150px"
          />
          <h1>zzz' home</h1>
        </div>
        <div className="link-list">
          <h3>{ infoText }</h3>
          <ProfileLinkList />
        </div>
      </main>

    </div>
  )
}

export default App
