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
    "pageDescription": "Браузерні інструменти для розробників: JSON, XML, SQL, JWT, CRON та робота з текстом.",
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
    "toolCount": "7 інструментів",
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
    "sqlInvalid": "Помилка синтаксису {dialect}",
    "jwtNav": "JWT",
    "jwtPageTitle": "Devtools — JWT енкодер і декодер",
    "jwtEyebrow": "Інструменти розробника",
    "jwtHeading": "JWT енкодер і декодер",
    "jwtActions": "Дії JWT Decoder",
    "decodeJwt": "Декодувати",
    "jwtToken": "JWT токен",
    "jwtPlaceholder": "Вставте JWT токен…",
    "jwtHeaderPlaceholder": "Декодований Header з’явиться тут",
    "jwtPayloadPlaceholder": "Декодований Payload з’явиться тут",
    "copyJwtHeader": "Копіювати Header",
    "copyJwtPayload": "Копіювати Payload",
    "jwtSignatureNote": "Підпис не перевіряється",
    "jwtEmpty": "Додайте JWT токен для декодування",
    "jwtThreeParts": "JWT має складатися з трьох частин",
    "jwtInvalidBase64": "Некоректний Base64URL у частині {part}",
    "jwtInvalidJson": "Частина {part} не містить коректний JSON-об’єкт",
    "jwtInvalidSignature": "Некоректний формат підпису",
    "jwtDecoded": "JWT декодовано",
    "jwtAlgorithm": "алгоритм: {algorithm}",
    "jwtExpired": "термін дії минув {date}",
    "jwtExpires": "діє до {date}",
    "jwtNoSignature": "токен не містить підпису",
    "jwtModeLabel": "Режим JWT",
    "jwtDecodeMode": "Декодер",
    "jwtEncodeMode": "Енкодер",
    "jwtEncoderActions": "Дії JWT Encoder",
    "encodeJwt": "Створити JWT",
    "jwtAlgorithmLabel": "Алгоритм",
    "jwtEncodeHeaderPlaceholder": "Введіть Header JSON…",
    "jwtEncodePayloadPlaceholder": "Введіть Payload JSON…",
    "jwtSecret": "Секрет",
    "jwtSecretPlaceholder": "Введіть секрет для HMAC",
    "jwtShowSecret": "Показати секрет",
    "jwtEncodedToken": "Створений JWT",
    "jwtEncodedTokenPlaceholder": "Створений JWT з’явиться тут",
    "copyEncodedJwt": "Копіювати JWT",
    "jwtEncodePartEmpty": "Додайте JSON у частину {part}",
    "jwtEncodePartInvalid": "Частина {part} має містити коректний JSON-об’єкт",
    "jwtSecretRequired": "Додайте секрет для підпису {algorithm}",
    "jwtCryptoUnavailable": "Web Crypto API недоступний у цьому браузері",
    "jwtEncoded": "JWT створено",
    "jwtUnsigned": "без підпису",
    "cronNav": "CRON",
    "cronPageTitle": "Devtools — CRON калькулятор",
    "cronEyebrow": "Інструменти розробника",
    "cronHeading": "CRON калькулятор",
    "cronActions": "Дії CRON калькулятора",
    "cronExpression": "CRON вираз",
    "analyzeCron": "Аналізувати",
    "copyCron": "Копіювати CRON",
    "cronPreset": "Шаблон",
    "cronChoosePreset": "Виберіть",
    "cronEveryMinute": "Щохвилини",
    "cronHourly": "Щогодини",
    "cronDaily": "Щодня о 09:00",
    "cronWeekly": "Щопонеділка о 09:00",
    "cronMonthly": "Щомісяця 1-го о 09:00",
    "cronTimezone": "Часовий пояс",
    "cronLocal": "Локальний",
    "cronLocalTime": "Локальний час",
    "reset": "Скинути",
    "cronHowRuns": "Як виконується",
    "cronNextRuns": "Наступні запуски",
    "cronBuilderEyebrow": "Конструктор",
    "cronBuilderTitle": "Створити вираз галочками",
    "cronBuilderStatus": "5 полів · стандартний CRON",
    "cronBuilderLimited": "Вираз проаналізовано; спеціальний синтаксис не перенесено в галочки",
    "cronSelectAll": "Усі",
    "cronMinute": "Хвилина",
    "cronHour": "Година",
    "cronDayOfMonth": "День місяця",
    "cronMonth": "Місяць",
    "cronWeekday": "День тижня",
    "cronValid": "CRON вираз коректний",
    "cronEmpty": "Додайте CRON вираз",
    "cronFiveFields": "Використовуйте стандартний CRON з п’яти полів",
    "cronInvalid": "Некоректний CRON вираз",
    "cronUnavailable": "Модуль CRON калькулятора не завантажено",
    "cronNoRuns": "Найближчих запусків не знайдено",
    "cronAtLeastOne": "Виберіть хоча б одне значення в кожному полі",
    "cronMonths": [
      "Січ",
      "Лют",
      "Бер",
      "Кві",
      "Тра",
      "Чер",
      "Лип",
      "Сер",
      "Вер",
      "Жов",
      "Лис",
      "Гру"
    ],
    "cronWeekdays": [
      "Нд",
      "Пн",
      "Вт",
      "Ср",
      "Чт",
      "Пт",
      "Сб"
    ]
  },
  "en": {
    "pageTitle": "Devtools — JSON and XML formatter",
    "pageDescription": "Browser-based developer tools for JSON, XML, SQL, JWT, CRON, and text processing.",
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
    "toolCount": "7 tools",
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
    "sqlInvalid": "{dialect} syntax error",
    "jwtNav": "JWT",
    "jwtPageTitle": "Devtools — JWT encoder and decoder",
    "jwtEyebrow": "Developer tools",
    "jwtHeading": "JWT encoder and decoder",
    "jwtActions": "JWT Decoder actions",
    "decodeJwt": "Decode",
    "jwtToken": "JWT token",
    "jwtPlaceholder": "Paste a JWT token…",
    "jwtHeaderPlaceholder": "Decoded Header will appear here",
    "jwtPayloadPlaceholder": "Decoded Payload will appear here",
    "copyJwtHeader": "Copy Header",
    "copyJwtPayload": "Copy Payload",
    "jwtSignatureNote": "Signature is not verified",
    "jwtEmpty": "Add a JWT token to decode",
    "jwtThreeParts": "JWT must contain three parts",
    "jwtInvalidBase64": "Invalid Base64URL in the {part} part",
    "jwtInvalidJson": "The {part} part does not contain a valid JSON object",
    "jwtInvalidSignature": "Invalid signature format",
    "jwtDecoded": "JWT decoded",
    "jwtAlgorithm": "algorithm: {algorithm}",
    "jwtExpired": "expired {date}",
    "jwtExpires": "expires {date}",
    "jwtNoSignature": "token has no signature",
    "jwtModeLabel": "JWT mode",
    "jwtDecodeMode": "Decoder",
    "jwtEncodeMode": "Encoder",
    "jwtEncoderActions": "JWT Encoder actions",
    "encodeJwt": "Create JWT",
    "jwtAlgorithmLabel": "Algorithm",
    "jwtEncodeHeaderPlaceholder": "Enter Header JSON…",
    "jwtEncodePayloadPlaceholder": "Enter Payload JSON…",
    "jwtSecret": "Secret",
    "jwtSecretPlaceholder": "Enter the HMAC secret",
    "jwtShowSecret": "Show secret",
    "jwtEncodedToken": "Generated JWT",
    "jwtEncodedTokenPlaceholder": "Generated JWT will appear here",
    "copyEncodedJwt": "Copy JWT",
    "jwtEncodePartEmpty": "Add JSON to the {part} part",
    "jwtEncodePartInvalid": "The {part} part must contain a valid JSON object",
    "jwtSecretRequired": "Add a secret for the {algorithm} signature",
    "jwtCryptoUnavailable": "Web Crypto API is not available in this browser",
    "jwtEncoded": "JWT created",
    "jwtUnsigned": "unsigned",
    "cronNav": "CRON",
    "cronPageTitle": "Devtools — CRON calculator",
    "cronEyebrow": "Developer tools",
    "cronHeading": "CRON calculator",
    "cronActions": "CRON calculator actions",
    "cronExpression": "CRON expression",
    "analyzeCron": "Analyze",
    "copyCron": "Copy CRON",
    "cronPreset": "Preset",
    "cronChoosePreset": "Choose",
    "cronEveryMinute": "Every minute",
    "cronHourly": "Every hour",
    "cronDaily": "Daily at 09:00",
    "cronWeekly": "Every Monday at 09:00",
    "cronMonthly": "Monthly on day 1 at 09:00",
    "cronTimezone": "Time zone",
    "cronLocal": "Local",
    "cronLocalTime": "Local time",
    "reset": "Reset",
    "cronHowRuns": "Execution schedule",
    "cronNextRuns": "Next runs",
    "cronBuilderEyebrow": "Builder",
    "cronBuilderTitle": "Build an expression with checkboxes",
    "cronBuilderStatus": "5 fields · standard CRON",
    "cronBuilderLimited": "Expression analyzed; special syntax was not transferred to checkboxes",
    "cronSelectAll": "All",
    "cronMinute": "Minute",
    "cronHour": "Hour",
    "cronDayOfMonth": "Day of month",
    "cronMonth": "Month",
    "cronWeekday": "Day of week",
    "cronValid": "CRON expression is valid",
    "cronEmpty": "Add a CRON expression",
    "cronFiveFields": "Use a standard five-field CRON expression",
    "cronInvalid": "Invalid CRON expression",
    "cronUnavailable": "CRON calculator module is not loaded",
    "cronNoRuns": "No upcoming runs found",
    "cronAtLeastOne": "Select at least one value in every field",
    "cronMonths": [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    "cronWeekdays": [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ]
  }
};

