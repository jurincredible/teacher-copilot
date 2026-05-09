const lesson = {
  title: "Elektromagnetiline induktsioon",
  subject: "Füüsika",
  className: "11B",
  date: "2026-05-08",
  due: "2026-05-15",
  dueTime: "",
  summary:
    "Tunnis seostasime magnetvoo muutumise induktsioonvoolu tekkimisega. Õpilased nägid, kuidas liikuva juhtme näites muutub voog ning miks Lenzi reegel aitab voolu suunda põhjendada.",
  homework:
    "Lahendada õpikust lk 142 ülesanded 3-5. Kirjuta iga ülesande juurde, milline suurus magnetvoogu muutis.",
  notes:
    "Kui magnetvoog \\(\\Phi = B \\cdot A \\cdot cos(\\alpha)\\) muutub, tekib kontuuris indutseeritud elektromotoorjõud \\(\\varepsilon = -N \\frac{\\Delta\\Phi}{\\Delta t}\\). Miinusmärk kirjeldab Lenzi reeglit: indutseeritud vool töötab muutusele vastu.",
  texSource: "",
  renderedNotes: "",
  concepts: [
    ["Magnetvoog", "Kirjeldab, kui palju magnetvälja läbib kontuuri pinda."],
    ["Induktsioonivool", "Tekib siis, kui magnetvoog kontuuris muutub."],
    ["Lenzi reegel", "Indutseeritud voolu suund on selline, et see takistab muutust, mis voolu tekitas."]
  ]
};

const schedule = [
  ["08:10", "10A matemaatika", "Tuletise rakendused"],
  ["09:00", "11B füüsika", lesson.title],
  ["10:05", "12A füüsika", "Vahelduvvool"],
  ["12:00", "9C loodusõpetus", "Energia muundumine"]
];

const periodByTime = {
  "08:10": 1,
  "09:00": 2,
  "10:05": 3,
  "11:10": 4,
  "12:00": 5,
  "13:00": 6
};

const weekDays = [
  {
    date: "4. mai",
    weekday: "Esmaspäev",
    label: "Esmaspäev, 4. mai",
    lessons: [
      ["08:10", "9C loodusõpetus", "Energia muundumine"],
      ["09:00", "11B füüsika", "Magnetväli ja jõujooned"],
      ["10:05", "10A matemaatika", "Funktsiooni graafik"],
      ["12:00", "12A füüsika", "Laine levimine"],
      ["13:00", "11B füüsika", "Harjutused ja arutelu"]
    ]
  },
  {
    date: "5. mai",
    weekday: "Teisipäev",
    label: "Teisipäev, 5. mai",
    lessons: [
      ["08:10", "10A matemaatika", "Tuletise mõiste"],
      ["09:00", "12A füüsika", "Elektriväli"],
      ["10:05", "11B füüsika", "Magnetvoog"],
      ["12:00", "9C loodusõpetus", "Aine olekud"]
    ]
  },
  {
    date: "6. mai",
    weekday: "Kolmapäev",
    label: "Kolmapäev, 6. mai",
    lessons: [
      ["08:10", "11B füüsika", "Faraday katsed"],
      ["09:00", "10A matemaatika", "Tuletise arvutamine"],
      ["10:05", "12A füüsika", "Kondensaator"],
      ["11:10", "9C loodusõpetus", "Soojusülekanne"],
      ["12:00", "11B füüsika", "Induktsioonivool"],
      ["13:00", "10A matemaatika", "Rakendusülesanded"]
    ]
  },
  {
    date: "7. mai",
    weekday: "Neljapäev",
    label: "Neljapäev, 7. mai",
    lessons: [
      ["09:00", "12A füüsika", "Vahelduvvoolu sissejuhatus"],
      ["10:05", "11B füüsika", "Lenzi reegel"],
      ["12:00", "10A matemaatika", "Kontrolltöö kordamine"]
    ]
  },
  {
    date: "8. mai",
    weekday: "Reede",
    label: "Täna, 8. mai",
    lessons: schedule
  }
];

