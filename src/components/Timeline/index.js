import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact } from "react-icons/fa";
import {
	TimelineContainer,
	TimelineHeader,
	TimelineH1,
	VideoContainer,
} from "./TimelineElements";

const Timeline = () => {
	return (
		<TimelineContainer id='projects'>
			<TimelineHeader>
				<TimelineH1>Projects</TimelineH1>
			</TimelineHeader>
			<VerticalTimeline>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: "#f7f7f6", color: "#020104" }}
					contentArrowStyle={{ borderRight: "7px solid  #f7f7f6" }}
					iconStyle={{ background: "#020104", color: "#f7f7f6" }}
					icon={<FaReact />}
				>
					<h3 className='vertical-timeline-element-title'>A bird's eye view</h3>
					<h4 className='vertical-timeline-element-subtitle'>16 July 2020</h4>
					<p>React, Node.JS</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					iconStyle={{ background: "#020104", color: "#fff" }}
					icon={<FaReact />}
				>
					<h3 className='vertical-timeline-element-title'>TrashTagger</h3>
					<h4 className='vertical-timeline-element-subtitle'>16 July 2020</h4>
					<p>React, Node.JS, Firebase</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					iconStyle={{ background: "#020104", color: "#fff" }}
					icon={<FaReact />}
				>
					<h3 className='vertical-timeline-element-title'>Tappy</h3>
					<h4 className='vertical-timeline-element-subtitle'>2 Sept 2020</h4>
					<p>React, Redux, React Navigator, Node.JS, Firebase</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					iconStyle={{ background: "#020104", color: "#fff" }}
					icon={<FaReact />}
				>
					<h3 className='vertical-timeline-element-title'>Weather App</h3>
					<h4 className='vertical-timeline-element-subtitle'>5 Oct 2020</h4>
					<p>TypeScript, React, Redux, Bulma</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					iconStyle={{ background: "#020104", color: "#fff" }}
					icon={<FaReact />}
				>
					<h3 className='vertical-timeline-element-title'>Portfolio Site</h3>
					<h4 className='vertical-timeline-element-subtitle'>22 Oct 2020</h4>
					<p>React, Styled Components</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</TimelineContainer>
	);
};

export default Timeline;
