
const Users = (props) => {
    const {name,age,address} = props.aboutData;
  return (
    <div className="aboutUsInfo">
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <h3>Address: {address}</h3>
    </div>
  )
}

export default Users;
