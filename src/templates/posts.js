import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { format, parseISO } from "date-fns";

import Layout from "../components/layout.js";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

export const Root = styled.div`
  padding: 1rem 4rem 2rem;
  max-width: 1080px;
  margin: 0 auto;

  h1 {
    text-align: center;
    font-weight: bold;
    font-size: 2.25rem;
    line-height: 1.1;
    padding-bottom: 30px;
  }
  img {
    height: 600px;
    width: 800px;
  }
  @media (max-width: 700px) {
    padding: 1rem 2rem 2rem;
    img {
      height: 300px;
      width: 800px;
    }
  }
`;

export const Container = styled.div``;

const Posts = props => {
  const {
    data: {
      wpgraphql: { posts }
    },
    pageContext: { pageNumber, hasNextPage }
  } = props;

  // const currentPage = pageNumber ? `- Page ${pageNumber}` : ``

  return (
    <Layout>
      <Root>
        <h1>My Blog </h1>
        {posts.nodes.map(post => (
          <div key={post.id}>
            <Card
              image={post.featuredImage.sourceUrl}
              title={post.title}
              date={format(parseISO(post.date), "MMMM dd, yyyy")}
              slug={post.slug}
              uri={post.uri}
              alt={post.featuredImage.altText}
              excerpt={post.excerpt}
            />
          </div>
        ))}
        <Pagination pageNumber={pageNumber} hasNextPage={hasNextPage} />
      </Root>
    </Layout>
  );
};

export default Posts;

export const postQuery = graphql`
  query GET_POSTS($ids: [ID]) {
    wpgraphql {
      posts(where: { in: $ids }) {
        nodes {
          title
          id
          date
          slug
          uri
          excerpt
          featuredImage {
            altText
            sourceUrl
          }
        }
      }
    }
  }
`;
