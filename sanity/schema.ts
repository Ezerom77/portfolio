import { type SchemaTypeDefinition } from "sanity";
import pageInfo from "./schemas/pageInfo";
import socialMedia from "./schemas/socialMedia";
import project from "./schemas/project";
import experience from "./schemas/experience";
import skills from "./schemas/skills";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, socialMedia, project, experience, skills],
};
