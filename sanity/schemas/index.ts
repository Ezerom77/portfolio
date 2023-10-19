import { type SchemaTypeDefinition } from "sanity";
import pageInfo from "./pageInfo";
import socialMedia from "./socialMedia";
import project from "./project";
import experience from "./experience";
import skills from "./skills";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, socialMedia, project, experience, skills],
};
