import FileUpload from "../components/FileUpload/FileUpload";
import ErrorBoundary from "../common/ErrorBoundary";
import UploadPage from "./UploadPage";

const FileUploadPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ErrorBoundary
                title="File Upload Error"
                message="We encountered an unexpected error while rendering the File Upload list."
            >
                <FileUpload />
            </ErrorBoundary>
        </div>
    )
};
export default FileUploadPage;