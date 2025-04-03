import ScripturePinyin from "./ScripturePinyin";
import CounterControl from "./CounterControl";
import { useCount, useScrollToTop } from "../../hooks";

const ScriptureView = ({ scripture }) => {
  const { count, increase, decrease, reset } = useCount();
  const { scrollRef, scrollToTop } = useScrollToTop();

  return (
    <div className="space-y-3 text-sm sm:text-base text-yellow-900">
      <h2 className="text-2xl font-bold mb-2">{scripture.name}</h2>
      <h3 className="text-lg italic mb-3 text-yellow-700">{scripture.title}</h3>

      <p><strong>📖 Summary:</strong> {scripture.summary}</p>
      <p><strong>✨ Introduction:</strong> {scripture.introduction}</p>
      <p><strong>⚠️ Precautions:</strong> {scripture.precautions || "None"}</p>
      <p><strong>🔁 Daily Recitation:</strong> {scripture.daily_recitation}</p>
      <p><strong>🙏 Prayer:</strong> {scripture.prayer_statement}</p>

      {scripture.audio && (
        <div>
          <strong>🎵 Audio:</strong>
          <audio controls loop className="w-full mt-1">
            <source src={scripture.audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <p className="text-sm text-gray-500 mt-1">
            🔄 Audio will loop. On Android, you can lock the screen and keep listening.
          </p>
        </div>
      )}

      {scripture.video && (
        <div className="mt-3">
          <strong>🎥 Video:</strong>
          <video controls loop className="w-full mt-1">
            <source src={scripture.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <div className="bg-yellow-50 p-3 rounded-lg mt-4 text-sm">
        <pre ref={scrollRef} className="whitespace-pre-wrap text-yellow-900">
          <ScripturePinyin title={scripture.title} content={scripture.content} />
        </pre>
      </div>

      <CounterControl
        count={count}
        increase={() => {
          increase();
          scrollToTop();
        }}
        decrease={decrease}
        reset={reset}
      />
    </div>
  );
};

export default ScriptureView;
