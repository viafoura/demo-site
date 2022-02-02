import useHasMounted from "@/hooks/useHasMounted";

export default function VfTrendingArticlesVertical() {
  const hasMounted = useHasMounted();

  return (
    hasMounted && (
      <div className="viafoura">
        <vf-trending-articles
          title="Trending Articles"
          limit="5"
          days-published="7"
          trend-window="1"
          sort="comments"
          view="full"
        ></vf-trending-articles>
      </div>
    )
  );
}
