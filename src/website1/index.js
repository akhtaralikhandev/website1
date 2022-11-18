import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./index.css";
import img from "./img3.jpg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
const Home = () => (
  <div className="wrapper2">
    <div className="home">
      <header className="header">
        <div className="leftside">
          <h1 className="logo">Akhtar AI company</h1>
        </div>
        <div className="rightside">
          <p className="p info">info@companyname.com</p>
          <div className="vr"></div>
          <p className="p call">Call Us Now: 123 456 5532</p>
          <div className="p vr"></div>
          <div className="p icon">
            <SearchIcon />
          </div>
        </div>
      </header>
      <nav className="nav">
        <ul className="ul">
          <li className="li">
            HOME <ArrowDropDownIcon />
          </li>
          <li className="li">
            ABOUT US <ArrowDropDownIcon />
          </li>
          <li className="li">
            SERVICES <ArrowDropDownIcon />
          </li>
          <li className="li">
            PAGES <ArrowDropDownIcon />
          </li>
          <li className="li">
            BLOG <ArrowDropDownIcon />
          </li>

          <li className="li">
            ELEMENTS <ArrowDropDownIcon />
          </li>
          <li className="li">
            CONTACT <ArrowDropDownIcon />
          </li>
        </ul>
      </nav>
      <div className="wrapper23">
        <main className="main">
          <h1 className="h11">WE ARE HERE TO</h1>
          <h1 className="h12">PLANNING BUSINESS</h1>
          <p className="p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
            facere.
          </p>
          <button className="button">More Details</button>
        </main>
      </div>
    </div>
    <div className="services">
      <div className="intro">
        <p className="pbest">Best Service</p>
        <p className="provide">Service We Provide</p>
        <div className="lines"></div>
      </div>
      <div className="cards">
        <div className="card">
          {" "}
          <h2 className="h21">Busninss Consulting</h2>
          <img
            src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="img21"
          />
          <p className="p21">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium, adipisci! Atque, fugiat. Animi est, ullam esse odio
          </p>
          <button className="button32">More</button>
        </div>
        <div className="card">
          {" "}
          <h2 className="h21">Busninss Consulting</h2>
          <img
            src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="img21"
          />
          <p className="p21">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium, adipisci! Atque, fugiat. Animi est, ullam esse odio
          </p>
          <button className="button32">More</button>
        </div>
        <div className="card">
          {" "}
          <h2 className="h21">Busninss Consulting</h2>
          <img
            src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="img21"
          />
          <p className="p21">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium, adipisci! Atque, fugiat. Animi est, ullam esse odio
          </p>
          <button className="button32">More</button>
        </div>
      </div>
    </div>
    <div className="final">
      <img src={img} alt="" className="imgfinal" />
      <div className="finalcard">
        <h1 className="finalh1">Who We Are?</h1>
        <div className="finalline"></div>
        <p className="finalp">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aut
          nostrum molestiae expedita obcaecati possimus.
        </p>
        <ul className="finalul">
          <li className="finalli">
            <ChevronRightIcon /> Business Services
          </li>
          <li className="finalli">
            <ChevronRightIcon /> Business Services
          </li>
          <li className="finalli">
            <ChevronRightIcon /> Business Services
          </li>
        </ul>
        <button className="finalbutton">Explore More</button>
      </div>
    </div>
    <div className="footer">
      <div className="div1">
        <div className="logo1">BIZTROX</div>
        <p className="p1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum velit
          dignissimos suscipit! Sint, vitae pariatur.
        </p>
        <ul className="ul1">
          <li className="li1">
            <FacebookRoundedIcon />
          </li>
          <li className="li1">
            <TwitterIcon />
          </li>
          <li className="li1">
            <InstagramIcon />{" "}
          </li>
          <li className="li1">
            <YouTubeIcon />{" "}
          </li>
        </ul>
      </div>
      <div className="div2">
        <h2 className="h2">Services</h2>
        <ul className="ul2">
          <li className="li2">Company History</li>
          <li className="li2">About Us</li>
          <li className="li2">Contact Us</li>
          <li className="li2">Services</li>
          <li className="li2">Privacy Policy</li>
        </ul>
      </div>
      <div className="div3">
        {" "}
        <h2 className="h3">Quick Linkes Services</h2>
        <ul className="ul2">
          <li className="li2">Company History</li>
          <li className="li2">About Us</li>
          <li className="li2">Contact Us</li>
          <li className="li2">Services</li>
          <li className="li2">Privacy Policy</li>
        </ul>
      </div>
      <div className="div4">
        <h2 className="h31">Subscribe Us</h2>
        <p className="p2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, minima.
        </p>
        <div className="inputdiv">
          <input
            type="text"
            placeholder="Plz enter your email"
            className="input1"
          />
          <div className="icon2">
            {" "}
            <ChevronRightIcon fontSize="40px" className="chevron" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
