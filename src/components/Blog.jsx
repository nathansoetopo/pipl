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


        <section class="service-two service-blog">
            <div class="service-two__bottom-curv"></div>
            <div class="container">
                <div class="block-title text-left">
                    <div class="row">
                        <div class="col-sm-6 margin-auto text-center mb-100">
                            <div id="custom-search-input">
                                <div class="input-group col-md-12">
                                    <input type="text" class="  search-query form-control" placeholder="Search ‘How to Launch Startup? ’" />
                                    <span class="input-group-btn">
                                        <button class="btn btn-danger" type="button">
                                            <span class="fa fa-search"></span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 margin-auto text-center mb-100">
                            <h3>Enjoy pipl<span class="red">.ai</span> Blog</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="service-two__card">
                            <div class="service-two__card-content">
                                <div class="service-two__card-image text-center">
                                    <img src="/themes/images/image_1.png" width="100%" height="178" alt="" />
                                </div>
                                <div class="block">
                                    <h3><a href="#">Connect Unlimited Inboxes</a></h3>
                                    <p>Effotlessly scale your outbound campaigns. Whether you want to send 1K emails per month, 100K or 1 million – pipl AI has you covered.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="service-two__card">
                            <div class="service-two__card-content">
                                <div class="service-two__card-image">
                                    <img src="/themes/images/image_2.png" width="100%" height="178" alt="" />
                                </div>
                                <div class="block">
                                    <h3><a href="#">Built-in Email Validation</a></h3>
                                    <p>Never receive a bounce again. We will verify every prospect’s email address before your outreeach gos live.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="service-two__card">
                            <div class="service-two__card-content">
                                <div class="service-two__card-image text-center">
                                    <img src="/themes/images/image_3.png" width="100%" height="178" alt="" />
                                </div>
                                <div class="block">
                                    <h3><a href="#">AI Copy Assistant</a></h3>
                                    <p>Predict how likely your copy is to receive a response. Our AI assistant will make sure it’s super-easy to read.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="service-two__card">
                            <div class="service-two__card-content">
                                <div class="service-two__card-image text-center">
                                    <img src="/themes/images/image_1.png" width="100%" height="178" alt="" />
                                </div>
                                <div class="block">
                                    <h3><a href="#">Connect Unlimited Inboxes</a></h3>
                                    <p>Effotlessly scale your outbound campaigns. Whether you want to send 1K emails per month, 100K or 1 million – pipl AI has you covered.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="service-two__card">
                            <div class="service-two__card-content">
                                <div class="service-two__card-image">
                                    <img src="/themes/images/image_2.png" width="100%" height="178" alt="" />
                                </div>
                                <div class="block">
                                    <h3><a href="#">Built-in Email Validation</a></h3>
                                    <p>Never receive a bounce again. We will verify every prospect’s email address before your outreeach gos live.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="service-two__card">
                            <div class="service-two__card-content">
                                <div class="service-two__card-image text-center">
                                    <img src="/themes/images/image_3.png" width="100%" height="178" alt="" />
                                </div>
                                <div class="block">
                                    <h3><a href="#">AI Copy Assistant</a></h3>
                                    <p>Predict how likely your copy is to receive a response. Our AI assistant will make sure it’s super-easy to read.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-6 margin-auto text-center">
                        <div class="block-title block-1 text-center">
                            <h3>Wanna more like this?<br /><span class="purple">Sign Up for Free~</span></h3>
                                <form class="early_access">
                                    <label class="form-group has-float-label mb-4 margin-auto">
                                        <input class="form-control" />
                                        <span>Your Email Address*</span>
                                    </label>
                                    <button type="submit" class="thm-btn">Subscribe Now</button>
                                </form>
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
