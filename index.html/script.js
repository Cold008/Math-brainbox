const syllabus = [
  { id: 'numbers', term: 'First Term', title: 'Number & Numeration', icon: '№', color: 'blue', description: 'Whole numbers, fractions, decimals, percentages and number bases.', questions: 4 },
  { id: 'algebra', term: 'First Term', title: 'Algebraic Processes', icon: 'x', color: 'violet', description: 'Simplifying expressions, equations, formulae and inequalities.', questions: 4 },
  { id: 'geometry', term: 'First Term', title: 'Plane Geometry', icon: '△', color: 'orange', description: 'Angles, triangles, polygons, similarity and constructions.', questions: 3 },
  { id: 'statistics', term: 'Second Term', title: 'Statistics', icon: '▥', color: 'green', description: 'Frequency tables, averages, charts and probability.', questions: 3 },
  { id: 'mensuration', term: 'Second Term', title: 'Mensuration', icon: '□', color: 'teal', description: 'Area, perimeter, surface area and volume of solids.', questions: 3 },
  { id: 'ratios', term: 'Second Term', title: 'Ratio, Rate & Variation', icon: '∶', color: 'pink', description: 'Direct and inverse proportion, scale and business arithmetic.', questions: 3 },
  { id: 'graphs', term: 'Third Term', title: 'Graphs & Coordinates', icon: '↗', color: 'cyan', description: 'Number line, Cartesian plane, linear graphs and translations.', questions: 3 },
  { id: 'sets', term: 'Third Term', title: 'Sets & Logic', icon: '∩', color: 'amber', description: 'Set notation, Venn diagrams, logical reasoning and applications.', questions: 2 }
];

const practiceQuestions = [
  { topic: 'numbers', question: 'Express 0.125 as a fraction in its lowest terms.', options: ['1/4', '1/8', '1/5', '5/40'], answer: 1, explanation: '0.125 = 125/1000. Dividing by 125 gives 1/8.' },
  { topic: 'numbers', question: 'Convert 25% to a decimal.', options: ['0.25', '2.5', '25.0', '0.025'], answer: 0, explanation: '25 ÷ 100 = 0.25.' },
  { topic: 'numbers', question: 'Which is equivalent to 1101₂ in base ten?', options: ['11', '12', '13', '14'], answer: 2, explanation: '1101₂ = 8 + 4 + 0 + 1 = 13.' },
  { topic: 'algebra', question: 'Simplify: 3x + 5x − 2x', options: ['6x', '10x', 'x', '8x'], answer: 0, explanation: '3 + 5 − 2 = 6, so the result is 6x.' },
  { topic: 'algebra', question: 'Solve 3x − 7 = 14.', options: ['x = 5', 'x = 7', 'x = 6', 'x = 21'], answer: 1, explanation: 'Add 7: 3x = 21, then divide by 3: x = 7.' },
  { topic: 'algebra', question: 'If y = 2x + 1, find y when x = 4.', options: ['7', '8', '9', '10'], answer: 2, explanation: 'Substitute x = 4: y = 2(4) + 1 = 9.' },
  { topic: 'geometry', question: 'The sum of the interior angles of a triangle is:', options: ['90°', '180°', '270°', '360°'], answer: 1, explanation: 'The three interior angles of every triangle total 180°.' },
  { topic: 'geometry', question: 'An angle greater than 90° but less than 180° is called:', options: ['acute', 'right', 'obtuse', 'reflex'], answer: 2, explanation: 'An obtuse angle is greater than 90° and less than 180°.' },
  { topic: 'statistics', question: 'Find the mean of 4, 6, 8, 10.', options: ['5', '6', '7', '8'], answer: 2, explanation: 'The sum is 28; 28 ÷ 4 = 7.' },
  { topic: 'mensuration', question: 'Find the area of a rectangle 8 cm by 5 cm.', options: ['13 cm²', '26 cm²', '40 cm²', '45 cm²'], answer: 2, explanation: 'Area = length × width = 8 × 5 = 40 cm².' },
  { topic: 'ratios', question: 'The ratio 12 : 18 in simplest form is:', options: ['2 : 3', '3 : 2', '4 : 6', '6 : 9'], answer: 0, explanation: 'Divide both parts by their highest common factor, 6.' },
  { topic: 'graphs', question: 'In the ordered pair (3, −2), −2 is the:', options: ['x-coordinate', 'y-coordinate', 'origin', 'gradient'], answer: 1, explanation: 'Coordinates are written (x, y), so −2 is the y-coordinate.' }
];

