const persianCatalog = [
  {
    name: "Artaxerxes I",
    title: "Successor of Xerxes I",
    years: "c. 465 – 424 BCE",
    contribution: "Known for rebuilding temples and supporting the arts in the Achaemenid Empire.",
    image: "https://www.worldhistory.org/uploads/images/4570.jpg",
    type: "King"
  },
  {
    name: "Cyrus the Great",
    title: "Founder of the Achaemenid Empire",
    years: "c. 600 – 530 BCE",
    contribution: "He created the first charter of human rights and conquered much of the known world.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Great_Men_and_Famous_Women_Volume_1_-_Cyrus_the_Great.png/640px-Great_Men_and_Famous_Women_Volume_1_-_Cyrus_the_Great.png",
    type: "King"
  },
  {
    name: "Darius I",
    title: "The Great King of Persia",
    years: "c. 522 – 486 BCE",
    contribution: "Expanded the empire and developed infrastructure, roads, and an early form of postal system.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Darius_In_Parse.JPG/1024px-Darius_In_Parse.JPG",
    type: "King"
  },
  {
    name: "Xerxes I",
    title: "King of Kings of the Achaemenid Empire",
    years: "c. 486 – 465 BCE",
    contribution: "Led the second Persian invasion of Greece and completed many of Darius's construction projects.",
    image: "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/63d29b48b810a3001d63990a.jpg",
    type: "King"
  },
  {
    name: "Persepolis",
    title: "Ceremonial capital of the Achaemenid Empire",
    years: "c. 515 BCE",
    contribution: "A symbol of Persian architectural and cultural achievements.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Pers%C3%A9polis%2C_Ir%C3%A1n%2C_2016-09-24%2C_DD_27.jpg/640px-Pers%C3%A9polis%2C_Ir%C3%A1n%2C_2016-09-24%2C_DD_27.jpg",
    type: "City"
  },
  {
    name: "Susa",
    title: "Ancient Capital City",
    years: "c. 4000 BCE – 647 CE",
    contribution: "One of the oldest-known settlements in the region, and an administrative capital under Darius I.",
    image: "https://friendlyiran.com/wp-content/uploads/2017/08/shushtar-hydrolical-structuures.jpg",
    type: "City"
  },
  {
    name: "Ecbatana",
    title: "Median and Achaemenid capital",
    years: "c. 678 BCE – 330 BCE",
    contribution: "A key administrative and military center in ancient Persia.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Hegmataneh.jpg/1200px-Hegmataneh.jpg",
    type: "City"
  },
  {
    name: "Apadana Palace",
    title: "Audience Hall of Persepolis",
    years: "c. 500 BCE",
    contribution: "A grand ceremonial hall used for official receptions by the kings of Persia.",
    image: "https://www.mediastorehouse.com/t/617/iran-persepolis-apadana-palace-columns-9774421.jpg.webp",
    type: "Site"
  },
  {
    name: "Tomb of Cyrus",
    title: "Mausoleum of Cyrus the Great",
    years: "c. 530 BCE",
    contribution: "A UNESCO World Heritage Site believed to be the tomb of Cyrus the Great.",
    image: "https://iranparadise.com/wp-content/uploads/2021/12/fars-province.jpg",
    type: "Site"
  },
  {
    name: "Behistun Inscription",
    title: "Multilingual inscription by Darius I",
    years: "c. 520 BCE",
    contribution: "A trilingual inscription that was key to deciphering cuneiform script.",
    image: "https://external-preview.redd.it/UrdRFWT9AehYK6435JGrym62A8LHtp6B31DxfULaumo.jpg?auto=webp&s=1cb6b00c95fa6c78fd886959b5b90fa631a8e0d1",
    type: "Site"
  },
  {
    name: "Gaugamela Battle",
    title: "Decisive Battle of Alexander vs. Darius III",
    years: "331 BCE",
    contribution: "A turning point where Alexander the Great defeated the Persian army, leading to the fall of the Achaemenid Empire.",
    image: "https://warfarehistorynetwork.com/wp-content/uploads/2015/10/M-Gaugamela-3-HT-Dec01--760x1083.jpg",
    type: "Battle"
  },
  {
    name: "Thermopylae Battle",
    title: "Famous stand of 300 Spartans vs. Xerxes",
    years: "480 BCE",
    contribution: "Dramatic Persian victory during the second invasion of Greece by Xerxes I.",
    image: "https://cdn.britannica.com/18/115518-050-9E442B95/Battle-of-Salamis-Greece-fleet-Persian-victory.jpg",
    type: "Battle"
  },
  {
    name: "Marathon Battle",
    title: "Persian defeat by Athenians",
    years: "490 BCE",
    contribution: "Famous battle in which a smaller Greek force repelled Darius I's Persian army.",
    image: "https://ludwigheinrichdyck.wordpress.com/wp-content/uploads/2016/01/peter-dennis.jpg",
    type: "Battle"
  },
  {
    name: "Royal Road",
    title: "Ancient Persian Highway System",
    years: "c. 500 BCE",
    contribution: "Connected the vast Persian Empire for communication, trade, and military movement — an early postal system.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mapa_da_Estrada_Real.pdf/page1-300px-Mapa_da_Estrada_Real.pdf.jpg",
    type: "Infrastructure"
  },
  {
    name: "Qanat System",
    title: "Ancient underground water channels",
    years: "c. 1000 BCE",
    contribution: "Revolutionary irrigation system that enabled agriculture in arid regions.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Ghasabe_Qanats_of_Gonabad2.jpg",
    type: "Infrastructure"
  },
  {
    name: "Persepolis Stairways",
    title: "Grand staircases leading to ceremonial platforms",
    years: "c. 515 BCE",
    contribution: "Wide staircases that allowed dignitaries to ascend into Persepolis with ease.",
    image: "https://media.mehrnews.com/d/2018/02/07/4/2710897.jpg",
    type: "Infrastructure"
  }
];