const studentWeekDays = [
  {
    date: "4. mai",
    weekday: "Esmaspäev",
    label: "Esmaspäev, 4. mai",
    lessons: [
      ["08:10", "Füüsika", "Magnetväli ja jõujooned"],
      ["09:00", "Matemaatika", "Funktsiooni graafik"],
      ["10:05", "Eesti keel", "Arutleva teksti ülesehitus"],
      ["11:10", "Inglise keel", "Reported speech"],
      ["12:00", "Keemia", "Aatomi ehitus"],
      ["13:00", "Ajalugu", "Külma sõja algus"]
    ]
  },
  {
    date: "5. mai",
    weekday: "Teisipäev",
    label: "Teisipäev, 5. mai",
    lessons: [
      ["08:10", "Matemaatika", "Tuletise mõiste"],
      ["09:00", "Füüsika", "Magnetvoog"],
      ["10:05", "Bioloogia", "Raku energia"],
      ["11:10", "Geograafia", "Kliimavöötmed"],
      ["12:00", "Kirjandus", "Novelli analüüs"]
    ]
  },
  {
    date: "6. mai",
    weekday: "Kolmapäev",
    label: "Kolmapäev, 6. mai",
    lessons: [
      ["08:10", "Füüsika", "Faraday katsed"],
      ["09:00", "Matemaatika", "Tuletise arvutamine"],
      ["10:05", "Inglise keel", "Argument essay"],
      ["11:10", "Kehaline kasvatus", "Vastupidavus"],
      ["12:00", "Füüsika", "Induktsioonivool"],
      ["13:00", "Kunst", "Kompositsioon"]
    ]
  },
  {
    date: "7. mai",
    weekday: "Neljapäev",
    label: "Neljapäev, 7. mai",
    lessons: [
      ["08:10", "Ajalugu", "Euroopa pärast II maailmasõda"],
      ["09:00", "Füüsika", "Lenzi reegel"],
      ["10:05", "Matemaatika", "Kontrolltöö kordamine"],
      ["11:10", "Keemia", "Keemiline side"],
      ["12:00", "Eesti keel", "Stiil ja sõnavara"]
    ]
  },
  {
    date: "8. mai",
    weekday: "Reede",
    label: "Täna, 8. mai",
    lessons: [
      ["08:10", "Matemaatika", "Tuletise rakendused"],
      ["09:00", "Füüsika", lesson.title],
      ["10:05", "Inglise keel", "Listening practice"],
      ["11:10", "Bioloogia", "Närvisüsteem"],
      ["12:00", "Loodusõpetus", "Energia muundumine"]
    ]
  }
];

const classes = [
  {
    name: "11B",
    subject: "Füüsika",
    note: "viimane tund täna",
    todayLesson: 25,
    activeTitle: lesson.title
  },
  {
    name: "12A",
    subject: "Füüsika",
    note: "järgmine tund esmaspäeval",
    todayLesson: 25,
    activeTitle: "Vahelduvvool"
  },
  {
    name: "10A",
    subject: "Matemaatika",
    note: "kontrolltöö ettevalmistus",
    todayLesson: 25,
    activeTitle: "Tuletise rakendused"
  }
];

const studentSubjects = [
  {
    name: "Füüsika",
    tone: "cool",
    todayLesson: 25,
    activeTitle: lesson.title
  },
  {
    name: "Matemaatika",
    tone: "warm",
    todayLesson: 25,
    activeTitle: "Tuletise rakendused"
  }
];

const students = [
  "Anna-Maria Kask",
  "Karl Erik Tamm",
  "Marta Lepp",
  "Rasmus Saar",
  "Liisa Põld",
  "Henri Vaher",
  "Sofia Ilves"
];

const quiz = [
  {
    question: "Millal tekib kontuuris induktsioonvool?",
    options: ["Kui magnetvoog muutub", "Kui juhtme temperatuur on püsiv", "Kui kontuur on plastist"],
    correct: 0
  },
  {
    question: "Mida näitab Lenzi reegel?",
    options: ["Induktsiooni ühikut", "Indutseeritud voolu suunda", "Juhtme pikkust"],
    correct: 1
  },
  {
    question: "Milline valem kirjeldab Faraday seadust?",
    options: ["F = ma", "pV = nRT", "ε = -N ΔΦ / Δt"],
    correct: 2
  }
];

