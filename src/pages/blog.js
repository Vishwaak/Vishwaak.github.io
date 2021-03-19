import React from 'react';
import Layout from '../components/Layout';
import {Link, graphql, useStaticQuery} from 'gatsby'
import './blog.scss'

const Blog = () => {
    const postsQuery = useStaticQuery(graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date]}) {
          edges{
            node {
              frontmatter {
                title
                date
                sinopsis
              }
              fields {
                  slug
              }
            }
          }
        }
      }
    `)
    
    const posts = postsQuery.allMarkdownRemark.edges.map((posts) => {

        return ( <div className="blogUI">
                <ul>
                <Link className='nodecor' to={`/blog/${posts.node.fields.slug}`}  >
                <p><span className="dot">•</span> {posts.node.frontmatter.title} [{posts.node.frontmatter.date}]</p> 
                <p>{posts.node.frontmatter.sinopsis}</p>
                </Link>
                </ul>
                </div>
        )
        
    })

    
    
return (
    <Layout>
    
        <h1 className="opener">Blog</h1>
           {posts}
    </Layout>
)
};

export default Blog;
