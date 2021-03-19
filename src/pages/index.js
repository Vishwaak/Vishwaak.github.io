import React from "react";
import Layout from '../components/Layout';
import './index.styles.scss';
import portfolioItems from '../components/portfolio-items';
import {Link, graphql, useStaticQuery} from 'gatsby'

function renderFolio() {
  return  portfolioItems.map(({title, sinopsis, idx, desc, repo, live,img}) => {
        console.log(title);
        return (
           

            <div key={'div' + idx} className="tab">
            <input key={'index' + idx}  type="checkbox" id={idx + title}/>
            <label key={'label' + idx}  className="tab-label" for={idx + title}>  <span key={'pTit' + idx} className='folio-title'>{title} </span>
            <span key={'dot' + idx} className='folio-title'>· </span>
                    <span  key={'pSinop' + idx} className='folio-sinopsis'>{sinopsis}</span></label>
            <div key={'tab' + idx} class="tab-content">
            <img alt="nicasia" src={img}/>
            {desc}
            <span className="repolinks" key={'repo' + idx}><a key={'repoLink' + idx} href={repo}>Github Repo</a></span>
            
            {live ? <span className="repolinks" key={'live' + idx}><a key={'liveLink' + idx} href={repo}>Check it live</a></span> : null }


            </div>
            </div>


        )
    })
}

const Index = () => {
        const data = useStaticQuery(graphql`
        query {
            site{
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <Layout>
            <div className="dev">
                        <h1>{data.site.siteMetadata.title}</h1>
                        <span className="attr">Deep learning enthusiast </span>
                        <span className="dot">•</span>
                        <span className="attr">Developer</span>
                        <span className="dot">•</span>
                        <span className="attr">Student</span>
                        </div>
                        <div className="icons">
                        <a href='https://github.com/vishwaak'><i className="fab fa-github"></i></a>
                        <a href='https://twitter.com/vishwaakchandra'><i className="fab fa-twitter"></i></a>
                        <a href='https://www.linkedin.com/in/vishwaak-chandran/'><i className="fab fa-linkedin"></i></a>
                        </div>
            <h3 className="opener">I like to experiment and explore things</h3>
            <p className="subtitle">Here are few of my project. Click to explore them :)</p>
            {renderFolio()}
        </Layout>
    )
}

export default Index