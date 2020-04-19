import React from "react"
import { Link } from 'gatsby'
import * as Icon from 'react-feather';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Testimonials from '../components/testimonials'
import featureImage from "../../static/images/hero.png";
import thumbnailServices from "../../static/images/feature-services.png"
import thumbnailFranz from "../../static/images/feature-franz.png"
import thumbnailRestrictions from "../../static/images/feature-restrictions.png"
import thumbnailMore from "../../static/images/feature-more.png"
import testimonialChipde from "../../static/images/testimonials/chipde.png"
import testimonialMakeuseof from "../../static/images/testimonials/makeuseof.png"
import testimonialSandromatter from "../../static/images/testimonials/sandromatter.jpg"
import testimonialJakelee from "../../static/images/testimonials/jakelee.jpeg"

const IndexPage = () => (
    <Layout>
        <SEO />

        <div className={"page-header home"}>
            <h1>All your messaging services in one place</h1>
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
                            <div className={"button"}>
                                <Link to="/services">
                                    Browse Services
                                </Link>
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
                                        Browse Features
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

        <Testimonials
            slides={[
                {
                    text: 'Ferdi offers no restrictions and no additional features that are subject to a fee. A real download tip!',
                    logo: testimonialChipde,
                    name: 'Chip.de'
                },
                {
                    text: 'You can concentrate all of your messaging applications in a single messaging browser, instead of having numerous taskbar and system tray icons.',
                    logo: testimonialMakeuseof,
                    name: 'MakeUseOf.com'
                },
                {
                    text: 'To put it simply: I love Ferdi. It does exactly what I want to, costs nothing, lets me keep my privacy.',
                    logo: testimonialJakelee,
                    name: 'Jake Lee'
                },
                {
                    text: 'Since the lessons at the university are digital I use Ferdi, the all-in-one messenger app.',
                    logo: testimonialSandromatter,
                    name: 'Sandro Matter'
                },
            ]}
        />

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

        <div className={"support"}>
            <div>
                <div className={"call-to-action__content"}>
                    <p>Do you like Ferdi? Spread the love!</p>
                </div>

                <div className={"actions"}>
                    <div className={"button"}>
                        <a href="https://github.com/getferdi/ferdi">
                            <Icon.Star />
                            Star on GitHub
                        </a>
                    </div>
                    <div className={"button"}>
                        <a href="https://twitter.com/intent/tweet?text=Ferdi%3A%20A%20messaging%20browser%20that%20allows%20you%20to%20combine%20your%20favourite%20messaging%20services%20into%20one%20application.%0A%0ACheck%20out%20Ferdi%20at%20https%3A//getferdi.com">
                            <Icon.ThumbsUp />
                            Tell your Friends
                        </a>
                    </div>
                    <div className={"button"}>
                        <a href="https://opencollective.com/getferdi">
                            <Icon.CreditCard />
                            Support our Open Collective
                        </a>
                    </div>
                </div>

            </div>
                
        </div>
    </Layout>
)

export default IndexPage
