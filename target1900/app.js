const STORAGE_KEY = "target1900-state-v1";
const SESSION_KEY = "target1900-session-v1";
const WORDS_KEY = "target1900-words-v1";

const DEFAULT_WORDS = Array.isArray(window.TARGET1900_WORDS) ? window.TARGET1900_WORDS : [
  {
    id: "w001",
    word: "derive",
    level: 1,
    unit: 1,
    pos: ["動詞"],
    meanings: ["由来する", "引き出す"],
    related: [{ word: "derivative", meaning: "派生物", type: "derived" }]
  },
  {
    id: "w002",
    word: "obscure",
    level: 1,
    unit: 1,
    pos: ["形容詞"],
    meanings: ["曖昧な", "人目につかない"],
    related: [{ word: "obscurity", meaning: "曖昧さ", type: "derived" }]
  },
  {
    id: "w003",
    word: "subtle",
    level: 1,
    unit: 1,
    pos: ["形容詞"],
    meanings: ["微妙な", "巧妙な"],
    related: [{ word: "subtly", meaning: "微妙に", type: "derived" }]
  },
  {
    id: "w004",
    word: "compromise",
    level: 1,
    unit: 1,
    pos: ["名詞", "動詞"],
    meanings: ["妥協", "妥協する"],
    related: [{ word: "reach a compromise", meaning: "妥協に達する", type: "phrase" }]
  },
  {
    id: "w005",
    word: "inherent",
    level: 1,
    unit: 1,
    pos: ["形容詞"],
    meanings: ["本来備わっている"],
    related: [{ word: "inherently", meaning: "本質的に", type: "derived" }]
  },
  {
    id: "w006",
    word: "consequence",
    level: 1,
    unit: 2,
    pos: ["名詞"],
    meanings: ["結果", "重要性"],
    related: [{ word: "consequently", meaning: "その結果", type: "derived" }]
  },
  {
    id: "w007",
    word: "allocate",
    level: 1,
    unit: 2,
    pos: ["動詞"],
    meanings: ["割り当てる"],
    related: [{ word: "allocation", meaning: "割り当て", type: "derived" }]
  },
  {
    id: "w008",
    word: "notion",
    level: 1,
    unit: 2,
    pos: ["名詞"],
    meanings: ["考え", "概念"],
    related: [{ word: "notional", meaning: "概念上の", type: "derived" }]
  },
  {
    id: "w009",
    word: "valid",
    level: 1,
    unit: 2,
    pos: ["形容詞"],
    meanings: ["妥当な", "有効な"],
    related: [{ word: "validity", meaning: "妥当性", type: "derived" }]
  },
  {
    id: "w010",
    word: "transition",
    level: 1,
    unit: 2,
    pos: ["名詞"],
    meanings: ["移行", "変遷"],
    related: [{ word: "transitional", meaning: "移行期の", type: "derived" }]
  },
  {
    id: "w011",
    word: "imperial",
    level: 2,
    unit: 3,
    pos: ["形容詞"],
    meanings: ["帝国の", "皇帝の"],
    related: [
      { word: "empire", meaning: "帝国", type: "base" },
      { word: "imperial family", meaning: "皇室", type: "phrase" },
      { word: "imperialism", meaning: "帝国主義", type: "derived" }
    ]
  },
  {
    id: "w012",
    word: "empirical",
    level: 2,
    unit: 3,
    pos: ["形容詞"],
    meanings: ["経験的な", "実証的な"],
    related: [{ word: "empirically", meaning: "実証的に", type: "derived" }]
  },
  {
    id: "w013",
    word: "predominant",
    level: 2,
    unit: 3,
    pos: ["形容詞"],
    meanings: ["優勢な", "支配的な"],
    related: [{ word: "predominantly", meaning: "主に", type: "derived" }]
  },
  {
    id: "w014",
    word: "skeptical",
    level: 2,
    unit: 3,
    pos: ["形容詞"],
    meanings: ["懐疑的な"],
    related: [{ word: "skepticism", meaning: "懐疑", type: "derived" }]
  },
  {
    id: "w015",
    word: "legislation",
    level: 2,
    unit: 3,
    pos: ["名詞"],
    meanings: ["法律", "立法"],
    related: [{ word: "legislative", meaning: "立法の", type: "derived" }]
  },
  {
    id: "w016",
    word: "arbitrary",
    level: 2,
    unit: 4,
    pos: ["形容詞"],
    meanings: ["任意の", "恣意的な"],
    related: [{ word: "arbitrarily", meaning: "任意に", type: "derived" }]
  },
  {
    id: "w017",
    word: "constrain",
    level: 2,
    unit: 4,
    pos: ["動詞"],
    meanings: ["制約する"],
    related: [{ word: "constraint", meaning: "制約", type: "derived" }]
  },
  {
    id: "w018",
    word: "coherent",
    level: 2,
    unit: 4,
    pos: ["形容詞"],
    meanings: ["一貫した", "筋の通った"],
    related: [{ word: "coherence", meaning: "一貫性", type: "derived" }]
  },
  {
    id: "w019",
    word: "preliminary",
    level: 2,
    unit: 4,
    pos: ["形容詞", "名詞"],
    meanings: ["予備の", "準備段階"],
    related: [{ word: "preliminary exam", meaning: "予備試験", type: "phrase" }]
  },
  {
    id: "w020",
    word: "subordinate",
    level: 2,
    unit: 4,
    pos: ["形容詞", "名詞"],
    meanings: ["下位の", "部下"],
    related: [{ word: "subordination", meaning: "従属", type: "derived" }]
  },
  {
    id: "w021",
    word: "ambiguous",
    level: 3,
    unit: 5,
    pos: ["形容詞"],
    meanings: ["曖昧な"],
    related: [{ word: "ambiguity", meaning: "曖昧さ", type: "derived" }]
  },
  {
    id: "w022",
    word: "profound",
    level: 3,
    unit: 5,
    pos: ["形容詞"],
    meanings: ["深い", "重大な"],
    related: [{ word: "profoundly", meaning: "深く", type: "derived" }]
  },
  {
    id: "w023",
    word: "inevitable",
    level: 3,
    unit: 5,
    pos: ["形容詞"],
    meanings: ["避けられない", "必然的な"],
    related: [{ word: "inevitably", meaning: "必然的に", type: "derived" }]
  },
  {
    id: "w024",
    word: "integrity",
    level: 3,
    unit: 5,
    pos: ["名詞"],
    meanings: ["誠実さ", "完全性"],
    related: [{ word: "integral", meaning: "不可欠な", type: "derived" }]
  }
];

