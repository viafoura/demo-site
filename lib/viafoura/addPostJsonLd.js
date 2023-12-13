// Call the function to fetch data
export function addPostJsonLd(post, commentsCount, comments) {
  return {
    __html: `{
      "@context": "http://schema.org/",
      "@type": "Article",
      "headline": "${post.title}",
      "name": "${post.title}",
      "thumbnailUrl": "${post.ogImage.url.split("?")[0]}",
      "description": "${post.excerpt}",
      "url": "https://${process.env.vfDomain}/posts/${post.slug}",
      "image": {
        "@context": "http://schema.org/",
        "@type": "ImageObject",
        "url": "${post.ogImage.url.split("?")[0]}",
        "width": "1778",
        "height": "1000"
      },
      "commentCount": ${commentsCount},
      "comment": ${comments}
    }`,
  };
}
