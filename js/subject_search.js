
// Marrja e elementeve HTML
const searchInput = document.querySelector(".subject_search");
const categoryFilter = document.getElementById("category");

const subjectCards = document.querySelectorAll(".subject-card");
const noResults = document.getElementById("noResults");


// Funksioni për filtrimin e subjekteve
function filterSubjects() {

    // Vlera e Search Bar
    const searchValue = searchInput.value.toLowerCase().trim();

    // Kategoria e zgjedhur
    const selectedCategory = categoryFilter.value;

    // Numri i subjekteve që përputhen
    let visibleSubjects = 0;


    // Kontrollimi i secilit Subject Card
    subjectCards.forEach(card => {

        // Marrja e emrit, kodit dhe përshkrimit
        const subjectName = card.querySelector("h3").textContent.toLowerCase();

        const subjectCode = card.querySelector(".subject-code").textContent.toLowerCase();

        const subjectDescription = card.querySelector("p").textContent.toLowerCase();


        // Kontrollimi i Search Bar
        const matchesSearch =
            subjectName.includes(searchValue) ||
            subjectCode.includes(searchValue) ||
            subjectDescription.includes(searchValue);


        // Lidhja e kategorive me Subject Cards
        const categoryMap = {
            "software-engineering": "sse",
            "communication-engineering": "ce",
            "data-engineering": "de",
            "web-programming": "wmp",
            "cyber": "cs",
            "graphics": "gm"
        };

        const matchesCategory =
            selectedCategory === "" ||
            subjectCode === categoryMap[selectedCategory];


        // Shfaqja ose fshehja e kartelave
        if (matchesSearch && matchesCategory) {

            card.style.display = "flex";
            visibleSubjects++;

        } else {

            card.style.display = "none";

        }

    });


    // Kontrollimi nëse ekzistojnë rezultate
    if (visibleSubjects === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


// Event Listener për Search Bar
searchInput.addEventListener("input", filterSubjects);


// Event Listener për Category Filter
categoryFilter.addEventListener("change", filterSubjects);