let selectedItems = [];

// Display cards from the catalog
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let item of persianCatalog) {
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, item.name, item.image, item.title, item.years, item.contribution, item.type);
    cardContainer.appendChild(nextCard);
  }
}

// Fill card content
function editCardContent(card, name, image, title, years, contribution, type) {
  card.style.display = "block";

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'compare-checkbox';
  checkbox.onclick = (e) => {
    e.stopPropagation();
    toggleComparison(name);
  };

  card.querySelector(".card-content").prepend(checkbox);
  card.querySelector("h2").textContent = name;
  card.querySelector("img").src = image;
  card.querySelector("img").alt = name + " image";
  card.querySelector("img").style.cursor = "pointer";
  card.onclick = () => showDetailView({ name, image, title, years, contribution, type });

  const cardBody = card.querySelector(".card-body");
  cardBody.innerHTML = `<span class="badge">${type}</span>`;
}

// Comparison functions
function toggleComparison(name) {
  const index = selectedItems.indexOf(name);
  if (index === -1) {
    selectedItems.push(name);
  } else {
    selectedItems.splice(index, 1);
  }

  updateComparePanel();
}

function updateComparePanel() {
  const compareButton = document.getElementById('compare-button');
  const compareCount = document.getElementById('compare-count');
  compareCount.textContent = selectedItems.length;

  compareButton.disabled = selectedItems.length < 2;
  document.querySelector('.compare-panel').classList.toggle('active', selectedItems.length > 0);
}

function openComparison() {
  const modal = document.querySelector('.comparison-modal');
  const content = document.getElementById('comparison-items');
  content.innerHTML = '';

  selectedItems.forEach(itemName => {
    const item = persianCatalog.find(i => i.name === itemName);
    if (item) {
      content.innerHTML += `
        <div class="comparison-item">
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p><strong>Title:</strong> ${item.title}</p>
          <p><strong>Years:</strong> ${item.years}</p>
          <p><strong>Type:</strong> ${item.type}</p>
          <p><strong>Contribution:</strong> ${item.contribution}</p>
        </div>
      `;
    }
  });

  modal.style.display = 'flex';
}

function closeComparison(e) {
  if (e.target.classList.contains('comparison-modal')) {
    document.querySelector('.comparison-modal').style.display = 'none';
  }
}

// Master filter function (search + type + sort)
function applyFilters() {
  const type = document.getElementById("type-filter").value;
  const search = document.getElementById("search-input").value.toLowerCase();
  const sort = document.getElementById("sort-order").value;

  let filteredData = persianCatalog;

  if (type !== "") {
    filteredData = filteredData.filter(item => item.type === type);
  }

  if (search !== "") {
    filteredData = filteredData.filter(item =>
      item.name.toLowerCase().includes(search)
    );
  }

  if (sort === "asc") {
    filteredData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "desc") {
    filteredData.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sort === "year") {
    filteredData.sort((a, b) => {
      const yearA = parseInt(a.years.match(/\d+/));
      const yearB = parseInt(b.years.match(/\d+/));
      return yearA - yearB;
    });
  }

  selectedItems = [];
  updateComparePanel();

  displayFilteredCards(filteredData);
}

function resetCatalog() {
  document.getElementById("search-input").value = "";
  document.getElementById("type-filter").value = "";
  document.getElementById("sort-order").value = "";
  selectedItems = [];
  updateComparePanel();
  showCards();
}

function displayFilteredCards(dataArray) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let item of dataArray) {
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, item.name, item.image, item.title, item.years, item.contribution, item.type);
    cardContainer.appendChild(nextCard);
  }
}

function showDetailView(item) {
  const mainView = document.getElementById("card-container");
  let detailView = document.getElementById("detail-view");

  if (!detailView) {
    detailView = document.createElement("div");
    detailView.id = "detail-view";
    detailView.style.display = "none";
    detailView.style.padding = "20px";
    detailView.style.animation = "fadeIn 0.4s ease";
    document.body.appendChild(detailView);
  }

  mainView.style.display = "none";
  detailView.innerHTML = `
    <div style="background-color: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.2); max-width: 800px; margin: auto;">
      <button onclick="backToMainView()" style="margin-bottom: 20px;">← Back</button>
      <h2>${item.name}</h2>
      <img src="${item.image}" alt="${item.name}" style="max-width: 100%; height: auto; margin: 20px 0;">
      <p><strong>Title:</strong> ${item.title}</p>
      <p><strong>Years:</strong> ${item.years}</p>
      <p><strong>Contribution:</strong> ${item.contribution}</p>
      <p><strong>Type:</strong> ${item.type}</p>
    </div>
  `;
  detailView.style.display = "block";
}

function backToMainView() {
  const mainView = document.getElementById("card-container");
  const detailView = document.getElementById("detail-view");

  if (detailView) detailView.style.display = "none";
  mainView.style.display = "flex";
}

document.addEventListener("DOMContentLoaded", showCards);