const state = {
  role: "teacher",
  teacherPanel: "calendar",
  weekDay: 4,
  studentPanel: "day",
  studentDay: 4,
  activeClass: 0,
  activeStudentSubject: null,
  recording: "idle",
  elapsed: 0,
  absent: new Set(),
  quizAnswers: new Map(),
  published: true
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const teacherView = $("#teacherView");
const studentView = $("#studentView");
const drawer = $("#drawer");
const overlay = $("#overlay");
const roleLabel = $("#roleLabel");
const timer = $("#timer");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function compileLatex(fragment) {
  let output = escapeHtml(fragment)
    .replace(/\\mathcal\{E\}/g, "ℰ")
    .replace(/\\SI\{([^{}]+)\}\{\\kilo\\hertz\}/g, "$1 kHz")
    .replaceAll("\\Phi", "Φ")
    .replaceAll("\\varepsilon", "ε")
    .replaceAll("\\Delta", "Δ")
    .replaceAll("\\alpha", "α")
    .replaceAll("\\cdot", "·")
    .replaceAll("\\times", "×")
    .replaceAll("\\text", "")
    .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, "$1 / $2")
    .replace(/\^\{([^{}]+)\}/g, "<sup>$1</sup>")
    .replace(/_\{([^{}]+)\}/g, "<sub>$1</sub>")
    .replace(/\^([A-Za-z0-9+-])/g, "<sup>$1</sup>")
    .replace(/_([A-Za-z0-9+-])/g, "<sub>$1</sub>")
    .replaceAll("\\", "");
  output = output.replace(/\s+/g, " ").trim();
  return output;
}

function renderLatex(text) {
  return escapeHtml(text).replace(/\\\((.*?)\\\)/g, (_, fragment) => {
    return `<span class="formula">${compileLatex(fragment)}</span>`;
  });
}

function inlineTexToHtml(text) {
  return escapeHtml(text)
    .replace(/\\\\/g, " · ")
    .replace(/``/g, "“")
    .replace(/''/g, "”")
    .replace(/---/g, "–")
    .replace(/\\emph\{([^{}]+)\}/g, "<em>$1</em>")
    .replace(/\\textbf\{([^{}]+)\}/g, "<strong>$1</strong>")
    .replace(/\\SI\{([^{}]+)\}\{\\kilo\\hertz\}/g, "$1 kHz")
    .replace(/\\\((.*?)\\\)/g, (_, fragment) => `<span class="formula">${compileLatex(fragment)}</span>`);
}

function renderTexDocument(source, { preview = false } = {}) {
  const title = source.match(/\\title\{([^{}]+)\}/)?.[1] || "";
  const author = source.match(/\\author\{([^{}]+)\}/)?.[1] || "";
  const date = source.match(/\\date\{([^{}]+)\}/)?.[1] || "";
  const body = (source.match(/\\begin\{document\}([\s\S]*?)\\end\{document\}/) || ["", source])[1]
    .replace(/\\maketitle/g, "")
    .trim();
  const blocks = [];
  const pattern =
    /(\\section\*?\{[^{}]+\}|\\subsection\*?\{[^{}]+\}|\\begin\{itemize\}[\s\S]*?\\end\{itemize\}|\\begin\{enumerate\}[\s\S]*?\\end\{enumerate\}|\\begin\{quote\}[\s\S]*?\\end\{quote\}|\\\[[\s\S]*?\\\])/g;
  let cursor = 0;
  let match;

  function pushParagraphs(chunk) {
    chunk
      .split(/\n\s*\n/)
      .map((part) => part.replace(/\s*\n\s*/g, " ").trim())
      .filter(Boolean)
      .forEach((part) => blocks.push(`<p>${inlineTexToHtml(part)}</p>`));
  }

  while ((match = pattern.exec(body))) {
    pushParagraphs(body.slice(cursor, match.index));
    const token = match[0];
    const title = token.match(/\\(?:sub)?section\*?\{([^{}]+)\}/);
    if (token.startsWith("\\section")) {
      blocks.push(`<h4>${inlineTexToHtml(title[1])}</h4>`);
    } else if (token.startsWith("\\subsection")) {
      blocks.push(`<h5>${inlineTexToHtml(title[1])}</h5>`);
    } else if (token.startsWith("\\[")) {
      blocks.push(`<div class="display-formula">${compileLatex(token.replace(/^\\\[|\\\]$/g, ""))}</div>`);
    } else if (token.includes("itemize") || token.includes("enumerate")) {
      const tag = token.includes("enumerate") ? "ol" : "ul";
      const items = [...token.matchAll(/\\item\s+([\s\S]*?)(?=\\item|\\end\{(?:itemize|enumerate)\})/g)]
        .map((item) => `<li>${inlineTexToHtml(item[1].replace(/\s*\n\s*/g, " ").trim())}</li>`)
        .join("");
      blocks.push(`<${tag}>${items}</${tag}>`);
    } else if (token.includes("quote")) {
      const quote = token.replace(/\\begin\{quote\}|\\end\{quote\}/g, "").trim();
      blocks.push(`<blockquote>${inlineTexToHtml(quote)}</blockquote>`);
    }
    cursor = pattern.lastIndex;
  }

  pushParagraphs(body.slice(cursor));
  const meta = preview
    ? ""
    : `<header class="tex-title"><h4>${inlineTexToHtml(title)}</h4><p>${inlineTexToHtml(author)} · ${inlineTexToHtml(date)}</p></header>`;
  return meta + (preview ? blocks.slice(0, 8).join("") : blocks.join(""));
}

