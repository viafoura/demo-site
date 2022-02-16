import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import TopicsMenu from "@/components/topics-menu";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <TopicsMenu />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
