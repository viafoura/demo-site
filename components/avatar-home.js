export default function AvatarHome({ name, postId }) {
  return (
    <div className="w-50 mb-11">
      <div className="col-span-3 text-gray-800 text-base font-semibold">
        {name} | <vf-conversations-count vf-container-id={postId} /> comments
      </div>
    </div>
  );
}
