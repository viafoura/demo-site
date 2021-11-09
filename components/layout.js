import Footer from "@/components/footer";
import Main from "@/components/main";
import Nav from "@/components/nav";

export default function Layout({ preview, children }) {
  return (
    <>
      <Nav preview={preview} />
      <Main>{children}</Main>
      <Footer preview={preview} />
    </>
  );
}
