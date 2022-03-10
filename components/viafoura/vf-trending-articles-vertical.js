export default function VfTrendingArticlesVertical() {
  return (
    <div className="viafoura">
      <vf-trending-articles
        title="Trending Articles"
        limit="5"
        days-published="all"
        trend-window="48"
        sort="comments"
        view="full"
      />
    </div>
  );
}
