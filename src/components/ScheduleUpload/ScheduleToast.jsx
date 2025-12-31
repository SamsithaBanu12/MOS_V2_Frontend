import { toast } from "react-toastify";

const scheduleToast = (title, msg, type = "success") => {
  const content = (
    <div>
          <div className="toast-title">{title}</div>
          <div className="toast-msg">{msg}</div>
        </div>
  );
  if (type === "error") {
    toast.error(content);
  } else if (type === "info") {
    toast.info(content);
  } else {
    toast.success(content);
  }
};

export default scheduleToast;