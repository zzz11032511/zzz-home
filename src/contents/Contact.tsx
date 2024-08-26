import ReactMarkdown from 'react-markdown'

const markdownString = `
# Contact

色々書く予定
`

function Contact() {
  return <ReactMarkdown>{markdownString}</ReactMarkdown>
}

export default Contact
