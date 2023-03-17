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
