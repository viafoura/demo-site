import { MdCheckCircle } from "react-icons/md";

export default function SuccessToast({ toast, message }) {
  return (
    <div
      className={`${
        toast.visible ? "animate-enter" : "animate-leave"
      } pointer-events-auto flex w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md`}
    >
      <div className="flex w-12 items-center justify-center bg-emerald-500">
        <MdCheckCircle className="h-6 w-6 text-white" />
      </div>
      <div className="-mx-3 px-4 py-2">
        <div className="mx-3">
          <span className="font-semibold text-emerald-500">Success</span>
          <p className="text-sm text-gray-600">{message}</p>
        </div>
      </div>
    </div>
  );
}
