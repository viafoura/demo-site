import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import TopicMenu from "@/components/topic-menu";

export default function Layout({ children, initialProps }) {
  return (
    <>
      <Header allPosts={initialProps.allPosts} />
      <TopicMenu allTopics={initialProps.allTopics} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
