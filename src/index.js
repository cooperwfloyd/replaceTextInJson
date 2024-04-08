// TODO: switch from this method to a recursive loop that checks if the value is a string and performs the replacement if so to prevent data loss caused by parsing stringified JSON. might want to explore doing a deep clone of the object instead as to not operate on the existing object.

const replaceTextInJson = (json, pattern, replacement) => {
  if (typeof json !== `object`)
    throw new Error(
      `Error in replaceTextInJson: json must be a valid object.\n\njson: ${json}`
    );

  if (!(typeof pattern === `string`) && !(pattern instanceof RegExp))
    throw new Error(
      `Error in replaceTextInJson: pattern must be a valid string or RegExp.\n\npattern: ${pattern}`
    );

  if (typeof replacement !== `string`)
    throw new Error(
      `Error in replaceTextInJson: replacement must be a valid string.\n\nreplacement: ${replacement}`
    );

  try {
    return JSON.parse(
      JSON.stringify(json).replace(
        pattern instanceof RegExp ? pattern : new RegExp(pattern, `g`),
        replacement
      )
    );
  } catch (e) {
    throw new Error(`Error in replaceTextInJson: ${e}`);
  }
};

module.exports = replaceTextInJson;
