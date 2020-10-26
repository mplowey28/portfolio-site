import React from 'react'

const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>Projects</ProjectsH1>
            <ProjectWrapper>
                <ProjectsCard>
                    <ProjectsImg />
                    <ProjectsH2>Project 1</ProjectsH2>
                    <ProjectsP>Todo List made with TypeScript</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsImg />
                    <ProjectsH2>Project 2</ProjectsH2>
                    <ProjectsP>Todo List made with TypeScript</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsImg />
                    <ProjectsH2>Project 3</ProjectsH2>
                    <ProjectsP>Todo List made with TypeScript</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsImg />
                    <ProjectsH2>Project 4</ProjectsH2>
                    <ProjectsP>Todo List made with TypeScript</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsImg />
                    <ProjectsH2>Project 5</ProjectsH2>
                    <ProjectsP>Todo List made with TypeScript</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsImg />
                    <ProjectsH2>Project 6</ProjectsH2>
                    <ProjectsP>Todo List made with TypeScript</ProjectsP>
                </ProjectsCard>
            </ProjectWrapper>
        </ProjectsContainer>
    )
}

export default Projects
