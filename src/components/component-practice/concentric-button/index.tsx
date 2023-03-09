// @index(["./*", /.\/v.+/], (f, _) => `import { ${_.pascalCase(f.path)} } from "${f.path}";`)
import { V1 } from "./v1";
import { V2 } from "./v2";
// @endindex

export const ConcentricButton = {
	// @index(["./*", /.\/v.+/], (f, _) => `${_.pascalCase(f.path)},`)
	V1,
	V2,
	// @endindex
};
