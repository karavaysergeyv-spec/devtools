const elements = {
  source: document.querySelector("#sourceEditor"),
  result: document.querySelector("#resultEditor"),
  inputLines: document.querySelector("#inputLines"),
  outputLines: document.querySelector("#outputLines"),
  inputCount: document.querySelector("#inputCount"),
  inputType: document.querySelector("#inputType"),
  outputType: document.querySelector("#outputType"),
  status: document.querySelector("#statusMessage"),
  statusText: document.querySelector("#statusText"),
  fileInput: document.querySelector("#fileInput"),
  toast: document.querySelector("#toast"),
};

const samples = {
  json: `{"project":"devtools","utility":"formatter","formats":["JSON","XML"],"settings":{"indent":2,"validate":true},"ready":true}`,
  xml: `<project name="devtools"><utility enabled="true"><name>Formatter</name><formats><format>JSON</format><format>XML</format></formats></utility></project>`,
};

const translations = {
  "uk": {
    "pageTitle": "Devtools — JSON та XML форматер",
    "pageDescription": "Браузерні інструменти для розробників: форматування та перевірка JSON і XML.",
    "brandLabel": "Devtools, головна",
    "languageLabel": "Мова інтерфейсу",
    "eyebrow": "Інструменти розробника",
    "heading": "JSON та XML форматер",
    "formatLabel": "Формат даних",
    "editorActions": "Дії редактора",
    "format": "Форматувати",
    "minify": "Мініфікувати",
    "validate": "Перевірити",
    "openFile": "Відкрити файл",
    "insertSample": "Вставити приклад",
    "clearEditor": "Очистити редактор",
    "sourceData": "Вхідні дані",
    "result": "Результат",
    "copyResult": "Копіювати результат",
    "downloadResult": "Завантажити результат",
    "privacy": "Дані обробляються лише у вашому браузері",
    "ready": "Готово до роботи",
    "characters": [
      "символ",
      "символи",
      "символів"
    ],
    "sourcePlaceholder": "Вставте {format} або перетягніть файл сюди…",
    "resultPlaceholder": "Відформатований результат з’явиться тут",
    "addData": "Додайте дані для обробки",
    "processing": "Обробляємо дані…",
    "valid": "{format} коректний",
    "validProcessed": "{format} коректний та оброблений",
    "invalidJson": "Некоректний JSON",
    "invalidXml": "Некоректний XML",
    "parseError": "Помилка синтаксису",
    "mode": "Режим {format}",
    "fileLoaded": "Файл {name} завантажено",
    "cleared": "Редактор очищено",
    "createResult": "Спочатку створіть результат",
    "copied": "Результат скопійовано",
    "filePrepared": "Файл підготовлено",
    "unsaved": "Є незбережені зміни"
  },
  "en": {
    "pageTitle": "Devtools — JSON and XML formatter",
    "pageDescription": "Browser-based developer tools for formatting and validating JSON and XML.",
    "brandLabel": "Devtools, home",
    "languageLabel": "Interface language",
    "eyebrow": "Developer tools",
    "heading": "JSON and XML formatter",
    "formatLabel": "Data format",
    "editorActions": "Editor actions",
    "format": "Format",
    "minify": "Minify",
    "validate": "Validate",
    "openFile": "Open file",
    "insertSample": "Insert sample",
    "clearEditor": "Clear editor",
    "sourceData": "Source data",
    "result": "Result",
    "copyResult": "Copy result",
    "downloadResult": "Download result",
    "privacy": "Data is processed only in your browser",
    "ready": "Ready",
    "characters": [
      "character",
      "characters",
      "characters"
    ],
    "sourcePlaceholder": "Paste {format} or drop a file here…",
    "resultPlaceholder": "The formatted result will appear here",
    "addData": "Add some data to process",
    "processing": "Processing data…",
    "valid": "{format} is valid",
    "validProcessed": "{format} is valid and processed",
    "invalidJson": "Invalid JSON",
    "invalidXml": "Invalid XML",
    "parseError": "Syntax error",
    "mode": "{format} mode",
    "fileLoaded": "File {name} loaded",
    "cleared": "Editor cleared",
    "createResult": "Create a result first",
    "copied": "Result copied",
    "filePrepared": "File prepared",
    "unsaved": "Unsaved changes"
  }
};

let currentMode = "json";
let currentLanguage = localStorage.getItem("devtools-language") || "uk";
let toastTimer;

function translate(key, values = {}) {
  let value = translations[currentLanguage][key] || key;
  Object.entries(values).forEach(([name, replacement]) => {
    value = value.replace(`{${name}}`, replacement);
  });
  return value;
}

function setActionLabel(selector, value) {
  const element = document.querySelector(selector);
  const textNode = Array.from(element.childNodes).find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
  if (textNode) textNode.textContent = `\n            ${value}\n          `;
}

