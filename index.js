const freelancers = [
    { Name: "Dr. Slice", Price: 30, Occupation: "gardener" },
    { Name: "Dr. Pressure", Price: 50, Occupation: "programmer" },
    { Name: "Prof. Possibility", Price: 40, Occupation: "teacher" },
    { Name: "Prof. Prism", Price: 80, Occupation: "teacher" },
    { Name: "Dr. Impulse", Price: 40, Occupation: "teacher" },
  ];

const newFreelancers = [
    { Name: "Prof. Spark", Price: 70, Occupation: "programmer" },
    { Name: "Dr. Wire", Price: 50, Occupation: "teacher" },
    { Name: "Prof. Goose", Price: 70, Occupation: "driver" },
    { Name: "Prof. Plum", Price: 60, Occupation: "gardener"},
    { Name: "Dr. A. Ray", Price: 80, Occupation: "programmer"}
]

function init() {
    const root = document.querySelector("#root");

    const forumTitle = document.createElement("h1");
    forumTitle.innerText = "Freelancer Forum";
    root.append(forumTitle);

    const forumTable = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody")

    for (let key of Object.keys(freelancers[0])) {
        const th = document.createElement("th");
        th.innerText = key;
        thead.appendChild(th);
    }

    forumTable.appendChild(thead);
    forumTable.appendChild(tbody);
    root.appendChild(forumTable);

    renderFreelancers();
}

function renderFreelancers() {
    const forumTable = document.querySelector("tbody");

    const forumElements = freelancers.map((freelancer) => {
        const row = document.createElement("tr");

        const f_name = document.createElement("td");
        f_name.innerText = freelancer.Name;

        const f_price = document.createElement("td");
        f_price.innerText = freelancer.Price;

        const f_occupation = document.createElement("td");
        f_occupation.innerText = freelancer.Occupation;

        row.appendChild(f_name);
        row.appendChild(f_price);
        row.appendChild(f_occupation);

        return row;
    });
    
    forumTable.replaceChildren(...forumElements);
}

function addFreelancer () {
    if (newFreelancers.length > 0) {
        const newFreelancer = newFreelancers.pop();
        freelancers.push(newFreelancer);

        renderFreelancers();
    }

    if (freelancers.length > 10) {
        return
    }
    if (freelancers.length === 10) {
        const allFreelancers = [...freelancers, ...newFreelancers];
        const total = allFreelancers.reduce((acc, freelancer) => acc + freelancer.Price, 0);
        const average = total / allFreelancers.length;

        alert("The average price of our Freelancers is: " + average);
}
}

setInterval(addFreelancer, 1000);

init();