const pastQuestions = {
  2020: [
    { q: 'Simplify 3/4 × 8/9.', options: ['1/3', '2/3', '3/2', '6/13'], answer: 1, explanation: 'Cancel 3 with 9 and 4 with 8: 1/1 × 2/3 = 2/3.' },
    { q: 'A trader bought an item for ₦2,000 and sold it for ₦2,300. Find the percentage profit.', options: ['10%', '15%', '20%', '25%'], answer: 1, explanation: 'Profit = ₦300. (300 ÷ 2000) × 100 = 15%.' },
    { q: 'Find the value of x in 2x + 9 = 21.', options: ['6', '7', '12', '15'], answer: 0, explanation: '2x = 12, so x = 6.' }
  ],
  2021: [
    { q: 'Express 0.045 in standard form.', options: ['4.5 × 10⁻²', '4.5 × 10⁻³', '45 × 10⁻³', '0.45 × 10⁻¹'], answer: 0, explanation: 'Move the decimal point two places right: 4.5 × 10⁻².' },
    { q: 'Find the area of a triangle with base 12 cm and height 7 cm.', options: ['84 cm²', '42 cm²', '38 cm²', '19 cm²'], answer: 1, explanation: 'Area = ½ × 12 × 7 = 42 cm².' },
    { q: 'The mean of 5, 7, 9 and 11 is:', options: ['7', '8', '9', '10'], answer: 1, explanation: '(5 + 7 + 9 + 11) ÷ 4 = 32 ÷ 4 = 8.' }
  ],
  2022: [
    { q: 'Simplify: 4a + 3b − 2a + b.', options: ['2a + 4b', '6a + 2b', '2a + 2b', '6a + 4b'], answer: 0, explanation: 'Collect like terms: (4a − 2a) + (3b + b) = 2a + 4b.' },
    { q: 'What is 3/5 as a percentage?', options: ['35%', '60%', '75%', '80%'], answer: 1, explanation: '(3 ÷ 5) × 100 = 60%.' },
    { q: 'If 5 men complete a job in 12 days, how long will 3 men take at the same rate?', options: ['6 days', '20 days', '15 days', '9 days'], answer: 1, explanation: 'This is inverse proportion: 5 × 12 ÷ 3 = 20 days.' }
  ],
  2023: [
    { q: 'Find the circumference of a circle of radius 7 cm. (Take π = 22/7)', options: ['22 cm', '44 cm', '49 cm', '154 cm'], answer: 1, explanation: 'C = 2πr = 2 × 22/7 × 7 = 44 cm.' },
    { q: 'Solve the inequality 2x + 1 < 9.', options: ['x < 4', 'x > 4', 'x < 5', 'x > 5'], answer: 0, explanation: 'Subtract 1: 2x < 8, then divide by 2: x < 4.' },
    { q: 'How many degrees are in ⅔ of a right angle?', options: ['30°', '45°', '60°', '90°'], answer: 2, explanation: '⅔ × 90° = 60°.' }
  ],
  2024: [
    { q: 'The perimeter of a square is 36 cm. Find its area.', options: ['81 cm²', '72 cm²', '36 cm²', '324 cm²'], answer: 0, explanation: 'Side = 36 ÷ 4 = 9 cm. Area = 9 × 9 = 81 cm².' },
    { q: 'A car travels 150 km in 2 hours. Find its average speed.', options: ['50 km/h', '75 km/h', '100 km/h', '300 km/h'], answer: 1, explanation: 'Speed = distance ÷ time = 150 ÷ 2 = 75 km/h.' },
    { q: 'Expand (x + 3)(x + 2).', options: ['x² + 5x + 6', 'x² + 6x + 5', 'x² + 5', 'x² + 6'], answer: 0, explanation: 'x² + 2x + 3x + 6 = x² + 5x + 6.' }
  ],
  2025: [
    { q: 'A shop gives a 20% discount on ₦4,500. Find the sale price.', options: ['₦900', '₦3,600', '₦3,700', '₦4,300'], answer: 1, explanation: 'Discount = ₦900. Sale price = ₦4,500 − ₦900 = ₦3,600.' },
    { q: 'Find the gradient of the line passing through (1, 2) and (3, 8).', options: ['2', '3', '4', '6'], answer: 1, explanation: 'Gradient = (8 − 2) ÷ (3 − 1) = 6 ÷ 2 = 3.' },
    { q: 'Convert 101₂ to base ten.', options: ['3', '5', '6', '7'], answer: 1, explanation: '101₂ = 4 + 0 + 1 = 5.' }
  ],
  2026: [
    { q: 'Find the volume of a cube with edge 4 cm.', options: ['12 cm³', '16 cm³', '48 cm³', '64 cm³'], answer: 3, explanation: 'Volume = 4 × 4 × 4 = 64 cm³.' },
    { q: 'In a set, 18 students study Maths, 12 study English and 5 study both. How many study only Maths?', options: ['5', '13', '18', '25'], answer: 1, explanation: '18 − 5 = 13 students study only Mathematics.' },
    { q: 'If y varies directly as x and y = 10 when x = 2, find y when x = 7.', options: ['35', '14', '20', '70'], answer: 0, explanation: 'y = kx, so k = 10 ÷ 2 = 5. When x = 7, y = 5 × 7 = 35.' }
  ]
};