let currentMode = "json";
let currentLanguage = localStorage.getItem("devtools-language") || "uk";
let currentTool = localStorage.getItem("devtools-tool") || "formatter";
let currentJwtMode = localStorage.getItem("devtools-jwt-mode") || "decode";
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
  document.querySelector("#jwtNavLabel").textContent = translate("jwtNav");
  document.querySelector("#jwtEyebrow").textContent = translate("jwtEyebrow");
  document.querySelector("#jwtHeading").textContent = translate("jwtHeading");
  document.querySelector("#jwtModeSwitch").setAttribute("aria-label", translate("jwtModeLabel"));
  document.querySelector("#jwtDecodeModeButton").textContent = translate("jwtDecodeMode");
  document.querySelector("#jwtEncodeModeButton").textContent = translate("jwtEncodeMode");
  document.querySelector(".jwt-toolbar").setAttribute("aria-label", translate("jwtActions"));
  setActionLabel("#decodeJwtButton", translate("decodeJwt"));
  document.querySelector("#jwtTokenTitle").textContent = translate("jwtToken");
  jwtElements.input.setAttribute("aria-label", translate("jwtToken"));
  jwtElements.input.placeholder = translate("jwtPlaceholder");
  jwtElements.header.placeholder = translate("jwtHeaderPlaceholder");
  jwtElements.payload.placeholder = translate("jwtPayloadPlaceholder");
  document.querySelector("#jwtSampleButton").title = translate("insertSample");
  document.querySelector("#jwtSampleButton").setAttribute("aria-label", translate("insertSample"));
  document.querySelector("#clearJwtButton").title = translate("clear");
  document.querySelector("#clearJwtButton").setAttribute("aria-label", translate("clear"));
  document.querySelector("#copyJwtHeaderButton").title = translate("copyJwtHeader");
  document.querySelector("#copyJwtHeaderButton").setAttribute("aria-label", translate("copyJwtHeader"));
  document.querySelector("#copyJwtPayloadButton").title = translate("copyJwtPayload");
  document.querySelector("#copyJwtPayloadButton").setAttribute("aria-label", translate("copyJwtPayload"));
  document.querySelector("#jwtSignatureNote").textContent = translate("jwtSignatureNote");
  document.querySelector(".jwt-encoder-toolbar").setAttribute("aria-label", translate("jwtEncoderActions"));
  setActionLabel("#encodeJwtButton", translate("encodeJwt"));
  document.querySelector("#jwtAlgorithmLabel").textContent = translate("jwtAlgorithmLabel");
  jwtEncoderElements.header.placeholder = translate("jwtEncodeHeaderPlaceholder");
  jwtEncoderElements.payload.placeholder = translate("jwtEncodePayloadPlaceholder");
  document.querySelector("#jwtSecretLabel").textContent = translate("jwtSecret");
  jwtEncoderElements.secret.placeholder = translate("jwtSecretPlaceholder");
  document.querySelector("#jwtShowSecretLabel").textContent = translate("jwtShowSecret");
  document.querySelector("#jwtEncodedTokenTitle").textContent = translate("jwtEncodedToken");
  jwtEncoderElements.result.setAttribute("aria-label", translate("jwtEncodedToken"));
  jwtEncoderElements.result.placeholder = translate("jwtEncodedTokenPlaceholder");
  document.querySelector("#jwtEncoderSampleButton").title = translate("insertSample");
  document.querySelector("#jwtEncoderSampleButton").setAttribute("aria-label", translate("insertSample"));
  document.querySelector("#clearJwtEncoderButton").title = translate("clear");
  document.querySelector("#clearJwtEncoderButton").setAttribute("aria-label", translate("clear"));
  document.querySelector("#copyEncodedJwtButton").title = translate("copyEncodedJwt");
  document.querySelector("#copyEncodedJwtButton").setAttribute("aria-label", translate("copyEncodedJwt"));
  document.querySelector("#jwtEncoderPrivacy").textContent = translate("privacy");
  document.querySelector("#cronNavLabel").textContent = translate("cronNav");
  document.querySelector("#cronEyebrow").textContent = translate("cronEyebrow");
  document.querySelector("#cronHeading").textContent = translate("cronHeading");
  document.querySelector(".cron-toolbar").setAttribute("aria-label", translate("cronActions"));
  document.querySelector("#cronExpressionLabel").textContent = translate("cronExpression");
  cronElements.expression.setAttribute("aria-label", translate("cronExpression"));
  setActionLabel("#analyzeCronButton", translate("analyzeCron"));
  document.querySelector("#copyCronButton").title = translate("copyCron");
  document.querySelector("#copyCronButton").setAttribute("aria-label", translate("copyCron"));
  document.querySelector("#cronPresetLabel").textContent = translate("cronPreset");
  document.querySelector("#cronPreset option[value='']").textContent = translate("cronChoosePreset");
  document.querySelector("#cronPreset option[value='* * * * *']").textContent = translate("cronEveryMinute");
  document.querySelector("#cronPreset option[value='0 * * * *']").textContent = translate("cronHourly");
  document.querySelector("#cronPreset option[value='0 9 * * *']").textContent = translate("cronDaily");
  document.querySelector("#cronPreset option[value='0 9 * * 1']").textContent = translate("cronWeekly");
  document.querySelector("#cronPreset option[value='0 9 1 * *']").textContent = translate("cronMonthly");
  document.querySelector("#cronTimezoneLabel").textContent = translate("cronTimezone");
  document.querySelector("#cronTimezone option[value='']").textContent = translate("cronLocal");
  document.querySelector("#cronSampleButton").title = translate("insertSample");
  document.querySelector("#cronSampleButton").setAttribute("aria-label", translate("insertSample"));
  document.querySelector("#resetCronButton").title = translate("reset");
  document.querySelector("#resetCronButton").setAttribute("aria-label", translate("reset"));
  document.querySelector("#cronDescriptionLabel").textContent = translate("cronHowRuns");
  document.querySelector("#cronNextRunsTitle").textContent = translate("cronNextRuns");
  document.querySelector("#cronBuilderEyebrow").textContent = translate("cronBuilderEyebrow");
  document.querySelector("#cronBuilderTitle").textContent = translate("cronBuilderTitle");
  document.querySelector("#cronPrivacy").textContent = translate("privacy");
  renderCronBuilder();
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

