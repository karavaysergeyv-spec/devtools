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
    "unsaved": "Є незбережені зміни",
    "toolCount": "5 інструментів",
    "toolsLabel": "Інструменти",
    "formatterNav": "JSON / XML",
    "compareNav": "Порівняння тексту",
    "cyrillicNav": "Пошук кирилиці",
    "comparePageTitle": "Devtools — Порівняння тексту",
    "compareEyebrow": "Робота з текстом",
    "compareHeading": "Порівняння тексту",
    "compareActions": "Дії порівняння",
    "compare": "Порівняти",
    "swap": "Поміняти місцями",
    "clear": "Очистити",
    "ignoreCase": "Ігнорувати регістр",
    "ignoreWhitespace": "Ігнорувати пробіли",
    "originalText": "Оригінал",
    "changedText": "Змінений текст",
    "originalAria": "Оригінальний текст",
    "changedAria": "Змінений текст",
    "originalPlaceholder": "Вставте перший текст…",
    "changedPlaceholder": "Вставте другий текст…",
    "differences": "Відмінності",
    "awaitingComparison": "Очікує порівняння",
    "added": "Додано",
    "removed": "Видалено",
    "unchanged": "Без змін",
    "diffEmpty": "Результат порівняння з’явиться тут",
    "compareEmpty": "Додайте хоча б один текст",
    "identical": "Тексти однакові",
    "differencesFound": "Знайдено відмінностей: {count}",
    "tooManyLines": "Максимум 1500 рядків у кожному тексті",
    "cyrillicPageTitle": "Devtools — Пошук кирилиці",
    "cyrillicEyebrow": "Перевірка символів",
    "cyrillicHeading": "Пошук кирилиці в латинському тексті",
    "cyrillicActions": "Дії перевірки символів",
    "scanCyrillic": "Знайти кирилицю",
    "replaceLookalikes": "Замінити схожі",
    "textToCheck": "Текст для перевірки",
    "textToCheckPlaceholder": "Вставте латинський текст…",
    "highlightedText": "Підсвічений текст",
    "awaitingScan": "Очікує перевірки",
    "cyrillicEmpty": "Кириличні символи будуть підсвічені тут",
    "foundCharacters": "Знайдені символи",
    "character": "Символ",
    "position": "Позиція",
    "latinReplacement": "Латинська заміна",
    "noMatches": "Збігів поки немає",
    "charactersFound": "Знайдено символів: {count}",
    "uniqueFound": "унікальних: {count}",
    "noCyrillic": "Кирилицю не знайдено",
    "positionValue": "рядок {line}, стовпець {column}",
    "noReplacement": "немає",
    "replacementsMade": "Замінено схожих символів: {count}",
    "noReplaceable": "Схожих символів для заміни немає",
    "caseNav": "Регістр тексту",
    "casePageTitle": "Devtools — Зміна регістру",
    "caseEyebrow": "Робота з текстом",
    "caseHeading": "Зміна регістру",
    "caseActions": "Дії зміни регістру",
    "caseModeLabel": "Режим регістру",
    "upperCase": "ВЕРХНІЙ",
    "lowerCase": "нижній",
    "titleCase": "Кожне Слово",
    "sentenceCase": "Речення",
    "toggleCase": "іНВЕРСІЯ",
    "caseSource": "Вхідний текст",
    "caseSourcePlaceholder": "Вставте текст…",
    "caseResultPlaceholder": "Перетворений текст з’явиться тут",
    "useCaseResult": "Використати результат як вхідний текст",
    "caseModeStatus": "Режим: {mode}",
    "caseEmpty": "Додайте текст для перетворення",
    "caseTransformed": "Текст перетворено",
    "sqlNav": "SQL",
    "sqlPageTitle": "Devtools — SQL форматер",
    "sqlEyebrow": "Інструменти розробника",
    "sqlHeading": "SQL форматер",
    "sqlActions": "Дії SQL форматера",
    "validateSyntax": "Перевірити синтаксис",
    "keywordCase": "Ключові слова",
    "keywordUpper": "ВЕРХНІ",
    "keywordLower": "нижні",
    "keywordPreserve": "Як у коді",
    "indentSize": "Відступ",
    "sqlSource": "SQL код",
    "sqlPlaceholder": "Вставте SQL запит…",
    "sqlResultPlaceholder": "Відформатований SQL з’явиться тут",
    "sqlEmpty": "Додайте SQL код для обробки",
    "sqlFormatted": "SQL відформатовано",
    "sqlSyntaxValid": "Синтаксис прийнято парсером {dialect}",
    "sqlFormatterUnavailable": "Модуль SQL форматера не завантажено",
    "sqlInvalid": "Помилка синтаксису {dialect}"
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
    "unsaved": "Unsaved changes",
    "toolCount": "5 tools",
    "toolsLabel": "Tools",
    "formatterNav": "JSON / XML",
    "compareNav": "Text comparison",
    "cyrillicNav": "Cyrillic detector",
    "comparePageTitle": "Devtools — Text comparison",
    "compareEyebrow": "Text tools",
    "compareHeading": "Text comparison",
    "compareActions": "Comparison actions",
    "compare": "Compare",
    "swap": "Swap texts",
    "clear": "Clear",
    "ignoreCase": "Ignore case",
    "ignoreWhitespace": "Ignore whitespace",
    "originalText": "Original",
    "changedText": "Changed text",
    "originalAria": "Original text",
    "changedAria": "Changed text",
    "originalPlaceholder": "Paste the first text…",
    "changedPlaceholder": "Paste the second text…",
    "differences": "Differences",
    "awaitingComparison": "Awaiting comparison",
    "added": "Added",
    "removed": "Removed",
    "unchanged": "Unchanged",
    "diffEmpty": "Comparison results will appear here",
    "compareEmpty": "Add at least one text",
    "identical": "Texts are identical",
    "differencesFound": "Differences found: {count}",
    "tooManyLines": "Maximum 1500 lines in each text",
    "cyrillicPageTitle": "Devtools — Cyrillic detector",
    "cyrillicEyebrow": "Character check",
    "cyrillicHeading": "Find Cyrillic in Latin text",
    "cyrillicActions": "Character check actions",
    "scanCyrillic": "Find Cyrillic",
    "replaceLookalikes": "Replace lookalikes",
    "textToCheck": "Text to check",
    "textToCheckPlaceholder": "Paste Latin text…",
    "highlightedText": "Highlighted text",
    "awaitingScan": "Awaiting scan",
    "cyrillicEmpty": "Cyrillic characters will be highlighted here",
    "foundCharacters": "Found characters",
    "character": "Character",
    "position": "Position",
    "latinReplacement": "Latin replacement",
    "noMatches": "No matches yet",
    "charactersFound": "Characters found: {count}",
    "uniqueFound": "unique: {count}",
    "noCyrillic": "No Cyrillic characters found",
    "positionValue": "line {line}, column {column}",
    "noReplacement": "none",
    "replacementsMade": "Lookalike characters replaced: {count}",
    "noReplaceable": "No replaceable lookalikes found",
    "caseNav": "Text case",
    "casePageTitle": "Devtools — Text case converter",
    "caseEyebrow": "Text tools",
    "caseHeading": "Text case converter",
    "caseActions": "Text case actions",
    "caseModeLabel": "Case mode",
    "upperCase": "UPPER CASE",
    "lowerCase": "lower case",
    "titleCase": "Title Case",
    "sentenceCase": "Sentence case",
    "toggleCase": "tOGGLE cASE",
    "caseSource": "Source text",
    "caseSourcePlaceholder": "Paste text…",
    "caseResultPlaceholder": "Converted text will appear here",
    "useCaseResult": "Use result as source text",
    "caseModeStatus": "Mode: {mode}",
    "caseEmpty": "Add text to convert",
    "caseTransformed": "Text converted",
    "sqlNav": "SQL",
    "sqlPageTitle": "Devtools — SQL formatter",
    "sqlEyebrow": "Developer tools",
    "sqlHeading": "SQL formatter",
    "sqlActions": "SQL formatter actions",
    "validateSyntax": "Check syntax",
    "keywordCase": "Keywords",
    "keywordUpper": "UPPER",
    "keywordLower": "lower",
    "keywordPreserve": "Preserve",
    "indentSize": "Indent",
    "sqlSource": "SQL code",
    "sqlPlaceholder": "Paste an SQL query…",
    "sqlResultPlaceholder": "Formatted SQL will appear here",
    "sqlEmpty": "Add SQL code to process",
    "sqlFormatted": "SQL formatted",
    "sqlSyntaxValid": "Syntax accepted by the {dialect} parser",
    "sqlFormatterUnavailable": "SQL formatter module is not loaded",
    "sqlInvalid": "{dialect} syntax error"
  }
};

