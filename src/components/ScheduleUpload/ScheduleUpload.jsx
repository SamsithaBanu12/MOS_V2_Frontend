
import './ScheduleUpload.space.css';
import ScheduleUploadList from './ScheduleUploadList';
import ErrorBoundary from '../../common/ErrorBoundary';

const ScheduleUpload = () => {
    return (
        <div className='schedule-upload-wrapper'>
            <div className='schedule-upload-top'>
                <ErrorBoundary
                    title="Schedule Upload Error"
                    message="We encountered an unexpected error while rendering the Schedule Upload list."
                >
                    <ScheduleUploadList />
                </ErrorBoundary>
            </div>
        </div>
    )
};
export default ScheduleUpload;