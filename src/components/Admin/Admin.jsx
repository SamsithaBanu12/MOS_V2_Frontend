import { useMemo, useState } from "react";
import { RoleTypes } from "../../data";
import UserList from "./UserList";
import Select from "react-select";
import { timelineSelectStyles } from "../../customStyles/customStyle";
import './Admin.css'
import { useSidebar } from "../../context/SidebarContext";
import EditUser from "./EditUser";

const Admin = ({ users, isLoading, error, refetch }) => {
    const [roleType, setRoleType] = useState('ALL');
    const [role, setRole] = useState(RoleTypes[1]);
    const [filter, setFilter] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [editUser, setEditUser] = useState(false);
    const { collapsed } = useSidebar();

    const roleTypeOption = useMemo(() => {
        return RoleTypes.find((opt) => opt?.label === roleType) || null;
    }, [roleType]);

    const filteredUsersList = useMemo(() => {
        let list = users || [];
        if (roleType !== 'ALL') {
            list = list.filter(user => user.role === role.label);
        }
        return list;
    }, [roleType, users, role]);
    return (
        <div className="ad-wrapper">
            <div className="ad-card-wrapper">
                <div className={`ad-card ${collapsed ? "collapsed" : ""}`}>
                    <div className="ad-card-head">
                        <div className="ad-title">User List</div>
                        <div className="ad-tag">
                            {users?.length} Users
                        </div>
                    </div>

                    <div className="ad-controls">
                        <input
                            className="ad-input"
                            placeholder={"Enter user name"}
                            value={filter}
                            onChange={(e) => {
                                setFilter(e.target.value);
                            }}
                        />
                        <Select
                            options={RoleTypes}
                            value={roleTypeOption}
                            onChange={(option) => {
                                setRoleType(option?.label ?? "ALL");
                                setRole(option);
                            }}
                            isSearchable
                            styles={timelineSelectStyles}
                        />
                    </div>
                    {isLoading ? (
                        <div className="ad-muted" style={{ padding: '20px' }}>Loading users...</div>
                    ) : error ? (
                        <div className="ad-muted" style={{ padding: '20px', color: '#ff4d4f' }}>
                            Error: {error.message || "Failed to fetch users"}
                        </div>
                    ) : (
                        <UserList
                            users={filteredUsersList}
                            filter={filter}
                            setEditUser={setEditUser}
                            setSelectedUser={setSelectedUser}
                            editUser={editUser}
                        />
                    )}
                </div>
            </div>
            {editUser && selectedUser &&
                <EditUser
                    key={selectedUser.id || selectedUser.username}
                    user={selectedUser}
                    setEditUser={setEditUser}
                    refetch={refetch}
                />
            }
        </div>
    )
};
export default Admin;