let currentMode = "json";
let currentLanguage = localStorage.getItem("devtools-language") || "uk";
let currentTool = localStorage.getItem("devtools-tool") || "formatter";
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
  document.querySelector("#formatterHeading").textContent = translate("heading");
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
  document.querySelector("#toolLabel").textContent = translate("toolCount");
  document.querySelector(".tool-nav").setAttribute("aria-label", translate("toolsLabel"));
  document.querySelector("#formatterNavLabel").textContent = translate("formatterNav");
  document.querySelector("#compareNavLabel").textContent = translate("compareNav");
  document.querySelector("#cyrillicNavLabel").textContent = translate("cyrillicNav");
  document.querySelector("#compareEyebrow").textContent = translate("compareEyebrow");
  document.querySelector("#compareHeading").textContent = translate("compareHeading");
  document.querySelector(".compare-toolbar").setAttribute("aria-label", translate("compareActions"));
  setActionLabel("#compareButton", translate("compare"));
  setActionLabel("#swapTextsButton", translate("swap"));
  document.querySelector("#clearCompareButton").title = translate("clear");
  document.querySelector("#clearCompareButton").setAttribute("aria-label", translate("clear"));
  document.querySelector("#ignoreCaseLabel").textContent = translate("ignoreCase");
  document.querySelector("#ignoreWhitespaceLabel").textContent = translate("ignoreWhitespace");
  document.querySelector("#originalTextTitle").textContent = translate("originalText");
  document.querySelector("#changedTextTitle").textContent = translate("changedText");
  document.querySelector("#originalText").setAttribute("aria-label", translate("originalAria"));
  document.querySelector("#changedText").setAttribute("aria-label", translate("changedAria"));
  document.querySelector("#originalText").placeholder = translate("originalPlaceholder");
  document.querySelector("#changedText").placeholder = translate("changedPlaceholder");
  document.querySelector("#differenceTitle").textContent = translate("differences");
  document.querySelector("#addedLegend").textContent = translate("added");
  document.querySelector("#removedLegend").textContent = translate("removed");
  document.querySelector("#addedMetricLabel").textContent = translate("added").toLowerCase();
  document.querySelector("#removedMetricLabel").textContent = translate("removed").toLowerCase();
  document.querySelector("#unchangedMetricLabel").textContent = translate("unchanged").toLowerCase();
  document.querySelector("#cyrillicEyebrow").textContent = translate("cyrillicEyebrow");
  document.querySelector("#cyrillicHeading").textContent = translate("cyrillicHeading");
  document.querySelector(".cyrillic-toolbar").setAttribute("aria-label", translate("cyrillicActions"));
  setActionLabel("#scanCyrillicButton", translate("scanCyrillic"));
  setActionLabel("#replaceCyrillicButton", translate("replaceLookalikes"));
  document.querySelector("#cyrillicSampleButton").title = translate("insertSample");
  document.querySelector("#cyrillicSampleButton").setAttribute("aria-label", translate("insertSample"));
  document.querySelector("#clearCyrillicButton").title = translate("clear");
  document.querySelector("#clearCyrillicButton").setAttribute("aria-label", translate("clear"));
  document.querySelector("#textToCheckTitle").textContent = translate("textToCheck");
  document.querySelector("#cyrillicInput").setAttribute("aria-label", translate("textToCheck"));
  document.querySelector("#cyrillicInput").placeholder = translate("textToCheckPlaceholder");
  document.querySelector("#highlightedTextTitle").textContent = translate("highlightedText");
  document.querySelector("#foundCharactersTitle").textContent = translate("foundCharacters");
  document.querySelector("#charColumn").textContent = translate("character");
  document.querySelector("#positionColumn").textContent = translate("position");
  document.querySelector("#replacementColumn").textContent = translate("latinReplacement");
  document.querySelector("#sqlNavLabel").textContent = translate("sqlNav");
  document.querySelector("#sqlEyebrow").textContent = translate("sqlEyebrow");
  document.querySelector("#sqlHeading").textContent = translate("sqlHeading");
  document.querySelector(".sql-toolbar").setAttribute("aria-label", translate("sqlActions"));
  setActionLabel("#formatSqlButton", translate("format"));
  setActionLabel("#validateSqlButton", translate("validateSyntax"));
  document.querySelector("#keywordCaseLabel").textContent = translate("keywordCase");
  document.querySelector("#sqlKeywordCase option[value=upper]").textContent = translate("keywordUpper");
  document.querySelector("#sqlKeywordCase option[value=lower]").textContent = translate("keywordLower");
  document.querySelector("#sqlKeywordCase option[value=preserve]").textContent = translate("keywordPreserve");
  document.querySelector("#indentSizeLabel").textContent = translate("indentSize");
  document.querySelector("#sqlSourceTitle").textContent = translate("sqlSource");
  document.querySelector("#sqlResultTitle").textContent = translate("result");
  document.querySelector("#sqlInput").setAttribute("aria-label", translate("sqlSource"));
  document.querySelector("#sqlInput").placeholder = translate("sqlPlaceholder");
  document.querySelector("#sqlResult").setAttribute("aria-label", translate("result"));
  document.querySelector("#sqlResult").placeholder = translate("sqlResultPlaceholder");
  document.querySelector("#sqlSampleButton").title = translate("insertSample");
  document.querySelector("#sqlSampleButton").setAttribute("aria-label", translate("insertSample"));
  document.querySelector("#clearSqlButton").title = translate("clear");
  document.querySelector("#clearSqlButton").setAttribute("aria-label", translate("clear"));
  document.querySelector("#copySqlResultButton").title = translate("copyResult");
  document.querySelector("#copySqlResultButton").setAttribute("aria-label", translate("copyResult"));
  document.querySelector("#downloadSqlResultButton").title = translate("downloadResult");
  document.querySelector("#downloadSqlResultButton").setAttribute("aria-label", translate("downloadResult"));
  document.querySelector("#sqlPrivacy").textContent = translate("privacy");
  document.querySelector("#caseNavLabel").textContent = translate("caseNav");
  document.querySelector("#caseEyebrow").textContent = translate("caseEyebrow");
  document.querySelector("#caseHeading").textContent = translate("caseHeading");
  document.querySelector(".case-toolbar").setAttribute("aria-label", translate("caseActions"));
  document.querySelector(".case-modes").setAttribute("aria-label", translate("caseModeLabel"));
  document.querySelector("#upperCaseButton").textContent = translate("upperCase");
  document.querySelector("#lowerCaseButton").textContent = translate("lowerCase");
  document.querySelector("#titleCaseButton").textContent = translate("titleCase");
  document.querySelector("#sentenceCaseButton").textContent = translate("sentenceCase");
  document.querySelector("#toggleCaseButton").textContent = translate("toggleCase");
  document.querySelector("#caseSourceTitle").textContent = translate("caseSource");
  document.querySelector("#caseResultTitle").textContent = translate("result");
  document.querySelector("#caseInput").setAttribute("aria-label", translate("caseSource"));
  document.querySelector("#caseInput").placeholder = translate("caseSourcePlaceholder");
  document.querySelector("#caseResult").setAttribute("aria-label", translate("result"));
  document.querySelector("#caseResult").placeholder = translate("caseResultPlaceholder");
  document.querySelector("#useCaseResultButton").title = translate("useCaseResult");
  document.querySelector("#useCaseResultButton").setAttribute("aria-label", translate("useCaseResult"));
  document.querySelector("#copyCaseResultButton").title = translate("copyResult");
  document.querySelector("#copyCaseResultButton").setAttribute("aria-label", translate("copyResult"));
  document.querySelector("#caseSampleButton").title = translate("insertSample");
  document.querySelector("#caseSampleButton").setAttribute("aria-label", translate("insertSample"));
  document.querySelector("#clearCaseButton").title = translate("clear");
  document.querySelector("#clearCaseButton").setAttribute("aria-label", translate("clear"));
  document.querySelector("#casePrivacy").textContent = translate("privacy");
  updateEditorMeta();
  refreshLocalizedToolState();
  if (announce && currentTool === "formatter") setStatus("idle", translate("ready"));
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
  document.querySelectorAll("[data-mode]").forEach((button) => {
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

document.querySelectorAll("[data-mode]").forEach((button) => {
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


const compareElements = {
  original: document.querySelector("#originalText"),
  changed: document.querySelector("#changedText"),
  status: document.querySelector("#compareStatus"),
  output: document.querySelector("#diffOutput"),
  added: document.querySelector("#addedCount"),
  removed: document.querySelector("#removedCount"),
  unchanged: document.querySelector("#unchangedCount"),
  originalCount: document.querySelector("#originalCount"),
  changedCount: document.querySelector("#changedCount"),
};

const cyrillicElements = {
  input: document.querySelector("#cyrillicInput"),
  inputCount: document.querySelector("#cyrillicInputCount"),
  status: document.querySelector("#cyrillicStatus"),
  highlight: document.querySelector("#cyrillicHighlight"),
  summary: document.querySelector("#characterSummary"),
  tableBody: document.querySelector("#characterTableBody"),
};

const cyrillicLookalikes = {
  "А": "A", "а": "a", "В": "B", "Е": "E", "е": "e", "К": "K", "М": "M",
  "Н": "H", "О": "O", "о": "o", "Р": "P", "р": "p", "С": "C", "с": "c",
  "Т": "T", "Х": "X", "х": "x", "У": "Y", "у": "y", "І": "I", "і": "i",
  "Ј": "J", "ј": "j", "Ѕ": "S", "ѕ": "s"
};

function setTool(tool, focus = true) {
  if (!["formatter", "sql", "compare", "case", "cyrillic"].includes(tool)) tool = "formatter";
  currentTool = tool;
  localStorage.setItem("devtools-tool", tool);
  document.querySelectorAll("[data-tool-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.toolPanel !== tool;
  });
  document.querySelectorAll(".tool-nav-button").forEach((button) => {
    const active = button.dataset.tool === tool;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
  updateToolPageTitle();
  if (focus) {
    const target = tool === "formatter" ? elements.source : tool === "sql" ? sqlElements.input : tool === "compare" ? compareElements.original : tool === "case" ? caseElements.input : cyrillicElements.input;
    target.focus();
  }
}

function updateToolPageTitle() {
  const key = currentTool === "sql" ? "sqlPageTitle" : currentTool === "compare" ? "comparePageTitle" : currentTool === "case" ? "casePageTitle" : currentTool === "cyrillic" ? "cyrillicPageTitle" : "pageTitle";
  document.title = translate(key);
}

function setCompareStatus(text, type = "") {
  compareElements.status.textContent = text;
  compareElements.status.className = "result-status" + (type ? " is-" + type : "");
}

function updateCompareCounts() {
  compareElements.originalCount.textContent = pluralizeCharacters(compareElements.original.value.length);
  compareElements.changedCount.textContent = pluralizeCharacters(compareElements.changed.value.length);
}

function resetComparisonView() {
  compareElements.output.className = "diff-output empty-output";
  compareElements.output.textContent = translate("diffEmpty");
  compareElements.output.dataset.rendered = "";
  compareElements.added.textContent = "0";
  compareElements.removed.textContent = "0";
  compareElements.unchanged.textContent = "0";
  setCompareStatus(translate("awaitingComparison"));
}

function normalizeDiffLine(line) {
  let value = line;
  if (document.querySelector("#ignoreWhitespace").checked) value = value.replace(/\s+/g, " ").trim();
  if (document.querySelector("#ignoreCase").checked) value = value.toLocaleLowerCase();
  return value;
}

function buildLineDiff(originalLines, changedLines) {
  const left = originalLines.map(normalizeDiffLine);
  const right = changedLines.map(normalizeDiffLine);
  const rows = Array.from({ length: left.length + 1 }, () => new Uint32Array(right.length + 1));
  for (let i = left.length - 1; i >= 0; i -= 1) {
    for (let j = right.length - 1; j >= 0; j -= 1) {
      rows[i][j] = left[i] === right[j] ? rows[i + 1][j + 1] + 1 : Math.max(rows[i + 1][j], rows[i][j + 1]);
    }
  }
  const operations = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] === right[j]) {
      operations.push({ type: "equal", text: originalLines[i] });
      i += 1;
      j += 1;
    } else if (rows[i + 1][j] >= rows[i][j + 1]) {
      operations.push({ type: "removed", text: originalLines[i++] });
    } else {
      operations.push({ type: "added", text: changedLines[j++] });
    }
  }
  while (i < left.length) operations.push({ type: "removed", text: originalLines[i++] });
  while (j < right.length) operations.push({ type: "added", text: changedLines[j++] });
  return operations;
}

function renderDiff(operations) {
  const fragment = document.createDocumentFragment();
  let originalLine = 1;
  let changedLine = 1;
  const counts = { added: 0, removed: 0, equal: 0 };
  operations.forEach((operation) => {
    const row = document.createElement("div");
    row.className = "diff-line " + operation.type;
    const originalNumber = document.createElement("span");
    originalNumber.className = "diff-line-number";
    const changedNumber = document.createElement("span");
    changedNumber.className = "diff-line-number";
    const content = document.createElement("span");
    content.className = "diff-line-code";
    if (operation.type === "equal") {
      originalNumber.textContent = originalLine++;
      changedNumber.textContent = changedLine++;
      content.textContent = "  " + operation.text;
      counts.equal += 1;
    } else if (operation.type === "removed") {
      originalNumber.textContent = originalLine++;
      content.textContent = "− " + operation.text;
      counts.removed += 1;
    } else {
      changedNumber.textContent = changedLine++;
      content.textContent = "+ " + operation.text;
      counts.added += 1;
    }
    row.append(originalNumber, changedNumber, content);
    fragment.append(row);
  });
  compareElements.output.replaceChildren(fragment);
  compareElements.output.className = "diff-output";
  compareElements.output.dataset.rendered = "true";
  compareElements.added.textContent = counts.added;
  compareElements.removed.textContent = counts.removed;
  compareElements.unchanged.textContent = counts.equal;
  const changedCount = counts.added + counts.removed;
  setCompareStatus(changedCount ? translate("differencesFound", { count: changedCount }) : translate("identical"), changedCount ? "warning" : "success");
}

function compareTexts() {
  const originalValue = compareElements.original.value;
  const changedValue = compareElements.changed.value;
  updateCompareCounts();
  if (!originalValue && !changedValue) {
    resetComparisonView();
    setCompareStatus(translate("compareEmpty"), "error");
    return;
  }
  const originalLines = originalValue.split("\n");
  const changedLines = changedValue.split("\n");
  if (originalLines.length > 1500 || changedLines.length > 1500) {
    resetComparisonView();
    setCompareStatus(translate("tooManyLines"), "error");
    return;
  }
  renderDiff(buildLineDiff(originalLines, changedLines));
}

function isCyrillicCharacter(char) {
  const point = char.codePointAt(0);
  return (point >= 0x0400 && point <= 0x052f) ||
    (point >= 0x2de0 && point <= 0x2dff) ||
    (point >= 0xa640 && point <= 0xa69f) ||
    (point >= 0x1c80 && point <= 0x1c8f);
}

function findCyrillicCharacters(text) {
  const matches = [];
  let line = 1;
  let column = 1;
  let index = 0;
  for (const char of text) {
    if (isCyrillicCharacter(char)) {
      matches.push({
        char,
        index: index + 1,
        line,
        column,
        code: "U+" + char.codePointAt(0).toString(16).toUpperCase().padStart(4, "0"),
        replacement: cyrillicLookalikes[char] || "",
      });
    }
    if (char === "\n") {
      line += 1;
      column = 1;
    } else {
      column += 1;
    }
    index += char.length;
  }
  return matches;
}

function setCyrillicStatus(text, type = "") {
  cyrillicElements.status.textContent = text;
  cyrillicElements.status.className = "result-status" + (type ? " is-" + type : "");
}

function updateCyrillicCount() {
  cyrillicElements.inputCount.textContent = pluralizeCharacters(cyrillicElements.input.value.length);
}

function resetCyrillicView() {
  cyrillicElements.highlight.className = "highlight-output empty-output";
  cyrillicElements.highlight.textContent = translate("cyrillicEmpty");
  cyrillicElements.highlight.dataset.rendered = "";
  cyrillicElements.summary.textContent = translate("charactersFound", { count: 0 });
  cyrillicElements.tableBody.replaceChildren();
  const row = document.createElement("tr");
  row.className = "empty-row";
  const cell = document.createElement("td");
  cell.colSpan = 4;
  cell.textContent = translate("noMatches");
  row.append(cell);
  cyrillicElements.tableBody.append(row);
  setCyrillicStatus(translate("awaitingScan"));
}

function renderCyrillicHighlight(text) {
  const fragment = document.createDocumentFragment();
  for (const char of text) {
    if (isCyrillicCharacter(char)) {
      const marker = document.createElement("span");
      marker.className = "cyrillic-char";
      marker.textContent = char;
      marker.title = "U+" + char.codePointAt(0).toString(16).toUpperCase().padStart(4, "0");
      fragment.append(marker);
    } else {
      fragment.append(document.createTextNode(char));
    }
  }
  cyrillicElements.highlight.replaceChildren(fragment);
  cyrillicElements.highlight.className = "highlight-output";
  cyrillicElements.highlight.dataset.rendered = "true";
}

function renderCharacterTable(matches) {
  const fragment = document.createDocumentFragment();
  matches.slice(0, 300).forEach((match) => {
    const row = document.createElement("tr");
    const character = document.createElement("td");
    const position = document.createElement("td");
    const unicode = document.createElement("td");
    const replacement = document.createElement("td");
    character.textContent = match.char;
    position.textContent = translate("positionValue", { line: match.line, column: match.column });
    const code = document.createElement("code");
    code.textContent = match.code;
    unicode.append(code);
    if (match.replacement) {
      const value = document.createElement("span");
      value.className = "replacement-value";
      value.textContent = match.replacement;
      replacement.append(value);
    } else {
      replacement.className = "no-replacement";
      replacement.textContent = translate("noReplacement");
    }
    row.append(character, position, unicode, replacement);
    fragment.append(row);
  });
  cyrillicElements.tableBody.replaceChildren(fragment);
}

function scanCyrillic() {
  const text = cyrillicElements.input.value;
  updateCyrillicCount();
  if (!text) {
    resetCyrillicView();
    return [];
  }
  const matches = findCyrillicCharacters(text);
  renderCyrillicHighlight(text);
  if (!matches.length) {
    cyrillicElements.tableBody.replaceChildren();
    const row = document.createElement("tr");
    row.className = "empty-row";
    const cell = document.createElement("td");
    cell.colSpan = 4;
    cell.textContent = translate("noMatches");
    row.append(cell);
    cyrillicElements.tableBody.append(row);
    cyrillicElements.summary.textContent = translate("charactersFound", { count: 0 });
    setCyrillicStatus(translate("noCyrillic"), "success");
    return matches;
  }
  renderCharacterTable(matches);
  const unique = new Set(matches.map((match) => match.char)).size;
  cyrillicElements.summary.textContent = translate("charactersFound", { count: matches.length }) + " · " + translate("uniqueFound", { count: unique });
  setCyrillicStatus(translate("charactersFound", { count: matches.length }), "warning");
  return matches;
}

function replaceCyrillicLookalikes() {
  let count = 0;
  cyrillicElements.input.value = Array.from(cyrillicElements.input.value).map((char) => {
    if (cyrillicLookalikes[char]) {
      count += 1;
      return cyrillicLookalikes[char];
    }
    return char;
  }).join("");
  scanCyrillic();
  setCyrillicStatus(count ? translate("replacementsMade", { count }) : translate("noReplaceable"), count ? "success" : "warning");
}

function refreshLocalizedToolState() {
  updateToolPageTitle();
  updateCompareCounts();
  updateCyrillicCount();
  refreshSqlLocalizedState();
  refreshCaseResult();
  if (compareElements.output.dataset.rendered || compareElements.original.value || compareElements.changed.value) compareTexts();
  else resetComparisonView();
  if (cyrillicElements.highlight.dataset.rendered || cyrillicElements.input.value) scanCyrillic();
  else resetCyrillicView();
}

document.querySelectorAll(".tool-nav-button").forEach((button) => {
  button.addEventListener("click", () => setTool(button.dataset.tool));
});
[compareElements.original, compareElements.changed].forEach((editor) => {
  editor.addEventListener("input", updateCompareCounts);
  editor.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      compareTexts();
    }
  });
});
document.querySelector("#compareButton").addEventListener("click", compareTexts);
document.querySelector("#swapTextsButton").addEventListener("click", () => {
  const value = compareElements.original.value;
  compareElements.original.value = compareElements.changed.value;
  compareElements.changed.value = value;
  updateCompareCounts();
  if (compareElements.output.dataset.rendered) compareTexts();
});
document.querySelector("#clearCompareButton").addEventListener("click", () => {
  compareElements.original.value = "";
  compareElements.changed.value = "";
  updateCompareCounts();
  resetComparisonView();
  compareElements.original.focus();
});
document.querySelector("#ignoreCase").addEventListener("change", () => {
  if (compareElements.output.dataset.rendered) compareTexts();
});
document.querySelector("#ignoreWhitespace").addEventListener("change", () => {
  if (compareElements.output.dataset.rendered) compareTexts();
});
cyrillicElements.input.addEventListener("input", updateCyrillicCount);
cyrillicElements.input.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
    event.preventDefault();
    scanCyrillic();
  }
});
document.querySelector("#scanCyrillicButton").addEventListener("click", scanCyrillic);
document.querySelector("#replaceCyrillicButton").addEventListener("click", replaceCyrillicLookalikes);
document.querySelector("#cyrillicSampleButton").addEventListener("click", () => {
  cyrillicElements.input.value = "https://micrоsoft.com\npаypal account\nsecure-token";
  updateCyrillicCount();
  scanCyrillic();
});
document.querySelector("#clearCyrillicButton").addEventListener("click", () => {
  cyrillicElements.input.value = "";
  updateCyrillicCount();
  resetCyrillicView();
  cyrillicElements.input.focus();
});



