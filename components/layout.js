import Footer from "@/components/footer";
import Main from "@/components/main";
import Nav from "@/components/nav";
import TopicNavigation from "@/components/topic-navigation";

export default function Layout({ children, initialProps, preview }) {
  return (
    <>
      <Nav allPosts={initialProps.allPosts} />
      <TopicNavigation allTopics={initialProps.allTopics} />
      <Main>{children}</Main>
      <Footer preview={preview} />
    </>
  );
}
