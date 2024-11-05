import Button from "../components/Button";

type PropsCard = {
  title: string
  description: string
  image: string
  price: number
}

function Card(props: PropsCard) {
  

  const handleClick = () => { 
    alert(`${props.title} is clicked`)
  }
  
  return (

    <div className="card-container">
      <div className="card-header">
        <img src={props.image} alt="" />
      </div>
      <div className="card-body">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>{props.price}</p>
      </div>
      <div className="card-footer">
        <Button onClick={handleClick}>Detail</Button>
      </div>
    </div>
  )
}

export default Card

