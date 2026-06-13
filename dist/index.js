// src/index.ts
var ExcludeFolders = (opts) => {
  const folders = opts?.folders ?? [];
  return {
    name: "ExcludeFolders",
    shouldPublish(_ctx, [, file]) {
      const relPath = file.data?.relativePath;
      console.log("ExcludeFolders check:", relPath);
      if (!relPath) return true;
      return !folders.some((f) => relPath === f || relPath.startsWith(f + "/"));
    }
  };
};
var index_default = ExcludeFolders;
export {
  ExcludeFolders,
  index_default as default
};
