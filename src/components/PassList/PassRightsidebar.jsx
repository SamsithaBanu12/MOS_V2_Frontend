import EditPassDetails from "./EditPassDetails";
import PassBookContactFrom from "./PassBookContactFrom";
import PassDetails from "./PassDetails";

const PassRightSidebar = ({ addContactClicked, title, selectedPassage = {}, setAddContactClicked, isForAddContact, isForEditPassage = false, isForViewPassage = false }) => {
    return (
        <div
            className="pl-book-modal-backdrop"
            onClick={() => setAddContactClicked(false)}
        >
            <div
                className="pl-book-modal-card"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="pl-book-modal-head">
                    <div className="pl-book-modal-title">
                        {title}
                    </div>
                    <button
                        className="pl-tiny-btn"
                        onClick={() => setAddContactClicked(false)}
                        aria-label="Close"
                    >
                        Close
                    </button>
                </div>
                {isForAddContact &&
                    <PassBookContactFrom setAddContactClicked={setAddContactClicked} />
                }
                {isForViewPassage &&
                    <PassDetails selectedPassage={selectedPassage} />
                }
                {isForEditPassage &&
                    <EditPassDetails selectedPassage={selectedPassage} setAddContactClicked={setAddContactClicked} />
                }
            </div>
        </div>
    );
};
export default PassRightSidebar;