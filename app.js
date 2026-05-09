const lesson = {
  title: "Elektromagnetiline induktsioon",
  subject: "Füüsika",
  className: "11B",
  date: "2026-05-08",
  due: "2026-05-15",
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
    ["Induktsioonvool", "Tekib siis, kui magnetvoog kontuuris muutub."],
    ["Lenzi reegel", "Indutseeritud voolu suund on selline, et see takistab muutust, mis voolu tekitas."]
  ]
};

const schedule = [
  ["08:10", "10A matemaatika", "Tuletise rakendused"],
  ["09:00", "11B füüsika", lesson.title],
  ["10:05", "12A füüsika", "Vahelduvvool"],
  ["12:00", "9C loodusõpetus", "Energia muundumine"]
];

const classes = [
  ["11B", "Füüsika", "viimane tund täna"],
  ["12A", "Füüsika", "järgmine tund esmaspäeval"],
  ["10A", "Matemaatika", "kontrolltöö ettevalmistus"]
];

const history = Array.from({ length: 35 }, (_, index) => {
  const number = index + 1;
  return {
    number,
    title: number === 35 ? lesson.title : `Füüsika tund ${number}`,
    date: number === 35 ? "8. mai" : `${Math.max(1, number - 4)}. aprill`,
    active: number === 35
  };
});

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

function setRole(role) {
  state.role = role;
  teacherView.classList.toggle("active", role === "teacher");
  studentView.classList.toggle("active", role === "student");
  roleLabel.textContent = role === "teacher" ? "Õpetaja vaade" : "Õpilase vaade";
  $$("[data-role]").forEach((button) => {
    button.classList.toggle("active", button.dataset.role === role);
  });
  closeDrawer();
}

function setTeacherPanel(panel) {
  state.teacherPanel = panel;
  $$(".view-panel").forEach((view) => view.classList.remove("active"));
  $(`#${panel}Panel`)?.classList.add("active");
  $$(".tabs button").forEach((button) => {
    button.classList.toggle("active", button.dataset.openView === panel);
  });
  closeDrawer();
}

function renderSchedule() {
  $("#scheduleList").innerHTML = schedule
    .map(
      ([time, group, title], index) => `
        <button class="schedule-item ${index === 1 ? "active" : ""}" type="button" data-open-view="lesson">
          <span class="schedule-time">${time}</span>
          <span>
            <strong>${group}</strong>
            <span>${title}</span>
          </span>
          <span class="status-pill ${index === 1 ? "live" : ""}">${index === 1 ? "ava" : "detail"}</span>
        </button>
      `
    )
    .join("");
}

function renderClasses() {
  $("#classList").innerHTML = classes
    .map(
      ([name, subject, note]) => `
        <button class="class-card" type="button">
          <span>
            <strong>${name} ${subject}</strong>
            <span>${note}</span>
          </span>
          <span class="status-pill">ava</span>
        </button>
      `
    )
    .join("");

  $("#lessonHistory").innerHTML = history
    .slice(-6)
    .map(
      (item) => `
        <button class="timeline-item ${item.active ? "active" : ""}" type="button" data-open-view="lesson">
          <span class="timeline-date">${item.date} · tund ${item.number}</span>
          <strong>${item.title}</strong>
          <span>${item.active ? "viimane toimunud tund" : "õppematerjal olemas"}</span>
        </button>
      `
    )
    .join("");
}

function renderTeacherLesson() {
  $("#summaryInput").value = lesson.summary;
  $("#homeworkInput").value = lesson.homework;
  $("#dueInput").value = lesson.due;
  $("#teacherTitle").textContent = lesson.title;
  $("#teacherNotes").innerHTML = lesson.renderedNotes || renderLatex(lesson.notes);
}

function renderAttendance() {
  $("#studentList").innerHTML = students
    .map((student) => {
      const absent = state.absent.has(student);
      return `
        <div class="student-row">
          <span>
            <strong>${student}</strong>
            <span>${absent ? "puudub" : "kohal"}</span>
          </span>
          <button class="toggle ${absent ? "active" : ""}" type="button" aria-label="${student} puudub" data-student="${student}"></button>
        </div>
      `;
    })
    .join("");

  const count = state.absent.size;
  $("#absentCount").textContent = count ? `${count} puudub` : "Kõik kohal";
}

