import './App.css'
import Icon from './components/Icon'
import StretchingIcon from './components/StretchingIcon'

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
      <div>
        <StretchingIcon
          src="/favicon.ico"
          text="Sample1"
        ></StretchingIcon>
        <StretchingIcon
          src="/favicon.ico"
          text="Sample2"
        ></StretchingIcon>
        <StretchingIcon
          src="/favicon.ico"
          text="Sample3"
        ></StretchingIcon>
      </div>
    </div>
  )
}

export default App
