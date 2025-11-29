
// web-app/script.js

// Function to fetch the data
async function loadArchetypeData() {
    try {
        // Fetch the local JSON file
        const response = await fetch('./data/rules_data.json'); 
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        // Call a function to display the data
        displayArchetypeList(data.archetypes);
    } catch (error) {
        console.error("Could not load archetype data:", error);
        document.getElementById('content').innerHTML = "Error loading rules data.";
    }
}

// Function to display the data
function displayArchetypeList(archetypes) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '<h2>Isekai Archetypes Loaded!</h2>';
    archetypes.forEach(arc => {
        contentDiv.innerHTML += `<h3>${arc.name} (${arc.focus})</h3>`;
        arc.features.forEach(feat => {
            contentDiv.innerHTML += `<p>Level ${feat.level}: <strong>${feat.name}</strong> - ${feat.mechanic}</p>`;
        });
    });
}

// Run the function when the page loads
loadArchetypeData();
