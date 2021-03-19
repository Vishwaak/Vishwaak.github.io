import React from 'react';
import Layout from '../components/Layout';
import aboutStyle from './About.module.scss';
import Img from 'gatsby-image';
import {graphql} from 'gatsby'

export const query = graphql`
query {
    file(relativePath: { eq: "images/about.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        
        fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = (props) => {
    console.log(query)
    return (
        <Layout>
            <h2>Hello , my name is T Vishwaak Chandran</h2>

            <div className={aboutStyle.main}>
            

            <div className={aboutStyle.izquierda}>
                <div className={aboutStyle.imagen}> <Img className={aboutStyle.img} fluid={props.data.file.childImageSharp.fluid} src="images/about.png" /></div>
                <div className={aboutStyle.texto}>

                <div className={aboutStyle.iconos}><i className="fas fa-map-marker-alt fa-sm"></i><p>Kerala, India</p></div>
            <div className={aboutStyle.iconos}><i className="fas fa-graduation-cap fa-sm"></i><p>Amrita Vishwa Vidyapeetham</p></div>
            <div className={aboutStyle.iconos}><i className="fas fa-code fa-sm"></i><p>HTML, CSS,Python,DevOps,Rust,C</p></div>
            <div className={aboutStyle.iconos}><i className="fas fa-language fa-sm"></i><p>English, Tamil and Hindi</p></div>
            


                </div>
          
            </div>
            <div className={aboutStyle.derecha}>
            <p>I'm T Vishwaak Chandran currently pursuing my Bachelors in Computer Science from Amrita Vishwa Vidyapeetham. I am a memmber & mentor at <a href="https://amfoss.in/">amFOSS</a> </p>
            <p>
                    Non player character(NPC) in a game are what fasicantes me the most. I love desingning my own action sequence, what if NPC could vary their actions or come up with new actions based on the user actions. Wouldn't that be fun?. Hence I started exploring Deep learning deeply. Which lead me to reinforcement learning.          
            </p>
               
                <div className={aboutStyle.logoContainer}>
                <p>Some of the tech I like:</p>
                <img alt="javascript" className={aboutStyle.logo} src="./logos/c.svg" />
                <img alt="Gatsby" className={aboutStyle.logo} src="./logos/jupyter.svg" />
                <img alt="GraphQl" className={aboutStyle.logo} src="./logos/python.svg" />
                <img alt="React" className={aboutStyle.logo} src="./logos/react.svg" />
                <img alt="nodeJs" className={aboutStyle.logo} src="./logos/rust.svg" />
                </div>

           
                <div className={aboutStyle.socialContainer}>
                <p>Send me a message!</p>
                <a className={aboutStyle.social} href="https://github.com/vishwaak"><i className="fab fa-github"></i></a>
                <a className={aboutStyle.social} href="https://www.instagram.com/potato_chip_monster/"><i className="fab fa-instagram"></i></a>
                <a className={aboutStyle.social} href="https://twitter.com/vishwaakchandra"><i class="fab fa-twitter"></i></a>
                </div>


            </div>

            </div>
        </Layout>
    )
}

export default About