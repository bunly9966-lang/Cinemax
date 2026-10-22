/* ==========================================================================
   1. MOVIE COLLECTION DATASET
   Accurate movie information with public posters, backdrops, and trailer URLs
   ========================================================================== */
const MOVIES_DATA = [
  {
    id: 1,
    title: "Dune: Part Two",
    year: 2024,
    rating: 8.6,
    genres: ["Science Fiction", "Adventure", "Action"],
    runtime: "2h 46m",
    description:
      "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future.",
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Javier Bardem"],
    trailerUrl: "https://www.youtube.com/watch?v=Way9Dexny3w"
  },
  {
    id: 2,
    title: "Oppenheimer",
    year: 2023,
    rating: 8.9,
    genres: ["Drama", "Thriller"],
    runtime: "3h 00m",
    description:
      "The story of American scientist J. Robert Oppenheimer and his pivotal role in the development of the atomic bomb during World War II, exploring the moral weight and political fallout that followed.",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
    trailerUrl: "https://www.youtube.com/watch?v=uYPbbksJxIg"
  },
  {
    id: 3,
    title: "Spider-Man: Across the Spider-Verse",
    year: 2023,
    rating: 8.7,
    genres: ["Animation", "Action", "Adventure"],
    runtime: "2h 20m",
    description:
      "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
    poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    cast: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac", "Daniel Kaluuya"],
    trailerUrl: "https://www.youtube.com/watch?v=shW9i6k8cB0"
  },
  {
    id: 4,
    title: "Everything Everywhere All at Once",
    year: 2022,
    rating: 7.8,
    genres: ["Action", "Adventure", "Comedy", "Science Fiction"],
    runtime: "2h 19m",
    description:
      "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led.",
    poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/ss0Os3uWJfQAENILHZUdX8Tt1OC.jpg",
    director: "Daniel Kwan, Daniel Scheinert",
    cast: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan", "Jamie Lee Curtis"],
    trailerUrl: "https://www.youtube.com/watch?v=wxN1T1uxQ2g"
  },
  {
    id: 5,
    title: "Parasite",
    year: 2019,
    rating: 8.5,
    genres: ["Thriller", "Drama", "Comedy"],
    runtime: "2h 12m",
    description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan as secrets unravel inside a modernist home.",
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
    director: "Bong Joon-ho",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik"],
    trailerUrl: "https://www.youtube.com/watch?v=5xH0HfJHsaY"
  },
  {
    id: 6,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genres: ["Action", "Thriller", "Drama"],
    runtime: "2h 32m",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Gary Oldman"],
    trailerUrl: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
  },
  {
    id: 7,
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    genres: ["Science Fiction", "Adventure", "Drama"],
    runtime: "2h 49m",
    description:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    trailerUrl: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
  },
  {
    id: 8,
    title: "Get Out",
    year: 2017,
    rating: 7.8,
    genres: ["Horror", "Thriller"],
    runtime: "1h 44m",
    description:
      "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/vZ7EVk7FaNEWYqlVWbFLHP8Z0LU.jpg",
    director: "Jordan Peele",
    cast: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford", "Catherine Keener"],
    trailerUrl: "https://www.youtube.com/watch?v=DzfpyUB60YY"
  },
  {
    id: 9,
    title: "Coco",
    year: 2017,
    rating: 8.4,
    genres: ["Animation", "Adventure", "Comedy"],
    runtime: "1h 45m",
    description:
      "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
    poster: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
    director: "Lee Unkrich",
    cast: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt", "Alanna Ubach"],
    trailerUrl: "https://www.youtube.com/watch?v=Rvr68u6k5sI"
  },
  {
    id: 10,
    title: "Knives Out",
    year: 2019,
    rating: 7.9,
    genres: ["Comedy", "Thriller", "Drama"],
    runtime: "2h 10m",
    description:
      "When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate.",
    poster: "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/4HWAQu28e2yaWrtupFPGFkdNU7V.jpg",
    director: "Rian Johnson",
    cast: ["Daniel Craig", "Ana de Armas", "Chris Evans", "Jamie Lee Curtis"],
    trailerUrl: "https://www.youtube.com/watch?v=qGqiHJTsRkQ"
  },
  {
    id: 11,
    title: "Mad Max: Fury Road",
    year: 2015,
    rating: 8.1,
    genres: ["Action", "Adventure", "Science Fiction"],
    runtime: "2h 00m",
    description:
      "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
    poster: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/nlCHUWjY9XWbuEUQauCBgnY8ymF.jpg",
    director: "George Miller",
    cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult", "Hugh Keays-Byrne"],
    trailerUrl: "https://www.youtube.com/watch?v=hEJnMQG9ev8"
  },
  {
    id: 12,
    title: "A Quiet Place",
    year: 2018,
    rating: 7.5,
    genres: ["Horror", "Science Fiction", "Thriller"],
    runtime: "1h 30m",
    description:
      "A family is forced to live in silence while hiding from creatures that hunt by sound. Knowing that even the slightest whisper or footstep can bring death, Evelyn and Lee are determined to find a way to protect their children.",
    poster: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/roYyPiQDQKmIKUEhO912693tSja.jpg",
    director: "John Krasinski",
    cast: ["Emily Blunt", "John Krasinski", "Millicent Simmonds", "Noah Jupe"],
    trailerUrl: "https://www.youtube.com/watch?v=WR7cc5t7tv8"
  }
];