const sqlElements = {
  input: document.querySelector("#sqlInput"),
  result: document.querySelector("#sqlResult"),
  inputLines: document.querySelector("#sqlInputLines"),
  outputLines: document.querySelector("#sqlOutputLines"),
  inputCount: document.querySelector("#sqlInputCount"),
  inputType: document.querySelector("#sqlInputType"),
  outputType: document.querySelector("#sqlOutputType"),
  status: document.querySelector("#sqlStatus"),
  statusText: document.querySelector("#sqlStatusText"),
};

const sqlSample = "select u.id,u.email,count(o.id) as order_count from users u left join orders o on o.user_id=u.id where u.active=1 and o.created_at>=current_date-30 group by u.id,u.email having count(o.id)>0 order by order_count desc;";

function setSqlStatus(type, text) {
  sqlElements.status.className = "status-message is-" + type;
  sqlElements.status.querySelector(".status-icon").textContent = type === "valid" ? "✓" : type === "error" ? "!" : "•";
  sqlElements.statusText.textContent = text;
}

function updateSqlMeta() {
  sqlElements.inputCount.textContent = pluralizeCharacters(sqlElements.input.value.length);
  updateLineNumbers(sqlElements.input, sqlElements.inputLines);
  updateLineNumbers(sqlElements.result, sqlElements.outputLines);
}

