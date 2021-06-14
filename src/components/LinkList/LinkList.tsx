// VENDOR imports
import React from "react";
import { useQuery, gql } from "@apollo/client";
// imports
import Link from "../Link/Link";

const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

const LinkList = () => {
  const result = useQuery(FEED_QUERY);

  return (
    <div>
      {result.data && (
        <>
          {result.data.feed.links.map(
            (link: { id: string; description: string; url: string }) => (
              <Link key={link.id} link={link} />
            )
          )}
        </>
      )}
    </div>
  );
};

export default LinkList;
