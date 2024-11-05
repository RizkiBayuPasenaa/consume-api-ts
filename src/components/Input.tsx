
type PropsInput = {
  placeholder: string
  type: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Input(props: PropsInput) {

  return (
    <>
      <input 
        type={props.type} 
        placeholder={props.placeholder} 
        value={props.value}
        onChange={props.onChange}
        />
    </>
  )
}

export default Input