async function loadConspect() {
  try {
    const response = await fetch("./assets/2026-03-24_10-50.tex");
    lesson.texSource = await response.text();
    lesson.renderedNotes = renderTexDocument(lesson.texSource);
    $("#teacherNotes").innerHTML = renderTexDocument(lesson.texSource, { preview: true });
    $("#studentNotes").innerHTML = renderTexDocument(lesson.texSource, { preview: true });
    $("#conspectBody").innerHTML = lesson.renderedNotes;
  } catch {
    lesson.renderedNotes = renderLatex(lesson.notes);
    $("#teacherNotes").innerHTML = lesson.renderedNotes;
    $("#studentNotes").innerHTML = lesson.renderedNotes;
    $("#conspectBody").innerHTML = lesson.renderedNotes;
  }
}

function openDrawer() {
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  overlay.hidden = false;
  $("#menuButton").setAttribute("aria-expanded", "true");
}

function closeDrawer() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  overlay.hidden = true;
  $("#menuButton").setAttribute("aria-expanded", "false");
}

function setRole(role, { resetPanel = false } = {}) {
  state.role = role;
  teacherView.classList.toggle("active", role === "teacher");
  studentView.classList.toggle("active", role === "student");
  document.body.classList.toggle("student-mode", role === "student");
  roleLabel.textContent = role === "teacher" ? "Õpetaja vaade" : "Õpilase vaade";
  $$("[data-role]").forEach((button) => {
    button.classList.toggle("active", button.dataset.role === role);
  });
  if (resetPanel && role === "teacher") {
    setTeacherPanel("calendar");
    return;
  }
  if (resetPanel && role === "student") {
    setStudentPanel("day");
  }
  closeDrawer();
}

function setTeacherPanel(panel) {
  state.teacherPanel = panel;
  $$(".view-panel").forEach((view) => view.classList.remove("active"));
  $(`#${panel}Panel`)?.classList.add("active");
  $$("#teacherView .tabs button").forEach((button) => {
    button.classList.toggle("active", button.dataset.openView === panel);
  });
  if (panel === "classes") requestAnimationFrame(scrollHistoryToActive);
  closeDrawer();
}

function setStudentPanel(panel) {
  state.studentPanel = panel;
  $$(".student-panel").forEach((view) => view.classList.remove("active"));
  $(`#student${panel[0].toUpperCase()}${panel.slice(1)}Panel`)?.classList.add("active");
  $$("#studentView [data-student-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.studentView === panel);
  });
}

function getLessonPeriod(time, fallbackIndex = 0) {
  return periodByTime[time] || fallbackIndex + 1;
}

function getToneForGroup(group) {
  const normalized = group.toLowerCase();
  if (normalized.includes("matemaatika")) return "warm";
  if (normalized.includes("füüsika")) return "cool";
  if (normalized.includes("loodus")) return "green";
  return "rose";
}

function getToneForIndex(index) {
  return ["cool", "warm", "green", "rose", "accent"][index % 5];
}

function getSelectedDay() {
  return weekDays[state.weekDay];
}

