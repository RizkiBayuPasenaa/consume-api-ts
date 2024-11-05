

type PropsButton = {
  type?: "submit" | "reset" | "button"
  children: React.ReactNode
  onClick?: () => void
}

function Button(props: PropsButton) {
  return (
    <>
      <button type={props.type} onClick={props.onClick}>{props.children}</button> 
    </>
  )
}

export default Button
