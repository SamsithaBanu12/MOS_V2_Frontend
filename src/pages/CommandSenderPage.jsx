import CommandExplorer from "../components/CommandSender/CommandSender";
import ErrorBoundary from "../common/ErrorBoundary";
import { isUserAccessible } from "../utils/utils";
import ErrorDisplay from "../common/ErrorDisplay";

const CommandSenderPage = () => {
    return (
        <ErrorBoundary
            title="Command Sender Error"
            message="We encountered an unexpected error in the Command Sender component."
        >
            {isUserAccessible() ?
                <CommandExplorer /> :
                <ErrorDisplay
                    title="Authorization Error!"
                    message="You don't have access to this page."
                    error={false}
                    loading={false}
                />
            }
        </ErrorBoundary>
    )
};
export default CommandSenderPage;