function syncLessonFromInputs() {
  lesson.title = $("#teacherTitle").textContent.trim() || lesson.title;
  lesson.summary = $("#summaryInput").value.trim();
  lesson.homework = $("#homeworkInput").value.trim();
  lesson.due = $("#dueInput").value;
  renderStudentView();
}

function generateResults() {
  syncLessonFromInputs();
  const cleanSummary = lesson.summary
    .replace(/^(AI mustand:\s*)+/i, "")
    .replace(
      /(\s*Õpetaja peaks enne jagamist kontrollima, et mõisted ja ülesanded oleksid täpsed\.)+$/i,
      ""
    );
  lesson.summary =
    "AI mustand: " +
    cleanSummary +
    " Õpetaja peaks enne jagamist kontrollima, et mõisted ja ülesanded oleksid täpsed.";
  $("#summaryInput").value = lesson.summary;
  $("#draftBadge").textContent = "AI mustand";
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
  $("#studentTitle").textContent = lesson.title;
  $("#studentMeta").textContent = `${lesson.subject} · 8. mai · 45 min`;
  $("#studentSummary").textContent = lesson.summary.replace(/^(AI mustand:\s*)+/i, "");
  $("#studentNotes").innerHTML = lesson.renderedNotes ? renderTexDocument(lesson.texSource, { preview: true }) : renderLatex(lesson.notes);
  $("#studentHomework").textContent = lesson.homework;
  $("#studentDue").textContent = `Tähtaeg ${new Date(lesson.due).toLocaleDateString("et-EE")}`;
  $("#conceptList").innerHTML = lesson.concepts
    .map(([title, body]) => `<div class="concept"><strong>${title}</strong><span>${body}</span></div>`)
    .join("");
  $("#studentLessons").innerHTML = `
    <button class="timeline-item active" type="button">
      <span class="timeline-date">8. mai · 45 min</span>
      <strong>${lesson.title}</strong>
      <span>Kokkuvõte, mõisted, kodutöö ja enesekontroll</span>
    </button>
  `;
  renderQuiz();
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
    $("#recordStatus").textContent = "Salvestus lõppes. Tulemused saab genereerida.";
  }
}

$("#menuButton").addEventListener("click", openDrawer);
$("#closeMenuButton").addEventListener("click", closeDrawer);
overlay.addEventListener("click", closeDrawer);
$$("[data-role]").forEach((button) => button.addEventListener("click", () => setRole(button.dataset.role)));
document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-open-view]");
  if (!target) return;
  setRole("teacher");
  setTeacherPanel(target.dataset.openView);
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

$("#generateButton").addEventListener("click", generateResults);
$("#publishButton").addEventListener("click", publishLesson);
$("#allPresentButton").addEventListener("click", () => {
  state.absent.clear();
  renderAttendance();
});
$("#resetAttendanceButton").addEventListener("click", () => {
  state.absent = new Set(["Rasmus Saar"]);
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

$("#attachmentInput").addEventListener("change", (event) => {
  const file = event.target.files[0];
  $("#attachmentName").textContent = file ? file.name : "Manust pole lisatud";
});

["summaryInput", "homeworkInput", "dueInput"].forEach((id) => {
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

$(".subject-card").addEventListener("click", () => {
  $(".student-detail").scrollIntoView({ behavior: "smooth", block: "start" });
});

$("#studentLessons").addEventListener("click", () => {
  $(".student-detail").scrollIntoView({ behavior: "smooth", block: "start" });
});

$("#qrButton").addEventListener("click", openQr);
$("#drawerQrButton").addEventListener("click", openQr);
$("#closeQrButton").addEventListener("click", () => $("#qrDialog").close());

setInterval(() => {
  if (state.recording !== "recording") return;
  state.elapsed += 1;
  timer.textContent = formatTime(state.elapsed);
}, 1000);

renderSchedule();
renderClasses();
renderTeacherLesson();
renderAttendance();
updateRecorder();
loadConspect().then(renderStudentView);