const jwtElements = {
  input: document.querySelector("#jwtInput"),
  header: document.querySelector("#jwtHeader"),
  payload: document.querySelector("#jwtPayload"),
  inputCount: document.querySelector("#jwtInputCount"),
  status: document.querySelector("#jwtStatus"),
  statusText: document.querySelector("#jwtStatusText"),
};

const jwtEncoderElements = {
  header: document.querySelector("#jwtEncodeHeader"),
  payload: document.querySelector("#jwtEncodePayload"),
  algorithm: document.querySelector("#jwtAlgorithmSelect"),
  secret: document.querySelector("#jwtSecret"),
  secretRow: document.querySelector("#jwtSecretRow"),
  showSecret: document.querySelector("#jwtShowSecret"),
  result: document.querySelector("#jwtEncodedToken"),
  status: document.querySelector("#jwtEncoderStatus"),
  statusText: document.querySelector("#jwtEncoderStatusText"),
};

const cronElements = {
  expression: document.querySelector("#cronExpression"),
  preset: document.querySelector("#cronPreset"),
  timezone: document.querySelector("#cronTimezone"),
  description: document.querySelector("#cronDescription"),
  status: document.querySelector("#cronStatus"),
  statusText: document.querySelector("#cronStatusText"),
  timezoneDisplay: document.querySelector("#cronTimezoneDisplay"),
  runs: document.querySelector("#cronRunsList"),
  fields: document.querySelector("#cronFields"),
  builderStatus: document.querySelector("#cronBuilderStatus"),
};

