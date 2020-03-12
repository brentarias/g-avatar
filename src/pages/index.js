import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {
    const dreams = this.props.data.dreams.nodes

    return (
      <Layout>
        <SEO title="Home" />
        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h2 className="text-white mt-0">
                  Find and step into your purpose.
                </h2>
                <hr className="divider light my-4" />
                <p className="text-white-50 mb-4">
                  The Avatar Assembly are the leaders whose light and talents
                  brings healing to self, relationships, and the many. We
                  restore, cherish, and master practices that have brought
                  wellness for thousands of years. Our community finds joy in
                  whole food, dance, song, music, and a sea of healing arts. And
                  from our strength and love, we reach out to and invite others
                  also seeking wellness and higher purpose.{" "}
                </p>
              </div>
              <div className="col-lg-6 text-center">
                <h2 className="text-white mt-0">
                  Heal the body. Heal the mind.
                </h2>
                <hr className="divider light my-4" />
                <p className="text-white-50 mb-4">
                  The fullness of human potential is yours if you make it your
                  dream to manifest your heart and spirit. Join with the Avatar
                  Assembly - we who have made it our passion to live in harmony
                  with ourselves, nature, and our fellow man. Together we share
                  our human experiences, whether in joy or grief, where we learn
                  and grow. United, we work and serve the needs of our community
                  and extend our arm beyond to the world in need.{" "}
                </p>
              </div>
            </div>
            <hr className="divider my-4" />
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">
                  Finding the Avatar Assembly.
                </h2>
                <hr className="divider light my-4" />
                <p className="text-white-50 mb-4">
                  The journey begins with a six hour Saturday seminar - the
                  Avatar Integration. The seminar is a grounding of knowledge
                  and experience in diet, lifestyle and self-awareness. The
                  graduates from the Avatar Integration are then eligible to
                  join or form micro-communities, each an Avatar Circle. Each
                  Circle meets regularly at a natural cadence (from monthly to
                  weekly) and is the venue for true food, beauty (music, song,
                  dance) and healing modalities. Each Circle then gathers its
                  strength to deliver with power to a worthy public cause; the
                  good that we have we must share as a light to others.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="elements">
          <div className="container">
            <h2 className="text-center mt-0">
              Reclaiming heritage. Creating legacy.
            </h2>
            <hr className="divider my-4" />
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-2">
                  <i className="fas fa-4x fa-carrot text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Food is Thy Medicine</h3>
                  <p className="text-muted mb-0">
                    To be living with power, we must be well. Healing the mind
                    and body begins with eating traditional whole foods. For us,
                    preparing and sharing meals is both a meditation and
                    powerful act of fellowship.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-2">
                  <i className="fas fa-4x fa-diagnoses text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Embrace Healing Arts</h3>
                  <p className="text-muted mb-0">
                    The Assembly honors and shares all forms of healing:
                    kinesiology, acupuncture, meditation, Tai Chi, yoga, Reiki,
                    chiropractic, massage, etcetera. Gifts of healing offered
                    when we gather as a community strengthen our human bonds and
                    gratitude.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-2">
                  <i className="fas fa-4x fa-ankh text-primary mb-4"></i>
                  <h3 className="h4 mb-2">A Life of Harmony</h3>
                  <p className="text-muted mb-0">
                    To have balance, we must honor our human nature. The
                    Assembly makes time for ceremonial, ancestral, and fine arts
                    which free the mind and spirit. Likewise we celebrate and
                    make time for the outdoors, living as stewards of the earth.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-2">
                  <i className="fas fa-4x fa-fire text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Passion & Power</h3>
                  <p className="text-muted mb-0">
                    The investment into our own well-being is the catalyst for
                    the transcendence we desire. Each of us can touch positively
                    thousands, and yet together we witness the whole is greater
                    than the sum of the parts. What together we hold as our
                    intention, we accomplish!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              {dreams.map((dream, index) => {
                return (
                  <div className="col-lg-4 col-sm-6">
                    <a
                      className="portfolio-box"
                      href={dream.image.publicURL}
                      onClick={this.handlePortfolioClick.bind(this, index)}
                    >
                      <Img
                        fluid={dream.image.childImageSharp.fluid}
                      />
                      <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">
                          {dream.title}
                        </div>
                        <div className="project-name">{dream.description}</div>
                      </div>
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="page-section bg-dark text-white" id="connect">
          <div className="container text-center">
            <h2 className="mb-4">Start a new direction in your life, today.</h2>
            <a
              className="btn btn-light btn-xl"
              href="mailto:avatar.within@gmail.com"
            >
              Contact Us
            </a>
          </div>
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h2 className="mt-0">Let's Get In Touch!</h2>
                <hr className="divider my-4" />
                <p className="text-muted mb-5">
                  Ready to start a new future with us? Give us a call or send us
                  an email and we will get back to you as soon as possible!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                <div>(602) 692 8088</div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                <a className="d-block" href="mailto:avatar.within@gmail.com">
                  avatar.within@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
        <PortfolioModal
          show={this.state.modalShow}
          onHide={() => this.setModal(false, 0)}
        >
          <PortfolioCarousel
            images={dreams}
            current={this.state.modalCurrent}
          />
        </PortfolioModal>
      </Layout>
    )
  }
}


export const imageData = graphql`
  query {
    dreams: allDreamsJson {
      nodes {
        title
        description
        image {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 818) {
              ...GatsbyImageSharpFluid
            }
            max: fluid {
              ...GatsbyImageSharpFluid
            }          
          }
        }
      }
    }
  }
`
