import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import { PageInfo } from "../../typings";

const query = groq`
  *[_type == "pageInfo"][0]`;

type Data = {
  pageInfo: PageInfo[];
};
export async function fetchPageInfo() {
  const pageInfo: PageInfo = await client.fetch(query);
  return pageInfo;
}
