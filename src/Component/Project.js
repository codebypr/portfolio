import React from 'react'
import ImageSection from './ImageSection'
import ProjectContent from './ProjectContent'
import project from "../MyImage/about.jpg"
export default () => {
    return(
        <>
        <ImageSection heading=" PROJECTS " text="Some of my most rececrt works" img={project}/>
        <ProjectContent/>
        </>
    )
}