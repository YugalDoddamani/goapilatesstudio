"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");

function setMenuOpen(isOpen) {
  if (!menuToggle || !primaryNavigation) return;

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  primaryNavigation.classList.toggle("is-open", isOpen);
}

if (menuToggle && primaryNavigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  primaryNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });

  document.addEventListener("click", (event) => {
    if (
      menuToggle.getAttribute("aria-expanded") === "true" &&
      !primaryNavigation.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) setMenuOpen(false);
  });
}

const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const locationCards = Array.from(document.querySelectorAll(".location-card[data-region]"));
const filterStatus = document.querySelector("#studio-filter-status");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    locationCards.forEach((card) => {
      const isVisible = filter === "all" || card.dataset.region === filter;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    if (filterStatus) {
      const cityName = filter === "all" ? "all studios" : filter === "goa" ? "Goa" : "Bengaluru";
      filterStatus.textContent = `Showing ${visibleCount} ${cityName} ${visibleCount === 1 ? "studio" : "studios"}.`;
    }
  });
});

const sessionInterest = document.querySelector("#session-interest");

document.querySelectorAll("[data-interest]").forEach((link) => {
  link.addEventListener("click", () => {
    if (!sessionInterest) return;
    const interest = link.dataset.interest;
    const matchingOption = Array.from(sessionInterest.options).find((option) => option.value === interest);
    if (matchingOption) sessionInterest.value = interest;
  });
});

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    const name = document.querySelector("#visitor-name")?.value.trim();
    const studioSelect = document.querySelector("#preferred-studio");
    const interestSelect = document.querySelector("#session-interest");
    const selectedStudio = studioSelect?.selectedOptions[0];
    const phone = selectedStudio?.dataset.phone;

    if (!name || !selectedStudio?.value || !phone) {
      if (formStatus) formStatus.textContent = "Please add your name and choose a studio to continue.";
      return;
    }

    const interest = interestSelect?.value || "A first visit / consultation";
    const message = `Hi Goa Pilates Studio, my name is ${name}. I’m interested in ${interest} at the ${selectedStudio.value} studio. Could you please share more details about a first visit?`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    if (formStatus) {
      formStatus.replaceChildren();
      formStatus.append("WhatsApp should open in a new tab. If it doesn’t, ");
      const fallbackLink = document.createElement("a");
      fallbackLink.href = whatsappUrl;
      fallbackLink.target = "_blank";
      fallbackLink.rel = "noopener noreferrer";
      fallbackLink.textContent = "open your draft message here";
      formStatus.append(fallbackLink, ". Review it before sending.");
    }

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());
