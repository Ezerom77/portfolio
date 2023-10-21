import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import { Projects } from "../../typings";

const query = groq`*[_type == "project"]{
  _id,
  _type,
  title,
  summary,
  image,
  linkToBuild,
  technologies[]->
}
`;

type Data = {
  projects: Projects[];
};
export async function fetchProjects() {
  const projects: Projects[] = await client.fetch(query);
  return projects;
}
