import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import shiftPhoto from '../../assets/shift-home.png'
import BlossomPhoto from '../../assets/iPhone-X-Clay.png'
import SportsPhoto from '../../assets/iPhone-X-sports.png'
import ChallengePhoto from '../../assets/whole-body-challenge.png'
import StarvPhoto from '../../assets/Starv/Starv-01.png'
import styled from 'styled-components'

const projects = [
    {title: 'The Daily Shifts', subtitle: 'Dev + Design', text: 'The Daily Shifts is a mobile app that helps you build soul habits and find your inner peace through creating new daily practices.', image: shiftPhoto, link: '/work/the-daily-shift'},
    {title: 'Blossom', subtitle: 'Dev + Design', text: 'Blossom is a mobile app that helps you connect with people around you and invite them to have fun.', image: BlossomPhoto, link: '/work/blossom'},
    {title: 'Next Level Sports', subtitle: 'Dev + Design', text: ' Next Level Sports is an iOS app that allows you to live stream and record stats from your favorite sporting events.', image: SportsPhoto, link: '/work/next-level-sports'},
    {title: 'Whole Body Challenge', subtitle: 'Dev + Design', text: 'The Whole Body Challenge allows users to track their weight loss for a chance to win $100,000!', image: ChallengePhoto, link: '/work/whole-body-challenge'},
    {title: 'Starv', subtitle: 'Design Only', text: 'Starv is the place to hire local artists, musicians, and performers.', image: StarvPhoto, link: '/work/starv'}
]

const ProjectsWrapper = styled.div`
    max-width: 760px;
    margin: 0 auto 50px;
    background: transparent;
`

const CardWrapper = styled.div`
    height: auto;
    display: flex;
    width: 100%;
`

class ProjectCardContainer extends React.Component { 
    render() {

        const cardsToDisplay = projects.map( (project, index) => {
                return <CardWrapper key={project.title}><ProjectCard title={project.title} text={project.text} image={project.image} subtitle={project.subtitle} position={index % 2 ? 'auto' : '0'} link={project.link} /></CardWrapper>
            })

        return  (
            <ProjectsWrapper>
                {cardsToDisplay}
            </ProjectsWrapper>
        )
    }

}


export default ProjectCardContainer