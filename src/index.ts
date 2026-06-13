import type { QuartzFilterPlugin } from "@quartz-community/types"

interface Options {
  folders?: string[]
}

export const ExcludeFolders: QuartzFilterPlugin<Options> = (opts) => {
  const folders = opts?.folders ?? []
  return {
    name: "ExcludeFolders",
    shouldPublish(_ctx, [, file]) {
      const relPath = (file.data as Record<string, unknown>)?.relativePath as string | undefined
      if (!relPath) return true
      return !folders.some((f) => relPath === f || relPath.startsWith(f + "/"))
    },
  }
}

export default ExcludeFolders
