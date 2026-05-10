body {
  margin: 0;
  font-family: Arial, "Microsoft YaHei", "Noto Sans KR",
               "Noto Sans Devanagari", sans-serif;

  background: #000;
  color: white;
  text-align: center;
  padding-bottom: 100px;
}

header {
  padding: 40px;
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: lowercase;

  color: #00fff7;

  text-shadow:
    0 0 10px #00fff7,
    0 0 20px #ff00ff;
}

/* Language Bar */

.lang-bar {
  padding: 15px;

  background: rgba(255,255,255,0.05);

  border-bottom:
    1px solid rgba(0,255,247,0.2);

  margin-bottom: 20px;
}

/* Layout */

.container {
  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(280px, 1fr));

  gap: 20px;

  padding: 20px;

  max-width: 1200px;

  margin: 0 auto;
}

/* Cards */

.card {
  background: rgba(255,255,255,0.05);

  border-radius: 15px;

  padding: 20px;

  box-shadow:
    0 0 10px rgba(0,255,247,0.2),
    0 0 20px rgba(255,0,255,0.1);

  border:
    1px solid rgba(0,255,247,0.2);

  backdrop-filter: blur(10px);

  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.card:hover {
  transform: scale(1.02);

  box-shadow:
    0 0 15px rgba(0,255,247,0.6),
    0 0 30px rgba(255,0,255,0.4);
}

/* Buttons */

.button {
  display: inline-block;

  margin: 5px;
  padding: 10px 15px;

  background: #00fff7;
  color: black;

  border-radius: 10px;

  text-decoration: none;
  font-weight: bold;

  border: none;
  cursor: pointer;

  box-shadow: 0 0 10px #00fff7;

  transition: all 0.3s;
}

.button:hover {
  background: white;

  box-shadow: 0 0 20px #00fff7;

  transform: translateY(-2px);
}

/* Calculator */

#display {
  width: 90%;

  background: #111;
  color: #00fff7;

  border: 1px solid #ff00ff;

  padding: 10px;

  border-radius: 5px;

  margin-bottom: 10px;

  text-align: right;

  font-family: monospace;
  font-size: 1.2rem;
}

.calc-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 5px;
}

/* Cat */

.corner-cat {
  position: fixed;

  bottom: 20px;
  right: 20px;

  width: 150px;
  height: auto;

  border-radius: 15px;

  border: 2px solid #00fff7;

  box-shadow: 0 0 15px #00fff7;

  z-index: 1000;

  cursor: pointer;

  transition:
    all 0.3s cubic-bezier(
      0.175,
      0.885,
      0.32,
      1.275
    );
}

.corner-cat:hover {
  transform:
    scale(1.1)
    translateY(-10px)
    rotate(5deg);

  box-shadow:
    0 0 25px #ff00ff,
    0 0 40px #00fff7;

  border-color: #ff00ff;
}

/* Footer */

footer {
  margin: 30px;

  opacity: 0.7;

  font-size: 0.9rem;

  text-transform: lowercase;

  color: #00fff7;
}

/* Mobile */

@media (max-width: 600px) {
  .corner-cat {
    width: 100px;

    bottom: 10px;
    right: 10px;
  }
}