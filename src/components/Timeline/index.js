import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact, FaGithub, FaPlay } from "react-icons/fa";
import {
  TimelineContainer,
  TimelineHeader,
  TimelineH1,
  LinkContainer,
  GithubContainer,
  LiveDemoContainer,
  VideoBg,
  Gif,
  Pic,
} from "./TimelineElements";
import BEV from "../../videos/bev.mp4";
import Weather from "../../videos/weather.mp4";
import Tappy from "../../videos/tappy_gif.gif";
import TrashTag from "../../assests/images/trashtagger_logo.png";
import Portfolio from "../../assests/images/portfolio.png";
import CryptoCharts from "../../assests/images/cryptocharts.png";

const Timeline = () => {
  return (
    <TimelineContainer id="projects">
      <TimelineHeader>
        <TimelineH1>Projects</TimelineH1>
      </TimelineHeader>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#020104", color: "#fff" }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">CryptoChartsPro</h3>
          <h4 className="vertical-timeline-element-subtitle">Jan 2021</h4>
          <br />
          <Pic src={CryptoCharts} alt="cryptochartspro landing image" />
          <br />
          <br />
          <h4 className="vertical-timeline-element-subtitle">Description:</h4>
          <p>
            A responsive web app that allows user to monitor the changing
            cryptocurrency market.
          </p>
          <br />
          <h4 className="vertical-timeline-element-subtitle">
            Tech used: <span>React, Chart.js, Tailwind, Context, Netlify</span>
          </h4>
          <LinkContainer>
            <GithubContainer
              href="https://github.com/mplowey28/CryptoChartsPro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              Code
            </GithubContainer>
            <LiveDemoContainer
              href="https://cryptochartspro.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPlay />
              Demo
            </LiveDemoContainer>
          </LinkContainer>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#020104", color: "#fff" }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">Portfolio Site</h3>
          <h4 className="vertical-timeline-element-subtitle">Oct 2020</h4>
          <br />
          <Pic src={Portfolio} alt="portfolio page hero image" />
          <br />
          <br />
          <h4 className="vertical-timeline-element-subtitle">Description:</h4>
          <p>
            My personal portfolio site. A responsive site made with React and
            Styled Components. Hosted on Netlify.
          </p>
          <br />
          <h4 className="vertical-timeline-element-subtitle">
            Tech used: <span>React, Styled Components, Netlify</span>
          </h4>
          <LinkContainer>
            <GithubContainer
              href="https://github.com/mplowey28/portfolio-site"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              Code
            </GithubContainer>
          </LinkContainer>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#020104", color: "#fff" }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">Weather App</h3>
          <h4 className="vertical-timeline-element-subtitle">Oct 2020</h4>
          <br />
          <VideoBg autoPlay loop muted src={Weather} type="video/mp4" />
          <br />
          <br />
          <h4 className="vertical-timeline-element-subtitle">Description:</h4>
          <p>A React app built with TypeScript using OpenWeatherMap API.</p>
          <br />
          <h4 className="vertical-timeline-element-subtitle">
            Tech used:
            <span> TypeScript, React, Redux, Bulma</span>
          </h4>
          <LinkContainer>
            <GithubContainer
              href="https://github.com/mplowey28/weather-app-typescript-react-"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              Code
            </GithubContainer>
            <LiveDemoContainer
              href="https://flamboyant-blackwell-f8f8c1.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPlay />
              Demo
            </LiveDemoContainer>
          </LinkContainer>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#020104", color: "#fff" }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">Tappy</h3>
          <h4 className="vertical-timeline-element-subtitle">Sept 2020</h4>
          <br />
          <Gif src={Tappy} alt="Tappy gif" />
          <br />
          <br />
          <h4 className="vertical-timeline-element-subtitle">Description:</h4>
          <p>
            A React Native app with Firebase user authenication developed for
            Tappy during a two week sprint. The app allows user to send vouchers
            for drinks, coffee, and pastries for local resturants to their
            friends. Features a shopping cart feature built using Redux and
            payments handled by Stripe.
          </p>
          <br />
          <h4 className="vertical-timeline-element-subtitle">
            Tech used:{" "}
            <span>React Native, Expo, Redux, React Navigator, Firebase</span>
          </h4>
          <LinkContainer>
            <GithubContainer
              href="https://github.com/mplowey28/TappyPublic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              Code
            </GithubContainer>
          </LinkContainer>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#020104", color: "#fff" }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">TrashTagger</h3>
          <h4 className="vertical-timeline-element-subtitle">July 2020</h4>
          <br />
          <Pic src={TrashTag} alt="TrashTagger logo" />
          <br />
          <br />
          <h4 className="vertical-timeline-element-subtitle">Description:</h4>
          <p>
            A React Native app with login authenication and Google image
            moderation that allows users to take geotagged photos of areas that
            are heavily littered. The app uses Google Maps API to display the
            geotagged photos so other user can go to the tagged sites and clean
            them. Once the user has cleaned a particular site, the user can mark
            the site as done, they will receive points for cleaning the site,
            and the site will be marked as completed on the map.
          </p>
          <br />
          <h4 className="vertical-timeline-element-subtitle">
            Tech used: <span>React Native, Expo, Firebase</span>
          </h4>
          <LinkContainer>
            <GithubContainer
              href="https://github.com/mplowey28/TrashTagger"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              Code
            </GithubContainer>
            <LiveDemoContainer
              href="https://vimeo.com/472432541"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPlay />
              Demo
            </LiveDemoContainer>
          </LinkContainer>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#f7f7f6", color: "#020104" }}
          contentArrowStyle={{ borderRight: "7px solid  #f7f7f6" }}
          iconStyle={{ background: "#020104", color: "#f7f7f6" }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">A bird's eye view</h3>
          <h4 className="vertical-timeline-element-subtitle">July 2020</h4>
          <br />
          <VideoBg autoPlay loop muted src={BEV} type="video/mp4" />
          <br />
          <br />
          <h4 className="vertical-timeline-element-subtitle">Description:</h4>
          <p>
            A React web app I made during a hackday. Users can input a city or
            major site in the world and the app will return the latest Landsat
            satellite image of the user's input location.
          </p>
          <br />
          <h4 className="vertical-timeline-element-subtitle">
            Tech used: <span>React, Node.js</span>
          </h4>

          <LinkContainer>
            <GithubContainer
              href="https://github.com/mplowey28/a-birds-eye-view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              Code
            </GithubContainer>
          </LinkContainer>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </TimelineContainer>
  );
};

export default Timeline;