const cyrillicLookalikes = {
  "А": "A", "а": "a", "В": "B", "Е": "E", "е": "e", "К": "K", "М": "M",
  "Н": "H", "О": "O", "о": "o", "Р": "P", "р": "p", "С": "C", "с": "c",
  "Т": "T", "Х": "X", "х": "x", "У": "Y", "у": "y", "І": "I", "і": "i",
  "Ј": "J", "ј": "j", "Ѕ": "S", "ѕ": "s"
};

function setTool(tool, focus = true) {
  if (!["formatter", "sql", "jwt", "cron", "compare", "case", "cyrillic"].includes(tool)) tool = "formatter";
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
    const target = tool === "formatter" ? elements.source : tool === "sql" ? sqlElements.input : tool === "jwt" ? jwtFocusTarget() : tool === "cron" ? cronElements.expression : tool === "compare" ? compareElements.original : tool === "case" ? caseElements.input : cyrillicElements.input;
    target.focus();
  }
}

function updateToolPageTitle() {
  const key = currentTool === "sql" ? "sqlPageTitle" : currentTool === "jwt" ? "jwtPageTitle" : currentTool === "cron" ? "cronPageTitle" : currentTool === "compare" ? "comparePageTitle" : currentTool === "case" ? "casePageTitle" : currentTool === "cyrillic" ? "cyrillicPageTitle" : "pageTitle";
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
  refreshJwtLocalizedState();
  refreshJwtEncoderLocalizedState();
  refreshCronLocalizedState();
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


function jwtFocusTarget() {
  return currentJwtMode === "encode" ? jwtEncoderElements.header : jwtElements.input;
}

function setJwtMode(mode, focus = true) {
  currentJwtMode = mode === "encode" ? "encode" : "decode";
  localStorage.setItem("devtools-jwt-mode", currentJwtMode);
  document.querySelector("#jwtDecoderPanel").hidden = currentJwtMode !== "decode";
  document.querySelector("#jwtEncoderPanel").hidden = currentJwtMode !== "encode";
  document.querySelectorAll("[data-jwt-mode]").forEach((button) => {
    const active = button.dataset.jwtMode === currentJwtMode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
  if (focus) jwtFocusTarget().focus();
}

document.querySelectorAll("[data-jwt-mode]").forEach((button) => {
  button.addEventListener("click", () => setJwtMode(button.dataset.jwtMode));
});

function setJwtStatus(type, text) {
  jwtElements.status.className = "status-message is-" + type;
  jwtElements.status.querySelector(".status-icon").textContent = type === "valid" ? "✓" : type === "error" || type === "warning" ? "!" : "•";
  jwtElements.statusText.textContent = text;
}

function updateJwtCount() {
  jwtElements.inputCount.textContent = pluralizeCharacters(jwtElements.input.value.length);
}

function clearJwtDecodedData() {
  jwtElements.header.value = "";
  jwtElements.payload.value = "";
  delete jwtElements.header.dataset.decoded;
  delete jwtElements.payload.dataset.decoded;
  delete jwtElements.status.dataset.hasSignature;
}

function decodeJwtPart(segment, part) {
  if (!segment || !/^[A-Za-z0-9_-]+$/.test(segment) || segment.length % 4 === 1) {
    throw new Error(translate("jwtInvalidBase64", { part }));
  }
  try {
    const padded = segment.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - segment.length % 4) % 4);
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
    const value = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
    if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error();
    return value;
  } catch {
    throw new Error(translate("jwtInvalidJson", { part }));
  }
}

function formatJwtDate(timestamp) {
  const date = new Date(timestamp * 1000);
  if (Number.isNaN(date.getTime())) return String(timestamp);
  return new Intl.DateTimeFormat(currentLanguage === "uk" ? "uk-UA" : "en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function jwtStatusText(header, payload, hasSignature) {
  const details = [];
  if (header.alg) details.push(translate("jwtAlgorithm", { algorithm: String(header.alg) }));
  if (typeof payload.exp === "number" && Number.isFinite(payload.exp)) {
    const key = payload.exp * 1000 <= Date.now() ? "jwtExpired" : "jwtExpires";
    details.push(translate(key, { date: formatJwtDate(payload.exp) }));
  }
  if (!hasSignature) details.push(translate("jwtNoSignature"));
  return [translate("jwtDecoded"), ...details].join(" · ");
}

function decodeJwt(focusOnError = true) {
  const source = jwtElements.input.value.trim().replace(/^Bearer\s+/i, "").replace(/\s+/g, "");
  if (!source) {
    clearJwtDecodedData();
    setJwtStatus("error", translate("jwtEmpty"));
    if (focusOnError) jwtElements.input.focus();
    return false;
  }
  const parts = source.split(".");
  if (parts.length !== 3) {
    clearJwtDecodedData();
    setJwtStatus("error", translate("jwtThreeParts"));
    if (focusOnError) jwtElements.input.focus();
    return false;
  }
  if (parts[2] && (!/^[A-Za-z0-9_-]+$/.test(parts[2]) || parts[2].length % 4 === 1)) {
    clearJwtDecodedData();
    setJwtStatus("error", translate("jwtInvalidSignature"));
    return false;
  }
  try {
    const header = decodeJwtPart(parts[0], "Header");
    const payload = decodeJwtPart(parts[1], "Payload");
    jwtElements.header.value = JSON.stringify(header, null, 2);
    jwtElements.payload.value = JSON.stringify(payload, null, 2);
    jwtElements.header.dataset.decoded = JSON.stringify(header);
    jwtElements.payload.dataset.decoded = JSON.stringify(payload);
    jwtElements.status.dataset.hasSignature = String(Boolean(parts[2]));
    const expired = typeof payload.exp === "number" && Number.isFinite(payload.exp) && payload.exp * 1000 <= Date.now();
    setJwtStatus(expired ? "warning" : "valid", jwtStatusText(header, payload, Boolean(parts[2])));
    return true;
  } catch (error) {
    clearJwtDecodedData();
    setJwtStatus("error", error.message);
    return false;
  }
}

function refreshJwtLocalizedState() {
  updateJwtCount();
  if (jwtElements.header.dataset.decoded && jwtElements.payload.dataset.decoded) {
    const header = JSON.parse(jwtElements.header.dataset.decoded);
    const payload = JSON.parse(jwtElements.payload.dataset.decoded);
    const expired = typeof payload.exp === "number" && Number.isFinite(payload.exp) && payload.exp * 1000 <= Date.now();
    setJwtStatus(expired ? "warning" : "valid", jwtStatusText(header, payload, jwtElements.status.dataset.hasSignature === "true"));
  } else if (jwtElements.input.value) {
    setJwtStatus("idle", translate("unsaved"));
  } else {
    setJwtStatus("idle", translate("ready"));
  }
}

function bytesToBase64Url(bytes) {
  let binary = "";
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function encodeJwtPart(value) {
  return bytesToBase64Url(new TextEncoder().encode(JSON.stringify(value)));
}

document.querySelector("#decodeJwtButton").addEventListener("click", () => decodeJwt());
document.querySelector("#jwtSampleButton").addEventListener("click", () => {
  const now = Math.floor(Date.now() / 1000);
  jwtElements.input.value = [
    encodeJwtPart({ alg: "HS256", typ: "JWT" }),
    encodeJwtPart({ sub: "1234567890", name: "Devtools User", iat: now, exp: now + 3600 }),
    "demo-signature",
  ].join(".");
  updateJwtCount();
  decodeJwt();
});
document.querySelector("#clearJwtButton").addEventListener("click", () => {
  jwtElements.input.value = "";
  clearJwtDecodedData();
  updateJwtCount();
  setJwtStatus("idle", translate("cleared"));
  jwtElements.input.focus();
});
[["#copyJwtHeaderButton", jwtElements.header], ["#copyJwtPayloadButton", jwtElements.payload]].forEach(([selector, output]) => {
  document.querySelector(selector).addEventListener("click", async () => {
    if (!output.value) {
      setJwtStatus("error", translate("createResult"));
      return;
    }
    await navigator.clipboard.writeText(output.value);
    showToast(translate("copied"));
  });
});
jwtElements.input.addEventListener("input", () => {
  clearJwtDecodedData();
  updateJwtCount();
  setJwtStatus("idle", translate("unsaved"));
});
jwtElements.input.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
    event.preventDefault();
    decodeJwt();
  }
});


