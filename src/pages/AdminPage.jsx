import { useEffect, useState } from "react";
import Admin from "../components/Admin/Admin";
import ErrorBoundary from "../common/ErrorBoundary";
import { getAllUsers } from "../utils/api";

const AdminPage = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchUsers = async () => {
        const userDetails = localStorage.getItem('user');
        const userDetail = JSON.parse(userDetails);
        try {
            setIsLoading(true);
            const usersList = await getAllUsers();
            const filteredUserList = usersList?.filter((per) => per?.username !== userDetail?.username)
            setUsers(filteredUserList);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <ErrorBoundary
            title="Admin Page Error"
            message="We encountered an unexpected error while rendering the Admin Page."
        >
            <Admin users={users} isLoading={isLoading} error={error} refetch={fetchUsers} />
        </ErrorBoundary>
    )
};
export default AdminPage;