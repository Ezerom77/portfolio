import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import { Experiences } from "../../typings";

const query = groq`*[_type == "experience"]{
  _id,
  _type,
  company,
  companyImage,
  dateStarted,
  dateEnded,
  isCurrentlyWorkingHere,
  jobTitle,
  technologies[]->,
  points[]->,
}`;

type Data = {
  experiences: Experiences[];
};
export async function fetchExperiences() {
  const experiences: Experiences[] = await client.fetch(query);
  return experiences;
}
