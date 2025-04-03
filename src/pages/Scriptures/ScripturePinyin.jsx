import pinyin from "pinyin";

const ScripturePinyin = ({ title, content }) => {
  if (!content) return null;

  const overrideMap = {
    南无: ["ná", "mó"],
    那: ["nuó"],
    耶: ["yē"],
    他: ["tuó"],
    啰: ["là"],
    蒙: ["méng"],
    阇: ["shē"],
    嘇: ["shēn"],
    佉: ["qiè"],
    唵: ["ān"],
    // Add more custom fixes here
  };

  function getCustomPinyin(text) {
    for (const phrase in overrideMap) {
      const index = text.indexOf(phrase);
      if (index !== -1) {
        const before = text.slice(0, index);
        const after = text.slice(index + phrase.length);
        return [
          ...getCustomPinyin(before),
          ...overrideMap[phrase].map((py, i) => [phrase[i], py]),
          ...getCustomPinyin(after),
        ];
      }
    }

    const chars = text.split("");
    const py = pinyin(text, { style: pinyin.STYLE_TONE }).flat();
    return chars.map((c, i) => [c, py[i]]);
  }

  const titlePairs = title ? getCustomPinyin(title) : [];
  const contentPairs = getCustomPinyin(content);

  return (
    <div className="bg-yellow-50 p-3 rounded-lg mt-4 text-sm text-yellow-900 leading-loose">
      <strong className="block text-lg text-red-900 mb-2">🙏 Title:</strong>

      <div className="mb-4 flex flex-wrap">
        {titlePairs.map(([char, py], index) => (
          <ruby key={index} className="text-xl mr-3">
            {char}
            <rt className="text-base text-yellow-700">{py}</rt>
          </ruby>
        ))}
      </div>

      <strong className="block text-lg text-red-900 mb-2">
        📜 Full Content:
      </strong>

      <div className="flex flex-wrap">
        {contentPairs.map(([char, py], index) => (
          <ruby key={index} className="text-xl mr-3">
            {char}
            <rt className="text-base text-yellow-700">{py}</rt>
          </ruby>
        ))}
      </div>
    </div>
  );
};

export default ScripturePinyin;
