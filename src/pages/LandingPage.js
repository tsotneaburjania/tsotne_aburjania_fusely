import React from 'react'

import ButtonPurple from '../components/ButtonPurple'
import ButtonWhite from '../components/ButtonWhite'
import LearnMoreLink from '../components/LearnMoreLink'

import art_woman from '../images/art_woman.svg'
import binator_logo from "../images/binator_logo.svg"
import buyme_logo from "../images/buyme_logo.svg"
import loogipsum_logo from "../images/loogipsum_logo.svg"
import umbrella_logo from "../images/umbrella_logo.svg"
import square_logo from "../images/square_logo.svg"
import roadmap_woman from "../images/roadmap_woman.svg"
import light_bulb_woman from '../images/light_bulb_woman.svg'
import professionals from '../images/professionals.svg'
import b1 from '../images/b1.png'
import b2 from '../images/b2.png'
import b3 from '../images/b3.png'
import fb_icon from '../images/fb_icon.svg'
import twitter_icon from '../images/twitter_icon.svg'
import linkedin_icon from '../images/linkedin_icon.svg'
import fuselyLogo from '../images/fusely_logo.svg'


import "../styles/LandingPage.scss"

function LandingPage() {
    return (
        <main className="pageHolder">
            <section className="section" id="sectionOne">
                <div className="top">
                    <div className="flexStart">
                        <h1 className="titleBig" id="getStarted">Let’s get fusely together</h1>
                        <p className="paragraph">Outcome-centered product that reduce churn, optimize pricing, and grow your subscription business end-to-end.</p>
                        <ButtonPurple text="Get Started"/>
                    </div>

                    <div className="flexEnd">
                        <img src={art_woman} alt="art"/>
                    </div>
                </div>
                <div className="bot">
                    <ul className="sectOneLogos">
                        <li>
                            <a href="https://google.com">
                                <img src={binator_logo} alt="Binator"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://google.com">
                                <img src={buyme_logo} alt="Buyme"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://google.com">
                                <img src={loogipsum_logo} alt="Loogipsum"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://google.com">
                                <img src={umbrella_logo} alt="Umbrella"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://google.com">
                                <img src={square_logo} alt="Square"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="section" id="sectionTwo">
                <div className="flexStart">
                    <img src={roadmap_woman} alt="art"/>
                </div>
                <div className="flexEnd">
                    <h1 className="titleMedium" id="getStarted">Detailed Examination</h1>
                    <p className="paragraph">A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.</p>
                    <LearnMoreLink />
                </div>
            </section>

            <section className="section" id="sectionThree">
                <div className="flexStart">
                    <h1 className="titleMedium" id="getStarted">Creative Solutions</h1>
                    <p className="paragraph">Creativity is our second name. We're full of inventive ideas and we're happy to present them to you.</p>
                    <LearnMoreLink />
                </div>
                <div className="flexEnd">
                    <img src={light_bulb_woman} alt="art"/>
                </div>
            </section>

            <section className="section" id="sectionFour">
                <div className="flexStart">
                    <img src={professionals} alt="art"/>
                </div>
                <div className="flexEnd">
                    <h1 className="titleMedium" id="getStarted">Professional Team</h1>
                    <p className="paragraph">Well, obviously, we're professionals. Don't hesitate - get to know us better.</p>
                    <LearnMoreLink />
                </div>
            </section>

            <section className="section" id="sectionFive">
                <h1 className='titleMedium'>Choose your plan</h1>
                <div className='plansHolder'>
                    <div className='planCard planCardWhite'>
                        <h5 className='cardTitle'>Starter</h5>
                        <h2 className='cardPrice'>Free</h2>
                        <ul className='featureList'>
                            <li>Dashboard</li>
                            <li>Limited Support</li>
                            <li>Forever Free</li>
                        </ul>
                        <ButtonWhite text="Get Started" />
                    </div>
                    <div className='planCard planCardPurple'>
                        <h5 className='cardTitle'>Premium</h5>
                        <h2 className='cardPrice'>$29/month</h2>
                        <ul className='featureList'>
                            <li>Dashboard & Analysis</li>
                            <li>Premium Support</li>
                            <li>Tracking Service</li>
                        </ul>
                        <ButtonWhite text="Get Started" />
                    </div>
                    <div className='planCard planCardWhite'>
                        <h5 className='cardTitle'>Enterprise</h5>
                        <h2 className='cardPrice'>$49/month</h2>
                        <ul className='featureList'>
                            <li>All Features in <b>Premium</b></li>
                            <li>Realtime Overview</li>
                            <li>Mobile App</li>
                        </ul>
                        <ButtonWhite text="Get Started" />
                    </div>
                </div>
            </section>

            <section className="section" id="sectionSix">
                <div className="top">
                   <h1 className='titleMedium'>From our blog</h1>
                   <ButtonWhite text="View all" />
                </div>
                <div className="bot">
                    <div className='thumbCard'>
                        <div className='thumbHolder'>
                            <img src={b1} alt="thumb1"/>
                        </div>
                        <div className='thumbDesc'>
                            <h4 className='thumbTitle'>What's Fusely?</h4>
                            <p className='excerpt'>A brand new company, created for everyone. This article will help you understand what "fusely" stands for.</p>
                            <LearnMoreLink />
                        </div>
                    </div>
                    <div className='thumbCard'>
                    <div className='thumbHolder'>
                            <img src={b2} alt="thumb2"/>
                        </div>
                        <div className='thumbDesc'>
                            <h4 className='thumbTitle'>What's Fusely?</h4>
                            <p className='excerpt'>A brand new company, created for everyone. This article will help you understand what "fusely" stands for.</p>
                            <LearnMoreLink />
                        </div>
                    </div>
                    <div className='thumbCard'>
                    <div className='thumbHolder'>
                            <img src={b3} alt="thumb3"/>
                        </div>
                        <div className='thumbDesc'>
                            <h4 className='thumbTitle'>What's Fusely?</h4>
                            <p className='excerpt'>A brand new company, created for everyone. This article will help you understand what "fusely" stands for.</p>
                            <LearnMoreLink />
                        </div>
                    </div>
                </div>
            </section>

            <section className='section' id='sectionSeven'>
                <div className='interestedIn'>
                    <h1 className='titleMedium white'>Interested in<br/>getting fusely?</h1>
                    <ButtonPurple text="Let's talk"/>
                </div>
                <div className='footer'>
                    <div className='listHolder productListHolder'>
                        <h3 className='listName'>Product</h3>
                        <ul className='list productList'>
                            <li>
                                <p>How it works</p>
                            </li>
                            <li>
                                <p>Features</p>
                            </li>
                            <li>
                                <p>Pricing</p>
                            </li>
                            <li>
                                <p>FAQ</p>
                            </li>
                            <li>
                                <p>Download</p>
                            </li>
                        </ul>
                    </div>
                    <div className='listHolder companyListHolder'>
                        <h3 className='listName'>Product</h3>
                        <ul className='list companyList'>
                            <li>
                                <p>About</p>
                            </li>
                            <li>
                                <p>Blog</p>
                            </li>
                            <li>
                                <p>Partnership</p>
                            </li>
                            <li>
                                <p>Terms of use</p>
                            </li>
                            <li>
                                <p>Privacy policy</p>
                            </li>
                        </ul>
                    </div>
                    <div className='listHolder supportListHolder'>
                        <h3 className='listName'>Product</h3>
                        <ul className='list supportList'>
                            <li>
                                <p>Help center</p>
                            </li>
                            <li>
                                <p>Contact us </p>
                            </li>
                        </ul>
                    </div>
                    <div className='listHolder getInTouchtListHolder'>
                        <h3 className='listName'>Product</h3>
                        <ul className='list supportList containsIcons'>
                            <li>
                               <img src={fb_icon} alt="fb" /> 
                            </li>
                            <li>
                               <img src={twitter_icon} alt="twitter" /> 
                            </li>
                            <li>
                               <img src={linkedin_icon} alt="linkedin" /> 
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className='footerBackground'>
                <div className='logoAndCopyrightHolder'>
                    <div className='logoAndCopyright'>
                        <img src={fuselyLogo} alt='fusely'/>
                        <p className='copyright'>© Fusely 2021. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LandingPage
