import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Adrian's Photo Gallery",
  EMAIL: "",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Home page of Adrian's photo gallery",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Exhibitions",
  DESCRIPTION: "A collection of photographs organised in different exhibitions",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/adrianhr91"
  },
];
