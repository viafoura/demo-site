import { MdCheckCircle } from "react-icons/md";

export default function SuccessToast({ toast, message }) {
  return (
    <div
      className={`${
        toast.visible ? "animate-enter" : "animate-leave"
      } flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md pointer-events-auto`}
    >
      <div className="flex items-center justify-center w-12 bg-emerald-500">
        <MdCheckCircle className="w-6 h-6 text-white" />
      </div>
      <div className="px-4 py-2 -mx-3">
        <div className="mx-3">
          <span className="font-semibold text-emerald-500">Success</span>
          <p className="text-sm text-gray-600">{message}</p>
        </div>
      </div>
    </div>
  );
}
