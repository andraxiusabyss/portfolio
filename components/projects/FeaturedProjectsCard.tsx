import Image from "next/image";

import { BsBookHalf, BsGithub } from "react-icons/bs";
import { CiMobile1 } from "react-icons/ci";
import { IoIosLaptop } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
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

// MongoDB
// interface tagProps {
//   name?: string;
//   type?: string;
// }

export default function FeaturedProjectsCard({
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
  const placeholderArray = [
    {
      id: 1,
      name: "Project Tag",
    },
    {
      id: 2,
      name: "Project Tag",
    },
    {
      id: 3,
      name: "Project Tag",
    },
    {
      id: 4,
      name: "Project Tag",
    },
    {
      id: 5,
      name: "Project Tag",
    },
    {
      id: 6,
      name: "Project Tag",
    },
  ];

  return (
    <div className="featured-projects-card">
      <div className="featured-projects-card__images">
        <a href={linkLiveDemo} target="_blank">
          <Image
            src={desktopThumbnail || "/placeholder/desktop-thumbnail.jpg"}
            width={1000}
            height={1000}
            alt={desktopAlt || "Desktop Thumbnail"}
            sizes="(min-width: 768px) 100vw, 50vw"
            className="other-projects-card__image-desktop"
          />
        </a>
        <Image
          src={mobileThumbnail || "/placeholder/mobile-thumbnail.jpg"}
          width={600}
          height={600}
          alt={mobileAlt || "Mobile Thumbnail"}
          sizes="(min-width: 768px) 100vw, 50vw"
          className="featured-projects-card__image-mobile"
        />
        <TbExternalLink
          size={30}
          className="featured-projects-card__image-icon"
        />
      </div>
      <div className="featured-projects-card__details">
        <div className="featured-projects-card__details-header">
          <div>
            <h1 className="featured-projects-card__details-title">
              {title || "title"}
            </h1>
            <h1 className="featured-projects-card__details-subtitle">
              {subtitle || "subtitle"}
            </h1>
          </div>
          <div className="featured-projects-card__details-platforms">
            {platformDesktop ? <IoIosLaptop size={40} /> : ""}
            {platformMobile ? <CiMobile1 size={25} /> : ""}
          </div>
        </div>
        <a href={linkCaseStudy} target="_blank">
          <p className="featured-projects-card__details-description">
            {description ||
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti pariatur dolorum doloribus natus, quisquam illo sunt rem nihil neque repellat consequatur molestiae maxime saepe laborum? Quae nesciunt excepturi quasi reprehenderit quo illum natus incidunt possimus doloribus minus. Fugit, id. Rerum facere, consectetur alias ad consequatur quam quo soluta repellat consequuntur."}
          </p>
        </a>
        <ul className="featured-projects-card__details-tags">
          {tags.length !== 0
            ? tags.map((tag) => (
                <li
                  key={tag.id}
                  className="featured-projects-card__details-tag"
                >
                  {tag.tag}
                </li>
              ))
            : placeholderArray.map((tag) => (
                <li
                  key={tag.id}
                  className="featured-projects-card__details-tag"
                >
                  {tag.name}
                </li>
              ))}
        </ul>
        <div className="featured-projects-card__details-links">
          <a
            href={linkLiveDemo}
            target="_blank"
            className="featured-projects-card__details-link"
          >
            <IoGlobe size={34} />
            Live Demo
          </a>
          <a
            href={linkRepository}
            target="_blank"
            className="featured-projects-card__details-link"
          >
            <BsGithub size={30} />
            Source Code
          </a>
          <a
            href={linkCaseStudy}
            target="_blank"
            className="featured-projects-card__details-link"
          >
            <BsBookHalf size={30} />
            Case Study
          </a>
        </div>
      </div>
    </div>
  );
}
