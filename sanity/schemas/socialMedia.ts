import { defineField, defineType } from "sanity";

export default defineType({
  name: "socialMedia",
  title: "SocialMedia",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      description: "Name of social media",
      type: "string",
    },
    {
      name: "url",
      title: "Url",
      type: "url",
    },
  ],
});
