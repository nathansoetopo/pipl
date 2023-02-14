import React from "react";
import { useState } from "react";
const index = () => {
return (
  <>
   <div class="preloader">
        <img class="preloader__image" width="55" src="/themes/images/loader.png" alt="" />
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
                        <h3>Get Early Access<br /> to pipl.<span class="red">ai</span></h3>
                            <form class="early_access">
                                <label class="form-group has-float-label mb-4">
                                    <input class="form-control" />
                                    <span>Your First Name*</span>
                                </label>
                                <label class="form-group has-float-label mb-4">
                                    <input class="form-control" />
                                    <span>Your E-mail Address*</span>
                                </label>
                                <button type="submit" class="thm-btn">Join the Waitlist</button>
                            </form>
                    </div>
                </div>
                <div class="col-sm-7">
                    <div class="block-bg-1 text-center">
                        <img src="/themes/images/new/arms.png" class="img-responsive" width="450" />
                    </div>
                    
                </div>
            </div>
          </div>
        </section>

          <section class="service-head-3">
            <div class="container-fluid">
                <div class="row">
                    <div class="block-title text-left">
                        <div class="row">
                            <div class="col-sm-7">
                                <h3>Pre-order a <span class="purple"> Lifetime Deal.</span> $99/  Lifetime access</h3>
                            </div>
                        </div>
                    </div>
                </div>
              <div class="row">
                  <div class="col-sm-5">
                      <div class="block-bg-3">
                        <ul class="list-unstyled footer-widget__links">
                            <li>
                                <div class="block">
                                    <a href=""><div class="img"><img src="/themes/images/new/icon_laptop.png" height="30" /></div><strong> Skip the waitlist</strong></a>
                                </div> 
                            </li>
                            <li>
                                <div class="block">
                                    <a href=""><div class="img"><img src="/themes/images/new/icon_office_chair.png" height="50" /></div><strong> Pay once, use forever</strong></a>
                                </div>
                            </li>
                            <li>
                                <div class="block">
                                    <a href=""><div class="img"><img src="/themes/images/new/icon_pot.png" height="50" /></div><strong> Unlimited usage of all premium features</strong></a>
                                </div>
                            </li>
                        </ul>
                      </div>
                      
                  </div>
                  <div class="col-sm-7">
                    <div class="block-title block-11 text-left">
                        <p>We want to work with a selected number of cold email experts & lead generation 
                        companies and shape the product with their help. This is an opportunity for you 
                        to get a lifetime deal of our product and lock-in your founding status.</p>
                        <div class="block-title-1">
                        <strong>How it works</strong>
                        </div>
                        
                        <ul class="list-unstyled footer-widget__links footer-widget__links2">
                            <li><a href="">Pre-order lifetime now</a> </li>
                            <li><a href="">We will send you a notification to 
                                participate in early beta launch in January 2023.</a></li>
                            <li><a href="">100% money back if you’re not satisfied with pipl.ai</a></li>
                        </ul>
                        <a href="about.html" class="thm-btn">Pre-order Now!</a>
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
                  <a href="/roadmap">Our Roadmap</a>
                    <a href="/blog">Blog</a>
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