function setJwtEncoderStatus(type, text) {
  jwtEncoderElements.status.className = "status-message is-" + type;
  jwtEncoderElements.status.querySelector(".status-icon").textContent = type === "valid" ? "✓" : type === "error" ? "!" : "•";
  jwtEncoderElements.statusText.textContent = text;
}

function clearEncodedJwt() {
  jwtEncoderElements.result.value = "";
  delete jwtEncoderElements.result.dataset.algorithm;
}

function parseJwtEncoderPart(source, part) {
  if (!source.trim()) throw new Error(translate("jwtEncodePartEmpty", { part }));
  try {
    const value = JSON.parse(source);
    if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error();
    return value;
  } catch {
    throw new Error(translate("jwtEncodePartInvalid", { part }));
  }
}

async function signJwt(signingInput, algorithm, secret) {
  if (algorithm === "none") return "";
  if (!secret) throw new Error(translate("jwtSecretRequired", { algorithm }));
  if (!window.crypto || !window.crypto.subtle) throw new Error(translate("jwtCryptoUnavailable"));
  const hashes = { HS256: "SHA-256", HS384: "SHA-384", HS512: "SHA-512" };
  const encoder = new TextEncoder();
  const key = await window.crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: hashes[algorithm] },
    false,
    ["sign"]
  );
  const signature = await window.crypto.subtle.sign("HMAC", key, encoder.encode(signingInput));
  return bytesToBase64Url(new Uint8Array(signature));
}

