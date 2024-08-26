import ReactMarkdown from 'react-markdown'

const markdownString = `
# Works

色々書く予定
`

function Works() {
  return <ReactMarkdown>{markdownString}</ReactMarkdown>
}

export default Works
