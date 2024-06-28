

export const renderPlayingInfo = (song) => {
  elements.playingInfo.innerHTML = `
    <img class="" src="${song.img}" id="info-img" alt="">
            <div>
                <p>Now playing...</p>
                <h3>${song.title}</h3>
            </div>`;
};

export const updateTitle = (message) => {
  elements.title.innerText = message;
};