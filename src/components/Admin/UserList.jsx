const UserList = ({ users, filter, setEditUser, setSelectedUser }) => {
    const filteredUsers = (users || []).filter(user =>
        user.username?.toLowerCase().includes(filter.toLowerCase()) ||
        user.email?.toLowerCase().includes(filter.toLowerCase())
    );

    const handleEdit = (user) => {
        setSelectedUser(user);
        setEditUser(true);
    };

    const handleDelete = (user) => {
        console.log("Delete user:", user);
    };

    return (
        <div className="ad-table-wrap">
            <table className="ad-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.length === 0 ? (
                        <tr>
                            <td colSpan={5} className="ad-muted">
                                No Users Found
                            </td>
                        </tr>
                    ) : (
                        filteredUsers.map((user, i) => (
                            <tr key={user.id || i}>
                                <td className="ad-mono">{i + 1}.</td>
                                <td className="ad-mono">{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button className="edit-btn" onClick={() => handleEdit(user)}>Edit</button>
                                </td>
                                <td>
                                    <button className="view-btn" onClick={() => handleDelete(user)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
};
export default UserList;