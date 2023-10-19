import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import { SanitySkills } from "../../typings";

const query = groq`
  *[_type == "skill"]`;

type Data = {
  skills: SanitySkills[];
};
export async function fetchSkills() {
  const skills: SanitySkills[] = await client.fetch(query);
  return skills;
}
