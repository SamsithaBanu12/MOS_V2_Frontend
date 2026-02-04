import Select from "react-select";
import { timelineSelectStyles } from "../../customStyles/customStyle";
import { RoleTypes } from "../../data";
import { useMemo, useState } from "react";
import { updateUserRole } from "../../utils/api";
import toast from "react-hot-toast";

const EditUser = ({ user, setEditUser, refetch }) => {
    const [roleType, setRoleType] = useState(user?.role);
    const [role, setRole] = useState(user?.role);

    const roleTypeOption = useMemo(() => {
        const filteredRoleType = RoleTypes.filter((item) => item?.label !== 'ALL');
        return filteredRoleType.find((opt) => opt?.label === roleType) || null;
    }, [roleType, user]);

    const handleEditUser = async () => {
        const updatedRoleData = {
            user_id: user?.id,
            new_role: roleType
        }
        try {
            const response = await updateUserRole(updatedRoleData);
            toast.success("User role updated successfully");
            if (refetch) await refetch();
        }
        catch (error) {
            toast.error('Failed to update user role');
            console.error("Error updating role", error);
        }
    };

    return (
        <div className="admin-edit">
            <div className="ad-book-modal-head">
                <div className="ad-book-modal-title">
                    Edit User Role
                </div>
                <button
                    className="ad-tiny-btn"
                    onClick={() => setEditUser(false)}
                    aria-label="Close"
                >
                    Close
                </button>
            </div>
            <div className="ad-input-wrapper1">
                <div className="ad-param-row">
                    <span>User Name</span>
                    <input
                        className="ad-param-row-input"
                        type="text"
                        value={user?.username}
                        readOnly
                    />
                </div>
                <div className="ad-param-row">
                    <span>Email</span>
                    <input
                        className="ad-param-row-input"
                        type="text"
                        value={user?.email}
                        readOnly
                    />
                </div>

                <div className="ad-param-row">
                    <span>User Role</span>
                    <Select
                        options={RoleTypes?.filter((item) => item?.label !== 'ALL')}
                        value={roleTypeOption}
                        onChange={(option) => {
                            setRoleType(option?.label ?? "ALL");
                            setRole(option);
                        }}
                        isSearchable
                        styles={timelineSelectStyles}
                    />
                </div>
            </div>
            <div className="ad-book-btn-wrapper">
                <button
                    className="ad-book-btn"
                    onClick={() => handleEditUser()}
                >
                    Edit User
                </button>
            </div>
        </div>
    )
};
export default EditUser;