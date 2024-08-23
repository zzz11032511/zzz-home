type IndividualProps = {
  text: string
}

function Individual(props: IndividualProps) {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

export default Individual
