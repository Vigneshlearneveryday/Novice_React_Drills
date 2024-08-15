import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import "./App.css";
import { BrowserRouter , Routes , Route} from "react-router-dom";
import Characters from "./Characters";

function App({ characters }) {
  const characters = [
    {
      name: "Eddard Stark",
      role: "Warden of the North",
      description:
        "The honorable Lord of Winterfell and Warden of the North. He is known for his sense of justice and loyalty to his family.",
      image:
        "https://images.cdn.prd.api.discomax.com/2023/02/01/113db234-052e-3d75-aa44-460c6126998f.jpeg?f=jpg&q=75&w=1280&w=1200",
    },
    {
      name: "Daenerys Targaryen",
      role: "Queen of the Andals and the First Men",
      description:
        "The last surviving Targaryen with a claim to the Iron Throne. She aims to reclaim her family's lost kingdom with the help of her dragons.",
      image:
        "https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/daenarys-1920.jpg?w=1200",
    },
    {
      name: "Jon Snow",
      role: "Lord Commander of the Night's Watch",
      description:
        "The illegitimate son of Eddard Stark, raised at Winterfell. He joins the Night's Watch and becomes a key figure in the fight against the White Walkers.",
      image:
        "https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/john-snow-1920.jpg?w=1200",
    },
    {
      name: "Tyrion Lannister",
      role: "Hand of the King",
      description:
        "The witty and intelligent youngest son of Tywin Lannister. Despite being underestimated due to his stature, he proves to be a shrewd advisor and strategist.",
      image:
        "https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/tyrion-lannister-1920.jpg?w=1200",
    },
    {
      name: "Cersei Lannister",
      role: "Queen Regent",
      description:
        "The ambitious and manipulative queen who seeks power and control for herself and her children. Her actions drive much of the political intrigue in the series.",
      image:
        "https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/cersei-lannister-1920.jpg?w=1200",
    },
    {
      name: "Arya Stark",
      role: "Faceless Assassin",
      description:
        "The youngest daughter of Eddard Stark, known for her fierce independence and skill in combat. She trains with the Faceless Men to avenge her family.",
      image:
        "https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/arya-stark-1920.jpg?w=1200",
    },
    {
      name: "Sansa Stark",
      role: "Queen in the North",
      description:
        "The eldest daughter of Eddard Stark, who evolves from a naive girl into a politically astute leader. She becomes a key player in the North's struggle for independence.",
      image:
        "https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/sansa-stark-1920.jpg?w=1200",
    },
    {
      name: "Jaime Lannister",
      role: "Kingslayer",
      description:
        "A skilled knight and the eldest son of Tywin Lannister. Known for his prowess in battle and controversial actions, including killing King Aerys II during Robert's Rebellion.",
      image:
        "https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/jamie-lannister-1920.jpg?w=1200",
    },
    {
      name: "Bran Stark",
      role: "Three-Eyed Raven",
      description:
        "The second youngest son of Eddard Stark who gains mystical abilities and becomes the Three-Eyed Raven, possessing knowledge of the past, present, and future.",
      image:
        "https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/bran-stark-1920.jpg?w=1200",
    },
    {
      name: "Joffrey Baratheon",
      role: "King of the Seven Kingdoms",
      description:
        "The eldest son of Cersei Lannister and, officially, King Robert Baratheon. Known for his cruel and tyrannical rule, he becomes a major antagonist in the series.",
      image:
        "https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/joffrey-baratheon-1920.jpg?w=1200",
    },
    {
      name: "Renly Baratheon",
      role: "King of the Seven Kingdoms",
      description:
        "The younger brother of King Robert Baratheon and Stannis Baratheon. Renly is known for his charismatic personality and attempts to claim the Iron Throne, leading to his own conflict in the struggle for power.",
      image:
        "https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/renly-baratheon-1920.jpg?w=1200",
    },
    {
      name: "Samwell Tarly",
      role: "Maester and Member of the Night's Watch",
      description:
        "A member of the Night's Watch known for his intelligence, bravery, and kind nature. Samwell is a skilled scholar who plays a crucial role in uncovering important knowledge about the White Walkers and the history of Westeros.",
      image:
        "https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/samwell-1920.jpg?w=1200",
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={<Characters characters={characters} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
