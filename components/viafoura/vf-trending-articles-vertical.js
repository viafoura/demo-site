export default function VfTrendingArticlesVertical() {
  return (
    <div className="viafoura">
      <vf-trending-articles
        title="Trending Articles"
        limit="5"
        days-published="1"
        trend-window="1"
        sort="comments"
        view="full"
      />
    </div>
  );
}
