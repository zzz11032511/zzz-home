import ReactMarkdown from 'react-markdown'

const markdownString = `
# About

色々書く予定
`

function About() {
  return <ReactMarkdown>{markdownString}</ReactMarkdown>
}

export default About
