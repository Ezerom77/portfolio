import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import { SanitySocials } from "../../typings.d";

const query = groq`
  *[_type == "socialMedia"]`;

type Data = {
  socials: SanitySocials[];
};
export async function fetchSocials() {
  const socials: SanitySocials[] = await client.fetch(query);
  console.log(socials);
  return socials;
}
