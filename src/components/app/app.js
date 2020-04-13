import React, { Component } from 'react';

// import $ from 'jquery';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import owl from 'owl.carousel';
import OwlCarousel from '../owl_carousel';
import Trend from '../trend';

// console.log($);
// console.log(owl);
export default class App extends Component {
  render() {
  
    return (
      <React.Fragment>
        <header   id="header">
          
          <div id="top-header">
            <div className="container">
              <div className="header-links">
                <ul>
                  <li><a href="#0">About us</a></li>
                  <li><a href="#0">Contact</a></li>
                  <li><a href="#0">Advertisement</a></li>
                  <li><a href="#0">Privacy</a></li>
                  <li><a href="#0"><i className="fa fa-sign-in"></i> Login</a></li>
                </ul>
              </div>
              <div className="header-social">
                <ul>
                  <li><a href="#0"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#0"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#0"><i className="fa fa-google-plus"></i></a></li>
                  <li><a href="#0"><i className="fa fa-instagram"></i></a></li>
                  <li><a href="#0"><i className="fa fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          
          
          
          <div id="center-header">
            <div className="container">
              <div className="header-logo">
                <a href="#0" className="logo"><img src="./img/logo.png" alt="" /></a>
              </div>
              <div className="header-ads">
                <img className="center-block" src="./img/ad-2.jpg" alt="" /> 
              </div>
            </div>
          </div>
          
          
          
          <div id="nav-header">
            <div className="container">
              <nav id="main-nav">
                <div className="nav-logo">
                  <a href="#0" className="logo"><img src="./img/logo-alt.png" alt="" /></a>
                </div>
                <ul className="main-nav nav navbar-nav">
                  <li className="active"><a href="#0">Home</a></li>
                  <li><a href="#0">News</a></li>
                  <li><a href="#0">Sport</a></li>
                  <li><a href="#0">Lifestyle</a></li>
                  <li><a href="#0">Fashion</a></li>
                  <li><a href="#0">Music</a></li>
                  <li><a href="#0">Business</a></li>
                </ul>
              </nav>
              <div className="button-nav">
                <button className="search-collapse-btn"><i className="fa fa-search"></i></button>
                <button className="nav-collapse-btn"><i className="fa fa-bars"></i></button>
                <div className="search-form">
                  <form>
                    <input className="input" type="text" name="search" placeholder="Search" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          
        </header>
        
        
        
        <OwlCarousel />
        
        
        
        <Trend />
        
        
        
        <div className="section">
          
          <div className="container">
            
            <div className="row">
              
              <div className="col-md-8">
                
                <div className="row">
                  
                  <div className="col-md-6 col-sm-6">
                    
                    <div className="section-title">
                      <h2 className="title">News</h2>
                    </div>
                    
                    
                    
                    <article className="article">
                      <div className="article-img">
                        <a href="#0">
                          <img src="./img/img-sm-1.jpg" alt="" />
                        </a>
                        <ul className="article-info">
                          <li className="article-type"><i className="fa fa-camera"></i></li>
                        </ul>
                      </div>
                      <div className="article-body">
                        <h3 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h3>
                        <ul className="article-meta">
                          <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                          <li><i className="fa fa-comments"></i> 33</li>
                        </ul>
                        <p>Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te inciderint cotidieque pro, ei iisque docendi qui, ne accommodare theophrastus reprehendunt vel. Et commodo menandri eam.</p>
                      </div>
                    </article>
                    
                    
                    
                    <article className="article widget-article">
                      <div className="article-img">
                        <a href="#0">
                          <img src="./img/img-widget-7.jpg" alt="" />
                        </a>
                      </div>
                      <div className="article-body">
                        <h4 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h4>
                        <ul className="article-meta">
                          <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                          <li><i className="fa fa-comments"></i> 33</li>
                        </ul>
                      </div>
                    </article>
                    
                    
                    
                    <article className="article widget-article">
                      <div className="article-img">
                        <a href="#0">
                          <img src="./img/img-widget-8.jpg" alt="" />
                        </a>
                      </div>
                      <div className="article-body">
                        <h4 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h4>
                        <ul className="article-meta">
                          <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                          <li><i className="fa fa-comments"></i> 33</li>
                        </ul>
                      </div>
                    </article>
                    
                  </div>
                  
                  
                  
                  <div className="col-md-6 col-sm-6">
                    
                    <div className="section-title">
                      <h2 className="title">Sport</h2>
                    </div>
                    
                    
                    
                    <article className="article">
                      <div className="article-img">
                        <a href="#0">
                          <img src="./img/img-sm-2.jpg" alt="" />
                        </a>
                        <ul className="article-info">
                          <li className="article-type"><i className="fa fa-file-text"></i></li>
                        </ul>
                      </div>
                      <div className="article-body">
                        <h3 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h3>
                        <ul className="article-meta">
                          <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                          <li><i className="fa fa-comments"></i> 33</li>
                        </ul>
                        <p>Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te inciderint cotidieque pro, ei iisque docendi qui, ne accommodare theophrastus reprehendunt vel. Et commodo menandri eam.</p>
                      </div>
                    </article>
                    
                    
                    
                    <article className="article widget-article">
                      <div className="article-img">
                        <a href="#0">
                          <img src="./img/img-widget-9.jpg" alt="" />
                        </a>
                      </div>
                      <div className="article-body">
                        <h4 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h4>
                        <ul className="article-meta">
                          <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                          <li><i className="fa fa-comments"></i> 33</li>
                        </ul>
                      </div>
                    </article>
                    
                    
                    
                    <article className="article widget-article">
                      <div className="article-img">
                        <a href="#0">
                          <img src="./img/img-widget-10.jpg" alt="" />
                        </a>
                      </div>
                      <div className="article-body">
                        <h4 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h4>
                        <ul className="article-meta">
                          <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                          <li><i className="fa fa-comments"></i> 33</li>
                        </ul>
                      </div>
                    </article>
                    
                  </div>
                  
                </div>
                
                
                
                <div className="row">
                  
                  <div className="col-md-12">
                    <div className="section-title">
                      <h2 className="title">News</h2>
                    </div>
                  </div>
                  
                  
                  
                  <div className="col-md-6 col-sm-6">
                    
                    <article className="article">
                      <div className="article-img">
                        <a href="#0">
                          <img src="./img/img-sm-3.jpg" alt="" />
                        </a>
                        <ul className="article-info">
                          <li className="article-type"><i className="fa fa-camera"></i></li>
                        </ul>
                      </div>
                      <div className="article-body">
                        <h3 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h3>
                        <ul className="article-meta">
                          <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                          <li><i className="fa fa-comments"></i> 33</li>
                        </ul>
                        <p>Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te inciderint cotidieque pro, ei iisque docendi qui, ne accommodare theophrastus reprehendunt vel. Et commodo menandri eam.</p>
                      </div>
                    </article>
                    
                  </div>
                  
                  
                  
                  <div className="col-md-6 col-sm-6">
                    
                    <article className="article">
                      <div className="article-img">
                        <a href="#0">
                          <img src="./img/img-sm-4.jpg" alt="" />
                        </a>
                        <ul className="article-info">
                          <li className="article-type"><i className="fa fa-camera"></i></li>
                        </ul>
                      </div>
                      <div className="article-body">
                        <h3 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h3>
                        <ul className="article-meta">
                          <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                          <li><i className="fa fa-comments"></i> 33</li>
                        </ul>
                        <p>Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te inciderint cotidieque pro, ei iisque docendi qui, ne accommodare theophrastus reprehendunt vel. Et commodo menandri eam.</p>
                      </div>
                    </article>
                    
                  </div>
                  
                </div>
                
                
                
                <div className="row">
                  
                  <div className="col-md-4 col-sm-4">
                    
                    <article className="article">
                      <div className="article-img">
                        <a href="#0">
                          <img src="./img/img-md-1.jpg" alt="" />
                        </a>
                        <ul className="article-info">
                          <li className="article-type"><i className="fa fa-file-text"></i></li>
                        </ul>
                      </div>
                      <div className="article-body">
                        <h4 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h4>
                        <ul className="article-meta">
                          <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                          <li><i className="fa fa-comments"></i> 33</li>
                        </ul>
                      </div>
                    </article>
                    
                  </div>
                  
                  
                  
                  <div className="col-md-4 col-sm-4">
                    
                    <article className="article">
                      <div className="article-img">
                        <a href="#0">
                          <img src="./img/img-md-2.jpg" alt="" />
                        </a>
                        <ul className="article-info">
                          <li className="article-type"><i className="fa fa-file-text"></i></li>
                        </ul>
                      </div>
                      <div className="article-body">
                        <h4 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h4>
                        <ul className="article-meta">
                          <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                          <li><i className="fa fa-comments"></i> 33</li>
                        </ul>
                      </div>
                    </article>
                    
                  </div>
                  
                  
                  
                  <div className="col-md-4 col-sm-4">
                    
                    <article className="article">
                      <div className="article-img">
                        <a href="#0">
                          <img src="./img/img-md-3.jpg" alt="" />
                        </a>
                        <ul className="article-info">
                          <li className="article-type"><i className="fa fa-file-text"></i></li>
                        </ul>
                      </div>
                      <div className="article-body">
                        <h4 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h4>
                        <ul className="article-meta">
                          <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                          <li><i className="fa fa-comments"></i> 33</li>
                        </ul>
                      </div>
                    </article>
                    
                  </div>
                  
                </div>
                
              </div>
              
              
              
              <div className="col-md-4">
                
                <div className="widget center-block hidden-xs">
                  <img className="center-block" src="./img/ad-1.jpg" alt="" /> 
                </div>
                
                
                
                <div className="widget social-widget">
                  <div className="widget-title">
                    <h2 className="title">Stay Connected</h2>
                  </div>
                  <ul>
                    <li><a href="#0" className="facebook"><i className="fa fa-facebook"></i><br /><span>Facebook</span></a></li>
                    <li><a href="#0" className="twitter"><i className="fa fa-twitter"></i><br /><span>Twitter</span></a></li>
                    <li><a href="#0" className="google"><i className="fa fa-google"></i><br /><span>Google+</span></a></li>
                    <li><a href="#0" className="instagram"><i className="fa fa-instagram"></i><br /><span>Instagram</span></a></li>
                    <li><a href="#0" className="youtube"><i className="fa fa-youtube"></i><br /><span>Youtube</span></a></li>
                    <li><a href="#0" className="rss"><i className="fa fa-rss"></i><br /><span>RSS</span></a></li>
                  </ul>
                </div>
                
                
                
                <div className="widget subscribe-widget">
                  <div className="widget-title">
                    <h2 className="title">Subscribe to Newslatter</h2>
                  </div>
                  <form>
                    <input className="input" type="email" placeholder="Enter Your Email" />
                    <button className="input-btn">Subscribe</button>
                  </form>
                </div>
                
                
                
                <div className="widget">
                  <div className="widget-title">
                    <h2 className="title">Most Read</h2>
                  </div>
                  
                  
                  <div id="owl-carousel-3" className="owl-carousel owl-theme center-owl-nav">
                    
                    <article className="article">
                      <div className="article-img">
                        <a href="#0">
                          <img src="./img/img-md-3.jpg" alt="" />
                        </a>
                        <ul className="article-info">
                          <li className="article-type"><i className="fa fa-file-text"></i></li>
                        </ul>
                      </div>
                      <div className="article-body">
                        <h4 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h4>
                        <ul className="article-meta">
                          <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                          <li><i className="fa fa-comments"></i> 33</li>
                        </ul>
                      </div>
                    </article>
                    
                    
                    
                    <article className="article">
                      <div className="article-img">
                        <a href="#0">
                          <img src="./img/img-md-4.jpg" alt="" />
                        </a>
                        <ul className="article-info">
                          <li className="article-type"><i className="fa fa-file-text"></i></li>
                        </ul>
                      </div>
                      <div className="article-body">
                        <h4 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h4>
                        <ul className="article-meta">
                          <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                          <li><i className="fa fa-comments"></i> 33</li>
                        </ul>
                      </div>
                    </article>
                    
                  </div>
                  
                  
                  
                  <article className="article widget-article">
                    <div className="article-img">
                      <a href="#0">
                        <img src="./img/img-widget-1.jpg" alt="" />
                      </a>
                    </div>
                    <div className="article-body">
                      <h4 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h4>
                      <ul className="article-meta">
                        <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                        <li><i className="fa fa-comments"></i> 33</li>
                      </ul>
                    </div>
                  </article>
                  
                  
                  
                  <article className="article widget-article">
                    <div className="article-img">
                      <a href="#0">
                        <img src="./img/img-widget-2.jpg" alt="" />
                      </a>
                    </div>
                    <div className="article-body">
                      <h4 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h4>
                      <ul className="article-meta">
                        <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                        <li><i className="fa fa-comments"></i> 33</li>
                      </ul>
                    </div>
                  </article>
                  
                  
                  
                  <article className="article widget-article">
                    <div className="article-img">
                      <a href="#0">
                        <img src="./img/img-widget-3.jpg" alt="" />
                      </a>
                    </div>
                    <div className="article-body">
                      <h4 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h4>
                      <ul className="article-meta">
                        <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                        <li><i className="fa fa-comments"></i> 33</li>
                      </ul>
                    </div>
                  </article>
                  
                </div>
                
              </div>
              
            </div>
            
          </div>
          
        </div>
        
        
        
        <div className="visible-lg visible-md">
          <img className="center-block" src="./img/ad-3.jpg" alt="" />
        </div>
        
        
        
        <div className="section">
          
          <div className="container">
            
            <div className="row">
              
              <div className="col-md-12">
                
                <div className="section-title">
                  <h2 className="title">Popular Video</h2>
                  <div id="nav-carousel-2" className="custom-owl-nav pull-right"></div>
                </div>
                
                
                
                <div id="owl-carousel-2" className="owl-carousel owl-theme">
                  
                  <article className="article thumb-article">
                    <div className="article-img">
                      <img src="./img/img-thumb-1.jpg" alt="" />
                    </div>
                    <div className="article-body">
                      <ul className="article-info">
                        <li className="article-category"><a href="#0">News</a></li>
                        <li className="article-type"><i className="fa fa-video-camera"></i></li>
                      </ul>
                      <h3 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h3>
                      <ul className="article-meta">
                        <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                        <li><i className="fa fa-comments"></i> 33</li>
                      </ul>
                    </div>
                  </article>
                  
                  
                  
                  <article className="article thumb-article">
                    <div className="article-img">
                      <img src="./img/img-thumb-2.jpg" alt="" />
                    </div>
                    <div className="article-body">
                      <ul className="article-info">
                        <li className="article-category"><a href="#0">News</a></li>
                        <li className="article-type"><i className="fa fa-video-camera"></i></li>
                      </ul>
                      <h3 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h3>
                      <ul className="article-meta">
                        <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                        <li><i className="fa fa-comments"></i> 33</li>
                      </ul>
                    </div>
                  </article>
                  
                  
                  
                  <article className="article thumb-article">
                    <div className="article-img">
                      <img src="./img/img-thumb-3.jpg" alt="" />
                    </div>
                    <div className="article-body">
                      <ul className="article-info">
                        <li className="article-category"><a href="#0">News</a></li>
                        <li className="article-type"><i className="fa fa-video-camera"></i></li>
                      </ul>
                      <h3 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h3>
                      <ul className="article-meta">
                        <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                        <li><i className="fa fa-comments"></i> 33</li>
                      </ul>
                    </div>
                  </article>
                  
                  
                  
                  <article className="article thumb-article">
                    <div className="article-img">
                      <img src="./img/img-thumb-4.jpg" alt="" />
                    </div>
                    <div className="article-body">
                      <ul className="article-info">
                        <li className="article-category"><a href="#0">News</a></li>
                        <li className="article-type"><i className="fa fa-video-camera"></i></li>
                      </ul>
                      <h3 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h3>
                      <ul className="article-meta">
                        <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                        <li><i className="fa fa-comments"></i> 33</li>
                      </ul>
                    </div>
                  </article>
                  
                </div>
                
              </div>
              
            </div>
            
          </div>
          
        </div>
        
        
        
        <div className="section">
          
          <div className="container">
            
            <div className="row">
              
              <div className="col-md-8">
                
                <div className="section-title">
                  <h2 className="title">Popular Posts</h2>
                </div>
                
                
                
                <article className="article row-article">
                  <div className="article-img">
                    <a href="#0">
                      <img src="./img/img-md-1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="article-body">
                    <ul className="article-info">
                      <li className="article-category"><a href="#0">News</a></li>
                      <li className="article-type"><i className="fa fa-file-text"></i></li>
                    </ul>
                    <h3 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h3>
                    <ul className="article-meta">
                      <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                      <li><i className="fa fa-comments"></i> 33</li>
                    </ul>
                    <p>Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te inciderint cotidieque pro, ei iisque docendi qui.</p>
                  </div>
                </article>
                
                
                
                <article className="article row-article">
                  <div className="article-img">
                    <a href="#0">
                      <img src="./img/img-md-2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="article-body">
                    <ul className="article-info">
                      <li className="article-category"><a href="#0">News</a></li>
                      <li className="article-type"><i className="fa fa-file-text"></i></li>
                    </ul>
                    <h3 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h3>
                    <ul className="article-meta">
                      <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                      <li><i className="fa fa-comments"></i> 33</li>
                    </ul>
                    <p>Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te inciderint cotidieque pro, ei iisque docendi qui.</p>
                  </div>
                </article>
                
                
                
                <article className="article row-article">
                  <div className="article-img">
                    <a href="#0">
                      <img src="./img/img-md-3.jpg" alt="" />
                    </a>
                  </div>
                  <div className="article-body">
                    <ul className="article-info">
                      <li className="article-category"><a href="#0">News</a></li>
                      <li className="article-type"><i className="fa fa-file-text"></i></li>
                    </ul>
                    <h3 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h3>
                    <ul className="article-meta">
                      <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                      <li><i className="fa fa-comments"></i> 33</li>
                    </ul>
                    <p>Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te inciderint cotidieque pro, ei iisque docendi qui.</p>
                  </div>
                </article>
                
                
                
                <article className="article row-article">
                  <div className="article-img">
                    <a href="#0">
                      <img src="./img/img-md-4.jpg" alt="" />
                    </a>
                  </div>
                  <div className="article-body">
                    <ul className="article-info">
                      <li className="article-category"><a href="#0">News</a></li>
                      <li className="article-type"><i className="fa fa-file-text"></i></li>
                    </ul>
                    <h3 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h3>
                    <ul className="article-meta">
                      <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                      <li><i className="fa fa-comments"></i> 33</li>
                    </ul>
                    <p>Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te inciderint cotidieque pro, ei iisque docendi qui.</p>
                  </div>
                </article>
                
                
                
                <div className="article-pagination">
                  <ul> 
                    <li className="active"><a href="#0" className="active">1</a></li>
                    <li><a href="#0">2</a></li>
                    <li><a href="#0">3</a></li>
                    <li><a href="#0"><i className="fa fa-angle-right"></i></a></li>
                  </ul>
                </div>
                
              </div>
              
              
              
              <div className="col-md-4">
                
                <div className="widget">
                  <div className="widget-title">
                    <h2 className="title">Featured Posts</h2>
                  </div>
                  
                  
                  <div id="owl-carousel-4" className="owl-carousel owl-theme">
                    
                    <article className="article thumb-article">
                      <div className="article-img">
                        <img src="./img/img-thumb-1.jpg" alt=""/>
                      </div>
                      <div className="article-body">
                        <ul className="article-info">
                          <li className="article-category"><a href="#0">News</a></li>
                          <li className="article-type"><i className="fa fa-video-camera"></i></li>
                        </ul>
                        <h3 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h3>
                        <ul className="article-meta">
                          <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                          <li><i className="fa fa-comments"></i> 33</li>
                        </ul>
                      </div>
                    </article>
                    
                  
                    
                    <article className="article thumb-article">
                      <div className="article-img">
                        <img src="./img/img-thumb-2.jpg" alt="" />
                      </div>
                      <div className="article-body">
                        <ul className="article-info">
                          <li className="article-category"><a href="#0">News</a></li>
                          <li className="article-type"><i className="fa fa-video-camera"></i></li>
                        </ul>
                        <h3 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h3>
                        <ul className="article-meta">
                          <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                          <li><i className="fa fa-comments"></i> 33</li>
                        </ul>
                      </div>
                    </article>
                    
                  </div>
                  
                </div>
                
                
                
                <div className="widget galery-widget">
                  <div className="widget-title">
                    <h2 className="title">Flickr Photos</h2>
                  </div>
                  <ul>
                    <li><a href="#0"><img src="./img/img-widget-3.jpg" alt="" /></a></li>
                    <li><a href="#0"><img src="./img/img-widget-4.jpg" alt="" /></a></li>
                    <li><a href="#0"><img src="./img/img-widget-5.jpg" alt="" /></a></li>
                    <li><a href="#0"><img src="./img/img-widget-6.jpg" alt="" /></a></li>
                    <li><a href="#0"><img src="./img/img-widget-7.jpg" alt="" /></a></li>
                    <li><a href="#0"><img src="./img/img-widget-8.jpg" alt="" /></a></li>
                    <li><a href="#0"><img src="./img/img-widget-9.jpg" alt="" /></a></li>
                    <li><a href="#0"><img src="./img/img-widget-10.jpg" alt="" /></a></li>
                  </ul>
                </div>
                
                
                
                <div className="widget tweets-widget">
                  <div className="widget-title">
                    <h2 className="title">Recent Tweets</h2>
                  </div>
                  <ul>
                    <li className="tweet">
                      <i className="fa fa-twitter"></i>
                      <div className="tweet-body">
                        <p><a href="#0">@magnews</a> Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis <a href="#0">https://t.co/DwsTbsmxTP</a></p>
                      </div>
                    </li>
                    <li className="tweet">
                      <i className="fa fa-twitter"></i>
                      <div className="tweet-body">
                        <p><a href="#0">@magnews</a> Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis <a href="#0">https://t.co/DwsTbsmxTP</a></p>
                      </div>
                    </li>
                    <li className="tweet">
                      <i className="fa fa-twitter"></i>
                      <div className="tweet-body">
                        <p><a href="#0">@magnews</a> Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis <a href="#0">https://t.co/DwsTbsmxTP</a></p>
                      </div>
                    </li>
                  </ul>
                </div>
                
              </div>
              
            </div>
            
          </div>
          
        </div>
        
        
        
        <footer id="footer">
          
          <div id="top-footer" className="section">
            
            <div className="container">
              
              <div className="row">
                
                <div className="col-md-4">
                  
                  <div className="footer-widget about-widget">
                    <div className="footer-logo">
                      <a href="#0" className="logo"><img src="./img/logo-alt.png" alt="" /></a>
                      <p>Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te inciderint cotidieque pro, ei iisque docendi qui.</p>
                    </div>
                  </div>
                  
                  
                  
                  <div className="footer-widget social-widget">
                    <div className="widget-title">
                      <h3 className="title">Follow Us</h3>
                    </div>
                    <ul>
                      <li><a href="#0" className="facebook"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#0" className="twitter"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#0" className="google"><i className="fa fa-google"></i></a></li>
                      <li><a href="#0" className="instagram"><i className="fa fa-instagram"></i></a></li>
                      <li><a href="#0" className="youtube"><i className="fa fa-youtube"></i></a></li>
                      <li><a href="#0" className="rss"><i className="fa fa-rss"></i></a></li>
                    </ul>
                  </div>
                  
                  
                  
                  <div className="footer-widget subscribe-widget">
                    <div className="widget-title">
                      <h2 className="title">Subscribe to Newslatter</h2>
                    </div>
                    <form>
                      <input className="input" type="email" placeholder="Enter Your Email" />
                      <button className="input-btn">Subscribe</button>
                    </form>
                  </div>
                  
                </div>
                
                
                
                <div className="col-md-4">
                  
                  <div className="footer-widget">
                    <div className="widget-title">
                      <h2 className="title">Featured Posts</h2>
                    </div>

                    
                    <article className="article widget-article">
                      <div className="article-img">
                        <a href="#0">
                          <img src="./img/img-widget-1.jpg" alt="" />
                        </a>
                      </div>
                      <div className="article-body">
                        <h4 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h4>
                        <ul className="article-meta">
                          <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                          <li><i className="fa fa-comments"></i> 33</li>
                        </ul>
                      </div>
                    </article>
                    
                    
                    
                    <article className="article widget-article">
                      <div className="article-img">
                        <a href="#0">
                          <img src="./img/img-widget-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="article-body">
                        <h4 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h4>
                        <ul className="article-meta">
                          <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                          <li><i className="fa fa-comments"></i> 33</li>
                        </ul>
                      </div>
                    </article>
                    
                    
                    
                    <article className="article widget-article">
                      <div className="article-img">
                        <a href="#0">
                          <img src="./img/img-widget-3.jpg" alt="" />
                        </a>
                      </div>
                      <div className="article-body">
                        <h4 className="article-title"><a href="#0">Duis urbanitas eam in, tempor consequat.</a></h4>
                        <ul className="article-meta">
                          <li><i className="fa fa-clock-o"></i> January 31, 2017</li>
                          <li><i className="fa fa-comments"></i> 33</li>
                        </ul>
                      </div>
                    </article>
                    
                  </div>
                  
                </div>
                
                
                
                <div className="col-md-4">
                  
                  <div className="footer-widget galery-widget">
                    <div className="widget-title">
                      <h2 className="title">Flickr Photos</h2>
                    </div>
                    <ul>
                      <li><a href="#0"><img src="./img/img-widget-3.jpg" alt="" /></a></li>
                      <li><a href="#0"><img src="./img/img-widget-4.jpg" alt="" /></a></li>
                      <li><a href="#0"><img src="./img/img-widget-5.jpg" alt="" /></a></li>
                      <li><a href="#0"><img src="./img/img-widget-6.jpg" alt="" /></a></li>
                      <li><a href="#0"><img src="./img/img-widget-7.jpg" alt="" /></a></li>
                      <li><a href="#0"><img src="./img/img-widget-8.jpg" alt="" /></a></li>
                      <li><a href="#0"><img src="./img/img-widget-9.jpg" alt="" /></a></li>
                      <li><a href="#0"><img src="./img/img-widget-10.jpg" alt="" /></a></li>
                    </ul>
                  </div>
                  
                  
                  
                  <div className="footer-widget tweets-widget">
                    <div className="widget-title">
                      <h2 className="title">Recent Tweets</h2>
                    </div>
                    <ul>
                      <li className="tweet">
                        <i className="fa fa-twitter"></i>
                        <div className="tweet-body">
                          <p><a href="#0">@magnews</a> Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis <a href="#0">https://t.co/DwsTbsmxTP</a></p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            
          </div>
          
          
          
          <div id="bottom-footer" className="section">
            
            <div className="container">
              
              <div className="row">
                
                <div className="col-md-6 col-md-push-6">
                  <ul className="footer-links">
                    <li><a href="#0">About us</a></li>
                    <li><a href="#0">Contact</a></li>
                    <li><a href="#0">Advertisement</a></li>
                    <li><a href="#0">Privacy</a></li>
                  </ul>
                </div>
                
                
                
                <div className="col-md-6 col-md-pull-6">
                  <div className="footer-copyright">
                    <span>
    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                    </span>
                  </div>
                </div>
                
              </div>
              
            </div>
            
          </div>
          
        </footer>
        
        
        
        <div id="back-to-top"></div>
      </React.Fragment>

    );
  }
}