import ReactMarkdown from 'react-markdown'

const markdownString = `
# Hobbies

色々書く予定
`

function Hobbies() {
  return <ReactMarkdown>{markdownString}</ReactMarkdown>
}

export default Hobbies
