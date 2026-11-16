const TOTAL_FILES = 624;
// الصفحات الثلاث الأولى مقدمات، وورقة الفاتحة تبدأ من ملف رقم 4 (التي تمثل صفحة المصحف رقم 1)
const MUSHAF_OFFSET = 3;
const TOTAL_MUSHAF_PAGES = 604;

const SURAHS = [
  { n: 1, name: "الفاتحة", page: 1 }, { n: 2, name: "البقرة", page: 2 },
  { n: 3, name: "آل عمران", page: 50 }, { n: 4, name: "النساء", page: 77 },
  { n: 5, name: "المائدة", page: 106 }, { n: 6, name: "الأنعام", page: 128 },
  { n: 7, name: "الأعراف", page: 151 }, { n: 8, name: "الأنفال", page: 177 },
  { n: 9, name: "التوبة", page: 187 }, { n: 10, name: "يونس", page: 208 },
  { n: 11, name: "هود", page: 221 }, { n: 12, name: "يوسف", page: 235 },
  { n: 13, name: "الرعد", page: 249 }, { n: 14, name: "إبراهيم", page: 255 },
  { n: 15, name: "الحجر", page: 262 }, { n: 16, name: "النحل", page: 267 },
  { n: 17, name: "الإسراء", page: 282 }, { n: 18, name: "الكهف", page: 293 },
  { n: 19, name: "مريم", page: 305 }, { n: 20, name: "طه", page: 312 },
  { n: 21, name: "الأنبياء", page: 322 }, { n: 22, name: "الحج", page: 332 },
  { n: 23, name: "المؤمنون", page: 342 }, { n: 24, name: "النور", page: 350 },
  { n: 25, name: "الفرقان", page: 359 }, { n: 26, name: "الشعراء", page: 367 },
  { n: 27, name: "النمل", page: 377 }, { n: 28, name: "القصص", page: 385 },
  { n: 29, name: "العنكبوت", page: 396 }, { n: 30, name: "الروم", page: 404 },
  { n: 31, name: "لقمان", page: 411 }, { n: 32, name: "السجدة", page: 415 },
  { n: 33, name: "الأحزاب", page: 418 }, { n: 34, name: "سبأ", page: 428 },
  { n: 35, name: "فاطر", page: 434 }, { n: 36, name: "يس", page: 440 },
  { n: 37, name: "الصافات", page: 446 }, { n: 38, name: "ص", page: 453 },
  { n: 39, name: "الزمر", page: 458 }, { n: 40, name: "غافر", page: 467 },
  { n: 41, name: "فصلت", page: 477 }, { n: 42, name: "الشورى", page: 483 },
  { n: 43, name: "الزخرف", page: 489 }, { n: 44, name: "الدخان", page: 496 },
  { n: 45, name: "الجاثية", page: 499 }, { n: 46, name: "الأحقاف", page: 502 },
  { n: 47, name: "محمد", page: 507 }, { n: 48, name: "الفتح", page: 511 },
  { n: 49, name: "الحجرات", page: 515 }, { n: 50, name: "ق", page: 518 },
  { n: 51, name: "الذاريات", page: 520 }, { n: 52, name: "الطور", page: 523 },
  { n: 53, name: "النجم", page: 526 }, { n: 54, name: "القمر", page: 528 },
  { n: 55, name: "الرحمن", page: 531 }, { n: 56, name: "الواقعة", page: 534 },
  { n: 57, name: "الحديد", page: 537 }, { n: 58, name: "المجادلة", page: 542 },
  { n: 59, name: "الحشر", page: 545 }, { n: 60, name: "الممتحنة", page: 549 },
  { n: 61, name: "الصف", page: 551 }, { n: 62, name: "الجمعة", page: 553 },
  { n: 63, name: "المنافقون", page: 554 }, { n: 64, name: "التغابن", page: 556 },
  { n: 65, name: "الطلاق", page: 558 }, { n: 66, name: "التحريم", page: 560 },
  { n: 67, name: "الملك", page: 562 }, { n: 68, name: "القلم", page: 564 },
  { n: 69, name: "الحاقة", page: 566 }, { n: 70, name: "المعارج", page: 568 },
  { n: 71, name: "نوح", page: 570 }, { n: 72, name: "الجن", page: 572 },
  { n: 73, name: "المزمل", page: 574 }, { n: 74, name: "المدثر", page: 575 },
  { n: 75, name: "القيامة", page: 577 }, { n: 76, name: "الإنسان", page: 578 },
  { n: 77, name: "المرسلات", page: 580 }, { n: 78, name: "النبأ", page: 582 },
  { n: 79, name: "النازعات", page: 583 }, { n: 80, name: "عبس", page: 585 },
  { n: 81, name: "التكوير", page: 586 }, { n: 82, name: "الانفطار", page: 587 },
  { n: 83, name: "المطففين", page: 587 }, { n: 84, name: "الانشقاق", page: 589 },
  { n: 85, name: "البروج", page: 590 }, { n: 86, name: "الطارق", page: 591 },
  { n: 87, name: "الأعلى", page: 591 }, { n: 88, name: "الغاشية", page: 592 },
  { n: 89, name: "الفجر", page: 593 }, { n: 90, name: "البلد", page: 594 },
  { n: 91, name: "الشمس", page: 595 }, { n: 92, name: "الليل", page: 595 },
  { n: 93, name: "الضحى", page: 596 }, { n: 94, name: "الشرح", page: 596 },
  { n: 95, name: "التين", page: 597 }, { n: 96, name: "العلق", page: 597 },
  { n: 97, name: "القدر", page: 598 }, { n: 98, name: "البينة", page: 598 },
  { n: 99, name: "الزلزلة", page: 599 }, { n: 100, name: "العاديات", page: 599 },
  { n: 101, name: "القارعة", page: 600 }, { n: 102, name: "التكاثر", page: 600 },
  { n: 103, name: "العصر", page: 601 }, { n: 104, name: "الهمزة", page: 601 },
  { n: 105, name: "الفيل", page: 601 }, { n: 106, name: "قريش", page: 602 },
  { n: 107, name: "الماعون", page: 602 }, { n: 108, name: "الكوثر", page: 602 },
  { n: 109, name: "الكافرون", page: 603 }, { n: 110, name: "النصر", page: 603 },
  { n: 111, name: "المسد", page: 603 }, { n: 112, name: "الإخلاص", page: 604 },
  { n: 113, name: "الفلق", page: 604 }, { n: 114, name: "الناس", page: 604 }
];