function renderSchedule() {
  const day = getSelectedDay();
  $("#dayLabel").textContent = day.label;
  $("#currentLessonPrompt").hidden = state.weekDay !== 4;
  $("#currentLessonText").textContent = `${lesson.className} ${lesson.subject.toLowerCase()}, ${lesson.title.toLowerCase()}`;
  $("#scheduleList").innerHTML = day.lessons
    .map(
      ([time, group, title], index) => `
        <button class="schedule-item ${state.weekDay === 4 && index === 1 ? "active" : ""}" type="button" data-open-view="lesson" data-tone="${getToneForGroup(group)}">
          <span class="schedule-time">${time}</span>
          <span>
            <strong>${getLessonPeriod(time, index)}. ${group}</strong>
            <span>${title}</span>
          </span>
        </button>
      `
    )
    .join("");
}

function renderClasses() {
  $("#classList").innerHTML = classes
    .map((currentClass, index) => {
      const expanded = index === state.activeClass;
      return `
        <div class="class-group ${expanded ? "expanded" : ""}">
        <button class="class-card ${expanded ? "active" : ""}" type="button" data-class-index="${index}" data-tone="${getToneForGroup(`${currentClass.name} ${currentClass.subject}`)}" aria-expanded="${expanded}">
          <span>
            <strong>${currentClass.name} ${currentClass.subject}</strong>
            <span>${currentClass.note}</span>
          </span>
        </button>
        ${
          expanded
            ? `<div class="class-history panel">
                <div class="panel-title">
                  <h3>${currentClass.name} ${currentClass.subject.toLowerCase()}</h3>
                  <span>tund ${currentClass.todayLesson} / 35</span>
                </div>
                <div class="timeline">${renderClassHistory(currentClass)}</div>
              </div>`
            : ""
        }
        </div>
      `;
    })
    .join("");

  scrollHistoryToActive();
}

function renderClassHistory(currentClass) {
  return Array.from({ length: 35 }, (_, index) => {
    const number = index + 1;
    return {
      number,
      title: number === currentClass.todayLesson ? currentClass.activeTitle : `${currentClass.subject} tund ${number}`,
      date: number === currentClass.todayLesson ? "8. mai" : `${Math.max(1, number - 17)}. aprill`,
      active: number === currentClass.todayLesson
    };
  })
    .map(
      (item) => `
        <button class="timeline-item ${item.active ? "active" : ""}" type="button" data-open-view="lesson" data-tone="${getToneForGroup(currentClass.subject)}">
          <span class="timeline-date">${item.date} · tund ${item.number}</span>
          <strong>${item.title}</strong>
          <span>${item.active ? "viimane toimunud tund" : "õppematerjal olemas"}</span>
        </button>
      `
    )
    .join("");
}

function scrollHistoryToActive() {
  const timeline = $("#classList .class-group.expanded .timeline");
  const activeItem = timeline?.querySelector(".timeline-item.active");
  if (!timeline || !activeItem) return;
  timeline.scrollTop = Math.max(0, activeItem.offsetTop - timeline.offsetTop - 150);
}

function renderWeek() {
  $("#weekTotal").textContent = `${weekDays.reduce((sum, day) => sum + day.lessons.length, 0)} tundi`;
  $("#weekList").innerHTML = weekDays
    .map(
      ({ date, weekday, lessons }, index) => `
        <button class="week-day ${index === state.weekDay ? "active" : ""}" type="button" data-week-day="${index}" data-tone="${getToneForIndex(index)}">
          <span>
            <strong>${weekday}</strong>
            <span>${date}</span>
          </span>
          <span class="status-pill ${index === state.weekDay ? "live" : ""}">${lessons.length} tundi</span>
        </button>
      `
    )
    .join("");
}

function renderTeacherLesson() {
  $("#summaryInput").value = lesson.summary;
  $("#homeworkInput").value = lesson.homework;
  $("#dueInput").value = lesson.due;
  $("#dueTimeInput").value = lesson.dueTime;
  $("#teacherTitle").textContent = lesson.title;
  $("#teacherNotes").innerHTML = lesson.renderedNotes || renderLatex(lesson.notes);
}