function applyLanguage(language, announce = false) {
  currentLanguage = language;
  localStorage.setItem("devtools-language", language);
  document.documentElement.lang = language;
  document.title = translate("pageTitle");
  document.querySelector('meta[name="description"]').content = translate("pageDescription");
  document.querySelector(".brand").setAttribute("aria-label", translate("brandLabel"));
  document.querySelector(".language-switch").setAttribute("aria-label", translate("languageLabel"));
  document.querySelector(".eyebrow").textContent = translate("eyebrow");
  document.querySelector("#page-title").textContent = translate("heading");
  document.querySelector(".mode-switch").setAttribute("aria-label", translate("formatLabel"));
  document.querySelector(".toolbar").setAttribute("aria-label", translate("editorActions"));
  document.querySelector(".editor-pane .pane-title").textContent = translate("sourceData");
  document.querySelector(".output-pane .pane-title").textContent = translate("result");
  document.querySelector(".privacy-note").lastChild.textContent = ` ${translate("privacy")}`;
  setActionLabel("#formatButton", translate("format"));
  setActionLabel("#minifyButton", translate("minify"));
  setActionLabel("#validateButton", translate("validate"));
  setActionLabel(".file-button", translate("openFile"));
  [["#sampleButton", "insertSample"], ["#clearButton", "clearEditor"], ["#copyButton", "copyResult"], ["#downloadButton", "downloadResult"]].forEach(([selector, key]) => {
    const element = document.querySelector(selector);
    element.title = translate(key);
    element.setAttribute("aria-label", translate(key));
  });
  elements.source.setAttribute("aria-label", translate("sourceData"));
  elements.result.setAttribute("aria-label", translate("result"));
  elements.source.placeholder = translate("sourcePlaceholder", { format: currentMode.toUpperCase() });
  elements.result.placeholder = translate("resultPlaceholder");
  document.querySelectorAll(".language-button").forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  updateEditorMeta();
  if (announce) setStatus("idle", translate("ready"));
}
function pluralizeCharacters(count) {
  const lastTwo = count % 100;
  const last = count % 10;
  const forms = translations[currentLanguage].characters;
  if (currentLanguage === "en") return `${count} ${count === 1 ? forms[0] : forms[1]}`;
  if (lastTwo >= 11 && lastTwo <= 14) return `${count} ${forms[2]}`;
  if (last === 1) return `${count} ${forms[0]}`;
  if (last >= 2 && last <= 4) return `${count} ${forms[1]}`;
  return `${count} ${forms[2]}`;
}

function updateLineNumbers(textarea, target) {
  const count = Math.max(1, textarea.value.split("\n").length);
  target.textContent = Array.from({ length: count }, (_, index) => index + 1).join("\n");
  target.scrollTop = textarea.scrollTop;
}

function updateEditorMeta() {
  updateLineNumbers(elements.source, elements.inputLines);
  updateLineNumbers(elements.result, elements.outputLines);
  elements.inputCount.textContent = pluralizeCharacters(elements.source.value.length);
}

function setStatus(type, text) {
  elements.status.className = `status-message is-${type}`;
  elements.status.querySelector(".status-icon").textContent = type === "valid" ? "✓" : type === "error" ? "!" : "•";
  elements.statusText.textContent = text;
}

function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  toastTimer = setTimeout(() => elements.toast.classList.remove("is-visible"), 2200);
}

function parseXml(source) {
  const documentNode = new DOMParser().parseFromString(source, "application/xml");
  const parserError = documentNode.querySelector("parsererror");
  if (parserError) {
    const detail = parserError.textContent.replace(/\s+/g, " ").trim();
    throw new Error(`${translate("invalidXml")}: ${detail || translate("parseError")}`);
  }
  return documentNode;
}

function formatXml(source, indent = "  ") {
  const documentNode = parseXml(source);
  const serialized = new XMLSerializer().serializeToString(documentNode);
  const normalized = serialized.replace(/>\s*</g, "><").replace(/(>)(<)(\/?)/g, "$1\n$2$3").trim();
  let depth = 0;

  return normalized
    .split("\n")
    .map((line) => {
      const trimmed = line.trim();
      const isClosing = /^<\//.test(trimmed);
      const isDeclaration = /^<\?/.test(trimmed);
      const isComment = /^<!--/.test(trimmed);
      const isSelfClosing = /\/>$/.test(trimmed);
      const hasInlineClose = /^<[^!?/][^>]*>.*<\/[^>]+>$/.test(trimmed);

      if (isClosing) depth = Math.max(0, depth - 1);
      const output = `${indent.repeat(depth)}${trimmed}`;
      if (!isClosing && !isDeclaration && !isComment && !isSelfClosing && !hasInlineClose) depth += 1;
      return output;
    })
    .join("\n");
}

function minifyXml(source) {
  const documentNode = parseXml(source);
  return new XMLSerializer().serializeToString(documentNode).replace(/>\s+</g, "><").trim();
}

