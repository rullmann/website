import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/hero.png";
import thumbnailServices from "../../static/images/feature-services.png"
import thumbnailFranz from "../../static/images/feature-franz.png"
import thumbnailRestrictions from "../../static/images/feature-restrictions.png"
import thumbnailMore from "../../static/images/feature-more.png"

const IndexPage = () => (
    <Layout>
        <SEO title="Ferdi: All your services in one place"/>

        <div className={"page-header home"}>
            <h1>All your services in one place</h1>
            <p>Ferdi is a messaging browser that allows you to combine your favorite messaging services into one application.</p>
            <img alt={"Dashboard"} src={featureImage}/>
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <h2 className={"features-heading"}>Why Ferdi?</h2>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"All your Services"} src={thumbnailServices}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Increase your productivity.</h2>
                                <p>One Slack application, one WhatsApp application, keeping your WebMail open in the browser? Ferdi brings all your messaging services into one app.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Based on one of the most popular messaging browsers.</h2>
                                <p>Ferdi is based on Franz - a messaging browser already used by thousands of people.<br />Due to this, Ferdi is compatible with all Franz recipes and your existing Franz account.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Based on Franz"} src={thumbnailFranz}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"No restrictions"} src={thumbnailRestrictions}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>No restrictions.</h2>
                                <p>Ferdi doesn't restrict its usage. Use every service you want, as many times as you want and how you want.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>...and so much more!</h2>
                                <p>Ferdi ships with so many great features.</p>
                                <div className={"button"}>
                                    <Link to="/features">
                                        View Feature list
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"and much more features"} src={thumbnailMore}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Download Ferdi for free.</h2>
                    <p>Download Ferdi today and join its ever-growing userbase.</p>
                </div>

                <div className={"button"}>
                    <Link to="/download">Download</Link>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
