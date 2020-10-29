import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SideBarContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: #020104;
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
	top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
	color: #f7f7f6;
`;
export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;

export const SideBarWrapper = styled.div`
	color: #020104;
`;
export const SideBarMenu = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 80px);
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(6, 60px);
	}
`;

export const SideBarLink = styled(LinkS)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	color: #f7f7f6;
	cursor: pointer;

	&:hover {
		color: #bebab4;
		transition: 0.2s ease-in-out;
	}
`;

export const LinksWrapper = styled.div`
	justify-content: center;
	align-items: center;
`;

export const LinkedIn = styled.img`
	height: 40px;
	width: 40px;
`;
export const GitHub = styled.img`
	height: 40px;
	width: 40px;
`;