function renderAttendance() {
  $("#studentList").innerHTML = students
    .map((student) => {
      const absent = state.absent.has(student);
      const present = !absent;
      return `
        <div class="student-row">
          <span>
            <strong>${student}</strong>
            <span>${absent ? "puudub" : "kohal"}</span>
          </span>
          <button class="toggle ${present ? "active" : ""}" type="button" aria-label="${student} ${present ? "kohal" : "puudub"}" aria-pressed="${present}" data-student="${student}"></button>
        </div>
      `;
    })
    .join("");

  const count = state.absent.size;
  $("#absentCount").textContent = count ? `Puudub: ${count}` : "Kõik kohal";
}

function syncLessonFromInputs() {
  lesson.title = $("#teacherTitle").textContent.trim() || lesson.title;
  lesson.summary = $("#summaryInput").value.trim();
  lesson.homework = $("#homeworkInput").value.trim();
  lesson.due = $("#dueInput").value;
  lesson.dueTime = $("#dueTimeInput").value;
  renderStudentView();
}

function publishLesson() {
  syncLessonFromInputs();
  state.published = true;
  $("#draftBadge").textContent = "avaldatud";
  $("#draftBadge").classList.add("live");
  renderStudentView();
}

function renderStudentView() {
  const currentStudentDay = studentWeekDays[state.studentDay];
  const studentDayLessons = currentStudentDay.lessons.map((entry, index) => ({ entry, index }));
  $("#studentWeekTotal").textContent = `${studentWeekDays.reduce((sum, day) => sum + day.lessons.length, 0)} tundi`;
  $("#studentDayLabel").textContent = currentStudentDay.label;
  $("#studentTitle").textContent = lesson.title;
  $("#studentMeta").textContent = `${lesson.subject} · 8. mai · 45 min`;
  $("#studentSummary").textContent = lesson.summary.replace(/^(AI mustand:\s*)+/i, "");
  $("#studentNotes").innerHTML = lesson.renderedNotes ? renderTexDocument(lesson.texSource, { preview: true }) : renderLatex(lesson.notes);
  $("#studentHomework").textContent = lesson.homework;
  $("#studentDue").textContent = `Tähtaeg ${new Date(lesson.due).toLocaleDateString("et-EE")}${lesson.dueTime ? ` kell ${lesson.dueTime}` : ""}`;
  $("#conceptList").innerHTML = lesson.concepts
    .map(([title, body]) => `<div class="concept"><strong>${title}</strong><span>${body}</span></div>`)
    .join("");
  $("#studentDayList").innerHTML = studentDayLessons
    .map(
      ({ entry: [time, group, title], index }) => `
        <button class="timeline-item ${title === lesson.title ? "active" : ""}" type="button" data-student-lesson data-tone="${getToneForGroup(group)}">
          <span class="timeline-date">${currentStudentDay.date} · ${time}</span>
          <strong>${getLessonPeriod(time, index)}. ${title}</strong>
          <span>${group}</span>
        </button>
      `
    )
    .join("");
  $("#studentWeekList").innerHTML = studentWeekDays
    .map((day, index) => {
      return `
        <button class="week-day ${index === state.studentDay ? "active" : ""}" type="button" data-student-week-day="${index}" data-tone="${getToneForIndex(index)}">
          <span>
            <strong>${day.weekday}</strong>
            <span>${day.date}</span>
          </span>
          <span class="status-pill ${index === state.studentDay ? "live" : ""}">${day.lessons.length} tundi</span>
        </button>
      `;
    })
    .join("");
  renderStudentSubjects();
  renderQuiz();
}

function renderStudentSubjects() {
  $("#studentSubjectsList").innerHTML = studentSubjects
    .map((subject, index) => {
      const expanded = index === state.activeStudentSubject;
      return `
        <div class="class-group ${expanded ? "expanded" : ""}">
          <button class="subject-card ${expanded ? "active" : ""}" type="button" data-student-subject-index="${index}" data-tone="${subject.tone}" aria-expanded="${expanded}">
            <span>
              <strong>${subject.name}</strong>
              <span>35 tundi õppeaastas</span>
            </span>
          </button>
          ${
            expanded
              ? `<div class="class-history panel">
                  <div class="panel-title">
                    <h3>${subject.name}</h3>
                    <span>tund ${subject.todayLesson} / 35</span>
                  </div>
                  <div class="timeline">${renderStudentSubjectHistory(subject)}</div>
                </div>`
              : ""
          }
        </div>
      `;
    })
    .join("");
  requestAnimationFrame(scrollStudentSubjectToActive);
}

