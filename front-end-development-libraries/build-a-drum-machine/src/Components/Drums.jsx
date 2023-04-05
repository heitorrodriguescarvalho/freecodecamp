import { useContext, useEffect } from "react";
import Context from "../Context";

const drums = [
  [
    {
      keyTrigger: "Q",
      id: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyTrigger: "W",
      id: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyTrigger: "E",
      id: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyTrigger: "A",
      id: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyTrigger: "S",
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyTrigger: "D",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyTrigger: "Z",
      id: "Kick-n'-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyTrigger: "X",
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyTrigger: "C",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ],
  [
    {
      keyTrigger: "Q",
      id: "Chord-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
      keyTrigger: "W",
      id: "Chord-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    {
      keyTrigger: "E",
      id: "Chord-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    {
      keyTrigger: "A",
      id: "Shaker",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    {
      keyTrigger: "S",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    {
      keyTrigger: "D",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    {
      keyTrigger: "Z",
      id: "Punchy-Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    {
      keyTrigger: "X",
      id: "Side-Stick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    {
      keyTrigger: "C",
      id: "Snare",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
  ],
];

export default function Drums() {
  const [state, setState] = useContext(Context);

  useEffect(() => {
    document.addEventListener("keydown", keyDown, true);

    return () => {
      document.removeEventListener("keydown", keyDown, true);
    };
  });

  useEffect(() => {
    drums[0].forEach((el) => {
      const audioElement = document.querySelector(`#${el.keyTrigger}`);
      if (audioElement) {
        audioElement.volume = state.volume;
      }
    });
    setState({
      ...state,
      displayContent: `Volume ${parseInt(state.volume * 100)}`,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.volume]);

  useEffect(() => {
    if (!state.power) {
      drums[0].forEach((el) => {
        const audioElement = document.querySelector(`#${el.keyTrigger}`);
        if (audioElement) {
          audioElement.pause();
        }
      });
    }
  }, [state.power]);

  function keyDown(event) {
    if (state.power) {
      const key = event.key.toUpperCase();
      const audio = drums[state.bank ? 1 : 0].filter(
        (el) => key === el.keyTrigger
      )[0];
      if (audio) {
        playAudio(audio.keyTrigger, audio.id);
      }
    }
  }

  function playAudio(id, description) {
    if (state.power) {
      const audioElement = document.querySelector(`#${id}`);
      if (audioElement) {
        audioElement.play();
      }

      setState({ ...state, displayContent: description });
    }
  }

  return (
    <div className="Drums">
      {drums[0].map((el, index) => {
        return (
          <div
            key={index}
            className="drum-pad"
            id={"button-" + el.keyTrigger}
            onClick={() => playAudio(el.keyTrigger, el.id)}
          >
            {el.keyTrigger}
            <audio
              id={el.keyTrigger}
              className="clip"
              src={drums[state.bank ? 1 : 0][index].url}
              onPlay={() => {
                const button = document.querySelector(
                  `#button-${el.keyTrigger}`
                );
                button.style.background = "var(--title-color)";

                setTimeout(() => {
                  button.style.background = "var(--text-box-background)";
                }, 120);
              }}
            ></audio>
          </div>
        );
      })}
    </div>
  );
}
