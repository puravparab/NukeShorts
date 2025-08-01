import { Glob } from "bun";
import path from "path";

const outdir = "./dist";
const publicDir = "./public";
const glob = new Glob(`${publicDir}/**`);

async function build() {
  // Ensure the output directory exists
  await Bun.$`mkdir -p ${outdir}`;

  // Build entrypoints
  await Bun.build({
    entrypoints: [
      "./src/popup.ts",
      "./src/content.ts",
      "./src/background.ts",
      "./src/styles/main.css",
    ],
    outdir: outdir,
    target: "browser",
  });

  // Copy public files
  for await (const file of glob.scan(".")) {
    if ((await Bun.file(file).stat()).isDirectory()) continue;
    const destPath = path.join(outdir, path.relative(publicDir, file));
    await Bun.write(destPath, Bun.file(file));
  }

  console.log("Build complete!");
}

build(); 