function renderStudentSubjectHistory(subject) {
  return Array.from({ length: 35 }, (_, index) => {
    const number = index + 1;
    return {
      number,
      title: number === subject.todayLesson ? subject.activeTitle : `${subject.name} tund ${number}`,
      date: number === subject.todayLesson ? "8. mai" : `${Math.max(1, number - 17)}. aprill`,
      active: number === subject.todayLesson
    };
  })
    .map(
      (item) => `
        <button class="timeline-item ${item.active ? "active" : ""}" type="button" data-student-year-lesson data-tone="${subject.tone}">
          <span class="timeline-date">${item.date} · tund ${item.number}</span>
          <strong>${item.title}</strong>
          <span>${item.active ? "tänane tund" : "õppematerjal olemas"}</span>
        </button>
      `
    )
    .join("");
}

function scrollStudentSubjectToActive() {
  const timeline = $("#studentSubjectsList .class-group.expanded .timeline");
  const activeItem = timeline?.querySelector(".timeline-item.active");
  if (!timeline || !activeItem) return;
  timeline.scrollTop = Math.max(0, activeItem.offsetTop - timeline.offsetTop - 150);
}

function renderQuiz() {
  const score = [...state.quizAnswers.entries()].filter(([index, answer]) => quiz[index].correct === answer).length;
  $("#quizMount").innerHTML =
    quiz
      .map((item, index) => {
        const answered = state.quizAnswers.has(index);
        return `
          <div class="quiz-question">
            <strong>${index + 1}. ${item.question}</strong>
            ${item.options
              .map((option, optionIndex) => {
                const selected = state.quizAnswers.get(index) === optionIndex;
                const cls = answered && selected ? (item.correct === optionIndex ? "correct" : "wrong") : "";
                const correctCls = answered && item.correct === optionIndex ? "correct" : "";
                return `<button class="quiz-option ${cls || correctCls}" type="button" data-question="${index}" data-answer="${optionIndex}">${option}</button>`;
              })
              .join("")}
          </div>
        `;
      })
      .join("") + `<p class="microcopy">Tulemus selles sessioonis: ${score}/${quiz.length}. Tulemust ei saadeta õpetajale.</p>`;
}

function openQr() {
  const url = window.location.href;
  $("#qrImage").src = `https://api.qrserver.com/v1/create-qr-code/?size=420x420&data=${encodeURIComponent(url)}`;
  $("#demoUrl").textContent = url;
  $("#qrDialog").showModal();
}

