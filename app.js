const students = [
  "Anna-Maria Kask",
  "Karl Erik Tamm",
  "Marta Lepp",
  "Rasmus Saar",
  "Liisa Põld",
  "Henri Vaher"
];

const state = {
  recording: false,
  elapsed: 0,
  absent: new Set()
};

const studentList = document.querySelector("#studentList");
const absentCount = document.querySelector("#absentCount");
const recordButton = document.querySelector("#recordButton");
const recordLabel = document.querySelector("#recordLabel");
const timer = document.querySelector("#timer");
const homework = document.querySelector("#homework");
const generateButton = document.querySelector("#generateButton");
const copyButton = document.querySelector("#copyButton");
const lessonLog = document.querySelector("#lessonLog");
const logStatus = document.querySelector("#logStatus");
const savedTime = document.querySelector("#savedTime");

function renderStudents() {
  studentList.innerHTML = "";

  students.forEach((student) => {
    const row = document.createElement("div");
    row.className = "student";

    const name = document.createElement("span");
    name.textContent = student;

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "toggle";
    toggle.setAttribute("aria-label", `${student} puudub`);

    toggle.addEventListener("click", () => {
      if (state.absent.has(student)) {
        state.absent.delete(student);
        toggle.classList.remove("active");
      } else {
        state.absent.add(student);
        toggle.classList.add("active");
      }
      renderSummary();
    });

    row.append(name, toggle);
    studentList.append(row);
  });
}

function renderSummary() {
  const count = state.absent.size;
  absentCount.textContent = `${count} märgitud`;
  savedTime.textContent = `${7 + count * 2} min`;
}

function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

function toggleRecording() {
  state.recording = !state.recording;
  recordButton.classList.toggle("recording", state.recording);
  recordLabel.textContent = state.recording ? "Peata salvestus" : "Jätka tundi";
}

function generateLessonLog() {
  const absent = [...state.absent];
  const absentText = absent.length ? absent.join(", ") : "puudujaid ei märgitud";
  const homeworkText = homework.value.trim() || "kodutööd ei lisatud";

  lessonLog.innerHTML = `
    <p><strong>eKooli sissekanne:</strong> 11B füüsika tunnis käsitleti elektromagnetilist induktsiooni, magnetvoo muutumist ning Faraday seaduse rakendamist lihtsates arvutusülesannetes.</p>
    <p><strong>Tunni käik:</strong> Õpetaja alustas magnetvälja kordamisest, näitas induktsioonivoolu tekkimist liikuva juhtme näitel ja lasi õpilastel arutada, miks voolu suund sõltub liikumissuunast.</p>
    <p><strong>Kodutöö:</strong> ${homeworkText}</p>
    <p><strong>Puudujad:</strong> ${absentText}.</p>
    <p><strong>Õpilase kokkuvõte:</strong> Kui magnetvoog läbi kontuuri muutub, tekib kontuuris induktsioonvool. Mida kiirem muutus, seda suurem indutseeritud elektromotoorjõud.</p>
  `;
  logStatus.textContent = "valmis";
}

recordButton.addEventListener("click", toggleRecording);
generateButton.addEventListener("click", generateLessonLog);

copyButton.addEventListener("click", async () => {
  const text = lessonLog.innerText;
  await navigator.clipboard?.writeText(text);
  copyButton.textContent = "Kopeeritud";
  setTimeout(() => {
    copyButton.textContent = "Kopeeri eKooli";
  }, 1400);
});

document.querySelectorAll("[data-homework]").forEach((button) => {
  button.addEventListener("click", () => {
    homework.value = `${homework.value.trim()}\n${button.dataset.homework}`.trim();
  });
});

setInterval(() => {
  if (!state.recording) return;
  state.elapsed += 1;
  timer.textContent = formatTime(state.elapsed);
}, 1000);

renderStudents();
renderSummary();