function sqlDialectLabel() {
  return "SQL";
}

function initializeSqlFormatter() {
  const label = sqlDialectLabel();
  sqlElements.inputType.textContent = label;
  sqlElements.outputType.textContent = label;
  setSqlStatus("idle", translate("ready"));
}

function sqlFormatOptions() {
  return {
    language: "sql",
    keywordCase: document.querySelector("#sqlKeywordCase").value,
    tabWidth: Number(document.querySelector("#sqlIndentSize").value),
    useTabs: false,
    linesBetweenQueries: 1,
  };
}

function formatSql(writeResult = true) {
  const source = sqlElements.input.value.trim();
  if (!source) {
    setSqlStatus("error", translate("sqlEmpty"));
    sqlElements.input.focus();
    return false;
  }
  if (!window.sqlFormatter || typeof window.sqlFormatter.format !== "function") {
    setSqlStatus("error", translate("sqlFormatterUnavailable"));
    return false;
  }
  try {
    const formatted = window.sqlFormatter.format(source, sqlFormatOptions());
    if (writeResult) sqlElements.result.value = formatted;
    setSqlStatus(
      "valid",
      writeResult
        ? translate("sqlFormatted")
        : translate("sqlSyntaxValid", { dialect: sqlDialectLabel() })
    );
    updateSqlMeta();
    return true;
  } catch (error) {
    const prefix = translate("sqlInvalid", { dialect: sqlDialectLabel() });
    setSqlStatus("error", prefix + ": " + (error.message || translate("parseError")));
    return false;
  }
}

