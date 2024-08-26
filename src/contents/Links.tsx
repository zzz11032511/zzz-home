import ReactMarkdown from 'react-markdown'

const markdownString = `
# Links

色々書く予定
`

function Links() {
  return <ReactMarkdown>{markdownString}</ReactMarkdown>
}

export default Links
