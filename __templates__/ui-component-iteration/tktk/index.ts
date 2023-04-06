// @index("./*-props.ts", (f, _) => `export * from "${f.path}";`)
export * from "./tktk-props";
// @endindex

// @index(["./*", /.\/v.+/], (f, _) => `import { ${_.pascalCase(f.path)} } from "${f.path}";`)
import { V1 } from "./v1";
// @endindex

export const TkTk = {
	// @index(["./*", /.\/v.+/], (f, _) => `${_.pascalCase(f.path)},`)
	V1,
	// @endindex
};
