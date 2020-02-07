import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { format, parseISO } from "date-fns";
import Layout from "../components/layout.js";

export const Root = styled.div`
  padding: 1rem 4rem 2rem;
  max-width: 1080px;
  margin: 0 auto;
  h1 {
    text-align: center;
    font-weight: bold;
    font-size: 2.25rem;
    line-height: 1.1;
  }

  .date {
    text-align: center;
  }
  @media (max-width: 500px) {
    padding: 1rem 2rem 2rem;
  }
`;

const Post = props => {
  const {
    data: {
      wpgraphql: { post }
    }
  } = props;

  const { title, content, date } = post;

  return (
    <Layout>
      <Root>
        <h1>{title}</h1>
        <p className="date">{format(parseISO(date), "MMMM dd, yyyy")}</p>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Root>
    </Layout>
  );
};

export default Post;

export const postQuery = graphql`
  query GET_POST($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        content
        uri
        date
      }
    }
  }
`;