// قراءة آخر صفحة محفوظة (برقم صفحة المصحف 1-604)
let currentMushafPage = parseInt(localStorage.getItem("quran_last_page") || "1", 10);
let isZoomed = false;

const imgEl = document.getElementById("quran-page");
const zoomWrapper = document.getElementById("zoom-wrapper");
const surahTitleEl = document.getElementById("surah-title");
const pageMetaEl = document.getElementById("page-meta");
const sliderEl = document.getElementById("page-slider");
const inputEl = document.getElementById("page-input");
const topBar = document.getElementById("top-bar");
const bottomBar = document.getElementById("bottom-bar");

// ضبط السلايدر ليكون من 1 إلى 604
sliderEl.min = 1;
sliderEl.max = TOTAL_MUSHAF_PAGES;
inputEl.min = 1;
inputEl.max = TOTAL_MUSHAF_PAGES;

function getFileIndex(mushafPage) {
  if (mushafPage <= 0) return 1;
  return mushafPage + MUSHAF_OFFSET;
}

function getMushafPage(fileIndex) {
  if (fileIndex <= MUSHAF_OFFSET) return 1;
  return fileIndex - MUSHAF_OFFSET;
}

function formatPagePath(fileIndex) {
  return `assets/pages/page_${String(fileIndex).padStart(3, "0")}.webp`;
}

function getSurahForPage(mushafPage) {
  let current = SURAHS[0];
  for (const s of SURAHS) {
    if (mushafPage >= s.page) current = s;
    else break;
  }
  return `سورة ${current.name}`;
}

function getJuzForPage(mushafPage) {
  return Math.min(30, Math.max(1, Math.floor((mushafPage - 1) / 20) + 1));
}

function goToMushafPage(mushafPage) {
  const target = Math.min(TOTAL_MUSHAF_PAGES, Math.max(1, mushafPage));
  currentMushafPage = target;
  localStorage.setItem("quran_last_page", String(currentMushafPage));

  const fileIdx = getFileIndex(currentMushafPage);
  imgEl.src = formatPagePath(fileIdx);

  surahTitleEl.textContent = getSurahForPage(currentMushafPage);
  const juz = getJuzForPage(currentMushafPage);
  pageMetaEl.textContent = `صفحة ${currentMushafPage} • الجزء ${juz}`;

  sliderEl.value = currentMushafPage;
  inputEl.value = currentMushafPage;
  resetZoom();
}

function nextPage() {
  if (currentMushafPage < TOTAL_MUSHAF_PAGES) goToMushafPage(currentMushafPage + 1);
}

function prevPage() {
  if (currentMushafPage > 1) goToMushafPage(currentMushafPage - 1);
}