async function encodeJwt() {
  try {
    const header = parseJwtEncoderPart(jwtEncoderElements.header.value, "Header");
    const payload = parseJwtEncoderPart(jwtEncoderElements.payload.value, "Payload");
    const algorithm = jwtEncoderElements.algorithm.value;
    header.alg = algorithm;
    jwtEncoderElements.header.value = JSON.stringify(header, null, 2);
    const signingInput = encodeJwtPart(header) + "." + encodeJwtPart(payload);
    const signature = await signJwt(signingInput, algorithm, jwtEncoderElements.secret.value);
    jwtEncoderElements.result.value = signingInput + "." + signature;
    jwtEncoderElements.result.dataset.algorithm = algorithm;
    const detail = algorithm === "none" ? translate("jwtUnsigned") : translate("jwtAlgorithm", { algorithm });
    setJwtEncoderStatus("valid", translate("jwtEncoded") + " · " + detail);
    return true;
  } catch (error) {
    clearEncodedJwt();
    setJwtEncoderStatus("error", error.message || translate("parseError"));
    return false;
  }
}

function refreshJwtEncoderLocalizedState() {
  const algorithm = jwtEncoderElements.result.dataset.algorithm;
  if (algorithm) {
    const detail = algorithm === "none" ? translate("jwtUnsigned") : translate("jwtAlgorithm", { algorithm });
    setJwtEncoderStatus("valid", translate("jwtEncoded") + " · " + detail);
  } else if (jwtEncoderElements.header.value || jwtEncoderElements.payload.value || jwtEncoderElements.secret.value) {
    setJwtEncoderStatus("idle", translate("unsaved"));
  } else {
    setJwtEncoderStatus("idle", translate("ready"));
  }
}

function syncJwtEncoderAlgorithm() {
  const algorithm = jwtEncoderElements.algorithm.value;
  jwtEncoderElements.secretRow.hidden = algorithm === "none";
  if (jwtEncoderElements.header.value.trim()) {
    try {
      const header = parseJwtEncoderPart(jwtEncoderElements.header.value, "Header");
      header.alg = algorithm;
      jwtEncoderElements.header.value = JSON.stringify(header, null, 2);
    } catch {
      // Keep invalid input intact so the encoder can report it.
    }
  }
  clearEncodedJwt();
  setJwtEncoderStatus("idle", translate("unsaved"));
}

document.querySelector("#encodeJwtButton").addEventListener("click", encodeJwt);
document.querySelector("#jwtEncoderSampleButton").addEventListener("click", async () => {
  const now = Math.floor(Date.now() / 1000);
  const algorithm = jwtEncoderElements.algorithm.value;
  jwtEncoderElements.header.value = JSON.stringify({ alg: algorithm, typ: "JWT" }, null, 2);
  jwtEncoderElements.payload.value = JSON.stringify({
    sub: "1234567890",
    name: "Devtools User",
    iat: now,
    exp: now + 3600,
  }, null, 2);
  if (algorithm !== "none") jwtEncoderElements.secret.value = "example-secret";
  await encodeJwt();
});
document.querySelector("#clearJwtEncoderButton").addEventListener("click", () => {
  jwtEncoderElements.header.value = "";
  jwtEncoderElements.payload.value = "";
  jwtEncoderElements.secret.value = "";
  jwtEncoderElements.showSecret.checked = false;
  jwtEncoderElements.secret.type = "password";
  clearEncodedJwt();
  setJwtEncoderStatus("idle", translate("cleared"));
  jwtEncoderElements.header.focus();
});
document.querySelector("#copyEncodedJwtButton").addEventListener("click", async () => {
  if (!jwtEncoderElements.result.value) {
    setJwtEncoderStatus("error", translate("createResult"));
    return;
  }
  await navigator.clipboard.writeText(jwtEncoderElements.result.value);
  showToast(translate("copied"));
});
jwtEncoderElements.algorithm.addEventListener("change", syncJwtEncoderAlgorithm);
jwtEncoderElements.showSecret.addEventListener("change", () => {
  jwtEncoderElements.secret.type = jwtEncoderElements.showSecret.checked ? "text" : "password";
});
[jwtEncoderElements.header, jwtEncoderElements.payload, jwtEncoderElements.secret].forEach((input) => {
  input.addEventListener("input", () => {
    clearEncodedJwt();
    setJwtEncoderStatus("idle", translate("unsaved"));
  });
});
[jwtEncoderElements.header, jwtEncoderElements.payload].forEach((editor) => {
  editor.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      encodeJwt();
    }
  });
});
syncJwtEncoderAlgorithm();


const cronFieldDefinitions = [
  { key: "minute", labelKey: "cronMinute", min: 0, max: 59 },
  { key: "hour", labelKey: "cronHour", min: 0, max: 23 },
  { key: "day", labelKey: "cronDayOfMonth", min: 1, max: 31 },
  { key: "month", labelKey: "cronMonth", min: 1, max: 12 },
  { key: "weekday", labelKey: "cronWeekday", min: 0, max: 6 },
];

const cronBuilderState = Object.fromEntries(
  cronFieldDefinitions.map((field) => [
    field.key,
    new Set(Array.from({ length: field.max - field.min + 1 }, (_, index) => field.min + index)),
  ])
);

