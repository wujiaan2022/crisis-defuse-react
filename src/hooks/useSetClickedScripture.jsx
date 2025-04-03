import { useState } from "react";
import { backendURL } from "../config";

export const useSetClickedScripture = () => {
  const [clickedScripture, setClickedScripture] = useState(null);

  const handleClickSetScripture = (scripture) => {
    const audioURL = scripture.audio ? `${backendURL}/${scripture.audio}` : null;
    const videoURL = scripture.video ? `${backendURL}/${scripture.video}` : null;

    setClickedScripture({
      ...scripture,
      audio: audioURL,
      video: videoURL,
    });
  };

  return { clickedScripture, handleClickSetScripture };
};
