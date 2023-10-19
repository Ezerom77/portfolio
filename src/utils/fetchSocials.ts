import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import { Socials } from "../../typings.d";

const query = groq`
  *[_type == "socialMedia"]`;

type Data = {
  socials: Socials[];
};
export async function fetchSocials() {
  const socials: Socials[] = await client.fetch(query);
  return socials;
}
