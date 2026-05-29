import { FormEvent, useState } from "react";
import { GemSprite } from "./components/GemSprite";
import {
  GemProfile,
  gemProfiles,
  rollGem,
  starterSurveyGemIds,
} from "./data/gems";

type GameState = {
  characterName: string;
  planetName: string;
};

const surveyGems = starterSurveyGemIds
  .map((id) => gemProfiles.find((gem) => gem.id === id))
  .filter((gem): gem is GemProfile => Boolean(gem));

function HomeBtn() {
  return (
    <a
      href="https://sakhalteam.github.io/"
      className="home-btn"
      title="Back to island"
    >
      <svg
        width="20"
        height="12"
        viewBox="0 0 32 18"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M 4,10 C 5,4 9,2 14,3 C 18,4 20,2 24,4 C 28,6 29,11 26,15 C 22,18 12,18 6,15 C 2,13 2,11 4,10 Z" />
      </svg>
      sakhalteam
    </a>
  );
}

function App() {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [characterName, setCharacterName] = useState("Jojo");
  const [planetName, setPlanetName] = useState("Citrine-9");
  const [haul, setHaul] = useState<GemProfile[]>([]);
  const [latestFind, setLatestFind] = useState<GemProfile | null>(null);

  function startStation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setHaul([]);
    setLatestFind(null);
    setGameState({
      characterName: characterName.trim() || "Jojo",
      planetName: planetName.trim() || "Citrine-9",
    });
  }

  function mineCrystal() {
    const gem = rollGem();
    setLatestFind(gem);
    setHaul((currentHaul) => [gem, ...currentHaul].slice(0, 12));
  }

  if (gameState) {
    return (
      <>
        <HomeBtn />
        <main className="app station-view">
          <section className="hud" aria-label="Station status">
            <div>
              <span className="eyebrow">Gem Station Alpha</span>
              <h1>{gameState.planetName}</h1>
            </div>
            <button
              className="secondary-button"
              onClick={() => setGameState(null)}
            >
              New run
            </button>
          </section>

          <section className="planet-scene" aria-label="Gem station scene">
            <div className="stars" />
            <div className="moon moon-one" />
            <div className="moon moon-two" />
            <div className="station">
              <div className="antenna" />
              <div className="dome" />
              <div className="hub" />
              <div className="legs" />
            </div>
            <button
              className="crystal cluster-a"
              onClick={mineCrystal}
              aria-label="Mine left crystal"
            />
            <button
              className="crystal cluster-b"
              onClick={mineCrystal}
              aria-label="Mine right crystal"
            />
            <button
              className="crystal cluster-c"
              onClick={mineCrystal}
              aria-label="Mine small crystal"
            />
            <div className="ground" />
          </section>

          {latestFind && (
            <section className="discovery-card" aria-live="polite">
              <GemSprite gem={latestFind} size={96} />
              <div>
                <span className="eyebrow">Found</span>
                <h2>{latestFind.name}</h2>
                <dl>
                  <div>
                    <dt>Family</dt>
                    <dd>{latestFind.family}</dd>
                  </div>
                  <div>
                    <dt>Rarity</dt>
                    <dd>{latestFind.rarity}</dd>
                  </div>
                </dl>
                <p>{latestFind.note}</p>
              </div>
            </section>
          )}

          <aside className="console" aria-label="Run details">
            <div>
              <span className="eyebrow">Operator</span>
              <strong>{gameState.characterName}</strong>
            </div>
            <div>
              <span className="eyebrow">Possible gemstones</span>
              <ul className="survey-list">
                {surveyGems.map((gem) => (
                  <li key={gem.id}>
                    <GemSprite gem={gem} size={32} />
                    {gem.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="eyebrow">Latest haul</span>
              <ul className="haul-list">
                {haul.map((gem, index) => (
                  <li key={`${gem.id}-${index}`} title={gem.name}>
                    <GemSprite gem={gem} size={36} />
                    <span>{gem.name}</span>
                  </li>
                ))}
                {haul.length === 0 && (
                  <li>Mine a crystal to test the atlas.</li>
                )}
              </ul>
            </div>
          </aside>
        </main>
      </>
    );
  }

  return (
    <>
      <HomeBtn />
      <main className="app start-view">
        <section className="title-block">
          <span className="eyebrow">Sakhalteam Crystal Zone Link</span>
          <h1>Gem Station Alpha</h1>
          <p>
            A tiny planet-hopping mining station sim for Jojo. Build an
            operator, name the next planet, and drop into the first static
            outpost scene.
          </p>
        </section>

        <form className="start-panel" onSubmit={startStation}>
          <label>
            Character name
            <input
              value={characterName}
              onChange={(event) => setCharacterName(event.target.value)}
              maxLength={24}
            />
          </label>
          <label>
            Planet name
            <input
              value={planetName}
              onChange={(event) => setPlanetName(event.target.value)}
              maxLength={32}
            />
          </label>
          <button type="submit">Start station</button>
        </form>
      </main>
    </>
  );
}

export default App;