function cronValues(field) {
  return Array.from({ length: field.max - field.min + 1 }, (_, index) => field.min + index);
}

function cronValueLabel(field, value) {
  if (field.key === "month") return translations[currentLanguage].cronMonths[value - 1];
  if (field.key === "weekday") return translations[currentLanguage].cronWeekdays[value];
  if (field.key === "minute" || field.key === "hour") return String(value).padStart(2, "0");
  return String(value);
}

function renderCronBuilder() {
  if (!cronElements.fields) return;
  const fragment = document.createDocumentFragment();
  cronFieldDefinitions.forEach((field) => {
    const selected = cronBuilderState[field.key];
    const fieldset = document.createElement("fieldset");
    fieldset.className = "cron-field-group cron-field-" + field.key;
    const legend = document.createElement("legend");
    const title = document.createElement("span");
    title.textContent = translate(field.labelKey);
    const range = document.createElement("small");
    range.textContent = field.min + "–" + field.max;
    title.append(range);
    const allLabel = document.createElement("label");
    allLabel.className = "check-control cron-select-all";
    const allInput = document.createElement("input");
    allInput.type = "checkbox";
    allInput.dataset.cronAll = field.key;
    allInput.checked = selected.size === field.max - field.min + 1;
    allInput.indeterminate = selected.size > 0 && !allInput.checked;
    const allText = document.createElement("span");
    allText.textContent = translate("cronSelectAll");
    allLabel.append(allInput, allText);
    legend.append(title, allLabel);
    const grid = document.createElement("div");
    grid.className = "cron-check-grid";
    cronValues(field).forEach((value) => {
      const label = document.createElement("label");
      label.className = "cron-check";
      const input = document.createElement("input");
      input.type = "checkbox";
      input.dataset.cronField = field.key;
      input.dataset.cronValue = String(value);
      input.checked = selected.has(value);
      const text = document.createElement("span");
      text.textContent = cronValueLabel(field, value);
      label.append(input, text);
      grid.append(label);
    });
    fieldset.append(legend, grid);
    fragment.append(fieldset);
  });
  cronElements.fields.replaceChildren(fragment);
}

function compressCronValues(field, selected) {
  const values = Array.from(selected).sort((a, b) => a - b);
  const fullSize = field.max - field.min + 1;
  if (values.length === fullSize) return "*";
  if (values.length > 2 && values[0] === field.min) {
    const step = values[1] - values[0];
    if (step > 1 && values.every((value, index) => index === 0 || value - values[index - 1] === step) && values.at(-1) + step > field.max) return "*/" + step;
  }
  const parts = [];
  let start = values[0];
  let previous = values[0];
  for (let index = 1; index <= values.length; index += 1) {
    const value = values[index];
    if (value === previous + 1) {
      previous = value;
      continue;
    }
    if (previous - start >= 2) parts.push(start + "-" + previous);
    else if (previous === start) parts.push(String(start));
    else parts.push(String(start), String(previous));
    start = value;
    previous = value;
  }
  return parts.join(",");
}

function cronExpressionFromBuilder() {
  const parts = [];
  for (const field of cronFieldDefinitions) {
    const selected = cronBuilderState[field.key];
    if (!selected.size) return "";
    parts.push(compressCronValues(field, selected));
  }
  return parts.join(" ");
}

function updateCronFromBuilder() {
  const expression = cronExpressionFromBuilder();
  if (!expression) {
    setCronStatus("error", translate("cronAtLeastOne"));
    return;
  }
  cronElements.expression.value = expression;
  cronElements.preset.value = "";
  analyzeCron(false);
}


function normalizeCronAliases(value, field) {
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let normalized = value.toUpperCase();
  if (field.key === "month") months.forEach((alias, index) => { normalized = normalized.replaceAll(alias, String(index + 1)); });
  if (field.key === "weekday") weekdays.forEach((alias, index) => { normalized = normalized.replaceAll(alias, String(index)); });
  return normalized;
}

function expandCronField(source, field) {
  const selected = new Set();
  const normalized = normalizeCronAliases(source, field);
  if (!/^[0-9*/,\-]+$/.test(normalized)) throw new Error();
  normalized.split(",").forEach((part) => {
    const pieces = part.split("/");
    if (pieces.length > 2) throw new Error();
    const step = pieces[1] ? Number(pieces[1]) : 1;
    if (!Number.isInteger(step) || step < 1) throw new Error();
    let start;
    let end;
    if (pieces[0] === "*") {
      start = field.min;
      end = field.max;
    } else if (pieces[0].includes("-")) {
      const range = pieces[0].split("-").map(Number);
      if (range.length !== 2) throw new Error();
      [start, end] = range;
    } else {
      start = Number(pieces[0]);
      end = start;
    }
    if (field.key === "weekday") {
      if (start === 7) start = 0;
      if (end === 7) end = 0;
    }
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < field.min || end > field.max || start > end) throw new Error();
    for (let value = start; value <= end; value += step) selected.add(value);
  });
  if (!selected.size) throw new Error();
  return selected;
}

function syncCronBuilder(expression) {
  try {
    const parts = expression.split(/\s+/);
    const nextState = {};
    cronFieldDefinitions.forEach((field, index) => { nextState[field.key] = expandCronField(parts[index], field); });
    Object.entries(nextState).forEach(([key, values]) => { cronBuilderState[key] = values; });
    cronElements.builderStatus.textContent = translate("cronBuilderStatus");
    renderCronBuilder();
    return true;
  } catch {
    cronElements.builderStatus.textContent = translate("cronBuilderLimited");
    return false;
  }
}