const state = { view: 'dashboard', practiceIndex: 0, practiceScore: 0, answered: false, practiceFilter: null, progress: new Set(JSON.parse(localStorage.getItem('mathEaseProgress') || '[]')) };

const root = document.getElementById('viewRoot');
const pageTitle = document.getElementById('pageTitle');

function saveProgress() { localStorage.setItem('mathEaseProgress', JSON.stringify([...state.progress])); updateProgress(); }
function updateProgress() {
  document.getElementById('sidebarProgress').textContent = `${state.progress.size} topic${state.progress.size === 1 ? '' : 's'} started`;
}

function dashboardView() {
  pageTitle.textContent = 'Good morning, Scholar!';
  const totalAnswered = Number(localStorage.getItem('mathEaseAnswered') || 0);
  const bestScore = Number(localStorage.getItem('mathEaseBest') || 0);
  root.innerHTML = `
    <section class="welcome-card">
      <div class="welcome-copy">
        <span class="pill-light">JSS3 MATHEMATICS</span>
        <h2>Master mathematics<br>one step at a time.</h2>
        <p>Clear lessons, focused practice, and exam-style questions—all in one place.</p>
        <button class="primary-btn" id="continueBtn">Continue learning <span>→</span></button>
      </div>
      <div class="welcome-art" aria-hidden="true">
        <div class="orbit orbit-one"><span>π</span></div>
        <div class="orbit orbit-two"><span>√</span></div>
        <div class="math-badge">x <sup>2</sup></div>
      </div>
    </section>

    <section class="stats-grid">
      <article class="stat-card"><div class="stat-icon blue">▦</div><div><strong>${syllabus.length}</strong><span>Syllabus topics</span></div></article>
      <article class="stat-card"><div class="stat-icon green">✓</div><div><strong>${totalAnswered}</strong><span>Questions answered</span></div></article>
      <article class="stat-card"><div class="stat-icon orange">★</div><div><strong>${bestScore}%</strong><span>Best quiz score</span></div></article>
    </section>

    <section class="section-block">
      <div class="section-heading"><div><p class="eyebrow">CONTINUE LEARNING</p><h2>Your topics</h2></div><button class="text-btn" data-view="syllabus">View syllabus →</button></div>
      <div class="topic-grid">${syllabus.slice(0, 4).map(topicCard).join('')}</div>
    </section>

    <section class="quick-panel">
      <div><span class="quick-icon">◫</span><div><p class="eyebrow">READY FOR EXAMINATIONS?</p><h3>Practise Junior WAEC-style questions</h3></div></div>
      <button class="secondary-btn" data-view="pastQuestions">Open past questions</button>
    </section>`;
  bindViewButtons();
  document.getElementById('continueBtn').addEventListener('click', () => switchView('syllabus'));
}

