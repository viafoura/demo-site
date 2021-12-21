import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import TopicNavigation from "@/components/topic-navigation";

export default function Layout({ children, initialProps, preview }) {
  return (
    <>
      <Header allPosts={initialProps.allPosts} />
      <TopicNavigation allTopics={initialProps.allTopics} />
      <Main>{children}</Main>
      <Footer preview={preview} />
    </>
  );
}
