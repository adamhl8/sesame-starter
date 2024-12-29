#!/usr/bin/env bun

import { sesame } from "sesame-bun"
import { brewCasks, installHomebrew, linkFiles } from "sesame-bun/plugins"
import type { BunInfraConfig } from "sesame-bun/types"

import { brewCasks as brewCaskList } from "./data/brew-casks.ts"
import { links } from "./data/links.ts"

const config = {
  "CHANGE-ME": {
    host: "localhost",
    plugins: [linkFiles(links), installHomebrew(), brewCasks(brewCaskList)],
  },
} satisfies BunInfraConfig

await sesame(config)
