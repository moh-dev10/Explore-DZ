const destinations = [
    { title: "Tassili N'Ajjer", category: "Sahara", location: "Djanet", image: "assets/Tassili.webp" },
    { title: "Annaba Old Town", category: "East", location: "Annaba", image: "assets/Annaba.webp" },
    { title: "Oran Marina", category: "West", location: "Oran", image: "assets/Oran.webp" },
    { title: "Maqam El Chahid", category: "North", location: "Algiers", image: "assets/Ma9amElchahid.webp" },
    { title: "Bejaia Mountains", category: "North", location: "Bejaia", image: "assets/Bejaia.webp" },
    { title: "Sidi M'Cid Bridge", category: "East", location: "Constantine", image: "assets/constantine.webp" },
    { title: "Great Mosque", category: "Center", location: "Algiers", image: "assets/Djamia-el-djazair.webp" 
    }
];

document.addEventListener('DOMContentLoaded',() =>{

    const filterBtns = document.querySelectorAll('.filter-btn');
    const grid = document.getElementById('destinations-grid');

    // function to draw the cards 

    const displayItems = (items) => {
        
          // Empty State
          if(items.length === 0){
            grid.innerHTML = `<p class="no-result">Oops!
            NO destinations found in this category.</p>`
            return;
        }

        grid.innerHTML = items.map(item => `
            <div class="card fade-in" data-category="${item.category}">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                    <div class="card-overlay">
                        <span class="tag">${item.category}</span>
                    <h3>${item.title}</h3>
                    <div class="location">
                    <i class="fa-solid fa-map-marker-alt"></i>
                ${item.location}
                    </div>
                </div>
            </div>
            `).join('');
    };

    // Filter logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Change The UI
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            //Get the filtered value
            const filterValue = btn.getAttribute('data-filter');

            // The core logic

            const filteredData = filterValue === 'all'? destinations:destinations.filter(dest =>
                 dest.category === filterValue);

                 //Display filtered dest

                 displayItems(filteredData);

                 const cards = document.querySelectorAll('.card');
                 cards.forEach((card,index) => {
                    card.style.animationDelay = `${index * 0.1}s`;
                    card.classList.add('card-animate');
                 })
        })
    })
    displayItems(destinations);
})