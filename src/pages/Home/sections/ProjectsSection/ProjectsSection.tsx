import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { type ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponnent/AnimationComponnent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "App Expert Oppo",
            subtitle: "Dez 2024 - Atual",
            srcImg: "/src/assets/images/smartphone.jpg",
            /* description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.", */
            technologies: "Technologies: Ionic, Angular, Capacitor, HTML, CSS",
            websiteURL: "https://onedrive.live.com/?id=5AA5356BDE13B7C5%21s85e8c38dfdf54cc986e6e2c5857b14f8&cid=5AA5356BDE13B7C5&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy81YWE1MzU2YmRlMTNiN2M1L0VvM0Q2SVgxX2NsTWh1Yml4WVY3RlBnQkpOQzVaVm9NYW1TdVpOaWRwNmFiYmc%5FZT1Na1hORkY",
            codeURL: "https://onedrive.live.com/?id=5AA5356BDE13B7C5%21s85e8c38dfdf54cc986e6e2c5857b14f8&cid=5AA5356BDE13B7C5&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy81YWE1MzU2YmRlMTNiN2M1L0VvM0Q2SVgxX2NsTWh1Yml4WVY3RlBnQkpOQzVaVm9NYW1TdVpOaWRwNmFiYmc%5FZT1Na1hORkY",
        },
        {
            title: "Turismo Alvorada",
            subtitle: "Ago 2024",
            srcImg: "/src/assets/images/turismo.jpg",
            /* description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.", */
            technologies: "Technologies: Ionic, Angular, Capacitor, HTML, CSS",
            websiteURL: "https://github.com/VitorRosaDev/passeio-alvorada-app",
            codeURL: "https://github.com/VitorRosaDev/passeio-alvorada-app",
        },
        {
            title: "Carreira Dev",
            subtitle: "Set 2024",
            srcImg: "/src/assets/images/chapeu.jpg",
            /* description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.", */
            technologies: "Technologies: JavaScript, HTML, CSS",
            websiteURL: "https://vitorrosadev.github.io/imersao-alura-gemini/",
            codeURL: "https://github.com/VitorRosaDev/imersao-alura-gemini",
        },
        {
            title: "Cordel Moderno",
            subtitle: "Ago 2024",
            srcImg: "/src/assets/images/logo-leitura.jpg",
            /* description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.", */
            technologies: "Technologies: JavaScript, HTML, CSS",
            websiteURL: "https://vitorrosadev.github.io/projeto-cordel/",
            codeURL: "https://github.com/VitorRosaDev/projeto-cordel",
        },
        {
            title: "X-Devs",
            subtitle: "Jun 2024",
            srcImg: "/src/assets/images/logo-xdevs.jpg",
            /* description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.", */
            technologies: "Technologies: JavaScript, HTML, CSS",
            websiteURL: "https://vitorrosadev.github.io/x-devs-project/",
            codeURL: "https://github.com/VitorRosaDev/x-devs-project",
        },
        {
            title: "Dragões",
            subtitle: "Ago 2024",
            srcImg: "/src/assets/images/logo-dragao.jpg",
            /* description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.", */
            technologies: "Technologies: JavaScript, HTML, CSS",
            websiteURL: "https://vitorrosadev.github.io/casa-do-dragao/",
            codeURL: "https://github.com/VitorRosaDev/casa-do-dragao",
        },
        {
            title: "Android",
            subtitle: "Ago 2024",
            srcImg: "/src/assets/images/logo-android.jpg",
            /* description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.", */
            technologies: "Technologies: JavaScript, HTML, CSS",
            websiteURL: "https://vitorrosadev.github.io/exercicio-android/",
            codeURL: "https://github.com/VitorRosaDev/exercicio-android",
        },

    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid size={{ md: 6 }} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    /*description={project.description}*/
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection