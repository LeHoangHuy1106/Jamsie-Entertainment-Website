"use strict";

// Progressive enhancement: the narrow-screen menu stays visible if JS is unavailable.
const toggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");

if (toggle && navigation) {
  function closeMenu() {
    toggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("open");
  }

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      toggle.focus();
    }
  });

  const desktop = window.matchMedia("(min-width: 801px)");
  if (desktop.addEventListener) {
    desktop.addEventListener("change", closeMenu);
  } else if (desktop.addListener) {
    desktop.addListener(closeMenu);
  }

  document.documentElement.classList.add("js");
}
