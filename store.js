import { readFile } from "node:fs/promises";

const text = await readFile("./links.txt", "utf8");

const links = text
  .split("\n")
  .filter(Boolean)
  .map((line) => {
    //console.log(line.split(";"));
    const [id, slug, url] = line.split(";");
    return { id, slug, url };
  });

export default {
  findBySlug: (slug) => links.find((link) => link.slug == slug),
  getAll: () => links,
};