function refreshSqlLocalizedState() {
  updateSqlMeta();
  if (sqlElements.result.value) setSqlStatus("valid", translate("sqlFormatted"));
  else if (sqlElements.input.value) setSqlStatus("idle", translate("unsaved"));
  else setSqlStatus("idle", translate("ready"));
}

document.querySelector("#formatSqlButton").addEventListener("click", () => formatSql(true));
document.querySelector("#validateSqlButton").addEventListener("click", () => formatSql(false));
document.querySelector("#sqlSampleButton").addEventListener("click", () => {
  sqlElements.input.value = sqlSample;
  sqlElements.result.value = "";
  updateSqlMeta();
  formatSql(true);
});
document.querySelector("#clearSqlButton").addEventListener("click", () => {
  sqlElements.input.value = "";
  sqlElements.result.value = "";
  updateSqlMeta();
  setSqlStatus("idle", translate("cleared"));
  sqlElements.input.focus();
});
document.querySelector("#copySqlResultButton").addEventListener("click", async () => {
  if (!sqlElements.result.value) {
    setSqlStatus("error", translate("createResult"));
    return;
  }
  await navigator.clipboard.writeText(sqlElements.result.value);
  showToast(translate("copied"));
});
document.querySelector("#downloadSqlResultButton").addEventListener("click", () => {
  if (!sqlElements.result.value) {
    setSqlStatus("error", translate("createResult"));
    return;
  }
  const blob = new Blob([sqlElements.result.value], { type: "application/sql;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "formatted-sql.sql";
  link.click();
  URL.revokeObjectURL(link.href);
  showToast(translate("filePrepared"));
});
sqlElements.input.addEventListener("input", () => {
  updateSqlMeta();
  setSqlStatus("idle", translate("unsaved"));
});
sqlElements.input.addEventListener("scroll", () => {
  sqlElements.inputLines.scrollTop = sqlElements.input.scrollTop;
});
sqlElements.result.addEventListener("scroll", () => {
  sqlElements.outputLines.scrollTop = sqlElements.result.scrollTop;
});
sqlElements.input.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    event.preventDefault();
    const start = sqlElements.input.selectionStart;
    const end = sqlElements.input.selectionEnd;
    const indent = " ".repeat(Number(document.querySelector("#sqlIndentSize").value));
    sqlElements.input.setRangeText(indent, start, end, "end");
    updateSqlMeta();
  }
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
    event.preventDefault();
    formatSql(true);
  }
});
["#sqlKeywordCase", "#sqlIndentSize"].forEach((selector) => {
  document.querySelector(selector).addEventListener("change", () => {
    if (sqlElements.result.value) formatSql(true);
  });
});