function formatTime(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const rest = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${rest}`;
}

function updateRecorder() {
  const button = $("#recordButton");
  button.classList.toggle("paused", state.recording === "paused");
  if (state.recording === "idle") {
    button.textContent = "Salvesta";
    $("#recordStatus").textContent = "Valmis simuleeritud tunnisalvestuseks.";
  }
  if (state.recording === "recording") {
    button.textContent = "Paus";
    $("#recordStatus").textContent = "Salvestus käib. Audio kustutatakse pärast töötlust.";
  }
  if (state.recording === "paused") {
    button.textContent = "Jätka";
    $("#recordStatus").textContent = "Salvestus on pausil.";
  }
  if (state.recording === "finished") {
    button.textContent = "Uus salvestus";
    $("#recordStatus").textContent = "Salvestus lõppes. Vaata mustand üle ja avalda õpilasele.";
  }
}

function updateCurrentTime() {
  $("#currentTime").textContent = new Date().toLocaleTimeString("et-EE", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
}

function toggleTheme() {
  const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
  document.body.dataset.theme = nextTheme;
  $("#themeButton").textContent = nextTheme === "dark" ? "Hele režiim" : "Tume režiim";
  $("#themeButton").setAttribute("aria-label", nextTheme === "dark" ? "Lülita hele režiim" : "Lülita tume režiim");
}

$("#menuButton").addEventListener("click", openDrawer);
$("#closeMenuButton").addEventListener("click", closeDrawer);
overlay.addEventListener("click", closeDrawer);
$("#themeButton").addEventListener("click", toggleTheme);
$$("[data-role]").forEach((button) => button.addEventListener("click", () => setRole(button.dataset.role, { resetPanel: true })));
document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-open-view]");
  if (!target) return;
  setRole("teacher");
  setTeacherPanel(target.dataset.openView);
});
document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-student-view]");
  if (!target) return;
  setRole("student");
  setStudentPanel(target.dataset.studentView);
});

$("#recordButton").addEventListener("click", () => {
  if (state.recording === "idle" || state.recording === "paused") state.recording = "recording";
  else if (state.recording === "recording") state.recording = "paused";
  else state.recording = "recording";
  updateRecorder();
});

$("#finishRecordButton").addEventListener("click", () => {
  state.recording = "finished";
  updateRecorder();
});

$("#publishButton").addEventListener("click", publishLesson);
$("#allPresentButton").addEventListener("click", () => {
  state.absent.clear();
  renderAttendance();
});
$("#resetAttendanceButton").addEventListener("click", () => {
  state.absent = new Set(students);
  renderAttendance();
});
$("#studentList").addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-student]");
  if (!toggle) return;
  const student = toggle.dataset.student;
  if (state.absent.has(student)) state.absent.delete(student);
  else state.absent.add(student);
  renderAttendance();
});

$("#weekList").addEventListener("click", (event) => {
  const day = event.target.closest("[data-week-day]");
  if (!day) return;
  state.weekDay = Number(day.dataset.weekDay);
  renderWeek();
  renderSchedule();
  setTeacherPanel("calendar");
});

$("#classList").addEventListener("click", (event) => {
  const card = event.target.closest("[data-class-index]");
  if (!card) return;
  const nextClass = Number(card.dataset.classIndex);
  state.activeClass = state.activeClass === nextClass ? null : nextClass;
  renderClasses();
});

$("#attachmentInput").addEventListener("change", (event) => {
  const file = event.target.files[0];
  $("#attachmentName").textContent = file ? file.name : "Manust pole lisatud";
});

["summaryInput", "homeworkInput", "dueInput", "dueTimeInput"].forEach((id) => {
  $(`#${id}`).addEventListener("input", syncLessonFromInputs);
});

$("#teacherTitle").addEventListener("input", syncLessonFromInputs);
$("#teacherTitle").addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  $("#teacherTitle").blur();
});

$("#quizMount").addEventListener("click", (event) => {
  const option = event.target.closest("[data-question]");
  if (!option) return;
  state.quizAnswers.set(Number(option.dataset.question), Number(option.dataset.answer));
  renderQuiz();
});

$("#resetQuizButton").addEventListener("click", () => {
  state.quizAnswers.clear();
  renderQuiz();
});

$$("[data-open-conspect]").forEach((card) => {
  card.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;
    $("#conspectDialog").showModal();
  });
  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    $("#conspectDialog").showModal();
  });
});

$("#closeConspectButton").addEventListener("click", () => $("#conspectDialog").close());

$("#studentDayList").addEventListener("click", (event) => {
  if (!event.target.closest("[data-student-lesson]")) return;
  setStudentPanel("lesson");
});

$("#studentSubjectsList").addEventListener("click", (event) => {
  if (event.target.closest("[data-student-year-lesson]")) {
    setStudentPanel("lesson");
    return;
  }
  const subject = event.target.closest("[data-student-subject-index]");
  if (!subject) return;
  const nextSubject = Number(subject.dataset.studentSubjectIndex);
  state.activeStudentSubject = state.activeStudentSubject === nextSubject ? null : nextSubject;
  renderStudentSubjects();
});

$("#studentWeekList").addEventListener("click", (event) => {
  const day = event.target.closest("[data-student-week-day]");
  if (!day) return;
  state.studentDay = Number(day.dataset.studentWeekDay);
  renderStudentView();
  setStudentPanel("day");
});

$("#qrButton").addEventListener("click", openQr);
$("#drawerQrButton").addEventListener("click", openQr);
$("#closeQrButton").addEventListener("click", () => $("#qrDialog").close());

setInterval(() => {
  if (state.recording !== "recording") return;
  state.elapsed += 1;
  timer.textContent = formatTime(state.elapsed);
}, 1000);

setInterval(updateCurrentTime, 30 * 1000);

renderSchedule();
renderWeek();
renderClasses();
renderTeacherLesson();
renderAttendance();
updateRecorder();
updateCurrentTime();
loadConspect().then(renderStudentView);
