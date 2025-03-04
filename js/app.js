import { renderViewDashboard } from "./view-dashboard.js";
import { renderViewDetail } from "./view-detail.js";

// wybor widoku strony:
// jesli url zawiera "?country=" to oznacza ze jestesmy w widoku informacji o konkretnym kraju (uruchamiamy funkcje renderViewDetails())
if (window.location.search.includes("?country=")) {
  renderViewDetail();
} else { 
  // w przeciwnym wypadku jestsmy w widoku ogolnym i mamy listę wszystkich bądz przefiltrowanych krajow (renderViewDashboard())
  document.querySelector('.filters').classList.add("active");
  renderViewDashboard();
};