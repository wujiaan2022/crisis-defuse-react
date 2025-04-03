export const handleSelectScripture = (scripture, baseURL) => {
    const audioURL = scripture.audio ? `${baseURL}/${scripture.audio}` : null;
    const videoURL = scripture.video ? `${baseURL}/${scripture.video}` : null;
  
    return {
      ...scripture,
      audio: audioURL,
      video: videoURL,
    };
  };
  