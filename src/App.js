import {
  FlashOn,
  BusinessCenter,
  OndemandVideo,
  DateRangeOutlined,
  SellOutlined,
  VisibilityOutlined,
  ChatBubbleOutline,
  CallMade,
  AccessTime,
  Done,
  SentimentSatisfiedAltRounded,
  AutoAwesome,
  AutoFixHigh,
  LiveHelp,
  CheckRounded,
  CloseRounded,
  Facebook,
  Twitter,
  Instagram,
  GitHub,
  LinkedIn,
  YouTube,
  FormatQuoteRounded,
  LocationOnOutlined,
  AttachEmailOutlined,
  PhoneAndroidOutlined,
  Copyright,
  KeyboardArrowDown,
  SearchRounded,
  ArrowRightAlt,
  PersonOutlineOutlined,
  ArrowRight,
  ArrowLeft,
  ExpandLess,
  Check
} from '@mui/icons-material';
import { Rating, Stack } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';
import { HashRouter as Router, Route, Routes, Link as LinkR } from "react-router-dom";
import './App.css';
const services = [
  {
    icon: <FlashOn className="icon" />,
    title: "front-end",
    desc: ""
  },
  {
    icon: <BusinessCenter className="icon" />,
    title: "seo marketing",
    desc: ""
  },
  {
    icon: <AutoFixHigh className="icon" />,
    title: "responsive desgin",
    desc: ""
  },
  {
    icon: <LiveHelp className="icon" />,
    title: "web development",
    desc: ""
  },
  {
    icon: <LiveHelp className="icon" />,
    title: "wordpress",
    desc: ""
  },

];
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/service/serviceId" element={<ServicesDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/category/categoryId" element={<Category />} />
        <Route path="/post/postId" element={<Post />} />
      </Routes>
    </Router>

  );
}
// pages 
// agency homepage 
function Homepage() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      <Portfolio />
      <Subscribe />
      <Team />
      <LatestBlog />
      <Testimonial />
      <Contact />
      <Faq />
      <Footer />
    </>
  )
}
// !agency homepage 
// services details
function ServicesDetails(){
  return(
    <>
      <Header />
     <ServiceDesc/>
     <ChooseService/>
      <Footer />
    </>
  )
}
// !services details
// blog homepage
function Blog() {
  return (
    <>
      <Header />
      <Banner blog />
      <LatestBlog2 />
      <BlogFeed />
      <Footer />
    </>
  )
}
// !blog homepage
// blog category
function Category() {
  return (
    <>
      <Header />
      <Banner blog />
      <LatestBlog2 />
      <BlogFeed />
      <Footer />
    </>
  )
}
// !blog category
// blog singlePost
function Post() {
  return (
    <>
      <Header />
      <Banner blog />
      <LatestBlog2 />
      <PostFeed />
      <Footer />
    </>
  )
}
// !blog singlePost
// !pages 
// components 
function Logo() {
  return (
    <LinkR to="/"
      className="logo">
      <span>H</span>igh<span>S</span>kills.
    </LinkR>

  )
}
function Button({ btnContent, path }) {
  return (
    <Link to={path} className='btn'>
      <div className="btn-content">{btnContent}</div>
      <div className="btn-layer"></div>
    </Link>
  )
}
function GoLink({ path, linkContent, custumClass }) {
  return (
    <LinkR to={path} className={"goLink cap " + custumClass}>
      {linkContent}
      <ArrowRightAlt className="icon_arrow_right" />
    </LinkR>
  )
}
function TooltipBtn({ tooltipContent, tooltipIcon, handleClick, custumClass }) {
  return (
    <div className={"tooltipBtn " + custumClass}  >
      <div className="tooltipContent">{tooltipContent}</div>
      <span onClick={handleClick} className="tooltipIcon">{tooltipIcon}</span>
    </div>
  )
}
function TooltipLink({ tooltipContent, tooltipIcon, path }) {
  return (
    <div className="tooltipBtn">
      <div className="tooltipContent">{tooltipContent}</div>
      <LinkR to={path} className="tooltipIcon">{tooltipIcon}</LinkR>
    </div>
  )
}
function Alert({type,content}) {
  return (
    <div className={"alert "+type+"Msg"}>
      {content} 
    </div>
  )
}
function SocialMediaIcons() {
  return (
    <div className="social_media_icons">
      <div className="social_media_icon">
        <LinkR
          className='iconLayer facebook'
          to="http://facebook.com"
          target="_blank"
          rel="noopener noreferrer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Facebook className="icon" />
        </LinkR>
      </div>
      <div className="social_media_icon">
        <LinkR
          className='iconLayer github'
          to="http://facebook.com"
          target="_blank"
          rel="noopener noreferrer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <GitHub className="icon" />
        </LinkR>
      </div>
      <div className="social_media_icon">
        <LinkR
          className='iconLayer instagram'
          to="http://facebook.com"
          target="_blank"
          rel="noopener noreferrer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Instagram className="icon" />
        </LinkR>
      </div>
      <div className="social_media_icon">
        <LinkR
          className='iconLayer twitter'
          to="http://facebook.com"
          target="_blank"
          rel="noopener noreferrer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Twitter className="icon" />
        </LinkR>
      </div>
      <div className="social_media_icon">
        <LinkR
          className='iconLayer linkedin'
          to="http://facebook.com"
          target="_blank"
          rel="noopener noreferrer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <LinkedIn className="icon" />
        </LinkR>
      </div>
    </div>
  )
}
function InfoBox() {
  return (
    <div className="info_box">
      <div className="info_item">
        <div className="info_icon"><LocationOnOutlined className="icon" /></div>
        <div className="info_text cap">Lorem ipsum dolor sit.</div>
      </div>
      <div className="info_item">
        <div className="info_icon"><AttachEmailOutlined className="icon" /></div>
        <LinkR className="info_text" to="mailto:info@highskills.com">info@highskills.com</LinkR>
      </div>
      <div className="info_item">
        <div className="info_icon"><PhoneAndroidOutlined className="icon" /></div>
        <LinkR className="info_text" to="tel:1234567890">1234567890</LinkR>
      </div>
      <SocialMediaIcons />
    </div>
  )
}
// header
function Header() {
  const [searchBar, setSearchBar] = useState(false);
  const [showmenu, setShowmenu] = useState(false);
  const [showsubmenu, setShowsubmenu] = useState(0);
  
  const menu = [
    {
      path: "home",
      hasdropdown: false,
      label: "home"
    },
    {
      path: "about",
      hasdropdown: false,
      label: "about us"
    },
    {
      path: "services",
      hasdropdown: true,
      label: "services",
      dropdownList:
        services.map((service, i) => (
          {
            path: "/service/serviceId",
            label: service.title
          }
        ))

    },
    {
      path: "portfolio",
      hasdropdown: false,
      label: "portfolio"
    },
    {
      path: "team",
      hasdropdown: false,
      label: "team"
    },
    {
      path: "blog",
      hasdropdown: true,
      label: "blog",
      dropdownList: [
        {
          path: "/category/categoryId",
          label: "category 1",
        },
        {
          path: "/category/categoryId",
          label: "category 2",
        },
        {
          path: "/category/categoryId",
          label: "category 3",
        },
      ]
    },
    {
      path: "contact",
      hasdropdown: false,
      label: "contact us"
    }
  ];
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
      document.querySelector("header").classList.add("fixe")
    } else {
      document.querySelector("header").classList.remove("fixe")
    }
    if (document.documentElement.scrollTop > 500) {
      document.querySelector('.scrollUp').classList.add('show');
    } else {
      document.querySelector('.scrollUp').classList.remove('show');
    }
  }
  function handleClick(i) {
    showsubmenu === i ? setShowsubmenu(0) : setShowsubmenu(i);
  }
  
  return (
    <header className='header ' id="header">
      <Link
        className="scrollUp"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}>
        <ExpandLess className="scrollUp__icon" />
      </Link>
      <div className="container header_container flex">
        <Logo style={{ display: showmenu && "none" }} />
        <ul  className={showmenu ? "nav cap show" : "nav cap"} >
          {menu.map((item, i) => (
            <li key={i} className="nav_li" >
              <div  className="nav_li_con">
                <Link
                  onClick={() => { setShowmenu(false); setShowsubmenu(0) }}
                  className="nav_link"
                  activeClass="active"
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}>
                  {item.label}
                </Link>
                {item.hasdropdown && <KeyboardArrowDown  onClick={() => handleClick(i)} className='nav_arrow' style={{ transform: showsubmenu === i && "rotate(180deg)" }} />}
              </div>
              {item.hasdropdown &&
                <ul className="subnav cap" style={{ display: showsubmenu === i && "flex" }}>
                  {
                    item.dropdownList.map((li, j) => (
                      <li key={j}>
                        <LinkR className='subnav_link' to={li.path}>{li.label}</LinkR>
                      </li>
                    ))
                  }
                </ul>
              }
            </li>
          ))}
        </ul>

        <div className="laila" >
          {searchBar
            ? <div
              className="searchIcon_mobile"
              onClick={() => setSearchBar(false)}>
              <CloseRounded
                style={{ color: "var(--first-color)" }}
                className="icon" />
            </div>
            : <div
              className="searchIcon_mobile"
              
              onClick={() => {
                setSearchBar(true)
                setShowmenu(false)
              }}>
              <SearchRounded
                className="icon" />
            </div>
          }
          <div
          
            className={showmenu ? "icon_menu show" : "icon_menu"}
            onClick={() => {
              setShowmenu(!showmenu)
              setSearchBar(false)
            }}>
            <span className="icon_center"></span>
            <span className="icon_side"></span>
          </div>
        </div>

        <form  className={searchBar ? "searchForm show" : "searchForm"} >
          <input
            type="search"
            placeholder='search for..'
            className='searchInput' />
          <button><SearchRounded className="searchIcon" /></button>
        </form>
      </div>
    </header>
  )
}
// !header
// banner
function Banner({ blog }) {
  function BannerHomepage() {
    return (
      <div className="bannerbg">
        <div className="bannerContent container">
          <h5 className='subtitle'>Welcome to </h5>
          <h2 className='title'>
            <Logo />
            <span className="typewriter">
              <span className="word">For :</span>
              <Typewriter
                loop
                cursor
                cursorStyle='..'
                words={[
                  "web developement",
                  "online courses",
                  "SEO Optimisation",
                  "Deployement"
                ]}
              />
            </span>
          </h2>
          <p className="desc bannerDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Qui excepturi facere esse obcaecati, fugiat iste.
            Obcaecati tenetur vero error doloremque deserunt
            repellendus dolorum, explicabo non.
          </p>
          <Button btnContent={"contact us"} path="/" />
        </div>
      </div>

    )
  }
  function BannerBlog() {
    return (
      <div
        className="bannerbg blog">
        <div className="bannerContent container">
          <h5 className='subtitle'>knowlege & technology</h5>
          <h2 className='title'>amazing topic to know !</h2>
          <Button btnContent={"explore now"} path="/" />
        </div>
      </div>
    )
  }
  return (
    <section className="banner" id="home">
      {blog ? <BannerBlog /> : <BannerHomepage />}
    </section>
  )
}
// !banner
// about 
function About() {
  const features = [
    {
      icon: <AccessTime className="icon" />,
      top: "10 years",
      bottom: "experience"
    },
    {
      icon: <SentimentSatisfiedAltRounded className="icon" />,
      top: "23",
      bottom: "happy clients"
    },
    {
      icon: <Done className="icon" />,
      top: "84",
      bottom: "completed projects"
    },
    {
      icon: <AutoAwesome className="icon" />,
      top: "100%",
      bottom: "quality"
    },
  ]
  return (
    <section className="section about" id="about">
      <h1 className="section_title">about us</h1>
      <h2 className="section_subtitle">who are we</h2>
      <div className="container about_container">
        <div className="about_images">
          <img src={PF + "blog/1.jpg"} alt="" className="about_img_big" />
          <img src={PF + "service-thumb.png"} alt="" className="about_img_small" />
        </div>
        <div className="about_text">
          <h2 className="about_title">highskills is a creative agency to help your bessiness grow</h2>
          <p className='about_desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tenetur doloremque obcaecati, quo commodi eaque ut blanditiis? Repudiandae molestiae natus reiciendis beatae nihil officiis! Eos!
          </p>
          <div className="features">
            {
              features.map((item, i) => (
                <div className="feature cap" key={i}>
                  <div className="featuresicon">{item.icon}</div>
                  <div className="featuresTop">{item.top}</div>
                  <div className="featuresBottom">{item.bottom}.</div>
                </div>
              ))
            }
          </div>
          <div className="about_buttons">
            <Button btnContent="contact us" path="contact" />
            <GoLink path="#" linkContent="see more" />
          </div>
        </div>
      </div>
    </section>
  )
}
// !about
// services 
function Services() {

  return (
    <section className="services section" id='services'>
      <h1 className="section_title">services</h1>
      <h2 className="section_subtitle">what we offre</h2>
      <div className="container services_container centred">
        {
          services.map((item, i) => (
            <div className="service_item" key={i}>
              <div className="service_icon">{item.icon}</div>
              <h2 className="service_title">{item.title}</h2>
              <p className="service_desc">Get your blood tests delivered at home collect a sample from the your blood tests.</p>
              <GoLink path={"/service/serviceId"} linkContent="view details" />
            </div>
          ))
        }
      </div>
    </section>
  )
}
// !services 
// portfolio
function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");



  const categories = [
    {
      name: "all",
      class: "all"
    },
    {
      name: "design",
      class: "design"
    },
    {
      name: "web app",
      class: "web"
    },
    {
      name: "wordpress websites",
      class: "wordpress"
    },
  ]
  const projects = [
    {
      img: "portfolio/1.jpg",
      title: "e-commerce wordPress website.",
      link: "",
      category: "wordpress"
    },
    {
      img: "portfolio/4.jpg",
      title: "tour & trips website",
      link: "",
      category: "web"
    },
    {
      img: "portfolio/3.jpg",
      title: "tour & trips wordPress website",
      link: "",
      category: "wordpress"
    },
    {
      img: "portfolio/2.jpg",
      title: "travel agency design",
      link: "",
      category: "design"
    },
    {
      img: "portfolio/5.jpg",
      title: "education platforme website",
      link: "",
      category: "web"
    },
    {
      img: "portfolio/6.jpg",
      title: "design education platforme website",
      link: "",
      category: "design"
    },
    {
      img: "portfolio/7.jpg",
      title: "blog wordPress website",
      link: "",
      category: "wordpress"
    },
    {
      img: "portfolio/4.jpg",
      title: "medical agency website",
      link: "",
      category: "web"
    },
    {
      img: "portfolio/6.jpg",
      title: "design medical agency website",
      link: "",
      category: "design"
    }
  ]
  const [filtredProjects, setFiltredProjects] = useState(projects);
  useEffect(() => {
    if (activeCategory === "all") {
      setFiltredProjects(projects);
    } else {
      setFiltredProjects(projects.filter((item) => (item.category === activeCategory)))

    }
  }, [activeCategory])
  return (
    // "homepage": "https://laila-saw.github.io/agency",
    <section className="portfolio section" id='portfolio'>
      <h1 className="section_title">portfolio</h1>
      <h2 className="section_subtitle">latest worked projects</h2>
      <div className="container portfolio_container">
        <div className="portfolio_filters cap">
          {
            categories.map((category, i) => (
              <span
                key={i}
                className={activeCategory === category.class
                  ? "active portfolio_filter " + category.class
                  : "portfolio_filter " + category.class}
                onClick={() => setTimeout(() => {
                  setActiveCategory(category.class)
                }, 200)} >
                {category.name}
              </span>
            ))
          }
        </div>
        <div className="portfolio_content">
          {
            filtredProjects.map((project, i) => (
              <div key={i} className={activeCategory === project.category || activeCategory === "all" ? "show portfolio_card" : "hide portfolio_card"}>
                <img src={PF + project.img} alt="" className="portfolio_img" />
                <h2 className="portfolio_title">{project.title}</h2>
                <div className="portfolio_buttons">
                  <TooltipLink path="/" tooltipContent="view demo" tooltipIcon={<OndemandVideo className="icon" />} />
                  <TooltipBtn tooltipContent="used technology" tooltipIcon={<CallMade className="icon" />} />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
// !portfolio

// subscribe
function Subscribe() {
  return (
    <section className="subscribe section" id='subscribe'>
      <h1 className="section_title">subscribe</h1>
      <h2 className="section_subtitle">become a subscriber</h2>
      <div className="container subscribe_container ">
        <div className="subscribe_content">
          <p className="subscribeDesc">
            subscribe to our blog and get the latest updates straight to your inbox. <br />
            we don't share your informations.
          </p>
          <form className="subscribeForm">
            <input type="email" placeholder='Email Address' />
            <button className="send-btn"><CallMade className="send-icon" /></button>
          </form>
        </div>
      </div>
    </section>
  )
}
// !subscribe
// team
function Team() {
  const team = [
    {
      picture: "",
      name: "jane hego",
      city: "paris, fran",
      job: "designer",
      facebook: "",
      github: "",
      twitter: "",
      youtube: "",
      linkedin: "",
    },
    {
      picture: "",
      name: "jhon smeeth",
      city: "new",
      job: "front-end developer",
      facebook: "",
      github: "",
      twitter: "",
      youtube: "",
      linkedin: "",
    },
    {
      picture: "",
      name: "cristina molez",
      city: "malizia",
      job: "back-end developer",
      facebook: "",
      github: "",
      twitter: "",
      youtube: "",
      linkedin: "",
    },
    {
      picture: "",
      name: "cristiano rorando 😂",
      city: "espaniol, madrid",
      job: "manager",
      facebook: "",
      github: "",
      twitter: "",
      youtube: "",
      linkedin: "",
    },
    {
      picture: "",
      name: "selena gomes",
      city: "loce angeloce",
      job: "marketing",
      facebook: "",
      github: "",
      twitter: "",
      youtube: "",
      linkedin: "",
    },
    {
      picture: "",
      name: "jestien beiber",
      city: "packistan",
      job: "infografist",
      facebook: "",
      github: "",
      twitter: "",
      youtube: "",
      linkedin: "",
    },
    {
      picture: "",
      name: "ribicka jhoness",
      city: "india , delhi",
      job: "react developer",
      facebook: "",
      github: "",
      twitter: "",
      youtube: "",
      linkedin: "",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="team section" id='team'>
      <h1 className="section_title">Our team</h1>
      <h2 className="section_subtitle">who work with us</h2>
      <div className=" team_container container">
        <Carousel
          responsive={responsive}
          infinite={true}

        >

          {
            team.map((member, i) => (
              <div className="team_card" key={i}>
                <div className="front_face">
                  <div className="contents front">
                    <p className="cap">{member.name}</p>
                    <span className='cap'>{member.city}</span>
                  </div>
                </div>
                <div className='back_face'>
                  <div className="contents back">
                    <h2 className="cap">{member.job}</h2>
                    <span className='cap'>follow me </span>
                    <div className="icons">
                      <LinkR to="http://facebook.com" target="_blank" rel="noopener noreferrer"><GitHub className="icon" /></LinkR>
                      <LinkR to="http://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook className="icon" /></LinkR>
                      <LinkR to="http://facebook.com" target="_blank" rel="noopener noreferrer"><Twitter className="icon" /></LinkR>
                      <LinkR to="http://facebook.com" target="_blank" rel="noopener noreferrer"><LinkedIn className="icon" /></LinkR>
                      <LinkR to="http://facebook.com" target="_blank" rel="noopener noreferrer"><YouTube className="icon" /></LinkR>
                    </div>
                  </div>
                </div>
              </div>
            ))

          }
        </Carousel>
      </div>
    </section>
  )
}
// !team 
// latestBlog
function LatestBlog() {
  const blogs = [
    {
      img: "blog/1.jpg",
      date: "02/01/2022",
      category: "web development",
      title: "5 raisons why you should learn web development!",
      desc: "",
      comment: 10,
      view: "6K"
    },
    {
      img: "blog/2.jpg",
      date: "03/01/2022",
      category: "marketing",
      title: "best startigies for great marketing",
      desc: "",
      comment: 20,
      view: "10M"
    },
    {
      img: "blog/3.jpg",
      date: "04/01/2022",
      category: "artificial intelegence",
      title: "can artificial intelegence replace humans ?",
      desc: "",
      comment: 33,
      view: "12K"
    },
  ]
  return (
    <section className="latestBlog section" id='blog'>
      <h1 className="section_title">news</h1>
      <h2 className="section_subtitle">our latest blogs with trending topic for this week</h2>
      <div className="container latestBlog_container ">
        {
          blogs.map((blog, i) => (
            <Blog_card
              key={i}
              img={blog.img}
              date={blog.date}
              category={blog.category}
              title={blog.title}
              comment={blog.comment}
              view={blog.view}
              readMoreIcon
              desc
              nbCharactereOfDesc={70}
            />
          )
          )
        }
      </div>
      <GoLink custumClass="latestBlog_link" path="/blog" linkContent="see all blogs" />
    </section>
  )
}
// !latestBlog
// single blog card 
function Blog_card(
  {
    img,
    link,
    date,
    category,
    title,
    desc,
    nbCharactereOfDesc,
    comment,
    view,
    readMoreBtn,
    readMoreIcon,
    author
  }) {
  const string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum unde suscipit esse, error asperiores accusamus beatae earum dolore hic harum quidem possimus! Iste dolore vero esse, ratione pariatur reiciendis suscipit tempore dolores error, magnam ipsum odio! Voluptatibus omnis quaerat odit accusamus perspiciatis. Nesciunt magnam aperiam placeat aspernatur! Obcaecati quae velit illum dolorum neque dolore reiciendis atque sit vel expedita minima odio sunt qui, accusamus itaque, aspernatur odit. Ea, facilis maiores.";
  return (
    <div className="latestBlog_card cap">
      <div className="latestBlog_img">
        <img src={PF + img} alt="" />
        {
          readMoreIcon &&
          <LinkR to="/post/postId" className="blog_link"><CallMade className="go-icon" /></LinkR>
        }
        <span>read more</span>
      </div>
      <div className="blog_data">
        <div className="blog_info">
          <div className="blog_info_item">
            <DateRangeOutlined className="blog_info_icon" />
            <span className="blog_info_text">{date}</span>
          </div>
          <div className="blog_info_item">
            <SellOutlined className="blog_info_icon" />
            <span className="blog_info_text">{category}</span>
          </div>
          {
            author &&
            <div className="blog_info_item author">
              <PersonOutlineOutlined className="blog_info_icon" />
              <span className="blog_info_text ">by {author}</span>
            </div>
          }
        </div>
        <h2 className="blog_title">{title}</h2>
        {
          desc &&
          <p className="blog_desc">
            {string.substring(0, nbCharactereOfDesc)
              + (string.substring(0, nbCharactereOfDesc).length < string.length
                ? "..."
                : ""
              )}
          </p>
        }
        {
          readMoreBtn && <GoLink path="/post/postId" linkContent="read more" />
        }
        <div className="blog_footer">
          <div className="blog_footer_item">
            <ChatBubbleOutline className="icon" /> <span>{comment}</span>
          </div>
          <div className="blog_footer_item">
            <VisibilityOutlined className="icon" /> <span>{view}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
// !single blog card 
// latestBlog2
function LatestBlog2() {
  const blogs = [
    {
      img: "blog/1.jpg",
      date: "02/01/2022",
      category: "web development",
      title: "5 raisons why you should learn web development!",
      comment: 10,
      view: "6K"
    },
    {
      img: "blog/2.jpg",
      date: "03/01/2022",
      category: "marketing",
      title: "best startigies for great marketing",
      comment: 20,
      view: "10M"
    },
    {
      img: "blog/3.jpg",
      date: "04/01/2022",
      category: "artificial intelegence",
      title: "can artificial intelegence replace humans ?",
      comment: 33,
      view: "12K"
    },
    {
      img: "blog/1.jpg",
      date: "02/01/2022",
      category: "web development",
      title: "5 raisons why you should learn web development!",
      comment: 10,
      view: "6K"
    },
    {
      img: "blog/2.jpg",
      date: "03/01/2022",
      category: "marketing",
      title: "best startigies for great marketing",
      comment: 20,
      view: "10M"
    },
    {
      img: "blog/3.jpg",
      date: "04/01/2022",
      category: "artificial intelegence",
      title: "can artificial intelegence replace humans ?",
      comment: 33,
      view: "12K"
    },
  ]
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="latestBlog section" id='blog'>
      <h1 className="section_title">Latest Blog</h1>
      <div className="container latestBlog_container blogCarousel">
        <Carousel
          responsive={responsive}
          infinite={true}

        >
          {
            blogs.map((blog, i) => (
              <Blog_card
                key={i}
                img={blog.img}
                date={blog.date}
                category={blog.category}
                title={blog.title}
                comment={blog.comment}
                view={blog.view}
                readMoreIcon
              />
            )
            )
          }
        </Carousel>
      </div>
    </section>
  )
}
// !latestBlog2
// testimonial
function Testimonial() {
  const testimonial = [
    {
      name: "alex smith",
      job: "designer | developer",
      nbStars: "1", // number from 1 to 5 *
      img: "blog/1.png",
      msg: "",
    },
    {
      name: "alex smith 2",
      job: "designer ",
      nbStars: 2.5, // number from 1 to 5 *
      img: "blog/1.png",
      msg: "",
    },
    {
      name: "alex smith",
      job: "developer",
      nbStars: "5", // number from 1 to 5 *
      img: "blog/1.png",
      msg: "",
    },
    {
      name: "alex smith",
      job: "software engeener",
      nbStars: "3", // number from 1 to 5 *
      img: "blog/1.png",
      msg: "",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="testimonial section" id='testimonial'>
      <h1 className="section_title">testimonial</h1>
      <h2 className="section_subtitle">Meet Client Satisfaction</h2>
      <div className=" testimonial_container container ">
        <Carousel
          responsive={responsive}
          infinite={true}

        >
          {
            testimonial.map((testi, i) => (
              <div className="testimonial_box" key={i}>
                <FormatQuoteRounded className="quote" />
                <p className="testimonial_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium eos itaque ad aut voluptas non magnam, officiis officia eius!
                </p>
                <div className="testimonial_content flex">
                  <div className="info">
                    <div className="name cap">{testi.name}</div>
                    <div className="job cap">{testi.job}</div>
                    <div className="stars">
                      <Stack spacing={1}>
                        <Rating
                          defaultValue={2.5}
                          readOnly />
                      </Stack>
                    </div>
                  </div>
                  <div className="image"><img src={PF + "blog/1.jpg"} alt="" /></div>
                </div>
              </div>
            ))
          }
        </Carousel>
      </div>
    </section>
  )
}
// !testimonial
// contact 
function Contact() {
  const ref=useRef();
  const [done,setDone]=useState(false);
  const [focusedusername,setFocusedusername]=useState(false);
  const [focusedemail,setFocusedemail]=useState(false);
  const [focusedmsg,setFocusedmsg]=useState(false);
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [subject,setSubject]=useState('');
  const [msg,setMsg]=useState('');
  const errorMsg={
    username:"userName is requared *",
    email:"it should be a valid email address *",
    msg:"it can't be empty *"
  }
  function handleSubmit(e){
    e.preventDefault();
    emailjs.sendForm(
      'service_1n8kyu9', 
      'template_1ltr0lc', 
      ref.current, 
      'user_NNBXdn4rLyJZQVlfvqKbI')
    .then((result) => {
        console.log(result.text);
        setDone(true);
        setFocusedusername(false);
        setFocusedemail(false);
        setFocusedmsg(false);
        setUsername("");
        setEmail("");
        setSubject("");
        setMsg("");
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <section className="contact section" id='contact'>
      <h1 className="section_title">contact us</h1>
      <h2 className="section_subtitle">let's talk about projects.</h2>
      <div className="container contact_container">
        <div className="contact_composant">
          <div className="contact form">
            <h3 className="contact_title">send your message</h3>
            <form 
             ref={ref}
             onSubmit={handleSubmit}
            >
              <input 
              type="text" 
              value="contact" 
              hidden 
              name="what" />
              <div className="form_box">
                <div className="row50">
                  <div className="inputBox">
                    <span>full name</span>
                    <input
                    onBlur={(e)=>setFocusedusername(true)}
                    focused={focusedusername.toString()}
                    required
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    name="name" 
                    type="text" 
                    placeholder='Jhon' />
                    <Alert type="error" content={errorMsg.username}/>
                  </div>
                  <div className="inputBox">
                    <span>Adress Email</span>
                    <input 
                    onBlur={(e)=>setFocusedemail(true)}
                    focused={focusedemail.toString()}
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    name="email"
                    type="email" 
                    placeholder='exemple: Jhon@gmail.com' />
                    <Alert type="error" content={errorMsg.email}/>
                  </div>
                </div>
                <div className="row100">
                  <div className="inputBox">
                    <span>Subject</span>
                    <input 
                    onChange={(e)=>setSubject(e.target.value)}
                    value={subject}
                    name="subject"
                    type="text" 
                    placeholder='your subject..' />
                  </div>
                </div>
                <div className="row100">
                  <div className="inputBox">
                    <span>Message</span>
                    <textarea 
                    onBlur={(e)=>setFocusedmsg(true)}
                    focused={focusedmsg.toString()}
                    required
                    placeholder='Type your message..'
                    onChange={(e)=>setMsg(e.target.value)}
                    value={msg}
                    name='message'
                    ></textarea>
                    <Alert type="error" content={errorMsg.msg}/>
                  </div>
                </div>
                <div className="row100 rowBtn">
                  <button className="send-Btn">send message</button>
                  {done &&  <Alert type="success" content="thank you! we will contact you."/>}
                </div>
              </div>
            </form>
          </div>
          <div className="contact info">
            <h3 className="contact_title">Contact info</h3>
            <InfoBox />
          </div>
          <div className="contact map">
            <iframe
              className='google_map'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110098.31140221872!2d-9.647785508398593!3d30.419876344276886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6e9daad1cc9%3A0xbcf8d0b78bf48474!2sAgadir%2080000!5e0!3m2!1sen!2sma!4v1645660999305!5m2!1sen!2sma"
              // width={600} 
              // height={450} 
              // style="border:0;" 
              // allowfullscreen="" 
              loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
// !contact 
// faq
function Faq() {
  const [accordion, setAccordion] = useState("");
  function handleClick(id) {
    if (accordion === id) {
      setAccordion("");
    } else {
      setAccordion(id)
    }
  }
  const questions = [
    [
      {
        question: "",
        answer: ""
      },
      {
        question: "",
        answer: ""
      },
      {
        question: "",
        answer: ""
      }
    ],
    [
      {
        question: "",
        answer: ""
      },
      {
        question: "",
        answer: ""
      },
      {
        question: "",
        answer: ""
      }
    ],

  ]
  return (
    <section className="Faq section" id='Faq' >
      <h1 className="section_title">FAQ</h1>
      <h2 className="section_subtitle">Some of commun questions.were often asked </h2>
      <div className="container Faq_container">
        {
          questions.map((q, i) => (
            <div className="questions_group" key={i}>
              {
                questions[i].map((item, j) => (
                  <div key={j} className={accordion === i + "-" + j ? "open questions_item" : "questions_item"}>
                    <header className="questions_header" onClick={() => handleClick(i + "-" + j)}>
                      <h3 className="question_text">Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                      <span className="question_icon"></span>
                    </header>
                    <div
                      className="question_content">
                      <p className="question_desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, praesentium.</p>
                    </div>
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    </section>
  )
}
// !faq

// ********************************************
// BlogFeed
function BlogFeed() {
  const blogs = [
    {
      img: "blog/1.jpg",
      date: "02/01/2022",
      category: "web development",
      title: "5 raisons why you should learn web development! 1",
      desc: "",
      comment: 10,
      view: "6K"
    },
    {
      img: "blog/2.jpg",
      date: "03/01/2022",
      category: "marketing",
      title: "best startigies for great marketing 2",
      desc: "",
      comment: 20,
      view: "10M"
    },
    {
      img: "blog/3.jpg",
      date: "04/01/2022",
      category: "artificial intelegence",
      title: "can artificial intelegence replace humans ? 3",
      desc: "",
      comment: 33,
      view: "12K"
    },
    {
      img: "blog/1.jpg",
      date: "02/01/2022",
      category: "web development",
      title: "5 raisons why you should learn web development! 4",
      desc: "",
      comment: 10,
      view: "6K"
    },
    {
      img: "blog/2.jpg",
      date: "03/01/2022",
      category: "marketing",
      title: "best startigies for great marketing 5",
      desc: "",
      comment: 20,
      view: "10M"
    },
    {
      img: "blog/3.jpg",
      date: "04/01/2022",
      category: "artificial intelegence",
      title: "can artificial intelegence replace humans ? 6",
      desc: "",
      comment: 33,
      view: "12K"
    },
    {
      img: "blog/1.jpg",
      date: "02/01/2022",
      category: "web development",
      title: "5 raisons why you should learn web development! 7",
      desc: "",
      comment: 10,
      view: "6K"
    },
    {
      img: "blog/2.jpg",
      date: "03/01/2022",
      category: "marketing",
      title: "best startigies for great marketing 8",
      desc: "",
      comment: 20,
      view: "10M"
    },
    {
      img: "blog/3.jpg",
      date: "04/01/2022",
      category: "artificial intelegence",
      title: "can artificial intelegence replace humans ? 9",
      desc: "",
      comment: 33,
      view: "12K"
    },
  ]
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost)
  function prevClick() {
    setCurrentPage(currentPage - 1)
  }
  function nextClick() {
    setCurrentPage(currentPage + 1)
  }
  let numberOfPage = Math.ceil(blogs.length / postsPerPage)
  return (
    <div className="blogFeed_container container">
      <div className="blogFeed_main fullwidth">
        <div className="blogFeed_blogs">
          {
            currentPosts.map((blog, i) => (
              <Blog_card
                key={i}
                img={blog.img}
                date={blog.date}
                category={blog.category}
                title={blog.title}
                comment={blog.comment}
                view={blog.view}
                readMoreBtn
                desc
                nbCharactereOfDesc={200}
                author="Admin"
              />
            )
            )
          }
        </div>
        <div className={currentPage <= 1 ? "disabledprev pagination" : currentPage >= numberOfPage ? "disablednext pagination" : "pagination"}>
          <TooltipBtn
            custumClass="prev"
            tooltipContent="precedent"
            handleClick={prevClick}
            tooltipIcon={<ArrowLeft className="icon"
            />} />
          <span className="pagination_page">{currentPage}/{numberOfPage}</span>
          <TooltipBtn custumClass="next" tooltipContent="next" handleClick={nextClick} tooltipIcon={<ArrowRight className="icon" />} />
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
// !BlogFeed
// BlogFeed
function PostFeed() {
  const post =
  {
    img: "blog/1.jpg",
    date: "02/01/2022",
    category: "web development",
    title: "5 raisons why you should learn web development! 1",
    desc: "",
    comment: 10,
    view: "6K"
  }
  const [save, setSave] = useState(false);
  const ref=useRef();
  const [done,setDone]=useState(false);
  const [focusedusername,setFocusedusername]=useState(false);
  const [focusedemail,setFocusedemail]=useState(false);
  const [focusedmsg,setFocusedmsg]=useState(false);
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [msg,setMsg]=useState('');
  const errorMsg={
    username:"userName is requared *",
    email:"it should be a valid email address *",
    msg:"it can't be empty *"
  }
  function handleSubmit(e){
    e.preventDefault();
    emailjs.sendForm(
      'service_1n8kyu9', 
      'template_1ltr0lc', 
      ref.current, 
      'user_NNBXdn4rLyJZQVlfvqKbI')
    .then((result) => {
        console.log(result.text);
        setDone(true);
        setFocusedusername(false);
        setFocusedemail(false);
        setFocusedmsg(false);
        setUsername("");
        setEmail("");
        setMsg("");
        setSave(true);
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <div className="blogFeed_container container">
      <div className="blogFeed_main fullwidth">
        <div className="blogFeed_blogs">
          {
            <Blog_card
              img={post.img}
              date={post.date}
              category={post.category}
              title={post.title}
              comment={post.comment}
              view={post.view}
              desc
              author="Admin"
            />
          }
          <form 
          ref={ref}
          onSubmit={handleSubmit}>
            <h2 className="sidebar_widget_title">Leave comment  </h2>
            <div className="form_box">
              <input 
              type="text" 
              value="comment" 
              hidden 
              name="what" />
              <div className="row50">
              <div className="inputBox">
                    <span>userName</span>
                    <input
                    onBlur={(e)=>setFocusedusername(true)}
                    focused={focusedusername.toString()}
                    required
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    name="name" 
                    type="text" 
                    placeholder='Jhon' />
                    <Alert type="error" content={errorMsg.username}/>
                  </div>
                <div className="inputBox">
                    <span>Adress Email</span>
                    <input 
                    onBlur={(e)=>setFocusedemail(true)}
                    focused={focusedemail.toString()}
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    name="email"
                    type="email" 
                    placeholder='exemple: Jhon@gmail.com' />
                    <Alert type="error" content={errorMsg.email}/>
                  </div>
              </div>
              <div className="row100">
              <div className="inputBox">
                    <span>comment</span>
                    <textarea 
                    onBlur={(e)=>setFocusedmsg(true)}
                    focused={focusedmsg.toString()}
                    required
                    placeholder='Type your comment..'
                    onChange={(e)=>setMsg(e.target.value)}
                    value={msg}
                    name='message'
                    ></textarea>
                    <Alert type="error" content={errorMsg.msg}/>
                  </div>
              </div>
              <div className="row100 rowSave">
                <input
                  type="radio"
                  id="save"
                  name='saveInput'
                  hidden
                  checked={save}
                  onChange={(e) => e.target.value} />
                  <input 
                  type="text" 
                  value={save ? "save me" : "don't save me"}
                  hidden
                  onChange={(e) => e.target.value} 
                  name="save" />
                <label htmlFor="save" className={save ? "checked custum_radio_btn" : "custum_radio_btn"} onClick={() => setSave(!save)}>
                  <div className="custum_radio_contain"></div>
                  <p>Save my name, email, and website in this browser for the next time I comment.</p>
                </label>

              </div>
              <div className="row100 rowBtn">
                <button className="send-Btn">send Comment</button>
                {done &&  <Alert type="success" content="thank you for your comment. it will be published after checking."/>}
              </div>
            </div>
          </form>
          <div className="comments_container">
            <h2 className="sidebar_widget_title">Comment (4) </h2>
            <div className="comments_group cap">
              <div className="comments_item">
                <div className="comment_infos">
                  <div className="comment_info username">Lorem123</div>
                  <div className="comment_info date">on 13/12/2021</div>
                </div>
                <p className="comment_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
              <div className="comments_item">
                <div className="comment_infos">
                  <div className="comment_info username">Lorem123</div>
                  <div className="comment_info date">on 13/12/2021</div>
                </div>
                <p className="comment_text">
                  Lorem.
                </p>
                <div className="comment_reply">
                  <img src="./favicon-32x32.png" alt="" className="img_admin_reply" />
                  <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
              </div>
              <div className="comments_item">
                <div className="comment_infos">
                  <div className="comment_info username">Lorem123</div>
                  <div className="comment_info date">on 13/12/2021</div>
                </div>
                <p className="comment_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
              <div className="comments_item">
                <div className="comment_infos">
                  <div className="comment_info username">Lorem123</div>
                  <div className="comment_info date">on 13/12/2021</div>
                </div>
                <p className="comment_text">
                  Lorem ipsum dolor ?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
// !BlogFeed
// sidebar 
function Sidebar() {
  const categories = [
    {
      name: "design ui/ux",
      nbposts: "13"
    },
    {
      name: "NFTS",
      nbposts: "10"
    },
    {
      name: "wordpress",
      nbposts: "16"
    },
    {
      name: "django",
      nbposts: "22"
    },
    {
      name: "react js",
      nbposts: "15"
    },
    {
      name: "artificial intelegence",
      nbposts: "17"
    },
    {
      name: "marketing",
      nbposts: "7"
    },
    {
      name: "e-commerce",
      nbposts: "9"
    },
    {
      name: "tour & travels",
      nbposts: "8"
    }
  ]
  const blogs = [
    {
      img: "blog/1.jpg",
      date: "02/01/2022",
      category: "web development",
      title: "5 raisons why you should learn web development! 1",
      desc: "",
      comment: 10,
      view: "6K"
    },
    {
      img: "blog/2.jpg",
      date: "03/01/2022",
      category: "marketing",
      title: "best startigies for great marketing 2",
      desc: "",
      comment: 20,
      view: "10M"
    },
    {
      img: "blog/3.jpg",
      date: "04/01/2022",
      category: "artificial intelegence",
      title: "can artificial intelegence replace humans ? 3",
      desc: "",
      comment: 33,
      view: "12K"
    },
    {
      img: "blog/1.jpg",
      date: "02/01/2022",
      category: "web development",
      title: "5 raisons why you should learn web development! 4",
      desc: "",
      comment: 10,
      view: "6K"
    },
    {
      img: "blog/2.jpg",
      date: "03/01/2022",
      category: "marketing",
      title: "best startigies for great marketing 5",
      desc: "",
      comment: 20,
      view: "10M"
    },
    {
      img: "blog/3.jpg",
      date: "04/01/2022",
      category: "artificial intelegence",
      title: "can artificial intelegence replace humans ? 6",
      desc: "",
      comment: 33,
      view: "12K"
    },
  ]
  return (
    <div className="blogFeed_sidebar">
      <div className="sidebar_widget">
        <h2 className="sidebar_widget_title">most popular posts </h2>
        <div className="sidebar_widget_posts">
          {
            blogs.map((item, i) => (
              <div key={i} className="widget_post">
                <div className="widget_post_img">
                  <img src={PF + item.img} alt="" />
                </div>
                <div className="widget_post_info">
                  <h2 className="widget_post_title">{item.title}</h2>
                  <div className="widget_post_date">{item.date}</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="sidebar_widget">
        <h2 className="sidebar_widget_title">categories</h2>
        <div className="widget_categories">
          {
            categories.map((item, i) => (
              <div key={i} className="widget_category">
                <div className="widget_category_name cap">{item.name}</div>
                <div className="widget_category_number">({item.nbposts})</div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="sidebar_widget">
        <h2 className="sidebar_widget_title">main tags</h2>
        <div className="widget_tags">
          <div className="widget_tag">
            html
          </div>
          <div className="widget_tag">
            css
          </div>
          <div className="widget_tag">
            javascript
          </div>
          <div className="widget_tag">
            react
          </div>
          <div className="widget_tag">
            django
          </div>
          <div className="widget_tag">
            express
          </div>
          <div className="widget_tag">
            nodejs
          </div>
        </div>
      </div>
    </div>
  )
}
// sidebar 

// serviceDesc 
function ServiceDesc() {
  const [selectedSlide,setSelectedSlide]=useState(0);
  function handleClick(id){
    setSelectedSlide(id);
  }
  const slides=[
    {
      img:"portfolio/1.jpg"
    },
    {
      img:"portfolio/2.jpg"
    },
    {
      img:"portfolio/3.jpg"
    },
    {
      img:"portfolio/4.jpg"
    },
    {
      img:"portfolio/5.jpg"
    },
    {
      img:"portfolio/6.jpg"
    }
  ]
  function rightClick(){
    if(selectedSlide<slides.length-1){
      setSelectedSlide(selectedSlide+1);
    }
    else{
      setSelectedSlide(0);
    }
  }
  function leftClick(){
    if(selectedSlide>0){
      setSelectedSlide(selectedSlide-1);
    }
    else{
      setSelectedSlide(slides.length-1);
    }
  }
  return (
    <section className="section serviceDesc" id="serviceDesc" style={{paddingTop:"100px"}}>
      <h1 className="section_title">service name</h1>
      <h2 className="section_subtitle">Lorem ipsum dolor sit.</h2>
      <div className="container serviceDesc_container">
      <div className="carouselContainer">
          <div className="serviceDesc_controller">
            <ArrowLeft className="icon" onClick={()=>leftClick()}/>
            <ArrowRight className="icon" onClick={()=>rightClick()}/>
            </div>
          {
            slides.map((slide, i) => (
              <div key={i} className={"serviceDesc_img_container img-"+ i}>
                <img src={PF + slide.img} alt="" className={selectedSlide===i ? "selected serviceDesc_img " : "serviceDesc_img"} />
              </div>
            ))
          }
          <div className="serviceDesc_sliders">{
            slides.map((slide,i)=>(
            <label 
            key={i} 
            onClick={()=>handleClick(i)}
            style={{backgroundColor:selectedSlide===i && "var(--first-color)"}}></label>
            ))
          }
          </div>
        </div>
        <div className="serviceDesc_text">
          <h2 className="serviceDesc_title">about the service</h2>
          <p className="serviceDesc_para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore saepe, repellendus fuga earum impedit iusto.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore saepe, repellendus fuga earum impedit iusto.
            </p>
            <h2 className="serviceDesc_title">why choose this service</h2>
            <ul className="serviceDesc_features">
              <li className="serviceDesc_feature">
                <Check className="icon"/>
                Lorem ipsum dolor sit amet consectetur.
                </li>
                <li className="serviceDesc_feature">
                <Check className="icon"/>
                Lorem ipsum dolor sit amet consectetur.
                </li>
                <li className="serviceDesc_feature">
                <Check className="icon"/>
                Lorem ipsum dolor sit amet consectetur.
                </li>
                <li className="serviceDesc_feature">
                <Check className="icon"/>
                Lorem ipsum dolor sit amet consectetur.
                </li>
              </ul>
        </div>
      </div>
    </section>
  )
}
// !serviceDesc
// ChooseService
function ChooseService() {
  const [selectedTable,setSelectedTable]=useState("other")

  const tables = [
    {
      name: "basic",
      price: "29",
      services: [
        {
          name: "one selected template.",
          isExist: true
        },
        {
          name: "100% responsive design.",
          isExist: true
        },
        {
          name: "credit remove permission.",
          isExist: false
        },
        {
          name: "lifetime template updates.",
          isExist: false
        },
      ]
    },
    {
      name: "premium",
      price: "59",
      services: [
        {
          name: "five selected templates.",
          isExist: true
        },
        {
          name: "100% responsive design.",
          isExist: true
        },
        {
          name: "credit remove permission.",
          isExist: true
        },
        {
          name: "lifetime template updates.",
          isExist: false
        },
      ]
    },
    {
      name: "ulimate",
      price: "29",
      services: [
        {
          name: "all existed templates.",
          isExist: true
        },
        {
          name: "100% responsive design.",
          isExist: true
        },
        {
          name: "credit remove permission.",
          isExist: true
        },
        {
          name: "lifetime template updates.",
          isExist: true
        },
      ]
    }
  ]
  const form = useRef();
  const [done,setDone]=useState(false);
  const [focusedusername,setFocusedusername]=useState(false);
  const [focusedemail,setFocusedemail]=useState(false);
  const [focusedmsg,setFocusedmsg]=useState(false);
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [subject,setSubject]=useState('');
  const [msg,setMsg]=useState('');
  const [opendropdown,setOpendropdown]=useState(false);
  const errorMsg={
    username:"userName is requared *",
    email:"it should be a valid email address *",
    msg:"it can't be empty *"
  }
  function handleSubmit(e){
    e.preventDefault();
    emailjs.sendForm(
      'service_1n8kyu9', 
      'template_8ic2cn5', 
      form.current, 
      'user_NNBXdn4rLyJZQVlfvqKbI')
      .then((result) => {
        console.log(result.text);
        setDone(true);
        setFocusedusername(false);
        setFocusedemail(false);
        setFocusedmsg(false);
        setUsername("");
        setEmail("");
        setSubject("");
        setMsg("");
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <section className="section chooseService" id="chooseService">
      <h1 className="section_title">developement web</h1>
      <h2 className="section_subtitle">Lorem ipsum dolor sit.</h2>
      <div className="container chooseService_container">
        <form ref={form} onSubmit={handleSubmit}>
        <div className="pricing pricing_container flex">
        {
          tables.map((table,i)=>(
            <input 
            key={i} 
            type="radio" 
            name="pricing" 
            hidden 
            onChange={(e)=>e.target.value}
            checked={selectedTable===table.name && true} 
            id={table.name} />
          ))
        }
        {
          tables.map((table, i) => (
            <div className={"table " + table.name} key={i}>
              {table.name === "premium" && <div className="ribbon"><span>Recommended</span></div>}

              <div className="price-section">
                <div className="price-area">
                  <div className="inner-area">
                    <span className="text">$</span>
                    <span className="price">{table.price}</span>
                  </div>
                </div>
              </div>
              <div className="package-name cap" data-target={table.name}></div>
              <ul className="package-features">
                {
                  table.services.map((feature, j) => (
                    <li className="package-features-item" key={j}>
                      <span className="list-name cap">{feature.name}</span>
                      {feature.isExist
                        ? <CheckRounded className="list-icon check" />
                        : <CloseRounded className="list-icon times" />
                      }
                    </li>
                  ))
                }
              </ul>

              <div className="buttonContainer">
                <label
                  htmlFor={table.name}
                  className="pricing_btn"
                  onClick={
                    () => {
                      selectedTable === table.name
                        ? setSelectedTable("other")
                        : setSelectedTable(table.name)
                    }
                  }
                >
                  {selectedTable === table.name ? <>selected<Check className="icon" /> </> : "select"}
                </label>
              </div>
            </div>
          ))
        }
      </div>
          <div className="contact_composant">
          <div className="contact form">
            <h3 className="contact_title">send your message</h3>
            <div className="form_box">
                <div className="row50">
                  <div className="inputBox">
                    <span>full name</span>
                    <input
                    onBlur={(e)=>setFocusedusername(true)}
                    focused={focusedusername.toString()}
                    required
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    name="name" 
                    type="text" 
                    placeholder='Jhon' />
                    <Alert type="error" content={errorMsg.username}/>
                  </div>
                  <div className="inputBox">
                    <span>Adress Email</span>
                    <input 
                    onBlur={(e)=>setFocusedemail(true)}
                    focused={focusedemail.toString()}
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    name="email"
                    type="email" 
                    placeholder='exemple: Jhon@gmail.com' />
                    <Alert type="error" content={errorMsg.email}/>
                  </div>
                </div>
                <div className="row50">
                  <div className="inputBox">
                    <span>Subject</span>
                    <input 
                    onChange={(e)=>setSubject(e.target.value)}
                    value={subject}
                    name="subject"
                    type="text" 
                    placeholder='your subject..' />
                  </div>
                  <div className="inputBox">
                    <span>package</span>
                    <div className={opendropdown ? "open custumSelect cap" :"custumSelect cap"}>
                      <div className="custumSelectTop" onClick={()=>setOpendropdown(!opendropdown)}>
                        {selectedTable!== "other" ? selectedTable : "other" } 
                        <KeyboardArrowDown className="icon"/>
                        </div>
                        <div  className="custumSelectBottom">
                        {
                          tables.map((table, i) => (
                            <div
                                key={i}
                                className="custumSelectBottomItem"
                                onClick={() => {
                                  setSelectedTable(table.name)
                                  setOpendropdown(false)
                                }}>
                                {table.name}
                              </div>
                          ))
                        }
                          {selectedTable!== "other" && <div 
                          className="custumSelectBottomItem" 
                          onClick={()=>{
                            setSelectedTable("other")
                            setOpendropdown(false)
                            }}>other</div>}
                          </div>
                      </div>
                      <input 
                      hidden
                      name='package'
                      type="text" 
                      value={selectedTable!=="other" ? selectedTable : "other"} />
                  </div>
                </div>
                <div className="row100">
                  <div className="inputBox">
                    <span>Message</span>
                    <textarea 
                    onBlur={(e)=>setFocusedmsg(true)}
                    focused={focusedmsg.toString()}
                    required
                    placeholder='Type your message..'
                    onChange={(e)=>setMsg(e.target.value)}
                    value={msg}
                    name='message'
                    ></textarea>
                    <Alert type="error" content={errorMsg.msg}/>
                  </div>
                </div>
                <div className="row100 rowBtn">
                  <button className="send-Btn">send message</button>
                  {done &&  <Alert type="success" content="thank you ! We will contact you."/>}
                </div>
              </div>
          </div>
            <div className="contact info">
              <h3 className="contact_title">Contact info</h3>
              <InfoBox />
            </div>
            <div className="contact map">
              <iframe
                className='google_map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110098.31140221872!2d-9.647785508398593!3d30.419876344276886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6e9daad1cc9%3A0xbcf8d0b78bf48474!2sAgadir%2080000!5e0!3m2!1sen!2sma!4v1645660999305!5m2!1sen!2sma"
                loading="lazy"></iframe>
            </div>
          </div>
        </form>
        </div>
    </section>
  )
}
// !ChooseService
// footer
function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="footerLeft footerBox">
          <h2>About us</h2>
          <div className="footer_content">
            <div className='footerDesc'>
              <Logo />
              is Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis molestias consequatur odio obcaecati odit. Aut facere, cum labore quo laborum pariatur quibusdam. Temporibus, unde eum?</div>
          </div>
        </div>
        <div className="footerCenter footerBox">
          <h2>Info</h2>
          <div className="footer_content">
            <InfoBox />
          </div>
        </div>
        <div className="footerBox">
          <h2>subscribe</h2>
          <div className="footer_content">
            <div className='footerDesc'>
              Lorem ipsum dolor sit amet consectetur.
            </div>
            <form className="subscribeForm">
              <input type="email" placeholder='Email Address' />
              <button className="send-btn"><CallMade className="send-icon" /></button>
            </form>
          </div>
        </div>
        <div className="footerRight footerBox">
          <h2>Usefull Links</h2>
          <div className="footer_content">
            <ul className="footerLinks cap">
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  to="services"
                  className="link">services
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  to="portfolio"
                  className="link">portfolio
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  to="blog"
                  className="link">blog
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  to="contact"
                  className="link">contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_bottom">created by  <Logo /> | <Copyright className="copyright" /> 2022 all rights reserved.</div>
    </footer>
  )
}
// !footer 
// !components 
export default App;
