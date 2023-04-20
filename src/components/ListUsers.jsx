function ListUsers({ users, color, handleDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Foto</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>Country</th>
          <th>Acctions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr
            key={user.email}
            className={`${color && 'visibility'}`}>
            <td>
              <img
                src={user.picture.thumbnail}
                alt={`Face picture of ${user.name.first}`}
              />
            </td>
            <td>
              <h4>{user.name.first}</h4>
            </td>
            <td>
              <p>{user.name.last}</p>
            </td>
            <td>
              <p>{user.location.country}</p>
            </td>
            <td>
              <p>
                <button
                  type='button'
                  onClick={() => handleDelete(user.name.first)}>
                  Delete
                </button>
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListUsers;
