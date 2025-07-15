function toggleDetails(headerElement) {
  const card = headerElement.parentElement;

  card.classList.toggle("active");
}

function toggleDetails(card) {
  const title = card.querySelector(".book-title").textContent;

  if (title === "The Royals of Scandal") {
    document.getElementById("modal-overlay").style.display = "flex";
  } else if (title === "The Royals of Slander") {
    document.getElementById("modal-overlay-2").style.display = "flex";
  } else if (title === "The Royals of Perjury") {
    document.getElementById("modal-overlay-3").style.display = "flex";
  } else if (title === "The Royals of Regicide") {
    document.getElementById("modal-overlay-4").style.display = "flex";
  } else if (title === "The Royals of Acrimony") {
    document.getElementById("modal-overlay-5").style.display = "flex";
  } else if (title === "The Royals of Vengeance") {
    document.getElementById("modal-overlay-6").style.display = "flex";
  } else if (title === "The Royals of Anarchy") {
    document.getElementById("modal-overlay-7").style.display = "flex";
  } 
}

function closeModal(bookNumber) {
  document.getElementById(`modal-overlay${bookNumber === 1 ? '' : '-' + bookNumber}`).style.display = "none";
}

function openPrelude() {
  document.getElementById("prelude-modal").style.display = "flex";
}

function closePrelude() {
  document.getElementById("prelude-modal").style.display = "none";
}

function continueReading() {
  document.getElementById("chapter-list").style.display = "block";
}

function toggleChapter(chapterNumber) {
  const id = `desc-${chapterNumber}`;
  const descBox = document.getElementById(id);
  const isVisible = descBox.style.display === "block";
  descBox.style.display = isVisible ? "none" : "block";
}

