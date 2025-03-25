import pinyin from "pinyin";

const ScripturePinyin = ({ content }) => {
  const characters = content.split("");

  const pinyinArray = pinyin(content, {
    style: pinyin.STYLE_TONE2, // "fo2" instead of "fó"
  }).flat();

  return (
    <div className="bg-yellow-50 p-3 rounded-lg mt-4 text-sm leading-loose text-yellow-900">
      <strong>📜 Full Content (with Pinyin):</strong>
      <div className="mt-2 space-y-2">
        {characters.map((char, index) => (
          <ruby key={index} className="text-xl mr-2">
            {char}
            <rt className="text-xs text-yellow-700">{pinyinArray[index]}</rt>
          </ruby>
        ))}
      </div>
    </div>
  );
};

export default ScripturePinyin;
