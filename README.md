# Teacher Copilot

Mobile-first hackathon prototype for reducing teacher admin work after and during a lesson.

## Problem

Teachers spend too much time manually entering the same lesson information into school systems: lesson descriptions, attendance, homework, grades, and notes. The first target is the Estonian LMS eKool workflow, where a teacher often finishes the class and then still has to reconstruct what happened.

## Demo Flow

1. Open `index.html`.
2. Tap **Alusta tundi** to simulate lesson recording.
3. Mark absent students with the roster toggles.
4. Add or adjust homework.
5. Tap **Genereeri logi**.
6. Tap **Kopeeri eKooli** to simulate moving the generated entry into eKool.

## Current Prototype

This version is intentionally dependency-free:

- static HTML/CSS/JS
- mobile-first layout
- live recording timer simulation
- attendance toggles
- homework quick actions
- generated eKool-ready lesson log
- Estonian classroom copy

## Hackathon Next Steps

- Add real browser audio recording with `MediaRecorder`.
- Send audio to a transcription endpoint.
- Use an LLM to return structured JSON:
  - lesson title
  - eKool journal entry
  - homework
  - absent students
  - student recap
  - teacher-private notes
- Add teacher/class schedule data.
- Add export views for eKool, PDF, Markdown, and LaTeX.
- Later: investigate whether eKool has an official integration path.

## Suggested Stack After Prototype

- Next.js + TypeScript for the app
- Supabase for auth, classes, students, and saved lessons
- OpenAI for transcription and structured lesson log generation
- Vercel for quick deploys

## Product North Star

The teacher leaves the classroom with the eKool entry already done.
