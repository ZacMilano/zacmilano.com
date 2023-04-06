const _ = require("lodash");

const mappings = {
	tktk: _.kebabCase,
	// Pascal case
	TkTk: (str) => _.startCase(_.camelCase(str)).replace(/ /g, ""),
	"Tk title Tk": _.startCase,
	"tk-date-tk": (str) => new Date().toISOString().split("T")[0],
};

// TODO Request user input for component name
// TODO Copy files over, changing filenames according to mappings
// TODO Substitute tktk's in files' text content according to mappings
// TODO Run generate-index script after all this to fix index.ts files
