import { toast } from "sonner-native";

const SONNER_DEFAULT_TOAST_DURATION = 1500;

const SONNER_WARNING_TOAST_DURATION = 3000;

export const globalSuccessToast = (message: string) => {
  return toast.success("Success", {
    description: message,
    duration: SONNER_DEFAULT_TOAST_DURATION,
    closeButton: true,
  });
};

export const globalLoadingToast = (message: string) => {
  return toast.loading(message, {
    duration: Infinity,
  });
};

export const dismissLoadingToast = (toastId: string | number) => {
  toast.dismiss(toastId); // Use toast ID to dismiss
};

export const globalErrorToast = (message: string, title?: string) => {
  return toast.error(title ?? "Error", {
    description: message,
    closeButton: true,
    duration: SONNER_DEFAULT_TOAST_DURATION,
  });
};

export const globalInfoToast = (message: string) => {
  return toast.info("Info", {
    description: message,
    closeButton: true,
    duration: SONNER_WARNING_TOAST_DURATION,
  });
};

export const globalWarningToast = (message: string) => {
  return toast.warning("Warning", {
    description: message,
    closeButton: true,
    duration: SONNER_WARNING_TOAST_DURATION,
  });
};
