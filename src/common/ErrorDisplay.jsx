import './ErrorDisplay.css';
import { BiError } from "react-icons/bi";

const ErrorDisplay = ({ title, message, onAction, actionLabel = "Retry", error, loading }) => {
    return (
        <>
            {loading && (
                <div className="reload-overlay">
                    <div className="refresh-icon">⟳</div>
                </div>
            )}
            <div className='error-display-wrapper'>
                <BiError className='error-display-icon' size={50} color='rgb(183,57,57)' />
                <h2 className='error-display-title'>{title}</h2>
                <p className='error-display-message'>{message}</p>

                {onAction && (
                    <button
                        onClick={onAction}
                        className='error-display-button'
                    >
                        {actionLabel}
                    </button>
                )}
            </div>
        </>
    );
};

export default ErrorDisplay;
