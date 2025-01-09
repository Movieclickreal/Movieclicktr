document.addEventListener('DOMContentLoaded', () => {
  const player = new Plyr('#videoPlayer', {
    controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'],
    settings: ['captions', 'quality', 'speed'],
    disableContextMenu: true
  });

  const season6Episodes = [
    { title: "S6.E1 - Strike Back", url: "TRS6E1.mp4" },
    { title: "S6.E2 - The Hammer", url: "TRS6E2.mp4" },
    { title: "S6.E3 - Trouble in Paradise", url: "TRS6E3.mp4" },
    { title: "S6.E4 - Training Day", url: "TRS6E4.mp4" },
    { title: "S6.E5 - The Vow", url: "TRS6E5.mp4" },
    { title: "S6.E6 - Secrets and Lies", url: "TRS6E6.mp4" },
    { title: "S6.E7 - Crushed", url: "TRS6E7.mp4" },
    { title: "S6.E8 - Punch Card", url: "TRS6E8.mp4" },
    { title: "S6.E9 - The Squeeze", url: "TRS6E9.mp4" },
    { title: "S6.E10 - Escape Plan", url: "TRS6E10.mp4" }
  ];

  const season7Episodes = [
    { title: "S7.E1 - The Shot [New!]", url: "TRS7E1.mp4" },
    { title: "S7.E2 - The Watcher [Not out yet]", url: "" },
    { title: "S7.E3 - Out of Pocket [Not out yet]", url: "" },
    { title: "S7.E4 - Darkness Falling [Not out yet]", url: "" },
    { title: "S7.E5 - Till Death [Not out yet]", url: "" },
    { title: "S7.E6 - The Gala [Not out yet]", url: "" },
    { title: "S7.E7 - [UnKnown Name]", url: "" },
    { title: "S7.E8 - [UnKnown Name]", url: "" },
    { title: "S7.E9 - [UnKnown Name]", url: "" },
    { title: "S7.E10 - [UnKnown Name]", url: "" },
    { title: "S7.E11 - [UnKnown Name]", url: "" },
    { title: "S7.E12 - [UnKnown Name]", url: "" },
    { title: "S7.E13 - [UnKnown Name]", url: "" },
    { title: "S7.E14 - [UnKnown Name]", url: "" },
    { title: "S7.E15 - [UnKnown Name]", url: "" },
    { title: "S7.E16 - [UnKnown Name]", url: "" },
    { title: "S7.E17 - [UnKnown Name]", url: "" },
    { title: "S7.E18 - [UnKnown Name]", url: "" }
  ];

  const videoQualityBtn = document.getElementById('videoQualityBtn');
  const videoQualityInstructions = document.getElementById('videoQualityInstructions');

  videoQualityBtn.addEventListener('click', () => {
    videoQualityInstructions.classList.toggle('hidden');
  });

  const episodeList = document.getElementById('episodeList');

  function loadEpisodes(episodes, season = 6) {
    episodeList.innerHTML = ''; // Clear existing episode list

    episodes.forEach(episode => {
      const episodeItem = document.createElement('div');
      episodeItem.className = 'bg-white p-4 rounded shadow hover:bg-gray-100 cursor-pointer transition duration-300';

      const episodeTitle = document.createElement('span');
      episodeTitle.textContent = episode.title;
      episodeItem.appendChild(episodeTitle);

      const playIcon = document.createElement('i');
      playIcon.className = "fas fa-play ml-2 text-blue-500"; // Font Awesome icon for play button
      episodeItem.appendChild(playIcon);

      episodeItem.addEventListener('click', () => {
        if (season === 8) {
          alert("Season 8 isn't out yet! It premieres on Tuesday, January 7, 2025, at 10 pm ET & 7PM PT");
        } else {
          player.source = {
            type: 'video',
            sources: [
              {
                src: episode.url,
                type: 'video/mp4'
              }
            ]
          };
          player.play();
        }
      });

      episodeList.appendChild(episodeItem);
    });
  }

  // Load Season 6 episodes by default
  loadEpisodes(season6Episodes);

  // Event listeners for season buttons
  document.getElementById('season6Btn').addEventListener('click', () => {
    loadEpisodes(season6Episodes);
  });

  document.getElementById('season7Btn').addEventListener('click', () => {
    loadEpisodes(season7Episodes, 7); // Pass season number as argument
  });
});
