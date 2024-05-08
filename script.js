const teamMembers = [
    {
        name: "Drake",
        pic: "drake.jpg",
        genre: "...",
        album: "...",
        song: "...",
        favorite: ["...", "...", "..."],
        biography: "...",
    },
    {
        name: "Taylor Swift",
        pic: "taylorswift.jpg",
        genre: "...",
        album: "...",
        song: "...",
        favorite: ["...", "...", "..."],
        biography: "...",
    },
    {
        name: "Bryson Tiller", 
        pic: "brysontiller.jpg",
        genre: "...",
        album: "...",
        song: "...",
        favorite: ["...", "...", "..."],
        biography: "...",
    },
    {
        name: "The Weeknd", 
        pic: "weeknd.jpg",
        genre: "...",
        album: "...",
        song: "...",
        favorite: ["...", "...", "..."],
        biography: "...",
    },
    {
        name: "Miguel", 
        pic: "miguel.jpg",
        genre: "...",
        album: "...",
        song: "...",
        favorite: ["...", "...", "..."],
        biography: "...",
    },
    {
        name: "Brent Faiyaz", 
        pic: "brent.jpg",
        genre: "...",
        album: "...",
        song: "...",
        favorite: ["...", "...", "..."],
        biography: "...",
    },
    {
        name: "Frank Ocean", 
        pic: "frank.jpg",
        genre: "...",
        album: "...",
        song: "...",
        favorite: ["...", "...", "..."],
        biography: "...",
    },
    {
        name: "Kendrick Lamar", 
        pic: "kendrick.jpg",
        genre: "...",
        album: "...",
        song: "...",
        favorite: ["...", "...", "..."],
        biography: "...",
    },
    {
        name: "J. Cole", 
        pic: "jcole.jpg",
        genre: "...",
        album: "...",
        song: "...",
        favorite: ["...", "...", "..."],
        biography: "...",
    },
    {
        name: "Tory Lanez", 
        pic: "tory.jpg",
        genre: "...",
        album: "...",
        song: "...",
        favorite: ["...", "...", "..."],
        biography: "...",
    },
    {
        name: "Steve Lacey", 
        pic: "steve.jpg",
        genre: "...",
        album: "...",
        song: "...",
        favorite: ["...", "...", "..."],
        biography: "...",
    },
    {
        name: "The Neighbourhood", 
        pic: "nieghbourhood.jpg",
        genre: "...",
        album: "...",
        song: "...",
        favorite: ["...", "...", "..."],
        biography: "...",
    },
    {
        name: "The Interrupters", 
        pic: "interrupters.jpg",
        genre: "...",
        album: "...",
        song: "...",
        favorite: ["...", "...", "..."],
        biography: "...",
    },
    {
        name: "Paramore", 
        pic: "paramore.jpg",
        genre: "...",
        album: "...",
        song: "...",
        favorite: ["...", "...", "..."],
        biography: "...",
    },
    {
        name: "Daniel Ceaser", 
        pic: "danceaser.jpg",
        genre: "...",
        album: "...",
        song: "...",
        favorite: ["...", "...", "..."],
        biography: "...",
    },
    {
        name: "Travis Scott", 
        pic: "travis.jpg",
        genre: "...",
        album: "...",
        song: "...",
        favorite: ["...", "...", "..."],
        biography: "...",
    },
    {
        name: "TV Girl", 
        pic: "tvgirl.jpg",
        genre: "...",
        album: "...",
        song: "...",
        favorite: ["...", "...", "..."],
        biography: "...",
    },
    {
        name: "Tyler, The Creator", 
        pic: "tylerthecreator.jpg",
        genre: "...",
        album: "...",
        song: "...",
        favorite: ["...", "...", "..."],
        biography: "...",
    },
    {
        name: "Lana Del Ray", 
        pic: "lana.jpg",
        genre: "...",
        album: "...",
        song: "...",
        favorite: ["...", "...", "..."],
        biography: "...",
    },
    {
        name: "Summer Walker", 
        pic: "summer.jpg",
        genre: "...",
        album: "...",
        song: "...",
        favorite: ["...", "...", "..."],
        biography: "...",
    },
    {
        name: "Ariana Grande", 
        pic: "ariana.jpg",
        genre: "...",
        album: "...",
        song: "...",
        favorite: ["...", "...", "..."],
        biography: "...",
    },
];

function generateTeamCards() {
    const teamCardsContainer = document.getElementById("teamCards")

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')

        // styling card based on position: 
        let backgroundColor

        switch (member.genre.toLowerCase) {
            case 'forward':
                backgroundColor = '#ffc107'
                break
        }

        card.style.backgroundColor = backgroundColor

        //create a list of skills with <li> tags //
        const favoriteList = member.favorite.map(favorite => `<li> ${favorite} </li> `).join('')

        card.innerHTML = `
    <div class = "card"> 
        <div class = "card-header"> ${member.name} </div> 
        <div class = "card-body"> 
            <div class = "card-img">
                <img class="img-fluid" src= ${member.pic}>
            </div>
            <div class = "card-text"> 
            <p><strong>Music Genre:</strong> ${member.genre} </p> 
            <p><strong>Best Album:</strong> ${member.album} </p>
            <p><strong>Most Popular Song:</strong> ${member.song} </p>
             <p><strong>Personal Favorites:</strong> <ul> ${favoriteList} </ul> </p>
            <p><strong>Biography:</strong> ${member.biography} </p>
            </div> 
        </div> 
    </div> 
    `

        teamCardsContainer.appendChild(card)
    })
}

window.onload = generateTeamCards()