const POS = ["動詞", "名詞", "形容詞", "副詞"];
const LEVEL_LABELS = {
  1: "標準完成",
  2: "入試頻出",
  3: "難関大",
  4: "最難関",
  A: "出る順A",
  B: "出る順B",
  C: "出る順C"
};

const defaultState = {
  progress: {},
  reviewLogs: []
};

let words = loadWords();
let state = loadState();
let session = loadSession();
let route = "home";
let filters = {
  levels: [],
  pos: []
};
let lastResult = null;

const app = document.querySelector("#app");

function createId() {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function loadWords() {
  try {
    const savedWords = JSON.parse(localStorage.getItem(WORDS_KEY));
    return Array.isArray(savedWords) && savedWords.length > 0 ? savedWords : DEFAULT_WORDS;
  } catch {
    return DEFAULT_WORDS;
  }
}

function saveWords(nextWords) {
  words = nextWords;
  localStorage.setItem(WORDS_KEY, JSON.stringify(words));
  filters = { levels: [], pos: [] };
  clearSession();
}

function resetWords() {
  if (!confirm("読み込んだ単語データを削除して、tan-go!1900データに戻しますか？")) return;
  words = DEFAULT_WORDS;
  localStorage.removeItem(WORDS_KEY);
  filters = { levels: [], pos: [] };
  clearSession();
  route = "settings";
  render();
}

function loadState() {
  try {
    return { ...defaultState, ...JSON.parse(localStorage.getItem(STORAGE_KEY)) };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
  } catch {
    return null;
  }
}

function saveSession() {
  if (session) {
    session.updatedAt = new Date().toISOString();
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }
}

function clearSession() {
  session = null;
  localStorage.removeItem(SESSION_KEY);
}

function progressFor(wordId) {
  if (!state.progress[wordId]) {
    state.progress[wordId] = {
      wordId,
      isInMissList: false,
      isMastered: false,
      missCount: 0,
      correctStreakInMissMode: 0,
      lastReviewedAt: null,
      masteredAt: null
    };
  }
  return state.progress[wordId];
}

function getWord(wordId) {
  return words.find((word) => word.id === wordId);
}

function getFilteredWords(currentFilters, options = {}) {
  const includeMastered = options.includeMastered ?? false;
  return words.filter((word) => {
    const progress = progressFor(word.id);
    const levelOk = currentFilters.levels.length === 0 || currentFilters.levels.includes(String(word.level));
    const posOk = currentFilters.pos.length === 0 || word.pos.some((item) => currentFilters.pos.includes(item));
    const masteredOk = includeMastered || !progress.isMastered;
    return levelOk && posOk && masteredOk;
  });
}

function getMissWords() {
  return words.filter((word) => {
    const progress = progressFor(word.id);
    return progress.isInMissList && !progress.isMastered;
  });
}

function getAvailableLevels() {
  const order = ["A", "B", "C", "1", "2", "3", "4"];
  return [...new Set(words.map((word) => String(word.level || "").trim()))]
    .filter(Boolean)
    .sort((a, b) => {
      const ai = order.indexOf(a);
      const bi = order.indexOf(b);
      if (ai >= 0 || bi >= 0) return (ai >= 0 ? ai : 999) - (bi >= 0 ? bi : 999);
      return a.localeCompare(b, "ja");
    })
    .map((level) => ({ value: level, label: LEVEL_LABELS[level] || level }));
}

function getAvailablePos() {
  const currentPos = [...new Set(words.flatMap((word) => word.pos || []))].filter(Boolean);
  return [
    ...POS.filter((pos) => currentPos.includes(pos)),
    ...currentPos.filter((pos) => !POS.includes(pos)).sort()
  ];
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatDateTime(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat("ja-JP", {
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getAudioSource(word) {
  const audio = String(word.audio || "").trim();
  return audio || "";
}

function speakWord(word) {
  if (!("speechSynthesis" in window) || !window.SpeechSynthesisUtterance) {
    alert("このブラウザは読み上げに対応していません。");
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  utterance.rate = 0.86;

  const voice = window.speechSynthesis
    .getVoices()
    .find((item) => /^en[-_]/i.test(item.lang));

  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}

function playPronunciation(word, source) {
  if (!source) {
    speakWord(word);
    return;
  }

  const audio = new Audio(source);
  audio.play().catch(() => {
    speakWord(word);
  });
}

function pushLog(wordId, mode, result) {
  state.reviewLogs.push({
    id: createId(),
    wordId,
    mode,
    result,
    reviewedAt: new Date().toISOString()
  });
  if (state.reviewLogs.length > 1200) {
    state.reviewLogs = state.reviewLogs.slice(-1200);
  }
}

function startNormalSession() {
  const words = getFilteredWords(filters);
  if (words.length === 0) return;
  session = {
    id: createId(),
    mode: "normal",
    filters: structuredClone(filters),
    wordIds: shuffle(words).map((word) => word.id),
    currentIndex: 0,
    isAnswerVisible: false,
    correctCount: 0,
    missCount: 0,
    masteredCount: 0,
    addedMissCount: 0,
    graduatedCount: 0,
    startedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  saveSession();
  route = "practice";
  render();
}

function startMissSession() {
  const words = getMissWords();
  if (words.length === 0) return;
  session = {
    id: createId(),
    mode: "miss",
    filters: null,
    wordIds: shuffle(words).map((word) => word.id),
    currentIndex: 0,
    isAnswerVisible: false,
    correctCount: 0,
    missCount: 0,
    masteredCount: 0,
    addedMissCount: 0,
    graduatedCount: 0,
    startedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  saveSession();
  route = "practice";
  render();
}

function finishSession() {
  lastResult = {
    mode: session.mode,
    filters: session.filters,
    total: session.wordIds.length,
    correctCount: session.correctCount,
    missCount: session.missCount,
    masteredCount: session.masteredCount,
    addedMissCount: session.addedMissCount,
    graduatedCount: session.graduatedCount
  };
  clearSession();
  route = "result";
  render();
}

function advanceSession() {
  if (!session) return;
  if (session.currentIndex >= session.wordIds.length - 1) {
    finishSession();
    return;
  }
  session.currentIndex += 1;
  session.isAnswerVisible = false;
  saveSession();
  render();
}

function revealAnswer() {
  session.isAnswerVisible = true;
  saveSession();
  render();
}

function judge(result) {
  const wordId = session.wordIds[session.currentIndex];
  const progress = progressFor(wordId);
  const now = new Date().toISOString();

  progress.lastReviewedAt = now;

  if (result === "correct") {
    session.correctCount += 1;
    pushLog(wordId, session.mode, "correct");
    if (session.mode === "miss") {
      progress.correctStreakInMissMode += 1;
      if (progress.correctStreakInMissMode >= 5) {
        progress.isInMissList = false;
        progress.correctStreakInMissMode = 0;
        session.graduatedCount += 1;
      }
    }
  }

  if (result === "miss") {
    session.missCount += 1;
    progress.missCount += 1;
    progress.correctStreakInMissMode = 0;
    pushLog(wordId, session.mode, "miss");
    if (!progress.isInMissList) {
      session.addedMissCount += 1;
    }
    progress.isInMissList = true;
  }

  if (result === "mastered") {
    session.masteredCount += 1;
    progress.isMastered = true;
    progress.isInMissList = false;
    progress.correctStreakInMissMode = 0;
    progress.masteredAt = now;
    pushLog(wordId, session.mode, "mastered");
  }

  saveState();
  saveSession();
  advanceSession();
}

function restoreMastered(wordId) {
  const progress = progressFor(wordId);
  progress.isMastered = false;
  progress.masteredAt = null;
  saveState();
  render();
}

function toggleFilter(type, value) {
  const current = filters[type];
  filters[type] = current.includes(value) ? [] : [value];
  render();
}

function resetData() {
  if (!confirm("保存データをすべて削除しますか？")) return;
  state = structuredClone(defaultState);
  clearSession();
  saveState();
  route = "home";
  render();
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && inQuotes && next === '"') {
      cell += '"';
      i += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(cell.trim());
      cell = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(cell.trim());
      if (row.some(Boolean)) rows.push(row);
      row = [];
      cell = "";
      continue;
    }

    cell += char;
  }

  row.push(cell.trim());
  if (row.some(Boolean)) rows.push(row);
  return rows;
}

function splitValues(value) {
  return String(value || "")
    .split(/[;；、/|]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseRelated(value) {
  return String(value || "")
    .split(/[;；|]/)
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => {
      const [word, meaning] = item.split(/[:：]/).map((part) => part?.trim());
      return word && meaning ? { word, meaning, type: "related" } : null;
    })
    .filter(Boolean);
}

function normalizeLevel(value) {
  const raw = String(value || "").trim();
  if (!raw) return "A";
  const normalized = raw.toUpperCase().replace("Ａ", "A").replace("Ｂ", "B").replace("Ｃ", "C");
  if (/^[ABC]$/.test(normalized)) return normalized;

  const deruJunMatch = normalized.match(/^出る順\s*([ABC])$/);
  if (deruJunMatch) return deruJunMatch[1];

  const sectionMatch = normalized.match(/^(?:SEC|SECTION)\s*0?(\d{1,2})$/);
  if (sectionMatch) return `Sec${sectionMatch[1].padStart(2, "0")}`;

  return raw;
}

function normalizeImportedWords(rows) {
  if (rows.length === 0) return [];
  const firstRow = rows[0].map((cell) => cell.toLowerCase());
  const hasHeader = firstRow.includes("word") || firstRow.includes("english") || firstRow.includes("単語");
  const headers = hasHeader ? rows.shift().map((cell) => cell.toLowerCase()) : [];

  return rows.map((row, index) => {
    const byHeader = (names, fallbackIndex) => {
      const headerIndex = names.map((name) => headers.indexOf(name)).find((idx) => idx >= 0);
      return row[headerIndex ?? fallbackIndex] ?? "";
    };

    const word = byHeader(["word", "english", "単語", "英単語"], 0).trim();
    const pos = splitValues(byHeader(["pos", "part_of_speech", "品詞"], 1));
    const meanings = splitValues(byHeader(["meaning", "meanings", "ja", "日本語", "訳"], 2));
    const level = normalizeLevel(byHeader(["level", "レベル", "出る順"], 3));
    const related = parseRelated(byHeader(["related", "関連", "派生語", "熟語"], 4));
    const phonetic = byHeader(["phonetic", "ipa", "pronunciation", "発音記号", "発音"], 5).trim();
    const audio = byHeader(["audio", "audio_url", "sound", "音声", "音声ファイル"], 6).trim();

    if (!word || meanings.length === 0) return null;

    return {
      id: `import-${index + 1}-${word.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      word,
      level,
      unit: 0,
      pos: pos.length ? pos : ["その他"],
      meanings,
      related,
      phonetic,
      audio
    };
  }).filter(Boolean);
}

async function importWords(file) {
  if (!file) return;
  const text = await readTextFile(file);
  const importedWords = normalizeImportedWords(parseCsv(text.replace(/^\uFEFF/, "")));

  if (importedWords.length === 0) {
    alert("読み込める単語が見つかりませんでした。");
    return;
  }

  saveWords(importedWords);
  alert(`${importedWords.length}語を読み込みました。`);
  route = "settings";
  render();
}

async function readTextFile(file) {
  const buffer = await file.arrayBuffer();
  const utf8 = new TextDecoder("utf-8").decode(buffer);
  if (!utf8.includes("\uFFFD")) return utf8;

  try {
    return new TextDecoder("shift_jis").decode(buffer);
  } catch {
    return utf8;
  }
}

function screen(content) {
  app.innerHTML = `<main class="app-shell"><div class="screen">${content}</div></main>`;
}

function renderHome() {
  const missCount = getMissWords().length;
  const hasSession = Boolean(session);

  screen(`
    <header class="topbar">
      <div>
        <h1 class="brand">tan-go!1900</h1>
      </div>
    </header>

    ${hasSession ? `
      <section class="resume-box">
        <p>前回の練習があります。${session.currentIndex + 1} / ${session.wordIds.length}</p>
        <p>${formatDateTime(session.updatedAt)} 保存</p>
        <div class="resume-actions">
          <button class="primary-button" data-action="resume">続きから</button>
          <button class="secondary-button" data-action="discard-session">破棄</button>
        </div>
      </section>
    ` : ""}

    <nav class="button-stack" aria-label="メニュー">
      <button class="primary-button" data-action="go-select">通常練習</button>
      <button class="secondary-button" data-action="start-miss" ${missCount === 0 ? "disabled" : ""}>ミスだけ練習（${missCount}）</button>
      <button class="secondary-button" data-action="go-settings">設定</button>
    </nav>
  `);
}

function renderSelect() {
  const count = getFilteredWords(filters).length;

  screen(`
    <header class="topbar">
      <button class="plain-button" data-action="go-home">戻る</button>
      <h1 class="section-title">範囲選択</h1>
      <span></span>
    </header>

    <section class="filter-group">
      <label>Level（未選択ならすべて）</label>
      <div class="chip-grid">
        ${getAvailableLevels().map((level) => `
          <button class="chip" data-filter-type="levels" data-filter-value="${level.value}" aria-pressed="${filters.levels.includes(level.value)}">${level.label}</button>
        `).join("")}
      </div>
    </section>

    <section class="filter-group">
      <label>品詞（未選択ならすべて）</label>
      <div class="chip-grid">
        ${getAvailablePos().map((pos) => `
          <button class="chip" data-filter-type="pos" data-filter-value="${pos}" aria-pressed="${filters.pos.includes(pos)}">${pos}</button>
        `).join("")}
      </div>
    </section>

    <p class="count-line">対象: ${count}語</p>
    <div class="button-stack">
      <button class="primary-button" data-action="start-normal" ${count === 0 ? "disabled" : ""}>開始</button>
    </div>
  `);
}

function renderPractice() {
  if (!session) {
    route = "home";
    render();
    return;
  }

  const word = getWord(session.wordIds[session.currentIndex]);
  const progress = progressFor(word.id);
  const audioSource = getAudioSource(word);
  const answer = session.isAnswerVisible ? `
    <div class="answer">
      <div class="pos">${word.pos.map(escapeHtml).join(" / ")}</div>
      ${word.phonetic ? `<div class="phonetic">${escapeHtml(word.phonetic)}</div>` : ""}
      <div class="meanings">${word.meanings.map(escapeHtml).join("、")}</div>
      ${word.related?.length ? `
        <div class="related-list" aria-label="関連語">
          ${word.related.map((item) => `
            <div class="related-item">
              <span class="related-word">${escapeHtml(item.word)}</span>
              <span class="related-meaning">${escapeHtml(item.meaning)}</span>
            </div>
          `).join("")}
        </div>
      ` : ""}
      ${session.mode === "miss" && progress.isInMissList ? `<div class="pos">連続正解 ${progress.correctStreakInMissMode} / 5</div>` : ""}
    </div>
  ` : "";

  screen(`
    <header class="practice-header">
      <button class="plain-button" data-action="go-home">ホーム</button>
      <div class="progress-text">${session.currentIndex + 1} / ${session.wordIds.length}</div>
      <button class="plain-button" data-action="finish">終了</button>
    </header>

    <section class="card">
      <div class="word-row">
        <button class="word-audio-button" data-audio-word="${escapeHtml(word.word)}" data-audio-src="${escapeHtml(audioSource)}" type="button" aria-label="音声を再生" title="音声">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 9v6h4l5 4V5L8 9H4Z"></path>
            <path d="M16 9.5c.8.7 1.3 1.6 1.3 2.5s-.5 1.8-1.3 2.5"></path>
            <path d="M18.7 6.8c1.5 1.4 2.3 3.2 2.3 5.2s-.8 3.8-2.3 5.2"></path>
          </svg>
        </button>
        <h1 class="word">${escapeHtml(word.word)}</h1>
        <span class="word-row-spacer" aria-hidden="true"></span>
      </div>
      ${answer}
    </section>

    <div class="button-stack">
      ${session.isAnswerVisible ? `
        <div class="judge-grid">
          <button class="danger-button" data-action="judge-correct">正解</button>
          <button class="secondary-button" data-action="judge-miss">ミス</button>
          <button class="primary-button" data-action="judge-mastered">習得済み</button>
        </div>
      ` : `
        <button class="primary-button" data-action="reveal">答えを見る</button>
      `}
    </div>
  `);
}

function renderResult() {
  if (!lastResult) {
    route = "home";
    render();
    return;
  }

  const isMiss = lastResult.mode === "miss";

  screen(`
    <header class="topbar">
      <h1 class="section-title">結果</h1>
    </header>

    <section class="result-grid">
      <div class="stat">
        <span class="stat-label">出題</span>
        <span class="stat-value">${lastResult.total}</span>
      </div>
      <div class="stat">
        <span class="stat-label">正解</span>
        <span class="stat-value">${lastResult.correctCount}</span>
      </div>
      <div class="stat">
        <span class="stat-label">ミス</span>
        <span class="stat-value">${lastResult.missCount}</span>
      </div>
      <div class="stat">
        <span class="stat-label">${isMiss ? "卒業" : "習得済み"}</span>
        <span class="stat-value">${isMiss ? lastResult.graduatedCount : lastResult.masteredCount}</span>
      </div>
    </section>

    <div class="button-stack">
      <button class="primary-button" data-action="${isMiss ? "start-miss" : "repeat-normal"}">もう一周</button>
      <button class="secondary-button" data-action="start-miss" ${getMissWords().length === 0 ? "disabled" : ""}>ミスだけ練習</button>
      <button class="ghost-button" data-action="go-home">ホームへ</button>
    </div>
  `);
}

function renderSettings() {
  const mastered = words.filter((word) => progressFor(word.id).isMastered);
  const isUsingImportedWords = localStorage.getItem(WORDS_KEY) !== null;

  screen(`
    <header class="topbar">
      <button class="plain-button" data-action="go-home">戻る</button>
      <h1 class="section-title">設定</h1>
      <span></span>
    </header>

    <div class="button-stack">
      <label class="secondary-button file-button" for="word-import">単語データを読み込む</label>
      <input class="file-input" id="word-import" type="file" accept=".csv,text/csv" />
      <button class="secondary-button" data-action="reset-words" ${isUsingImportedWords ? "" : "disabled"}>tan-go!1900に戻す</button>
      <button class="secondary-button" data-action="go-mastered">習得済みリスト (${mastered.length})</button>
      <button class="danger-button" data-action="reset-data">保存データをリセット</button>
      <a class="secondary-button site-link-button" href="../index.html">tan-go!へ</a>
    </div>

    <section class="notice-box">
      <p>現在の単語データ: ${words.length}語</p>
      <p>CSVは word,pos,meaning,level,related,phonetic,audio の順で読み込めます。phonetic は発音記号、audio は任意です。空ならブラウザの英語読み上げを使います。</p>
      <p>進捗はこの端末のブラウザ内だけに保存されます。ログインやサーバー同期はありません。</p>
    </section>
  `);
}

function renderMastered() {
  const mastered = words.filter((word) => progressFor(word.id).isMastered);

  screen(`
    <header class="topbar">
      <button class="plain-button" data-action="go-settings">戻る</button>
      <h1 class="section-title">習得済み</h1>
      <span></span>
    </header>

    ${mastered.length === 0 ? `
      <section class="empty-box"><p>習得済みの単語はまだありません。</p></section>
    ` : `
      <section class="list">
        ${mastered.map((word) => `
          <article class="list-item">
            <div class="list-item-header">
              <span class="list-word">${word.word}</span>
              <span class="list-meta">${word.pos.join(" / ")}</span>
            </div>
            <p class="list-meaning">${word.meanings.join("、")}</p>
            <button class="secondary-button" data-restore="${word.id}">通常に戻す</button>
          </article>
        `).join("")}
      </section>
    `}
  `);
}

function render() {
  if (route === "home") renderHome();
  if (route === "select") renderSelect();
  if (route === "practice") renderPractice();
  if (route === "result") renderResult();
  if (route === "settings") renderSettings();
  if (route === "mastered") renderMastered();
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;

  const filterType = target.dataset.filterType;
  if (filterType) {
    toggleFilter(filterType, target.dataset.filterValue);
    return;
  }

  const restoreId = target.dataset.restore;
  if (restoreId) {
    restoreMastered(restoreId);
    return;
  }

  const audioWord = target.dataset.audioWord;
  if (audioWord !== undefined) {
    playPronunciation(audioWord, target.dataset.audioSrc || "");
    return;
  }

  const action = target.dataset.action;
  if (action === "go-home") {
    route = "home";
    render();
  }
  if (action === "go-select") {
    route = "select";
    render();
  }
  if (action === "go-settings") {
    route = "settings";
    render();
  }
  if (action === "go-mastered") {
    route = "mastered";
    render();
  }
  if (action === "resume") {
    route = "practice";
    render();
  }
  if (action === "discard-session") {
    clearSession();
    route = "home";
    render();
  }
  if (action === "start-normal") startNormalSession();
  if (action === "repeat-normal") {
    filters = structuredClone(lastResult?.filters || filters);
    startNormalSession();
  }
  if (action === "start-miss") startMissSession();
  if (action === "reveal") revealAnswer();
  if (action === "judge-correct") judge("correct");
  if (action === "judge-miss") judge("miss");
  if (action === "judge-mastered") judge("mastered");
  if (action === "finish") finishSession();
  if (action === "reset-data") resetData();
  if (action === "reset-words") resetWords();
});

app.addEventListener("change", (event) => {
  if (event.target.id === "word-import") {
    importWords(event.target.files?.[0]);
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

render();
