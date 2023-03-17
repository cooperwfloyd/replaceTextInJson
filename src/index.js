const replaceTextInJson = (json, textToReplace, textToReplaceWith) => {
  // TODO: null checking, error handling
  if (typeof json !== `object`) return null;
  if (
    !(typeof textToReplace === `string`) &&
    !(textToReplace instanceof RegExp)
  )
    return null;
  if (typeof textToReplaceWith !== `string`) return null;

  try {
    const textToReplaceRegex =
      textToReplace instanceof RegExp
        ? textToReplace
        : new RegExp(textToReplace, `g`);
    const jsonStringified = JSON.stringify(json);
    const jsonStringifiedReplaced = jsonStringified.replace(
      textToReplaceRegex,
      textToReplaceWith
    );
    const jsonParsedAfterReplace = JSON.parse(jsonStringifiedReplaced);

    return jsonParsedAfterReplace;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = replaceTextInJson;
