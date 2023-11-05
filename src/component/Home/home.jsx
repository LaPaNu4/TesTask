import carsHome from "../../pictures/carshomepage.png";
import { HomeDiv } from "./home.styled";

const Home = () => {
  return (
    <HomeDiv>
      <img width="1184" src={carsHome} alt="carsHome" />
      <div className="textDiv">
        <ul>
          <h2 className="textTitle">About Us:</h2>
          <li>
            <h3>Our Story:</h3>
            <p className="textStyle">
              Explore the journey of our car rental company, from its inception
              to becoming a trusted name in the Ukrainian rental market.
            </p>
          </li>
          <li>
            <h3>Mission and Values:</h3>
            <p className="textStyle">
              Discover our mission and core values, which guide us in providing
              exceptional car rental services to our customers.
            </p>
          </li>
          <li>
            <h3>Commitment to Excellence:</h3>
            <p className="textStyle">
              Learn about our unwavering commitment to delivering top-quality
              rental experiences and exceeding customer expectations.
            </p>
          </li>
          <li>
            <h3>Local Expertise:</h3>
            <p className="textStyle">
              Find out how our local expertise in Ukraine sets us apart,
              allowing us to serve both residents and travelers effectively.
            </p>
          </li>
        </ul>
        <ul>
          <h2 className="textTitle">Our Services:</h2>
          <li>
            <h3>Diverse Fleet:</h3>
            <p className="textStyle">
              Explore our diverse fleet of vehicles, from economy cars to luxury
              options, ensuring we have the perfect car for every customer.
            </p>
          </li>
          <li>
            <h3>Flexible Rental Options:</h3>
            <p className="textStyle">
              Learn about our flexible rental options, including hourly, daily,
              weekly, and monthly rates, tailored to your specific needs.
            </p>
          </li>
          <li>
            <h3>Additional Services:</h3>
            <p className="textStyle">
              Discover the range of additional services we offer, such as GPS
              navigation, child seats, and insurance options.
            </p>
          </li>
          <li>
            <h3>Easy Booking:</h3>
            <p className="textStyle">
              Experience hassle-free booking with our user-friendly online
              reservation system, making it convenient to rent a car.
            </p>
          </li>
          <li>
            <h3>Customer Support:</h3>
            <p className="textStyle">
              Find out about our dedicated customer support team, available 24/7
              to assist you with any inquiries or assistance you may need during
              your rental experience.
            </p>
          </li>
        </ul>
      </div>
    </HomeDiv>
  );
};

export default Home