import { ProjectSectionContent as ProjectList } from "@/constants/SectionContent"
import { ProjectsSectionHeading } from "@/constants/SectionHeading";
import Image from "next/image";
import { BsGithub } from 'react-icons/bs'
import { IoGlobe } from 'react-icons/io5'
import { LuExpand } from 'react-icons/lu'

const sizeIcon = 30;

type TagsProps = {
    tags: Array<TagProps>;
}

type TagProps = {
    id: number;
    tag: string;
}

const ProjectTags = ({ tags }:TagsProps) => (
    <ul className="projectTags">
    {tags.map(({ id, tag } ) => (
        <li key={id} className="projectTag">{tag}</li>
    ))}
</ul>
)

type ProjectLinksProps = {
    githubUrl: string;
    livedemoUrl: string;
}

const ProjectLinks = ({ githubUrl, livedemoUrl }:ProjectLinksProps) => (
    <div className="projectLinks">
        <a href={githubUrl} target="_blank" className="projectLink"><BsGithub size={sizeIcon}/>Source Code</a>
        <a href={livedemoUrl} target="_blank" className="projectLink"><IoGlobe size={sizeIcon}/>Live Demo</a>
    </div>
)

export default function Projects() {
    const { overline, header } = ProjectsSectionHeading;

    return( 
        <div id="projects" className="w-full text-center flex justify-center items-center md:text-left">
            <div className="flex flex-col w-full gap-8 sectionPadding">
                <div className="">
                    <h1 className="sectionOverline">{overline}</h1>
                    <h1 className="sectionHeader">{header}</h1>
                </div>
                <div className="projectsList">
                    {ProjectList.map(({ id, thumbnailDesktop, thumbnailMobile, desktopAlt, mobileAlt, title, description, tags, githubUrl, livedemoUrl }) => (
                            <div key={id} className="projectItem">
                                <div className="projectThumbnails">
                                    <div className="projectThumbnailDesktop">
                                        <img
                                            src={thumbnailDesktop}
                                            alt={desktopAlt}
                                        />
                                    </div>
                                    <div className="projectThumbnailMobile">
                                        <div>
                                            <Image
                                                src={thumbnailMobile}
                                                width={200}
                                                height={50}
                                                alt={mobileAlt}
                                            />
                                        </div>
                                    </div>
                                    <LuExpand size={30} className="projectThumbnailExpand"/>
                                </div>
                                <div className="projectDetails">
                                    <h1 className="projectTitle">{title}</h1>
                                    {description}
                                    <ProjectTags tags={tags}/>
                                    <ProjectLinks githubUrl={githubUrl} livedemoUrl={livedemoUrl} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}