function transform(action) {
  const source = elements.source.value.trim();
  if (!source) {
    setStatus("error", translate("addData"));
    elements.source.focus();
    return;
  }

  setStatus("working", translate("processing"));

  try {
    let output = source;
    if (currentMode === "json") {
      const parsed = JSON.parse(source);
      if (action === "format") output = JSON.stringify(parsed, null, 2);
      if (action === "minify") output = JSON.stringify(parsed);
    } else {
      parseXml(source);
      if (action === "format") output = formatXml(source);
      if (action === "minify") output = minifyXml(source);
    }

    if (action !== "validate") elements.result.value = output;
    setStatus("valid", translate(action === "validate" ? "valid" : "validProcessed", { format: currentMode.toUpperCase() }));
    updateEditorMeta();
  } catch (error) {
    const fallback = translate(currentMode === "json" ? "invalidJson" : "invalidXml");
    setStatus("error", `${fallback}: ${error.message || translate("parseError")}`);
  }
}

function setMode(mode) {
  currentMode = mode;
  document.querySelectorAll(".mode-button").forEach((button) => {
    const active = button.dataset.mode === mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
  const label = mode.toUpperCase();
  elements.inputType.textContent = label;
  elements.outputType.textContent = label;
  elements.source.placeholder = translate("sourcePlaceholder", { format: label });
  elements.fileInput.accept = mode === "json" ? ".json,application/json" : ".xml,application/xml,text/xml";
  elements.source.value = "";
  elements.result.value = "";
  setStatus("idle", translate("mode", { format: label }));
  updateEditorMeta();
  elements.source.focus();
}

function detectMode(file) {
  const extension = file.name.split(".").pop().toLowerCase();
  if (extension === "xml" || file.type.includes("xml")) return "xml";
  return "json";
}

async function loadFile(file) {
  if (!file) return;
  const mode = detectMode(file);
  if (mode !== currentMode) setMode(mode);
  elements.source.value = await file.text();
  elements.result.value = "";
  updateEditorMeta();
  setStatus("idle", translate("fileLoaded", { name: file.name }));
}

document.querySelectorAll(".mode-button").forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language, true));
});

document.querySelector("#formatButton").addEventListener("click", () => transform("format"));
document.querySelector("#minifyButton").addEventListener("click", () => transform("minify"));
document.querySelector("#validateButton").addEventListener("click", () => transform("validate"));

document.querySelector("#sampleButton").addEventListener("click", () => {
  elements.source.value = samples[currentMode];
  elements.result.value = "";
  updateEditorMeta();
  transform("format");
});

document.querySelector("#clearButton").addEventListener("click", () => {
  elements.source.value = "";
  elements.result.value = "";
  updateEditorMeta();
  setStatus("idle", translate("cleared"));
  elements.source.focus();
});

document.querySelector("#copyButton").addEventListener("click", async () => {
  if (!elements.result.value) {
    setStatus("error", translate("createResult"));
    return;
  }
  await navigator.clipboard.writeText(elements.result.value);
  showToast(translate("copied"));
});

document.querySelector("#downloadButton").addEventListener("click", () => {
  if (!elements.result.value) {
    setStatus("error", translate("createResult"));
    return;
  }
  const mime = currentMode === "json" ? "application/json" : "application/xml";
  const blob = new Blob([elements.result.value], { type: `${mime};charset=utf-8` });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `formatted.${currentMode}`;
  link.click();
  URL.revokeObjectURL(link.href);
  showToast(translate("filePrepared"));
});

elements.fileInput.addEventListener("change", (event) => {
  loadFile(event.target.files[0]);
  event.target.value = "";
});

elements.source.addEventListener("input", () => {
  updateEditorMeta();
  setStatus("idle", translate("unsaved"));
});

elements.source.addEventListener("scroll", () => {
  elements.inputLines.scrollTop = elements.source.scrollTop;
});

elements.result.addEventListener("scroll", () => {
  elements.outputLines.scrollTop = elements.result.scrollTop;
});

elements.source.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    event.preventDefault();
    const start = elements.source.selectionStart;
    const end = elements.source.selectionEnd;
    elements.source.setRangeText("  ", start, end, "end");
    updateEditorMeta();
  }

  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
    event.preventDefault();
    transform("format");
  }
});

const dropTarget = elements.source.closest(".editor-wrap");
["dragenter", "dragover"].forEach((eventName) => {
  dropTarget.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropTarget.classList.add("is-dragging");
  });
});

["dragleave", "drop"].forEach((eventName) => {
  dropTarget.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropTarget.classList.remove("is-dragging");
  });
});

dropTarget.addEventListener("drop", (event) => loadFile(event.dataTransfer.files[0]));

applyLanguage(currentLanguage);
setStatus("idle", translate("ready"));
