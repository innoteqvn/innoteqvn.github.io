import React, { Component } from 'react';

class PostTemplate extends Component {
  state = {  }
  render() {
    const { data: { markdownRemark: blog } } = this.props;

    return (
      <div>
        <span>{blog.frontmatter.date}</span>
        <h1>{blog.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: blog.html }} />
      </div>
    );
  }
}

export default PostTemplate;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
      }
      html
    }
  }
`;
