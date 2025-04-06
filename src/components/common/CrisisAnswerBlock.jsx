// CrisisAnswerBlock.jsx
import React from "react";

const CrisisAnswerBlock = ({ title, icon, items, onItemClick }) => (
  <div className="mb-3">
    <h5 className="font-semibold text-yellow-800">
      {icon} {title}
    </h5>
    {items.length > 0 ? (
      <ul className="list-disc list-outside pl-4 sm:pl-6 text-yellow-800">
        {items.map((s, i) => (
          <li key={i}>
            <button
              onClick={() => onItemClick(s)}
              className="cursor-pointer text-yellow-900 hover:underline"
            >
              {s.name}
            </button>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-sm italic text-yellow-600">None</p>
    )}
  </div>
);

export default CrisisAnswerBlock;
