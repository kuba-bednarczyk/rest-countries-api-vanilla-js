import { renderViewDashboard } from "./view-dashboard.js";
import { renderViewDetail } from "./view-detail.js";

if (window.location.search.includes("?country=")) {
  renderViewDetail();
} else { 
  document.querySelector('.filters').classList.add("active");
  renderViewDashboard();
};