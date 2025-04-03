import type { Metadata, Site } from "@types";

export const SITE: Site = {
  NAME: "Josh Stein",
  EMAIL: "hey@joshstein.io",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Home",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Things I want to write about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Some of my favourite projects.",
};
