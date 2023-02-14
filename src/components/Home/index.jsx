import React from "react";
import { useState } from "react";
import { Button } from "flowbite-react";
import Alert from "./Alert";
import Campaign from "../CampaignComponent";
import Card from "./Card";
import DonutChart from "./DonutChart";
import Info from "./Info";
const index = () => {
return (
  <>
    <div class="preloader">
        <img class="preloader__image" width="55" src="images/loader.png" alt="" />
    </div>
    <div class="page-wrapper">

        <header class="main-header">
            <div class="topbar">
                <div class="container">
                    <div class="topbar__left">
                        <div class="topbar__social">
                            <a href="#" class="fab fa-facebook-square"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-pinterest-p"></a>
                            <a href="#" class="fab fa-instagram"></a>
                        </div>
                        <p>Welcome to pipl.ai</p>
                    </div>
                    <div class="topbar__right">
                        <a href="#"><i class="agrikon-icon-email"></i>help@pipl.ai</a>
                    </div>
                </div>
            </div>
            <nav class="main-menu">
                <div class="container">
                    <div class="logo-box">
                        <a href="index.html" aria-label="logo image"><img src="/themes/images/new/pipl.ai.svg" width="153" alt="" /></a>
                        <span class="fa fa-bars mobile-nav__toggler"></span>
                    </div>
                    <ul class="main-menu__list">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/deal">Get Lifetime Deal</a>
                        </li>
                        <li>
                            <a href="/roadmap">Roadmap</a>
                        </li>
                        <li>
                            <a href="/blog">Blog</a>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </header>

        <div class="stricky-header stricked-menu main-menu">
            <div class="sticky-header__content"></div>
        </div>

        <section class="service-head-1">
          <div class="container-fluid">
            <div class="row">
                <div class="col-sm-5">
                    <div class="block-title block-1 text-left">
                        <h3>More Meetings.</h3>
                        <h3>More Revenue.</h3>
                        <h3 class="purple">Less Friction</h3>
                            <p>It is hard to send cold emails at scale. We make it a breeze. 
                                Connect unlimited inboxes, enjoy free warm-up for ALL your 
                                accounts, built-in email validation and data cleansing, 
                                AI-powered sequence & template writer and much more…</p>
                                <a href="about.html" class="thm-btn">Let’s go!</a>
                    </div>
                </div>
                <div class="col-sm-7">
                    <div class="block-bg-1 text-center">
                        <img src="/themes/images/new/mail.png" class="img-responsive" width="450" />
                    </div>
                    
                </div>
            </div>
          </div>
        </section>

        <section class="service-two">
            <div class="service-two__bottom-curv"></div>
            <div class="container">
                <div class="block-title text-left">
                    <div class="row">
                        <div class="col-sm-6">
                            <h3>Cold Email automation you always <span class="purple"> dreamed of.</span></h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="service-two__card">
                            <div class="service-two__card-image text-center">
                                <img src="/themes/images/new/person.png" height="220" alt="" />
                            </div>
                            <div class="service-two__card-content">
                                <h3><a href="#">Connect Unlimited Inboxes</a></h3>
                                <p>Effotlessly scale your outbound campaigns. Whether you want to send 1K emails per month, 100K or 1 million – pipl AI has you covered.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="service-two__card">
                            <div class="service-two__card-image">
                                <img src="/themes/images/new/woman.png" height="220" alt="" />
                            </div>
                            <div class="service-two__card-content">
                                <h3><a href="#">Built-in Email Validation</a></h3>
                                <p>Never receive a bounce again. We will verify every prospect’s email address before your outreeach gos live.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="service-two__card">
                            <div class="service-two__card-image text-center">
                                <img src="/themes/images/new/mail.png" height="220" alt="" />
                            </div>
                            <div class="service-two__card-content">
                                <h3><a href="#">AI Copy Assistant</a></h3>
                                <p>Predict how likely your copy is to receive a response. Our AI assistant will make sure it’s super-easy to read.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="service-two-1">
            <div class="service-two__bottom-curv"></div>
            <div class="container">
                <div class="block-title text-left">
                    <div class="row">
                        <div class="col-sm-10 margin-auto text-center">
                            <img src="/themes/images/new/computer.png" class="img-responsive" alt="" />
                        </div>
                    </div>
                    <div class="text-center">
                        <h3>Easily  <span class="purple"> scale</span> your outreach<br /> volume with  <span class="purple"> unlimited inboxes.</span></h3>
                        <p>Other’s charge you $50-$100 per each connected email account? 
                            We don’t.</p>
                            <a href="#" class="thm-btn">Join The Waitlist</a>
                    </div>
                </div>
                
            </div>
        </section>

        <section class="service-head-2">
            <div class="container-fluid">
              <div class="row">
                  <div class="col-sm-6">
                      <div class="block-bg-2 text-center">
                          <img src="/themes/images/new/mac.png" class="img-responsive" width="450" />
                      </div>
                      
                  </div>
                  <div class="col-sm-6">
                    <div class="block-title block-2 text-left">
                        <h3>Stay out of Spam.</h3>
                        <h3 class="purple">For free. Forever.</h3>
                            <p>Launch warm-up campaigns for all your emails & domains. The easiest way to maintain good reputation and deliverability for your email infrastructure is here. Prevent landing in Spam and Promotions tabs in 3 clicks using our proprietary algorithm and high-quality distribution list.</p>
                                <a href="about.html" class="thm-btn">Let’s go!</a>
                    </div>
                </div>
              </div>
            </div>
          </section>


          <section class="service-head-2">
            <div class="container-fluid">
                
              <div class="row">
                  
                  <div class="col-sm-6">
                    <div class="block-title block-3 text-left">
                        <h3>Save 10+ hours per week with <span class="purple"> built-in email validation</span> & list cleansing.</h3>
                            <p>Remove manual hussle and joggling with .csv prospect lists.
                                Pipl will take care of verifying email addresses & clear data formatting  before you hit the “SEND” button.</p>
                                <a href="about.html" class="thm-btn">Let’s go!</a>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="block-bg-2 text-center">
                        <img src="/themes/images/new/mac.png" class="img-responsive" width="450" />
                    </div>
                    
                </div>
              </div>
            </div>
          </section>

          <section class="service-head-2">
            <div class="container-fluid">
              <div class="row">
                  <div class="col-sm-6">
                      <div class="block-bg-2 text-center">
                          <img src="/themes/images/new/mac.png" class="img-responsive" width="450" />
                      </div>
                      
                  </div>
                  <div class="col-sm-6">
                    <div class="block-title block-2 text-left">
                        <h3><span class="purple"> AI-copywriting assistant </span> to 
                            ensure your emails <span class="purple">capture 
                            attention.</span> </h3>
                            <p>Your prospects receive tons of emails daily.
                                Our AI assistant helps to improve your copy so your
                                emails stand out in their inboxes and retain interest.</p>
                                <a href="about.html" class="thm-btn">Let’s go!</a>
                    </div>
                </div>
              </div>
            </div>
          </section>

          <section class="service-head-2">
            <div class="container-fluid">
              <div class="row">
                  
                  <div class="col-sm-6">
                    <div class="block-title block-3 text-left">
                        <h3>Create <span class="purple"> whole sequences</span> in 
                            less than a minute with our 
                            <span class="purple">AI engineGG.</span></h3>
                            <p>Your prospects receive tons of emails daily.
                                Our AI assistant helps to improve your copy so your
                                emails stand out in their inboxes and retain interest.</p>
                                <a href="about.html" class="thm-btn">Let’s go!</a>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="block-bg-2 text-center">
                        <img src="/themes/images/new/mac.png" class="img-responsive" width="450" />
                    </div>
                    
                </div>
              </div>
            </div>
          </section>


          <section class="service-head-2">
            <div class="container-fluid">
              <div class="row">
                  <div class="col-sm-6">
                      <div class="block-bg-2 text-center">
                          <img src="/themes/images/new/brunette.png" class="img-responsive" width="450" />
                      </div>
                      
                  </div>
                  <div class="col-sm-6">
                    <div class="block-title block-2 text-left">
                        <h3>Go beyond<span class="purple">  firstName</span> </h3>
                            <p>Impress your prospects with cutting-edge personalization.
                                Send highly-engaging images, GIFs and videos tailored to 
                                each person on your list.</p>
                                <div class="row">
                                    <div class="col-sm-6 text-center">
                                        <div class="purple bold font-25">
                                            &infin;	
                                        </div>
                                        Custom Personalization Fields
                                    </div>
                                    <div class="col-sm-6 text-center">
                                        <div class="purple bold font-25">
                                            GIF + IMG
                                        </div>
                                        Automated GIF, IMG, and video personalization
                                    </div>
                                </div>
                    </div>
                </div>
              </div>
            </div>
          </section>

          <section class="service-two">
            <div class="service-two__bottom-curv"></div>
            <div class="container">
                <div class="block-title text-left">
                    <div class="row">
                        <div class="col-sm-6 margin-auto text-center">
                            <h3>Are you a <span class="purple"> right fit?</span></h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="service-two__card">
                            <div class="service-two__card-image text-center">
                                <img src="/themes/images/new/r_1.png" height="220" alt="" />
                            </div>
                            <div class="service-two__card-content service-two__card-content_auto">
                                <h3><a href="#">B2B Sales teams, SDR, AE</a></h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="service-two__card">
                            <div class="service-two__card-image text-center">
                                <img src="/themes/images/new/r_2.png" height="220" alt="" />
                            </div>
                            <div class="service-two__card-content service-two__card-content_auto">
                                <h3><a href="#">SaaS, Agencies, Freelancers</a></h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="service-two__card">
                            <div class="service-two__card-image text-center">
                                <img src="/themes/images/new/r_3.png" height="220" alt="" />
                            </div>
                            <div class="service-two__card-content service-two__card-content_auto">
                                <h3><a href="#">Lead Generation Agencies</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="container block-title ">
              <div class="row">
                  <div class="col-sm-5">
                    <div class="text-left">
                        <div class="row">
                            <div class="col-sm-12">
                                <h3>Use Cases </h3>
                                <p>Whether you’re a solo-founder or a mature team of b2b sales professionals – pipl AI will help you grow.</p>
                            </div>
                        </div>
                    </div>
                      <div class="block-bg-3">
                        <ul class="list-unstyled footer-widget__links">
                            <li>
                                <div class="block">
                                    <div class="left"><img src="/themes/images/new/icon_laptop.png" height="30" /></div><div class="right"><a href=""><strong> Startups</strong></a><p>Land new clients & investors. Seamlessly scale your outreach withot paying a fortune.</p></div> <div class="clear"></div>
                                </div>
                            </li>
                            <li>
                                <div class="block">
                                    <div class="left"><img src="/themes/images/new/icon_office_chair.png" height="50" /></div><div class="right"><a href=""><strong>Agencies</strong></a><p>Increase your bottom-line by creating a predictable flow of new business opportunities and securing industry partnerships.</p></div> <div class="clear"></div>
                                </div>
                            </li>
                            <li>
                                <div class="block">
                                    <div class="left"><img src="/themes/images/new/icon_pot.png" height="50" /></div><div class="right"><a href=""> <strong>Lead Generation Companies</strong></a><p>Cut 85% of your email automation costs. Scale clients campaigns effortlessly and enjoy advanced deliverability and personalization features.</p></div> <div class="clear"></div>
                                </div>
                            </li>
                        </ul>
                      </div>
                      
                  </div>
                  <div class="col-sm-7">
                    <div class=" block-11 text-left">
                        <img src="/themes/images/new/group.png" alt="" />
                    </div>
                </div>
              </div>
            </div>
          </section>



        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 margin-auto text-center">
                        <img src="/themes/images/new/pipl.ai.svg" class="logo" width="153" alt="" />
                        <ul class="list-unstyled footer-widget__social">
                            <li><a href="#"><img src="/themes/images/new/icon_mail.png" /> Team@pipl.ai</a></li>
                            <li><a href="#"><img src="/themes/images/new/icon_fb.png" /></a></li>
                            <li><a href="#"><img src="/themes/images/new/icon_tw.png" /></a></li>
                            <li><a href="#"><img src="/themes/images/new/icon_lk.png" /></a></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </footer>
        <div class="bottom-footer">
            <div class="container">
                <p>© Copyright 2023 by pipl.ai</p>
                <div class="bottom-footer__links">
                    <a href="#">Our Roadmap</a>
                    <a href="#">Blog</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms and Conditions</a>
                </div>
            </div>
        </div>

    </div>


    <div class="mobile-nav__wrapper">
        <div class="mobile-nav__overlay mobile-nav__toggler"></div>
        <div class="mobile-nav__content">
            <span class="mobile-nav__close mobile-nav__toggler"><i class="far fa-times"></i></span>

            <div class="logo-box">
                <a href="index.html" aria-label="logo image"><img src="/themes/images/logo-light.png" width="155" alt="" /></a>
            </div>
            <div class="mobile-nav__container"></div>

            <ul class="mobile-nav__contact list-unstyled">
                <li>
                    <i class="agrikon-icon-email"></i>
                    <a href="mailto:needhelp@agrikon.com">needhelp@pipl.com</a>
                </li>
                <li>
                    <i class="agrikon-icon-telephone"></i>
                    <a href="tel:666-888-0000">666 888 0000</a>
                </li>
            </ul>
            <div class="mobile-nav__top">
                <div class="mobile-nav__language">
                    <img src="/themes/images/resources/flag-1-1.jpg" alt="" />
                    <label class="sr-only" for="language-select">select language</label>
                    <select class="selectpicker" id="language-select">
                        <option value="english">English</option>
                        <option value="arabic">Arabic</option>
                    </select>
                </div>
                <div class="mobile-nav__social">
                    <a href="#" aria-label="twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" aria-label="facebook"><i class="fab fa-facebook-square"></i></a>
                    <a href="#" aria-label="pinterest"><i class="fab fa-pinterest-p"></i></a>
                    <a href="#" aria-label="instagram"><i class="fab fa-instagram"></i></a>
                </div>
            </div>



        </div>
    </div>

    <div class="search-popup">
        <div class="search-popup__overlay search-toggler"></div>
        <div class="search-popup__content">
            <form action="#">
                <label for="search" class="sr-only">search here</label>
                <input type="text" id="search" placeholder="Search Here..." />
                <button type="submit" aria-label="search submit" class="thm-btn">
                    <i class="fa fa-search"></i>
                </button>
            </form>
        </div>
    </div>

    <a href="#" data-target="html" class="scroll-to-target scroll-to-top"><i class="fa fa-angle-up"></i></a>

  </>
);
};
export default index;
