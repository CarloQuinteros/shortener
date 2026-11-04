import { readFile, writeFile } from "node:fs/promises";

const text = await readFile("./links.txt", "utf8");

const links = text
  .split("\n")
  .filter(Boolean)
  .map((line) => {
    //console.log(line.split(";"));
    const [id, slug, url] = line.split(";");
    return { id, slug, url };
  });

let nextId = Math.max(0, ...links.map((x) => x.id)) + 1;

const save = () => {
  const text = links
    .map(({ id, slug, url }) => `${id};${slug};${url}\n`)
    .join("");

  return writeFile("./links.txt", text);
};

export default {
  findBySlug: (slug) => links.find((link) => link.slug == slug),
  getAll: () => links,
  create: async ({ slug, url }) => {
    const link = { id: String(nextId++), slug, url };
    links.push(link);
    await save();

    return link;
  },
};
