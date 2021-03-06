import React from 'react'
import styled from 'styled-components'
import ActionLink from '../../components/ActionLink/ActionLink'
import GreenDot from '../../assets/green-circle.png'
import {Link} from 'react-router-dom'

const StyledCard = styled.div`
    position: relative;
    max-width: 504px;
    color: #fff;
    display: flex;
    height: auto;
    margin-top: 35px;
    margin-bottom: 20px;
    background: #212231;
    box-shadow: 0px 4px 10px #000000;
    border-radius: 0px 30px 30px 30px;
    padding: 15px;
    margin-left: ${props => props.position};
    @media (max-width: 500px) {
        flex-direction: column;
        width: 229px;
    }
`
const TextWrapper = styled.div`
    width: 50%;
    height: auto;
`
const ImageWrapper = styled.div`
    width: 50%;
    height: auto;
    margin-left: 25px;
    @media (max-width: 500px) {
        margin: 20px auto 0;
    }
`
const StyledImg = styled.img`
    height: 313px;
    width: auto;
    @media (max-width: 500px) {
        width: 150px;
        height: auto;
    }
`

const StyledTitle = styled.h1`
    font-family: Frank Ruhl Libre;
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 41px;
    color: #FFFFFF;
    margin: 0;
    @media (max-width: 500px) {
        width: 220px;
    }
`

const StyledSubtitle = styled.div`
    font-family: Muli;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
`

const StyledText = styled.p`
    font-family: Frank Ruhl Libre;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
    @media (max-width: 500px) {
        display: none;
}
`
const LinkWrapper = styled.div`
    @media (max-width: 500px) {
        display: none;
    }
`

const CornerDot = styled.img.attrs({
    src: GreenDot,
})`
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    margin-top: -5px;
    margin-left: -5px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    :visted {

    }
`
class ProjectCard extends React.Component {

    state = {
        cardOpened: false,
    }

    handleCard = () => {

    }

        render () {
            return (
                
                <StyledCard position={this.props.position}>
                <CornerDot />
                <TextWrapper>
                    <StyledTitle>
                        {this.props.title}
                    </StyledTitle>
                    <StyledSubtitle>
                        {this.props.subtitle}
                    </StyledSubtitle>
                    <StyledText>
                        {this.props.text}
                    </StyledText>
                    <LinkWrapper>
                        <ActionLink text='Read more' url={this.props.link} />
                    </LinkWrapper>
                </TextWrapper>
                <StyledLink to={this.props.link}>
                    <ImageWrapper>
                        <StyledImg src={this.props.image} alt='phone display' />
                    </ImageWrapper>
                </StyledLink>
            </StyledCard>
            
            )
        }
}

export default ProjectCard