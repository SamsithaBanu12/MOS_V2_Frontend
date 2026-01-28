import CommandExplorer from "../components/CommandSender/CommandSender";
import ErrorBoundary from "../common/ErrorBoundary";

const CommandSenderPage = () => {
    return (
        <ErrorBoundary
            title="Command Sender Error"
            message="We encountered an unexpected error in the Command Sender component."
        >
            <CommandExplorer />
        </ErrorBoundary>
    )
};
export default CommandSenderPage;