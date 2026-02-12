/* General Reset */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f4f7f6;
    color: #333;
    line-height: 1.6;
    padding: 40px 20px;
    max-width: 900px;
    margin: auto;
}

h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
    font-size: 2.5rem;
}

h2 {
    color: #34495e;
    border-left: 5px solid #3498db;
    padding-left: 15px;
    margin: 25px 0 15px 0;
}

/* Form Styling */
#eventForm {
    background: #ffffff;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

label {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
    color: #555;
}

input[type="text"],
input[type="date"],
select,
textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s;
}

input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.2);
}

textarea {
    height: 100px;
    resize: vertical;
}

/* Buttons */
button {
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.2s ease;
}

button[type="submit"] {
    background-color: #27ae60;
    color: white;
    width: 100%;
}

button[type="submit"]:hover {
    background-color: #219150;
    transform: translateY(-1px);
}

#clearAllBtn {
    background-color: #e74c3c;
    color: white;
    margin-right: 10px;
}

#addSampleBtn {
    background-color: #3498db;
    color: white;
}

button:hover {
    opacity: 0.9;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Event Container & Cards */
#eventContainer {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.empty-state {
    grid-column: 1 / -1;
    text-align: center;
    padding: 40px;
    background: #eee;
    border-radius: 10px;
    color: #777;
    font-style: italic;
}

.event-card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    border-top: 4px solid #3498db;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

/* DOM Demo Section */
#demoContent {
    background: #2c3e50;
    color: #ecf0f1;
    padding: 30px;
    text-align: center;
    border-radius: 12px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.2rem;
    margin-top: 10px;
}

hr {
    margin: 40px 0;
    border: 0;
    border-top: 1px solid #ddd;
}