function setCronStatus(type, text) {
  cronElements.status.className = "status-message is-" + type;
  cronElements.status.querySelector(".status-icon").textContent = type === "valid" ? "✓" : type === "error" ? "!" : "•";
  cronElements.statusText.textContent = text;
}

function cronTimezoneOptions() {
  const timezone = cronElements.timezone.value;
  return timezone ? { timezone, paused: true } : { paused: true };
}

function formatCronRun(date) {
  return new Intl.DateTimeFormat(currentLanguage === "uk" ? "uk-UA" : "en-GB", {
    dateStyle: "medium",
    timeStyle: "medium",
    timeZone: cronElements.timezone.value || undefined,
  }).format(date);
}

function renderCronRuns(dates) {
  const fragment = document.createDocumentFragment();
  dates.forEach((date, index) => {
    const item = document.createElement("li");
    const number = document.createElement("span");
    number.textContent = String(index + 1).padStart(2, "0");
    const time = document.createElement("time");
    time.dateTime = date.toISOString();
    time.textContent = formatCronRun(date);
    item.append(number, time);
    fragment.append(item);
  });
  if (!dates.length) {
    const item = document.createElement("li");
    item.className = "is-empty";
    item.textContent = translate("cronNoRuns");
    fragment.append(item);
  }
  cronElements.runs.replaceChildren(fragment);
}

function analyzeCron(focusOnError = true) {
  const expression = cronElements.expression.value.trim().replace(/\s+/g, " ");
  cronElements.expression.value = expression;
  if (!expression) {
    cronElements.description.textContent = "—";
    cronElements.runs.replaceChildren();
    setCronStatus("error", translate("cronEmpty"));
    if (focusOnError) cronElements.expression.focus();
    return false;
  }
  if (expression.split(" ").length !== 5) {
    cronElements.description.textContent = "—";
    cronElements.runs.replaceChildren();
    setCronStatus("error", translate("cronFiveFields"));
    return false;
  }
  if (typeof window.Cron !== "function" || !window.cronstrue || typeof window.cronstrue.toString !== "function") {
    setCronStatus("error", translate("cronUnavailable"));
    return false;
  }
  try {
    const schedule = new window.Cron(expression, cronTimezoneOptions());
    const dates = schedule.nextRuns(10);
    cronElements.description.textContent = window.cronstrue.toString(expression, {
      locale: currentLanguage,
      use24HourTimeFormat: true,
      verbose: true,
    });
    cronElements.timezoneDisplay.textContent = cronElements.timezone.value || translate("cronLocalTime");
    renderCronRuns(dates);
    setCronStatus("valid", translate("cronValid"));
    cronElements.description.dataset.rendered = "true";
    syncCronBuilder(expression);
    return true;
  } catch (error) {
    cronElements.description.textContent = "—";
    cronElements.runs.replaceChildren();
    setCronStatus("error", translate("cronInvalid") + ": " + (error.message || translate("parseError")));
    return false;
  }
}

function refreshCronLocalizedState() {
  renderCronBuilder();
  if (cronElements.expression.value) analyzeCron(false);
  else setCronStatus("idle", translate("ready"));
}


function initializeCronBuilder() {
  renderCronBuilder();
  cronElements.fields.addEventListener("change", (event) => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement)) return;
    if (input.dataset.cronAll) {
      const field = cronFieldDefinitions.find((item) => item.key === input.dataset.cronAll);
      cronBuilderState[field.key] = input.checked ? new Set(cronValues(field)) : new Set();
    } else if (input.dataset.cronField) {
      const selected = cronBuilderState[input.dataset.cronField];
      const value = Number(input.dataset.cronValue);
      if (input.checked) selected.add(value);
      else selected.delete(value);
    }
    renderCronBuilder();
    updateCronFromBuilder();
  });
}

document.querySelector("#analyzeCronButton").addEventListener("click", () => analyzeCron());
document.querySelector("#copyCronButton").addEventListener("click", async () => {
  if (!cronElements.expression.value.trim()) {
    setCronStatus("error", translate("cronEmpty"));
    return;
  }
  await navigator.clipboard.writeText(cronElements.expression.value.trim());
  showToast(translate("copied"));
});
document.querySelector("#cronSampleButton").addEventListener("click", () => {
  cronElements.expression.value = "*/15 9-17 * * 1-5";
  cronElements.preset.value = "";
  analyzeCron(false);
});
document.querySelector("#resetCronButton").addEventListener("click", () => {
  cronElements.expression.value = "* * * * *";
  cronElements.preset.value = "* * * * *";
  analyzeCron(false);
  cronElements.expression.focus();
});
cronElements.expression.addEventListener("input", () => {
  delete cronElements.description.dataset.rendered;
  setCronStatus("idle", translate("unsaved"));
});
cronElements.expression.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    analyzeCron();
  }
});
cronElements.preset.addEventListener("change", () => {
  if (!cronElements.preset.value) return;
  cronElements.expression.value = cronElements.preset.value;
  analyzeCron(false);
});
cronElements.timezone.addEventListener("change", () => {
  if (cronElements.expression.value) analyzeCron(false);
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

initializeCronBuilder();
applyLanguage(currentLanguage);
initializeSqlFormatter();
setJwtMode(currentJwtMode, false);
setTool(currentTool, false);
setStatus("idle", translate("ready"));