/* Available Genre Filters */
const GENRES_LIST = [
  "All Movies",
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Drama",
  "Horror",
  "Science Fiction",
  "Thriller"
];

/* ==========================================================================
   2. APPLICATION STATE & LOCAL STORAGE KEYS
   ========================================================================== */
const STORAGE_KEYS = {
  WATCHLIST: "cinemax_watchlist_ids",
  THEME: "cinemax_theme_preference"
};

const state = {
  selectedGenre: "All Movies",
  searchQuery: "",
  sortBy: "default",
  watchlistIds: [],
  activeModalMovieId: null,
  featuredMovieId: 1
};

/* ==========================================================================
   3. FALLBACK SVG POSTER GENERATOR
   Automatically generates a styled SVG placeholder if a poster fails to load
   ========================================================================== */
function createFallbackImage(title, isWide = false) {
  const safeTitle = String(title || "CINEMAX").replace(/[<>&"']/g, "");
  const width = isWide ? 1200 : 400;
  const height = isWide ? 675 : 600;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#111827"/>
          <stop offset="50%" stop-color="#1e1b4b"/>
          <stop offset="100%" stop-color="#31102f"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <circle cx="${width / 2}" cy="${height / 2 - 35}" r="36" fill="none" stroke="#7c3aed" stroke-width="3"/>
      <polygon points="${width / 2 - 10},${height / 2 - 50} ${width / 2 - 10},${height / 2 - 20} ${width / 2 + 16},${height / 2 - 35}" fill="#e11d48"/>
      <text x="50%" y="${height / 2 + 35}" fill="#f8fafc" font-family="sans-serif" font-size="22" font-weight="bold" text-anchor="middle">${safeTitle}</text>
      <text x="50%" y="${height / 2 + 65}" fill="#94a3b8" font-family="sans-serif" font-size="14" text-anchor="middle">CINEMAX OFFICIAL SELECTION</text>
    </svg>
  `.trim();
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

/* ==========================================================================
   4. LOCAL STORAGE FUNCTIONS
   ========================================================================== */
function loadStateFromStorage() {
  try {
    const savedWatchlist = localStorage.getItem(STORAGE_KEYS.WATCHLIST);
    if (savedWatchlist) {
      const parsed = JSON.parse(savedWatchlist);
      if (Array.isArray(parsed)) {
        state.watchlistIds = parsed.filter((id) =>
          MOVIES_DATA.some((movie) => movie.id === id)
        );
      }
    }
  } catch (error) {
    console.warn("Could not read watchlist from Local Storage:", error);
    state.watchlistIds = [];
  }

  try {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    const themeToApply = savedTheme === "light" ? "light" : "dark";
    applyTheme(themeToApply);
  } catch (error) {
    applyTheme("dark");
  }
}

function saveWatchlistToStorage() {
  try {
    localStorage.setItem(
      STORAGE_KEYS.WATCHLIST,
      JSON.stringify(state.watchlistIds)
    );
  } catch (error) {
    console.warn("Could not save watchlist to Local Storage:", error);
  }
}

/* ==========================================================================
   5. THEME TOGGLE FUNCTIONS
   ========================================================================== */
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const toggleBtn = document.getElementById("themeToggleBtn");
  const iconContainer = document.getElementById("themeIconContainer");

  if (theme === "light") {
    toggleBtn.setAttribute("aria-label", "Switch to dark mode");
    iconContainer.innerHTML = `
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
  } else {
    toggleBtn.setAttribute("aria-label", "Switch to light mode");
    iconContainer.innerHTML = `
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
  }

  try {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  } catch (error) {
    console.warn("Could not save theme preference:", error);
  }
}

function toggleTheme() {
  const currentTheme =
    document.documentElement.getAttribute("data-theme") || "dark";
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
}

/* ==========================================================================
   6. HERO SECTION RENDERING
   ========================================================================== */
function renderHero() {
  const heroMovie =
    MOVIES_DATA.find((m) => m.id === state.featuredMovieId) || MOVIES_DATA[0];
  const backdropImg = document.getElementById("heroBackdropImg");
  const heroContent = document.getElementById("heroContent");

  backdropImg.src = heroMovie.backdrop;
  backdropImg.alt = `${heroMovie.title} promotional backdrop`;
  backdropImg.onerror = function () {
    this.onerror = null;
    this.src = createFallbackImage(heroMovie.title, true);
  };

  const isSaved = state.watchlistIds.includes(heroMovie.id);

  heroContent.innerHTML = `
    <div class="hero-badge-row">
      <span class="featured-pill">Featured Premiere</span>
      <span class="hero-meta-item">
        <span class="rating-star" aria-hidden="true">★</span>
        <span>${heroMovie.rating.toFixed(1)} / 10</span>
      </span>
      <span class="hero-meta-item">${heroMovie.year}</span>
      <span class="hero-meta-item">${heroMovie.runtime}</span>
      <span class="hero-meta-item">${heroMovie.genres.join(" • ")}</span>
    </div>

    <h1 class="hero-title">${heroMovie.title}</h1>
    <p class="hero-description">${heroMovie.description}</p>

    <div class="hero-buttons">
      <button type="button" class="btn btn-primary" id="heroTrailerBtn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        <span>Watch Trailer</span>
      </button>

      <button type="button" class="btn btn-secondary" id="heroDetailsBtn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        <span>More Details</span>
      </button>

      <button type="button" class="btn btn-glass ${isSaved ? "in-watchlist" : ""}" id="heroWatchlistBtn">
        ${getWatchlistButtonSvg(isSaved)}
        <span>${isSaved ? "In Watchlist" : "Add to Watchlist"}</span>
      </button>
    </div>
  `;

  document.getElementById("heroTrailerBtn").addEventListener("click", () => {
    openTrailerUrl(heroMovie);
  });

  document.getElementById("heroDetailsBtn").addEventListener("click", () => {
    openMovieModal(heroMovie.id);
  });

  document.getElementById("heroWatchlistBtn").addEventListener("click", () => {
    toggleWatchlist(heroMovie.id);
  });
}

function getWatchlistButtonSvg(isSaved) {
  if (isSaved) {
    return `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
      </svg>
    `;
  }
  return `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
    </svg>
  `;
}

/* ==========================================================================
   7. GENRE FILTERS, SEARCH & SORTING FUNCTIONS
   ========================================================================== */
function renderGenreControls() {
  const pillsContainer = document.getElementById("genreFilterPills");
  const dropdownMenu = document.getElementById("genreDropdownMenu");

  pillsContainer.innerHTML = GENRES_LIST.map((genre) => {
    const isActive = state.selectedGenre === genre;
    return `
      <button
        type="button"
        class="genre-pill ${isActive ? "active" : ""}"
        data-genre="${genre}"
        aria-pressed="${isActive}"
      >${genre}</button>
    `;
  }).join("");

  dropdownMenu.innerHTML = GENRES_LIST.map((genre) => {
    const isActive = state.selectedGenre === genre;
    const count =
      genre === "All Movies"
        ? MOVIES_DATA.length
        : MOVIES_DATA.filter((m) => m.genres.includes(genre)).length;

    return `
      <button
        type="button"
        class="dropdown-item ${isActive ? "active" : ""}"
        data-genre="${genre}"
        role="menuitem"
      >
        <span>${genre}</span>
        <small>${count}</small>
      </button>
    `;
  }).join("");
}

function filterMovies(movies) {
  return movies.filter((movie) => {
    const matchesGenre =
      state.selectedGenre === "All Movies" ||
      movie.genres.includes(state.selectedGenre);

    if (!matchesGenre) return false;

    const query = state.searchQuery.trim().toLowerCase();
    if (!query) return true;

    const matchesTitle = movie.title.toLowerCase().includes(query);
    const matchesYear = String(movie.year).includes(query);
    const matchesGenreText = movie.genres.some((g) =>
      g.toLowerCase().includes(query)
    );

    return matchesTitle || matchesYear || matchesGenreText;
  });
}

function sortMovies(movies) {
  // Clone the array first so we never modify the original dataset
  const copy = [...movies];

  switch (state.sortBy) {
    case "rating-desc":
      return copy.sort((a, b) => b.rating - a.rating);
    case "rating-asc":
      return copy.sort((a, b) => a.rating - b.rating);
    case "year-desc":
      return copy.sort((a, b) => b.year - a.year);
    case "year-asc":
      return copy.sort((a, b) => a.year - b.year);
    case "title-asc":
      return copy.sort((a, b) => a.title.localeCompare(b.title));
    case "title-desc":
      return copy.sort((a, b) => b.title.localeCompare(a.title));
    case "default":
    default:
      return copy;
  }
}

/* ==========================================================================
   8. RENDERING MOVIE CARDS & COLLECTION
   ========================================================================== */
function createMovieCardElement(movie) {
  const isSaved = state.watchlistIds.includes(movie.id);
  const article = document.createElement("article");
  article.className = "movie-card";
  article.setAttribute("data-movie-id", movie.id);
  article.setAttribute("tabindex", "0");
  article.setAttribute("aria-label", `${movie.title} (${movie.year})`);

  article.innerHTML = `
    <div class="card-poster-wrap">
      <img
        class="card-poster"
        src="${movie.poster}"
        alt="${movie.title} movie poster"
        loading="lazy"
      >
      <span class="card-rating-badge" aria-label="Rating ${movie.rating} out of 10">
        <span class="rating-star" aria-hidden="true">★</span>
        <span>${movie.rating.toFixed(1)}</span>
      </span>
      <button
        type="button"
        class="card-watchlist-btn ${isSaved ? "active" : ""}"
        data-watchlist-btn="${movie.id}"
        aria-label="${
          isSaved
            ? `Remove ${movie.title} from Watchlist`
            : `Add ${movie.title} to Watchlist`
        }"
        title="${isSaved ? "Remove from Watchlist" : "Add to Watchlist"}"
      >
        ${getWatchlistButtonSvg(isSaved)}
      </button>
    </div>

    <div class="card-body">
      <div class="card-meta">
        <span>${movie.year}</span>
        <span>${movie.runtime}</span>
      </div>
      <h3 class="card-title">${movie.title}</h3>
      <div class="card-genres">
        ${movie.genres
          .map((g) => `<span class="card-genre-tag">${g}</span>`)
          .join("")}
      </div>
      <button type="button" class="card-details-btn" data-details-btn="${movie.id}">
        <span>More Details</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </div>
  `;

  // Fallback poster if image fails to load
  const posterImg = article.querySelector(".card-poster");
  posterImg.onerror = function () {
    this.onerror = null;
    this.src = createFallbackImage(movie.title, false);
  };

  // Watchlist button click (stopPropagation prevents opening modal)
  const watchlistBtn = article.querySelector("[data-watchlist-btn]");
  watchlistBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleWatchlist(movie.id);
  });

  // More Details button click
  const detailsBtn = article.querySelector("[data-details-btn]");
  detailsBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    openMovieModal(movie.id);
  });

  // Clicking anywhere else on the card opens the modal
  article.addEventListener("click", () => {
    openMovieModal(movie.id);
  });

  // Keyboard accessibility for card
  article.addEventListener("keydown", (event) => {
    if (
      event.target === article &&
      (event.key === "Enter" || event.key === " ")
    ) {
      event.preventDefault();
      openMovieModal(movie.id);
    }
  });

  return article;
}

function renderMovies() {
  const movieGrid = document.getElementById("movieGrid");
  const emptyState = document.getElementById("emptyCollectionState");
  const emptyMessage = document.getElementById("emptyCollectionMessage");
  const countDisplay = document.getElementById("movieCountDisplay");
  const activeFilterStatus = document.getElementById("activeFilterStatus");

  const filtered = filterMovies(MOVIES_DATA);
  const sorted = sortMovies(filtered);

  const totalCount = MOVIES_DATA.length;
  countDisplay.innerHTML = `Showing <strong>${sorted.length}</strong> of <strong>${totalCount}</strong> movies`;

  const hasActiveFilter =
    state.selectedGenre !== "All Movies" || state.searchQuery.trim() !== "";
  if (hasActiveFilter) {
    const parts = [];
    if (state.selectedGenre !== "All Movies") {
      parts.push(`Genre: "${state.selectedGenre}"`);
    }
    if (state.searchQuery.trim() !== "") {
      parts.push(`Search: "${state.searchQuery.trim()}"`);
    }

    activeFilterStatus.innerHTML = `
      <div class="active-filter-indicator">
        <span>Active (${parts.join(" • ")})</span>
        <button type="button" class="reset-filters-link" id="inlineResetBtn">Clear</button>
      </div>
    `;
    document
      .getElementById("inlineResetBtn")
      .addEventListener("click", resetAllFilters);
  } else {
    activeFilterStatus.innerHTML = "";
  }

  movieGrid.innerHTML = "";
  if (sorted.length === 0) {
    movieGrid.hidden = true;
    emptyState.hidden = false;
    const queryText = state.searchQuery.trim();
    if (queryText && state.selectedGenre !== "All Movies") {
      emptyMessage.textContent = `No movies matched "${queryText}" within the ${state.selectedGenre} genre.`;
    } else if (queryText) {
      emptyMessage.textContent = `No movies matched your search for "${queryText}". Try searching by another title, genre, or release year.`;
    } else {
      emptyMessage.textContent = `No movies found in the ${state.selectedGenre} category.`;
    }
  } else {
    movieGrid.hidden = false;
    emptyState.hidden = true;
    sorted.forEach((movie) => {
      movieGrid.appendChild(createMovieCardElement(movie));
    });
  }
}

function resetAllFilters() {
  state.selectedGenre = "All Movies";
  state.searchQuery = "";
  state.sortBy = "default";

  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearSearchBtn");
  const sortSelect = document.getElementById("sortSelect");

  searchInput.value = "";
  clearBtn.classList.remove("visible");
  sortSelect.value = "default";

  renderGenreControls();
  renderMovies();
}

/* ==========================================================================
   9. WATCHLIST MANAGEMENT
   ========================================================================== */
function addToWatchlist(movieId) {
  if (!state.watchlistIds.includes(movieId)) {
    state.watchlistIds.push(movieId);
    saveWatchlistToStorage();
    const movie = MOVIES_DATA.find((m) => m.id === movieId);
    if (movie) {
      showToast(`Added "${movie.title}" to My Watchlist`, "added");
    }
    syncAllWatchlistViews();
  }
}

function removeFromWatchlist(movieId) {
  const index = state.watchlistIds.indexOf(movieId);
  if (index !== -1) {
    state.watchlistIds.splice(index, 1);
    saveWatchlistToStorage();
    const movie = MOVIES_DATA.find((m) => m.id === movieId);
    if (movie) {
      showToast(`Removed "${movie.title}" from My Watchlist`, "removed");
    }
    syncAllWatchlistViews();
  }
}

function toggleWatchlist(movieId) {
  if (state.watchlistIds.includes(movieId)) {
    removeFromWatchlist(movieId);
  } else {
    addToWatchlist(movieId);
  }
}

function renderWatchlist() {
  const watchlistGrid = document.getElementById("watchlistGrid");
  const emptyWatchlistState = document.getElementById("emptyWatchlistState");
  const badge = document.getElementById("navWatchlistCount");

  badge.textContent = String(state.watchlistIds.length);

  const savedMovies = state.watchlistIds
    .map((id) => MOVIES_DATA.find((m) => m.id === id))
    .filter(Boolean);

  watchlistGrid.innerHTML = "";

  if (savedMovies.length === 0) {
    watchlistGrid.hidden = true;
    emptyWatchlistState.hidden = false;
  } else {
    watchlistGrid.hidden = false;
    emptyWatchlistState.hidden = true;
    savedMovies.forEach((movie) => {
      watchlistGrid.appendChild(createMovieCardElement(movie));
    });
  }
}

function syncAllWatchlistViews() {
  renderHero();
  renderMovies();
  renderWatchlist();
  if (state.activeModalMovieId !== null) {
    updateModalWatchlistButton(state.activeModalMovieId);
  }
}

/* ==========================================================================
   10. MOVIE DETAILS MODAL
   ========================================================================== */
function openMovieModal(movieId) {
  const movie = MOVIES_DATA.find((m) => m.id === Number(movieId));
  if (!movie) return;

  state.activeModalMovieId = movie.id;
  const modalOverlay = document.getElementById("movieModal");
  const modalBody = document.getElementById("modalBodyContent");
  const isSaved = state.watchlistIds.includes(movie.id);

  const directorHtml = movie.director
    ? `<div class="modal-credit-line"><strong>Director:</strong><span>${movie.director}</span></div>`
    : "";

  const castHtml =
    Array.isArray(movie.cast) && movie.cast.length > 0
      ? `<div class="modal-credit-line"><strong>Main Cast:</strong><span>${movie.cast.join(", ")}</span></div>`
      : "";

  const creditsBlock =
    directorHtml || castHtml
      ? `<div class="modal-credits">${directorHtml}${castHtml}</div>`
      : "";

  modalBody.innerHTML = `
    <div class="modal-banner">
      <img id="modalBannerImg" src="${movie.backdrop || movie.poster}" alt="${movie.title} backdrop">
      <div class="modal-banner-gradient"></div>
    </div>

    <div class="modal-content-grid">
      <div class="modal-poster-wrap">
        <img id="modalPosterImg" src="${movie.poster}" alt="${movie.title} poster">
      </div>

      <div class="modal-info">
        <h2 class="modal-title" id="modalTitle">${movie.title}</h2>

        <div class="modal-meta-row">
          <span class="modal-rating">★ ${movie.rating.toFixed(1)} / 10</span>
          <span>•</span>
          <span>${movie.year}</span>
          ${movie.runtime ? `<span>•</span><span>${movie.runtime}</span>` : ""}
        </div>

        <div class="modal-genres">
          ${movie.genres.map((g) => `<span class="card-genre-tag">${g}</span>`).join("")}
        </div>

        <p class="modal-description">${movie.description}</p>

        ${creditsBlock}

        <div class="modal-actions">
          <button type="button" class="btn btn-primary" id="modalTrailerBtn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span>Watch Trailer</span>
          </button>

          <button type="button" class="btn btn-secondary" id="modalWatchlistBtn">
            ${getWatchlistButtonSvg(isSaved)}
            <span>${isSaved ? "Remove from Watchlist" : "Add to Watchlist"}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  const bannerImg = document.getElementById("modalBannerImg");
  bannerImg.onerror = function () {
    this.onerror = null;
    this.src = createFallbackImage(movie.title, true);
  };

  const posterImg = document.getElementById("modalPosterImg");
  posterImg.onerror = function () {
    this.onerror = null;
    this.src = createFallbackImage(movie.title, false);
  };

  document.getElementById("modalTrailerBtn").addEventListener("click", () => {
    openTrailerUrl(movie);
  });

  document.getElementById("modalWatchlistBtn").addEventListener("click", () => {
    toggleWatchlist(movie.id);
  });

  modalOverlay.classList.add("open");
  modalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("modalCloseBtn").focus();
}

function updateModalWatchlistButton(movieId) {
  const btn = document.getElementById("modalWatchlistBtn");
  if (!btn) return;
  const isSaved = state.watchlistIds.includes(movieId);
  btn.innerHTML = `
    ${getWatchlistButtonSvg(isSaved)}
    <span>${isSaved ? "Remove from Watchlist" : "Add to Watchlist"}</span>
  `;
}

function closeMovieModal() {
  const modalOverlay = document.getElementById("movieModal");
  if (!modalOverlay.classList.contains("open")) return;

  modalOverlay.classList.remove("open");
  modalOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  state.activeModalMovieId = null;
}

function openTrailerUrl(movie) {
  if (movie && movie.trailerUrl && movie.trailerUrl.startsWith("http")) {
    window.open(movie.trailerUrl, "_blank", "noopener,noreferrer");
  } else {
    showToast(
      `Trailer is currently unavailable for "${movie ? movie.title : "this movie"}".`,
      "removed"
    );
  }
}

/* ==========================================================================
   11. TOAST NOTIFICATION HELPER
   ========================================================================== */
function showToast(message, type = "added") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast ${type === "removed" ? "toast-removed" : ""}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(20px)";
    toast.style.transition = "all 0.25s ease";
    setTimeout(() => toast.remove(), 250);
  }, 2800);
}

