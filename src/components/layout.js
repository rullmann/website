/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql, Link} from "gatsby"

import Header from "./header"
import "../../static/styles/main.scss"
import logo from "../../static/images/logo.svg"

const Layout = ({children}) => (
    <StaticQuery query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `} render={data => (
        <>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <main>{children}</main>
            <footer>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-5"}>
                            <div className={"widget__item"}>
                                <div className={"logo"}>
                                    <Link to="/" title={"Ferdi"}>
                                        <img alt={"Logo"} src={logo} width={80}/>
                                    </Link>
                                </div>

                                <div className={"about"}>
                                    <p>Ferdi is a messaging browser that allows you to combine your favorite messaging services into one application.</p>
                                </div>
                            </div>
                        </div>

                        <div className={"col-2"}>
                            <div className={"widget__item"}>
                                <ul className={"links"}>
                                    <h4>Ferdi</h4>
                                    <ul>
                                        <li><Link to="/" title={"Home"}>Home</Link></li>
                                        <li><Link to="/download" title={"Download"}>Download</Link></li>
                                        <li><Link to="/features" title={"Features"}>Features</Link></li>
                                        <li><a href={"https://github.com/getferdi/ferdi"}>Open Source</a></li>
                                        <li><a href={"https://opencollective.com/getferdi"}>Open Collective</a></li>
                                    </ul>
                                </ul>
                            </div>
                        </div>

                        <div className={"col-2"}>
                            <div className={"widget__item"}>
                                <div className={"links"}>
                                    <h4>Support</h4>
                                    <ul>
                                        <li>
                                            <Link to="/contact">
                                                Contact
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="https://github.com/getferdi/ferdi/issues/new/choose">
                                                GitHub
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={"col-2"}>
                            <div className={"widget__item"}>
                                <div className={"links"}>
                                    <h4>Legal</h4>
                                    <ul>
                                        <li>
                                            <Link to="/terms">
                                                Terms of Service
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/privacy">
                                                Privacy policy
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"copyright"}>
                        <p>Copyright {new Date().getFullYear()}, {` `} <a href="https://github.com/orgs/getferdi/people" title={"the Ferdi Team"}>the Ferdi Team</a>. All rights reserved.</p><br />
                        <p>Franz and the Franz logo are trademarks or registered trademarks of Franz or Franz’s licensors.</p>
                        <p>GitHub and the GitHub logo are trademarks or registered trademarks of GitHub, Inc.</p>
                        <p>This website is not affiliate with Franz, GitHub or any messaging service shown.</p>
                    </div>
                </div>
            </footer>
        </>
    )}/>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
