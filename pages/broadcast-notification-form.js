import Container from "@/components/container";

export default function BroadcastNotificationForm() {
  return (
    <Container>
      <div className="w-full max-w-4xl m-auto">
        <h2 className="text-center">Broadcast Notification</h2>
        <form
          action="https://notifications.viafoura.co/v5/notifications/00000000-0000-4000-8000-d47205fca416/broadcast/form"
          method="post"
          className="px-8 pt-6 pb-8 mt-6 mb-4 bg-white rounded shadow-md"
        >
          <div className="mb-5">
            <label
              htmlFor="title"
              className="text-base font-semibold text-gray-600"
            >
              Title
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none"
              type="text"
              name="title"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="description"
              className="text-base font-semibold text-gray-600"
            >
              Description
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none"
              type="text"
              name="description"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="url"
              className="text-base font-semibold text-gray-600"
            >
              URL
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none"
              type="text"
              name="url"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="image_url"
              className="text-base font-semibold text-gray-600"
            >
              Image URL
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none"
              type="text"
              name="image_url"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="broadcast_type"
              className="text-base font-semibold text-gray-600"
            >
              Broadcast Type
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none"
              type="text"
              name="broadcast_type"
            />
          </div>
          <button
            type="submit"
            className="flex px-4 py-2 m-auto text-base text-white rounded mt-7 bg-neutral-600 hover:bg-neutral-700 focus:outline-none focus:shadow-outline"
          >
            Send Notification
          </button>
        </form>
      </div>
    </Container>
  );
}
