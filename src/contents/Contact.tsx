import ReactMarkdown from 'react-markdown'

const markdownString = `
# Contact

fn.nk.2002□gmail.com (□ -> @)
`

function Contact() {
  return <ReactMarkdown>{markdownString}</ReactMarkdown>
}

export default Contact
