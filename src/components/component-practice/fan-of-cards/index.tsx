// @index(["./*", /.\/v.+/], (f, _) => `import { ${_.pascalCase(f.path)} } from "${f.path}";`)
import { V1 } from "./v1";
import { V2 } from "./v2";
import { V3 } from "./v3";
// @endindex

export const FanOfCards = {
	// @index(["./*", /.\/v.+/], (f, _) => `${_.pascalCase(f.path)},`)
	V1,
	V2,
	V3,
	// @endindex
};
