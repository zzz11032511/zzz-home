import ReactMarkdown from 'react-markdown'

type IndividualProps = {
  text: string
}

const markdownString = `
# Markdown

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!
`

function Individual(props: IndividualProps) {
  return (
    <div>
      <h1>{props.text}</h1>
      <ReactMarkdown>{markdownString}</ReactMarkdown>
    </div>
  )
}

export default Individual