const caseElements = {
  input: document.querySelector("#caseInput"),
  result: document.querySelector("#caseResult"),
  inputCount: document.querySelector("#caseInputCount"),
  status: document.querySelector("#caseStatus"),
  statusText: document.querySelector("#caseStatusText"),
};

let currentCaseMode = localStorage.getItem("devtools-case-mode") || "upper";

function caseLocale() {
  return currentLanguage === "uk" ? "uk-UA" : "en-US";
}

function titleCaseText(text) {
  const locale = caseLocale();
  const lower = text.toLocaleLowerCase(locale);
  if (typeof Intl.Segmenter === "function") {
    const segmenter = new Intl.Segmenter(locale, { granularity: "word" });
    return Array.from(segmenter.segment(lower), (part) => {
      if (!part.isWordLike) return part.segment;
      const characters = Array.from(part.segment);
      return characters.shift().toLocaleUpperCase(locale) + characters.join("");
    }).join("");
  }
  return lower.replace(/(^|\s)(\S)/g, (match, space, char) => space + char.toLocaleUpperCase(locale));
}

function sentenceCaseText(text) {
  const locale = caseLocale();
  const lower = text.toLocaleLowerCase(locale);
  let capitalizeNext = true;
  let result = "";
  for (const char of lower) {
    const isLetter = char.toLocaleLowerCase(locale) !== char.toLocaleUpperCase(locale);
    if (isLetter) {
      result += capitalizeNext ? char.toLocaleUpperCase(locale) : char;
      capitalizeNext = false;
    } else {
      result += char;
      if (char === "." || char === "!" || char === "?") capitalizeNext = true;
    }
  }
  return result;
}

