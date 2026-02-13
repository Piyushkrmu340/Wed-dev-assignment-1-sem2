const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");
const demoContent = document.getElementById("demoContent");

const sampleEvents = [
    {
        title: "Web Dev Workshop",
        date: "2026-05-04",
        category: "Workshop",
        description: "Learn modern web development"
    },
    {
        title: "Tech Conference",
        date: "2026-06-04",
        category: "Conference",
        description: "Latest trends in technology"
    }
];

function createEventCard(eventData) {
    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${eventData.title}</h3>
        <div>${eventData.date}</div>
        <span>${eventData.category}</span>
        <p>${eventData.description}</p>
    `;

    // Delete button functionality
    card.querySelector(".delete-btn").addEventListener("click", () => {
        card.remove();
    });

    return card;
}

function addEvent(eventData) {
    const emptyState = document.querySelector(".empty-state");
    if (emptyState) emptyState.remove();

    eventContainer.appendChild(createEventCard(eventData));
}

eventForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };

    addEvent(eventData);

    // Reset form after adding
    eventForm.reset();
});

// Clear all events
clearAllBtn.addEventListener("click", () => {
    eventContainer.innerHTML =
        '<div class="empty-state">No events yet. Add your first event!</div>';
});

// Add sample events
addSampleBtn.addEventListener("click", () => {
    sampleEvents.forEach(addEvent);
});

// DOM demo
document.addEventListener("keydown", (e) => {
    demoContent.textContent = `You pressed: ${e.key}`;
});