function topicCard(topic) {
  const started = state.progress.has(topic.id);
  return `<article class="topic-card">
    <div class="topic-icon ${topic.color}">${topic.icon}</div>
    <div class="topic-content"><span class="topic-term">${topic.term}</span><h3>${topic.title}</h3><p>${topic.description}</p></div>
    <button class="topic-action ${started ? 'started' : ''}" data-topic="${topic.id}" aria-label="Open ${topic.title}">${started ? 'Continue' : 'Start'} <span>→</span></button>
  </article>`;
}

function syllabusView() {
  pageTitle.textContent = 'JSS3 Syllabus';
  root.innerHTML = `<section class="view-heading"><div><p class="eyebrow">COMPLETE CURRICULUM</p><h2>Mathematics topics</h2></div><span class="result-count">${syllabus.length} topics</span></section>
    <div class="full-topic-grid">${syllabus.map(topicCard).join('')}</div>`;
  bindTopicButtons();
}

function bindTopicButtons() {
  document.querySelectorAll('[data-topic]').forEach(btn => btn.addEventListener('click', () => {
    const topic = syllabus.find(t => t.id === btn.dataset.topic);
    state.progress.add(topic.id); saveProgress();
    openLesson(topic);
  }));
}

function openLesson(topic) {
  const topicQs = practiceQuestions.filter(q => q.topic === topic.id);
  root.innerHTML = `<button class="back-btn" id="backSyllabus">← Back to syllabus</button>
    <article class="lesson-header ${topic.color}"><div class="lesson-icon">${topic.icon}</div><div><span>${topic.term}</span><h2>${topic.title}</h2><p>${topic.description}</p></div></article>
    <section class="lesson-grid"><div class="lesson-card"><p class="eyebrow">KEY NOTES</p><h3>What you should know</h3>
      <ul class="lesson-notes">${topicNotes(topic.id)}</ul></div>
      <div class="lesson-card"><p class="eyebrow">TRY IT</p><h3>Quick practice</h3>
      ${topicQs.length ? topicQs.map((q,i) => `<div class="mini-question"><strong>${i+1}. ${q.question}</strong><div class="mini-options">${q.options.map((opt,j) => `<button type="button" class="mini-option"><b>${String.fromCharCode(65+j)}</b><span>${opt}</span></button>`).join('')}</div><details class="mini-answer"><summary>Show answer</summary><p><b>Answer:</b> ${q.options[q.answer]}</p><small>${q.explanation}</small></details></div>`).join('') : '<p>Complete the general practice quiz to test this topic.</p>'}
      <button class="primary-btn topic-practice">Practise this topic <span>→</span></button></div></section>`;
  document.getElementById('backSyllabus').addEventListener('click', syllabusView);
  document.querySelector('.topic-practice').addEventListener('click', () => { state.practiceIndex = 0; state.practiceScore = 0; state.answered = false; practiceView(topic.id); });
}

