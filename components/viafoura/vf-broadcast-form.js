export default function VfBroadcastForm({
  broadcastFormRef,
  onPostIdChange,
  allPosts,
  selectedPost,
  imageUrl,
  setImageUrl,
  broadcastType,
  setBroadcastType,
  isSubmitDisabled,
  onBroadcastSubmit,
}) {
  return (
    <div className="m-auto w-full max-w-4xl">
      <h2 className="text-center">Broadcast Notification</h2>
      <form id="vf-broadcast-notification" ref={broadcastFormRef}>
        <label htmlFor="title">Title</label>
        <select name="title" onChange={onPostIdChange}>
          {allPosts.map((post) => (
            <option key={post.id} post-id={post.id} value={post.title}>
              {post.title}
            </option>
          ))}
        </select>
        {selectedPost && (
          <>
            <label htmlFor="description">Description</label>
            <textarea
              required
              readOnly
              name="description"
              value={`${selectedPost.excerpt.substring(0, 110)}...`}
            />

            <label htmlFor="url">URL</label>
            <textarea
              required
              readOnly
              type="url"
              name="url"
              value={`https://${process.env.vfDomain}/posts/${selectedPost.slug}`}
            />
            <label htmlFor="image_url">Image URL</label>
            <textarea
              required
              type="url"
              name="image_url"
              value={imageUrl}
              onChange={(event) => setImageUrl(event.target.value)}
            />
            <label htmlFor="push_time_to_live">Push Time To Live (seconds)</label>
            <input type="number" max="3600" name="push_time_to_live" defaultValue="3600" />
            <label htmlFor="broadcast_type">Broadcast Type</label>
            <select
              name="broadcast_type"
              onChange={(event) => setBroadcastType(event.target.value)}
            >
              <option value="site" defaultChecked>
                site
              </option>
              <option value="topic">topic</option>
            </select>
            {broadcastType === "topic" && (
              <>
                <label htmlFor="topic_id">Topic ID</label>
                <select name="topic_id">
                  {selectedPost.topic.map((topic) => (
                    <option key={topic.id} value={topic.vfTopicContainerId}>
                      {topic.name}
                    </option>
                  ))}
                </select>
              </>
            )}
            <button type="submit" disabled={isSubmitDisabled} onClick={onBroadcastSubmit}>
              {isSubmitDisabled ? "Login as Administrator" : "Send Broadcast Notification"}
            </button>
          </>
        )}
      </form>
    </div>
  );
}