/* ==========================================================================
   12. SEARCH & NAVIGATION EVENT LISTENERS
   ========================================================================== */
function searchMovies(queryString) {
  state.searchQuery = queryString.trim();
  const clearBtn = document.getElementById("clearSearchBtn");
  if (state.searchQuery.length > 0) {
    clearBtn.classList.add("visible");
  } else {
    clearBtn.classList.remove("visible");
  }
  renderMovies();
}

function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
  closeMobileMenu();
}

function closeMobileMenu() {
  const navMenu = document.getElementById("navMenu");
  const mobileBtn = document.getElementById("mobileMenuBtn");
  navMenu.classList.remove("open");
  mobileBtn.setAttribute("aria-expanded", "false");
}

function setupEventListeners() {
  // Theme toggle
  document
    .getElementById("themeToggleBtn")
    .addEventListener("click", toggleTheme);

  // Mobile Hamburger Menu
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");
  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Navigation Links
  document.getElementById("logoLink").addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection("home");
  });

  document.getElementById("navHomeBtn").addEventListener("click", () => {
    scrollToSection("home");
  });

  document.getElementById("navMoviesBtn").addEventListener("click", () => {
    scrollToSection("moviesSection");
  });

  document.getElementById("navWatchlistBtn").addEventListener("click", () => {
    scrollToSection("watchlistSection");
  });

  // Footer navigation buttons
  document
    .getElementById("footerHomeBtn")
    .addEventListener("click", () => scrollToSection("home"));
  document
    .getElementById("footerMoviesBtn")
    .addEventListener("click", () => scrollToSection("moviesSection"));
  document
    .getElementById("footerWatchlistBtn")
    .addEventListener("click", () => scrollToSection("watchlistSection"));

  // Empty Watchlist "Discover Movies" button
  document.getElementById("discoverMoviesBtn").addEventListener("click", () => {
    scrollToSection("moviesSection");
  });

  // Genres Dropdown in Navbar
  const genreDropdown = document.getElementById("genreDropdown");
  const genreDropdownBtn = document.getElementById("genreDropdownBtn");
  const genreDropdownMenu = document.getElementById("genreDropdownMenu");

  genreDropdownBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = genreDropdown.classList.toggle("open");
    genreDropdownBtn.setAttribute("aria-expanded", String(isOpen));
  });

  genreDropdownMenu.addEventListener("click", (event) => {
    const item = event.target.closest("[data-genre]");
    if (!item) return;
    state.selectedGenre = item.getAttribute("data-genre");
    genreDropdown.classList.remove("open");
    genreDropdownBtn.setAttribute("aria-expanded", "false");
    renderGenreControls();
    renderMovies();
    scrollToSection("moviesSection");
  });

  document.addEventListener("click", (event) => {
    if (!genreDropdown.contains(event.target)) {
      genreDropdown.classList.remove("open");
      genreDropdownBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Genre Filter Pills
  document
    .getElementById("genreFilterPills")
    .addEventListener("click", (event) => {
      const pill = event.target.closest("[data-genre]");
      if (!pill) return;
      state.selectedGenre = pill.getAttribute("data-genre");
      renderGenreControls();
      renderMovies();
    });

  // Sorting Dropdown
  document.getElementById("sortSelect").addEventListener("change", (event) => {
    state.sortBy = event.target.value;
    renderMovies();
  });

  // Search Form + Live Search + Clear Button
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    searchMovies(searchInput.value);
    scrollToSection("moviesSection");
  });

  searchInput.addEventListener("input", () => {
    searchMovies(searchInput.value);
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchMovies("");
    searchInput.focus();
  });

  // Reset all filters button
  document
    .getElementById("resetAllFiltersBtn")
    .addEventListener("click", resetAllFilters);

  // Modal Close Events
  document
    .getElementById("modalCloseBtn")
    .addEventListener("click", closeMovieModal);

  document.getElementById("movieModal").addEventListener("click", (event) => {
    if (event.target.id === "movieModal") {
      closeMovieModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMovieModal();
      genreDropdown.classList.remove("open");
    }
  });

  // Back to Top Button
  const backToTopBtn = document.getElementById("backToTopBtn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ==========================================================================
   13. INITIALIZE APPLICATION ON PAGE LOAD
   ========================================================================== */
function initApp() {
  loadStateFromStorage();
  renderHero();
  renderGenreControls();
  renderWatchlist();
  setupEventListeners();

  // Brief initial loading state before showing the movie grid
  const loadingState = document.getElementById("loadingState");
  const movieGrid = document.getElementById("movieGrid");
  loadingState.classList.add("active");
  movieGrid.hidden = true;

  setTimeout(() => {
    loadingState.classList.remove("active");
    movieGrid.hidden = false;
    renderMovies();
  }, 320);
}

document.addEventListener("DOMContentLoaded", initApp);