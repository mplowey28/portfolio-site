import React from "react";
import {
	InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	Column2,
	TextWrapper,
	Heading,
	SubTitle,
	ImgWrap,
	Img,
} from "./InfoElements";

const InfoSection = ({ id, imgStart, headline, description, img, alt }) => {
	return (
		<>
			<InfoContainer id={id}>
				<Heading>{headline}</Heading>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<ImgWrap>
								<Img src={img} alt={alt} />
							</ImgWrap>
						</Column1>
						<Column2>
							<TextWrapper>
								<SubTitle>{description}</SubTitle>
							</TextWrapper>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	);
};

export default InfoSection;