function toggleCaseText(text) {
  const locale = caseLocale();
  return Array.from(text, (char) => {
    const lower = char.toLocaleLowerCase(locale);
    const upper = char.toLocaleUpperCase(locale);
    if (lower === upper) return char;
    return char === upper ? lower : upper;
  }).join("");
}

function transformCaseText(text, mode) {
  const locale = caseLocale();
  if (mode === "lower") return text.toLocaleLowerCase(locale);
  if (mode === "title") return titleCaseText(text);
  if (mode === "sentence") return sentenceCaseText(text);
  if (mode === "toggle") return toggleCaseText(text);
  return text.toLocaleUpperCase(locale);
}

function caseModeTranslationKey() {
  return {
    upper: "upperCase",
    lower: "lowerCase",
    title: "titleCase",
    sentence: "sentenceCase",
    toggle: "toggleCase",
  }[currentCaseMode];
}

function updateCaseModeButtons() {
  document.querySelectorAll(".case-mode-button").forEach((button) => {
    const active = button.dataset.caseMode === currentCaseMode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function setCaseStatus(text, valid = false) {
  caseElements.status.className = "status-message " + (valid ? "is-valid" : "is-idle");
  caseElements.status.querySelector(".status-icon").textContent = valid ? "✓" : "•";
  caseElements.statusText.textContent = text;
}

function refreshCaseResult() {
  caseElements.inputCount.textContent = pluralizeCharacters(caseElements.input.value.length);
  caseElements.result.value = caseElements.input.value ? transformCaseText(caseElements.input.value, currentCaseMode) : "";
  updateCaseModeButtons();
  setCaseStatus(
    caseElements.input.value
      ? translate("caseTransformed")
      : translate("caseModeStatus", { mode: translate(caseModeTranslationKey()) }),
    Boolean(caseElements.input.value)
  );
}

document.querySelectorAll(".case-mode-button").forEach((button) => {
  button.addEventListener("click", () => {
    currentCaseMode = button.dataset.caseMode;
    localStorage.setItem("devtools-case-mode", currentCaseMode);
    refreshCaseResult();
  });
});

caseElements.input.addEventListener("input", refreshCaseResult);
document.querySelector("#caseSampleButton").addEventListener("click", () => {
  caseElements.input.value = currentLanguage === "uk"
    ? "devtools допомагає працювати з ТЕКСТОМ. це друге речення!"
    : "devtools makes TEXT work easier. this is the second sentence!";
  refreshCaseResult();
});
document.querySelector("#clearCaseButton").addEventListener("click", () => {
  caseElements.input.value = "";
  refreshCaseResult();
  caseElements.input.focus();
});
document.querySelector("#useCaseResultButton").addEventListener("click", () => {
  if (!caseElements.result.value) {
    setCaseStatus(translate("caseEmpty"));
    return;
  }
  const value = caseElements.result.value;
  caseElements.input.value = value;
  caseElements.result.value = value;
  caseElements.inputCount.textContent = pluralizeCharacters(value.length);
  setCaseStatus(translate("caseTransformed"), true);
  caseElements.input.focus();
});
document.querySelector("#copyCaseResultButton").addEventListener("click", async () => {
  if (!caseElements.result.value) {
    setCaseStatus(translate("caseEmpty"));
    return;
  }
  await navigator.clipboard.writeText(caseElements.result.value);
  showToast(translate("copied"));
});

applyLanguage(currentLanguage);
initializeSqlFormatter();
setTool(currentTool, false);
setStatus("idle", translate("ready"));
