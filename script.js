// CROP INFORMATION DATABASE
const crops = {
    rice: {
        name: "Rice",
        soil: "Clayey and alluvial soil",
        season: "Kharif",
        water: "High water requirement",
        temperature: "20°C - 35°C"
    },
    wheat: {
        name: "Wheat",
        soil: "Loamy and well-drained soil",
        season: "Rabi",
        water: "Moderate water requirement",
        temperature: "10°C - 25°C"
    },
    maize: {
        name: "Maize",
        soil: "Fertile loamy soil",
        season: "Kharif and Rabi",
        water: "Moderate water requirement",
        temperature: "18°C - 32°C"
    },
    cotton: {
        name: "Cotton",
        soil: "Black soil",
        season: "Kharif",
        water: "Moderate water requirement",
        temperature: "21°C - 30°C"
    }
};

// 1. CROP SEARCH
document.getElementById("cropSearch").addEventListener("input", function() {
    let search = this.value.toLowerCase();

    document.querySelectorAll(".crop-card").forEach(card => {
        card.style.display =
            card.dataset.name.includes(search) ? "block" : "none";
    });
});

// 2. CROP INFORMATION FINDER
function showCrop(cropName) {
    let crop = crops[cropName];
    let result = document.getElementById("cropResult");

    result.style.display = "block";

    result.innerHTML = `
        <h3>${crop.name} Information</h3>
        <p><b>Soil:</b> ${crop.soil}</p>
        <p><b>Season:</b> ${crop.season}</p>
        <p><b>Water:</b> ${crop.water}</p>
        <p><b>Temperature:</b> ${crop.temperature}</p>
    `;

    result.scrollIntoView({ behavior: "smooth", block: "center" });
}

// 3. FERTILIZER CALCULATOR
function calculateFertilizer() {
    let area = parseFloat(document.getElementById("area").value);
    let rate = parseFloat(document.getElementById("fertilizerRate").value);
    let output = document.getElementById("fertilizerResult");

    if (!Number.isFinite(area) || !Number.isFinite(rate) ||
        area <= 0 || rate < 0) {
        output.innerText = "Please enter valid positive values.";
        return;
    }

    let total = area * rate;

    output.innerText =
        "Required fertilizer: " + total.toFixed(2) + " kg";
}

// 4. RANDOM FARMING TIP
const tips = [
    "Test your soil regularly to understand its nutrient requirements.",
    "Use drip irrigation to reduce water wastage.",
    "Choose seeds suitable for your local climate.",
    "Remove weeds regularly to protect crops.",
    "Use compost to improve soil health.",
    "Rotate crops to maintain soil fertility.",
    "Monitor crops regularly for pests and diseases.",
    "Store harvested grains in a clean, dry place."
];

function generateTip() {
    let random = Math.floor(Math.random() * tips.length);

    document.getElementById("tipText").innerText = tips[random];
}

// 5. INTERACTIVE IMAGE GALLERY
function enlargeImage(image) {
    document.getElementById("modalImage").src = image.src;
    document.getElementById("imageModal").style.display = "flex";
}

function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}

// Close gallery using Escape key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeImage();
    }
});