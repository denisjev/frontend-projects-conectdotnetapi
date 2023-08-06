import { UserItemProps } from "../../types/UserType"

  export default function UserItem({ user, handleRemoveUser  } : UserItemProps ) {

  return (
    <tr>
      <td><img src={user.image} /></td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.country}</td>
      <td><button onClick={ () => handleRemoveUser(user) }>Eliminar</button></td>
    </tr>
  )
}