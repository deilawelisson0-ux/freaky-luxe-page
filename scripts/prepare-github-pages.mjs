import { cp, mkdir, readdir, rm, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outputDir = "dist";
const clientDir = join(outputDir, "client");

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

if (await exists(clientDir)) {
  await mkdir(outputDir, { recursive: true });
  const entries = await readdir(clientDir);

  for (const entry of entries) {
    await cp(join(clientDir, entry), join(outputDir, entry), { recursive: true, force: true });
  }
}

const indexPath = join(outputDir, "index.html");

if (!(await exists(indexPath))) {
  throw new Error("GitHub Pages build did not produce dist/index.html");
}

await cp(indexPath, join(outputDir, "404.html"), { force: true });
await writeFile(join(outputDir, ".nojekyll"), "");

await rm(join(outputDir, "client"), { recursive: true, force: true });
await rm(join(outputDir, "server"), { recursive: true, force: true });