function topicNotes(id) {
  const notes = {
    numbers: ['Read place values correctly and use standard form for very large or small numbers.', 'To compare fractions, find a common denominator or convert to decimals.', 'Percentage change = (change ÷ original) × 100.'],
    algebra: ['Only combine terms that have the exact same variables and powers.', 'Use inverse operations equally on both sides of an equation.', 'Substitution means replacing a letter with its given number.'],
    geometry: ['Angles on a straight line add to 180°.', 'Angles around a point add to 360°.', 'For similar shapes, matching sides remain in the same ratio.'],
    statistics: ['Mean = sum of values ÷ number of values.', 'Median is the middle value after ordering the data.', 'Mode is the value with the highest frequency.'],
    mensuration: ['Always state the correct unit, such as cm² or cm³.', 'Area of triangle = ½ × base × perpendicular height.', 'Volume of a cube = edge × edge × edge.'],
    ratios: ['Divide both parts of a ratio by their highest common factor.', 'Direct proportion: as one quantity increases, the other increases at the same rate.', 'Inverse proportion: as one quantity increases, the other decreases.'],
    graphs: ['A point is written as (x, y).', 'The gradient describes the steepness of a straight line.', 'Gradient = change in y ÷ change in x.'],
    sets: ['n(A) means the number of elements in set A.', 'A ∪ B contains elements in A or B or both.', 'A ∩ B contains elements found in both sets.']
  };
  return notes[id].map(note => `<li>${note}</li>`).join('');
}

function practiceView(topicFilter = null) {
  pageTitle.textContent = 'Practice Quiz';
  state.practiceFilter = topicFilter;
  const pool = topicFilter ? practiceQuestions.filter(q => q.topic === topicFilter) : practiceQuestions;
  if (typeof practiceView.pool === 'undefined' || practiceView.pool !== pool) { practiceView.pool = pool; state.practiceIndex = 0; state.practiceScore = 0; state.answered = false; }
  const q = pool[state.practiceIndex];
  const total = pool.length;
  root.innerHTML = `<section class="quiz-layout"><div class="quiz-main">
    <div class="quiz-header"><button class="back-btn" id="quizBack">← Exit</button><div class="quiz-progress"><div><span>Question ${state.practiceIndex + 1} of ${total}</span><strong>${state.practiceScore} correct</strong></div><div class="progress-track"><div style="width:${((state.practiceIndex + 1) / total) * 100}%"></div></div></div></div>
    <article class="question-card"><span class="question-topic">${syllabus.find(t => t.id === q.topic)?.title || 'Mathematics'}</span><h2>${q.question}</h2>
      <div class="option-list">${q.options.map((opt,i) => `<button class="option-btn" data-option="${i}"><span>${String.fromCharCode(65+i)}</span>${opt}</button>`).join('')}</div>
      <div id="answerFeedback"></div>
    </article></div>
    <aside class="quiz-side"><div><p class="eyebrow">YOUR SCORE</p><strong>${state.practiceScore}/${total}</strong></div><div class="score-ring"><span>${Math.round((state.practiceScore / total) * 100)}%</span></div></aside></section>`;
  document.getElementById('quizBack').addEventListener('click', syllabusView);
  document.querySelectorAll('[data-option]').forEach(btn => btn.addEventListener('click', () => answerPractice(btn, q, pool)));
}

function answerPractice(btn, q, pool) {
  if (state.answered) return;
  state.answered = true;
  const chosen = Number(btn.dataset.option);
  const isCorrect = chosen === q.answer;
  if (isCorrect) state.practiceScore++;
  document.querySelectorAll('[data-option]').forEach((option, i) => { option.disabled = true; if (i === q.answer) option.classList.add('correct'); else if (i === chosen) option.classList.add('wrong'); });
  document.getElementById('answerFeedback').innerHTML = `<div class="feedback ${isCorrect ? 'is-correct' : 'is-wrong'}"><strong>${isCorrect ? 'Excellent!' : 'Not quite.'}</strong><p>${q.explanation}</p><button id="nextQuestion">${state.practiceIndex === pool.length - 1 ? 'See my result' : 'Next question'} →</button></div>`;
  document.getElementById('nextQuestion').addEventListener('click', () => {
    if (state.practiceIndex === pool.length - 1) finishPractice(pool); else { state.practiceIndex++; state.answered = false; practiceView(state.practiceFilter); }
  });
  localStorage.setItem('mathEaseAnswered', Number(localStorage.getItem('mathEaseAnswered') || 0) + 1);
}