function toggleBars() {
  topBar.classList.toggle("hidden-bar");
  bottomBar.classList.toggle("hidden-bar");
}

function resetZoom() {
  isZoomed = false;
  zoomWrapper.style.transform = "scale(1)";
}

// التحكم باللمس والتقليب
let lastTap = 0;
document.getElementById("tap-center").addEventListener("click", (e) => {
  const now = Date.now();
  if (now - lastTap < 280) {
    isZoomed = !isZoomed;
    zoomWrapper.style.transform = isZoomed ? "scale(1.65)" : "scale(1)";
  } else {
    toggleBars();
  }
  lastTap = now;
});

let touchStartX = 0;
let touchStartY = 0;
const viewer = document.getElementById("viewer-container");

viewer.addEventListener("touchstart", (e) => {
  if (e.touches.length === 1) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }
}, { passive: true });

viewer.addEventListener("touchend", (e) => {
  if (isZoomed || e.changedTouches.length !== 1) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
    if (dx > 0) nextPage(); // السحب لليمين -> الصفحة التالية
    else prevPage();        // السحب لليسار -> الصفحة السابقة
  }
}, { passive: true });

// الأزرار
document.getElementById("btn-next").addEventListener("click", nextPage);
document.getElementById("btn-prev").addEventListener("click", prevPage);
document.getElementById("tap-next").addEventListener("click", nextPage);
document.getElementById("tap-prev").addEventListener("click", prevPage);

sliderEl.addEventListener("input", (e) => goToMushafPage(parseInt(e.target.value, 10)));
document.getElementById("btn-go").addEventListener("click", () => {
  goToMushafPage(parseInt(inputEl.value, 10));
});

// نافذة عن المطور والإهداء
const aboutModal = document.getElementById("about-modal");
document.getElementById("btn-about").addEventListener("click", () => {
  aboutModal.classList.remove("hidden");
});
document.getElementById("btn-close-about").addEventListener("click", () => {
  aboutModal.classList.add("hidden");
});
// إغلاق النافذة عند الضغط خارج البطاقة
aboutModal.addEventListener("click", (e) => {
  if (e.target === aboutModal) {
    aboutModal.classList.add("hidden");
  }
});

// الفهرس
const indexModal = document.getElementById("index-modal");
document.getElementById("btn-index").addEventListener("click", () => {
  indexModal.classList.remove("hidden");
  updateBookmarkUI();
});
document.getElementById("btn-close-index").addEventListener("click", () => {
  indexModal.classList.add("hidden");
});

const tabSurahs = document.getElementById("tab-surahs");
const tabJuzs = document.getElementById("tab-juzs");

function renderSurahs(filter = "") {
  tabSurahs.innerHTML = "";
  SURAHS.filter((s) => s.name.includes(filter)).forEach((s) => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.innerHTML = `<span>${s.n}. سورة ${s.name}</span><small>صفحة ${s.page}</small>`;
    div.addEventListener("click", () => {
      goToMushafPage(s.page);
      indexModal.classList.add("hidden");
    });
    tabSurahs.appendChild(div);
  });
}

function renderJuzs() {
  tabJuzs.innerHTML = "";
  for (let j = 1; j <= 30; j++) {
    const startPage = j === 1 ? 1 : 1 + (j - 1) * 20;
    const div = document.createElement("div");
    div.className = "list-item";
    div.innerHTML = `<span>الجزء ${j}</span><small>صفحة ${startPage}</small>`;
    div.addEventListener("click", () => {
      goToMushafPage(startPage);
      indexModal.classList.add("hidden");
    });
    tabJuzs.appendChild(div);
  }
}

document.getElementById("surah-search").addEventListener("input", (e) => {
  renderSurahs(e.target.value.trim());
});

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(`tab-${btn.dataset.tab}`).classList.add("active");
  });
});

// العلامة المرجعية
function updateBookmarkUI() {
  const saved = localStorage.getItem("quran_bookmark") || "1";
  document.getElementById("saved-bookmark-page").textContent = saved;
}
document.getElementById("btn-save-bookmark").addEventListener("click", () => {
  localStorage.setItem("quran_bookmark", String(currentMushafPage));
  updateBookmarkUI();
  alert("تم حفظ صفحة المصحف الحالية كعلامة مرجعية");
});
document.getElementById("btn-goto-bookmark").addEventListener("click", () => {
  const saved = parseInt(localStorage.getItem("quran_bookmark") || "1", 10);
  goToMushafPage(saved);
  indexModal.classList.add("hidden");
});

// التهيئة الأولية
renderSurahs();
renderJuzs();
goToMushafPage(currentMushafPage);