#!/usr/bin/env node

import { existsSync, readdirSync, rmSync } from "fs";
import { join } from "path";
import { Dirent } from "fs";

function deleteNodeModules(dir: string, recursive: boolean = false): void {
  console.log(`Scanning: ${dir}`);

  // Mevcut dizindeki node_modules'u kontrol et
  const nodeModulesPath: string = join(dir, "node_modules");
  if (existsSync(nodeModulesPath)) {
    console.log(`Deleting: ${nodeModulesPath}`);
    rmSync(nodeModulesPath, { recursive: true, force: true });
  }

  // Eğer recursive mod aktifse, alt dizinleri de tara
  if (recursive) {
    readdirSync(dir, { withFileTypes: true }).forEach((dirent: Dirent) => {
      const fullPath: string = join(dir, dirent.name);
      if (dirent.isDirectory() && dirent.name !== "node_modules") {
        deleteNodeModules(fullPath, true);
      }
    });
  }
}

if (require.main === module) {
  const args: string[] = process.argv.slice(2);
  const currentDir: string = process.cwd();

  if (args.includes("--all")) {
    console.log("Recursively deleting all node_modules folders...");
    deleteNodeModules(currentDir, true);
  } else {
    console.log("Deleting node_modules in current directory only...");
    deleteNodeModules(currentDir, false);
  }

  console.log("Operation completed successfully!");
}
