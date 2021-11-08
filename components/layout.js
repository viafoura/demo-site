import Footer from "@/components/footer";
import Main from "@/components/main";
import Nav from "@/components/nav";

export default function Layout({ subscription, children }) {
  return (
    <>
      <Nav subscription={subscription} />
      <Main>{children}</Main>
      <Footer subscription={subscription} />
    </>
  );
}
