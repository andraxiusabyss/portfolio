import { ProjectsData } from "@/constants";

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex h-fit w-full flex-col items-center justify-center gap-12 bg-background-1 px-2 sm:px-5 md:text-left"
    >
      <div className="max-w-center relative flex w-full flex-col items-center justify-center gap-9 px-2 py-12 md:gap-48 md:px-36 md:py-48">
        <h1 className="z-20 w-full text-center text-gray">What Have I Done?</h1>

        {ProjectsData.map((project) => (
          <FeaturedProjectsCard
            key={project.id}
            title={project.title !== null ? project.title : ""}
            subtitle={project.subtitle !== null ? project.subtitle : ""}
            description={
              project.description !== null ? project.description : ""
            }
            desktopThumbnail={
              project.desktopThumbnail !== null ? project.desktopThumbnail : ""
            }
            desktopAlt={project.desktopAlt !== null ? project.desktopAlt : ""}
            mobileThumbnail={
              project.mobileThumbnail !== null ? project.mobileThumbnail : ""
            }
            mobileAlt={project.mobileAlt !== null ? project.mobileAlt : ""}
            platformDesktop={
              project.platformDesktop !== null ? project.platformDesktop : false
            }
            platformMobile={
              project.platformMobile !== null ? project.platformMobile : false
            }
            linkRepository={
              project.linkRepository !== null ? project.linkRepository : ""
            }
            linkLiveDemo={
              project.linkLiveDemo !== null ? project.linkLiveDemo : ""
            }
            linkCaseStudy={
              project.linkCaseStudy !== null ? project.linkCaseStudy : ""
            }
            tags={project.tags as TagProps[]}
          />
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";

import { BsGithub } from "react-icons/bs";
import { CiMobile1 } from "react-icons/ci";
import { IoIosLaptop } from "react-icons/io";
import { IoGlobe, IoSearchCircle } from "react-icons/io5";
import { TbExternalLink } from "react-icons/tb";

interface FeaturedProjectsCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  desktopThumbnail?: string;
  desktopAlt?: string;
  mobileThumbnail?: string;
  mobileAlt?: string;
  platformDesktop?: boolean;
  platformMobile?: boolean;
  linkRepository?: string;
  linkLiveDemo?: string;
  linkCaseStudy?: string;
  tags: TagProps[];
}

interface TagProps {
  id: number;
  tag: string;
}

function FeaturedProjectsCard({
  title,
  subtitle,
  description,
  desktopThumbnail,
  desktopAlt,
  mobileThumbnail,
  mobileAlt,
  platformDesktop,
  platformMobile,
  linkRepository,
  linkLiveDemo,
  linkCaseStudy,
  tags,
}: FeaturedProjectsCardProps) {
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center gap-20 overflow-hidden lg:odd:flex-row-reverse lg:even:flex-row">
      <div className="relative aspect-16/11 w-full overflow-hidden">
        <a
          href={linkLiveDemo}
          target={"_blank"}
          className={linkLiveDemo ? "" : "pointer-events-none select-none"}
        >
          <Image
            src={desktopThumbnail || "/placeholder/desktop-thumbnail.jpg"}
            width={1000}
            height={1000}
            alt={desktopAlt || "Desktop Thumbnail"}
            sizes="(min-width: 768px) 100vw, 50vw"
          />
        </a>
        <Image
          src={mobileThumbnail || "/placeholder/mobile-thumbnail.jpg"}
          width={600}
          height={600}
          alt={mobileAlt || "Mobile Thumbnail"}
          sizes="(min-width: 768px) 100vw, 50vw"
          className="w-full"
        />
        {linkLiveDemo && (
          <TbExternalLink
            size={30}
            className="absolute bottom-3 left-3 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          />
        )}
      </div>
      <div className="flex h-fit w-full flex-col gap-4 lg:w-3/5">
        <div className="flex flex-row justify-between">
          <div>
            <h3 className="w-full text-left text-gray">{title}</h3>
            <h5 className="w-full text-left font-bold uppercase text-secondary-red">
              {subtitle}
            </h5>
          </div>
          <div className="flex flex-row items-center gap-3 text-gray">
            {platformDesktop && <IoIosLaptop size={40} />}
            {platformMobile && <CiMobile1 size={25} />}
          </div>
        </div>
        <ul className="flex flex-row flex-wrap gap-2 text-gray2">
          {tags.length !== 0 &&
            tags.map((tag) => (
              <li key={tag.id} className="border-gray1 rounded-full border">
                <p className="px-4 py-1 text-xs capitalize">{tag.tag}</p>
              </li>
            ))}
        </ul>
        <p className="text-justify text-base normal-case text-gray lg:text-left">
          {description}
        </p>
        <div className="mt-12 flex w-full flex-row flex-wrap items-center gap-4">
          {linkCaseStudy && (
            <a
              href={linkCaseStudy}
              target="_blank"
              className="flex w-[30%] flex-row items-center justify-center gap-2 rounded-full text-xs capitalize text-gray hover:text-redberry md:text-base"
            >
              <IoSearchCircle size={40} className="aspect-square w-10" />
              Case Study
            </a>
          )}
          {linkLiveDemo && (
            <a
              href={linkLiveDemo}
              target="_blank"
              className="flex w-[30%] flex-row items-center justify-center gap-2  text-xs capitalize text-gray hover:text-redberry  md:text-base"
            >
              <IoGlobe size={33.5} />
              Live Demo
            </a>
          )}
          {linkRepository && (
            <a
              href={linkRepository}
              target="_blank"
              className="flex w-[30%] flex-row items-center justify-center gap-2 text-xs capitalize text-gray hover:text-redberry md:text-base"
            >
              <BsGithub size={30} />
              Source Code
            </a>
          )}
        </div>
        {/* 
            TODO: Replace tooltip package with tailwind css https://flowbite.com/docs/components/tooltips/
          <Tooltip
            id="tooltip__live-demo"
            place="left"
            content="Live Demo"
            style={{ borderRadius: "4px" }}
          />
          <Tooltip
            id="tooltip__source-code"
            place="bottom"
            content="Source Code"
            style={{ borderRadius: "4px" }}
          />
          <Tooltip
            id="tooltip__case-study"
            place="right"
            content="Case Study"
            style={{ borderRadius: "4px" }}
          /> */}
      </div>
    </div>
  );
}