function finishPractice(pool) {
  const percentage = Math.round((state.practiceScore / pool.length) * 100);
  const best = Math.max(Number(localStorage.getItem('mathEaseBest') || 0), percentage);
  localStorage.setItem('mathEaseBest', best);
  pageTitle.textContent = 'Quiz Complete';
  root.innerHTML = `<section class="result-card"><div class="result-icon ${percentage >= 70 ? 'success' : ''}">${percentage >= 70 ? '★' : '↻'}</div><p class="eyebrow">QUIZ COMPLETE</p><h2>${percentage >= 70 ? 'Great work!' : 'Good effort—keep practising!'}</h2><p>You answered <strong>${state.practiceScore} out of ${pool.length}</strong> questions correctly.</p><div class="result-score">${percentage}%</div><div class="result-actions"><button class="secondary-btn" id="retryQuiz">Try again</button><button class="primary-btn" id="openPast">Past questions <span>→</span></button></div></section>`;
  document.getElementById('retryQuiz').addEventListener('click', () => { state.practiceIndex = 0; state.practiceScore = 0; state.answered = false; practiceView(state.practiceFilter); });
  document.getElementById('openPast').addEventListener('click', () => switchView('pastQuestions'));
}

function pastQuestionsView() {
  pageTitle.textContent = 'Junior WAEC Past Questions';
  root.innerHTML = `<section class="view-heading"><div><p class="eyebrow">EXAM PREPARATION</p><h2>Past question archive</h2></div></section>
    <div class="archive-note"><strong>Practice archive</strong><p>Representative Junior WAEC-style questions for revision. Verify official papers with your school or examination council.</p></div>
    <div class="year-filter" id="yearFilter">${Object.keys(pastQuestions).reverse().map((year,i) => `<button class="${i === 0 ? 'active' : ''}" data-year="${year}">${year}</button>`).join('')}</div>
    <div id="pastQuestionList"></div>`;
  renderPastYear(Object.keys(pastQuestions).at(-1));
  document.querySelectorAll('[data-year]').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('[data-year]').forEach(b => b.classList.remove('active')); btn.classList.add('active'); renderPastYear(btn.dataset.year);
  }));
}

function renderPastYear(year) {
  const questions = pastQuestions[year];
  document.getElementById('pastQuestionList').innerHTML = `<div class="past-header"><div><span>JUNIOR WAEC PRACTICE</span><h3>${year} Mathematics</h3></div><strong>${questions.length} questions</strong></div>
    ${questions.map((item,i) => `<article class="past-card"><div class="past-number">${i+1}</div><div class="past-body"><h3>${item.q}</h3><div class="past-options">${item.options.map((opt,j) => `<span><b>${String.fromCharCode(65+j)}</b>${opt}</span>`).join('')}</div><details><summary>Show answer & explanation</summary><div class="past-answer"><strong>Answer: ${item.options[item.answer]}</strong><p>${item.explanation}</p></div></details></div></article>`).join('')}`;
}

function bindViewButtons() {
  document.querySelectorAll('[data-view]').forEach(btn => btn.addEventListener('click', () => switchView(btn.dataset.view)));
}

function switchView(view) {
  state.view = view;
  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.toggle('active', btn.dataset.view === view));
  if (view === 'dashboard') dashboardView();
  if (view === 'syllabus') syllabusView();
  if (view === 'practice') { practiceView.pool = null; state.practiceFilter = null; practiceView(); }
  if (view === 'pastQuestions') pastQuestionsView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
menuBtn.addEventListener('click', () => { const open = sidebar.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', open); });
document.querySelectorAll('.nav-item').forEach(btn => btn.addEventListener('click', () => { switchView(btn.dataset.view); sidebar.classList.remove('open'); menuBtn.setAttribute('aria-expanded','false'); }));

document.getElementById('themeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('mathEaseTheme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
if (localStorage.getItem('mathEaseTheme') === 'dark') document.body.classList.add('dark');

updateProgress();
dashboardView();
