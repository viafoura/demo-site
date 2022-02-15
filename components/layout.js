import { useEffect, useState } from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import TopicMenu from "@/components/topic-menu";
import { fetchGraphQL } from "@/graphql/fetchGraphQL";
import { menuAndTopics } from "@/graphql/menuAndTopics";

export default function Layout({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getMenuItemsAndTopics = async () => {
      const data = await fetchGraphQL({
        query: menuAndTopics,
      });
      setData(data);
    };
    getMenuItemsAndTopics();
  }, []);

  return (
    data && (
      <>
        <Header allPosts={data.allPosts} />
        <TopicMenu allTopics={data.allTopics} />
        <Main>{children}</Main>
        <Footer />
      </>
    )
  );
}
