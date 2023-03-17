let html_display = document.getElementById("json-display");

fetch("./data.json")
    .then((response) => response.json())

    .then((data) => {
        let json_data = data;

        json_data.forEach((result) => {
            const div = document.createElement("div");

            div.classList.add("individual-results");

            div.innerHTML = `
            <div class='result-name'>

                <img src=${result.icon} alt="image-icon"/>
                <p class="result-category">${result.category}</p>
            </div>
            <div>
                <p class="score">
                <span class="score-result">${result.score}</span> / 100
                </p>
            </div>
            `;

            html_display.appendChild(div);
        });
    });
