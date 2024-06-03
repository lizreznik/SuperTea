const teamMembers = [
    {
        name: "Drake",
        pic: "drake.jpg",
        genre: "Rap",
        album: "Views",
        song: "One Dance",
        favorite: ["Hold On We're Going Home", "Rich Baby Daddy", "Nice For What "],
        biography: "Canadian rapper, singer, and actor Drake rose to fame on the teen drama Degrassi before becoming a hip-hop superstar known for blending rap and R&B.",
    },
    {
        name: "Taylor Swift",
        pic: "taylorswift.jpg",
        genre: "Country/Pop",
        album: "1989",
        song: "Cruel Summer",
        favorite: ["I Did Something Bad", "False God", "Lavender Haze"],
        biography: "From country darling to pop icon, Taylor Swift has become one of the most influential singer-songwriters of her generation.",
    },
    {
        name: "Bryson Tiller", 
        pic: "brysontiller.jpg",
        genre: "R&B",
        album: "Trapsoul",
        song: "Whatever She Wants",
        favorite: ["Let Em'Know", "Right My Wrongs", "Whatever She Wants"],
        biography: "Born in Kentucky and raised by his grandmother after a childhood loss, Bryson Tiller rose to fame with his unique blend of R&B and hip-hop, pioneering the 'trap soul' sound.",
    },
    {
        name: "The Weeknd", 
        pic: "weeknd.jpg",
        genre: "R&B",
        album: "After Hours",
        song: "One of The Girls",
        favorite: ["The Morning", "Coming Down", "The Party & The After Party"],
        biography: "The Weeknd, born Abel Tesfaye, is a Canadian singer who rose to fame with his dark and atmospheric R&B mixtapes.",
    },
    {
        name: "Miguel", 
        pic: "miguel.jpg",
        genre: "R&B",
        album: "All I Want Is You",
        song: "Sure Thing",
        favorite: ["All I Want Is You", "Sky Walker", "Vixen"],
        biography: "Raised by musically diverse parents, Mexican-American singer-songwriter Miguel rose to fame with his alternative R&B sound and hit single 'Adorn.'",
    },
    {
        name: "Brent Faiyaz", 
        pic: "brent.jpg",
        genre: "R&B",
        album: "Wasteland",
        song: "Best Time",
        favorite: ["All Mine", "Upset", "WY@"],
        biography: "Born in Maryland, Brent Faiyaz rose to fame with his sultry vocals and signature production style, becoming a leading voice in contemporary R&B.",
    },
    {
        name: "Frank Ocean", 
        pic: "frank.jpg",
        genre: "R&B",
        album: "Blonde",
        song: "Pink + White",
        favorite: ["Self Control", "Godspeed", "Lost"],
        biography: "Born Christopher Edwin Breaux, Frank Ocean is a Grammy-winning singer, songwriter, and rapper who rose to fame with his genre-bending mixtapes and albums.",
    },
    {
        name: "Kendrick Lamar", 
        pic: "kendrick.jpg",
        genre: "Rap",
        album: "Damn.",
        song: "Not Like Us",
        favorite: ["Money Trees", "Pride", "Poetic Justice"],
        biography: "Born in Compton, California, Kendrick Lamar is a Pulitzer Prize-winning rapper known for his insightful lyrics about social issues and life in America.",
    },
    {
        name: "J. Cole", 
        pic: "jcole.jpg",
        genre: "Rap",
        album: "Might Delete Later",
        song: "No Role Modelz",
        favorite: ["Wet Dreamz", "No Role Modelz", "Power Trip"],
        biography: "J. Cole, born on a military base in Germany and raised in North Carolina, rose to fame as a rapper and producer known for his introspective lyrics and social commentary.",
    },
    {
        name: "Tory Lanez", 
        pic: "tory.jpg",
        genre: "Rap",
        album: "Alone at Prom",
        song: "The Color Violet",
        favorite: ["Hurts Me", "Say It", "Cold Hard Love"],
        biography: "Canadian rapper, singer, and songwriter Tory Lanez rose to fame with mixtapes like 'Conflicts of My Soul: The 416 Story' before achieving commercial success with his debut album 'I Told You.'",
    },
    {
        name: "Steve Lacey", 
        pic: "steve.jpg",
        genre: "R&B",
        album: "Gemini Rights",
        song: "Dark Red",
        favorite: ["Bad Habit", "Dark Red", "Static"],
        biography: "A genre-bending singer, songwriter, and guitarist from Compton, Steve Lacy rose to fame with the band The Internet and later with his own critically-acclaimed solo work.",
    },
    {
        name: "The Neighbourhood", 
        pic: "nieghbourhood.jpg",
        genre: "Alternative/Indie",
        album: "Wiped Out!",
        song: "Sweater Weather",
        favorite: ["Daddy Issues", "Reflections", "Sweater Weather"],
        biography: "California alt-rockers The Neighbourhood emerged from obscurity in 2013 with their brooding hit 'Sweater Weather.'",
    },
    {
        name: "The Interrupters", 
        pic: "interrupters.jpg",
        genre: "Alternative/Indie",
        album: "Fight the Good Fight",
        song: "She's Kerosene",
        favorite: ["She's Kerosene", "Gave You Everything", "She Git Arrested"],
        biography: "The Interrupters are an American ska punk band formed in Los Angeles in 2011, known for their energetic live shows and catchy music.",
    },
    {
        name: "Paramore", 
        pic: "paramore.jpg",
        genre: "Rock",
        album: "Paramore",
        song: "Misery Business",
        favorite: ["Ain't It Fun", "Hard Times", "All I Wanted"],
        biography: "Formed in 2004, Paramore is a Grammy-winning American rock band known for its evolving sound and fronted by the powerhouse vocalist Hayley Williams.",
    },
    {
        name: "Daniel Ceaser", 
        pic: "danceaser.jpg",
        genre: "R&B",
        album: "Freudian",
        song: "Best Part",
        favorite: ["Japanese Denim", "Best Part", "Get You"],
        biography: "Born into a musical family, Canadian singer-songwriter Daniel Caesar rose to fame with his soulful ballads exploring themes of love and faith.",
    },
    {
        name: "Travis Scott", 
        pic: "travis.jpg",
        genre: "Rap",
        album: "UTOPIA",
        song: "FE!N",
        favorite: ["I Know?", "FE!N", "pick up the phone"],
        biography: "From Houston roots to global stardom, rapper, singer, and producer Travis Scott has carved a lane with his dark, atmospheric music and influence on fashion and culture.",
    },
    {
        name: "TV Girl", 
        pic: "tvgirl.jpg",
        genre: "Indie Pop",
        album: "Who Really Cares",
        song: "Lovers Rock",
        favorite: ["It Almost Worked", "Cigarettes out the Window", "Not Allowed"],
        biography: "Formed in San Diego in 2010, TV Girl blends catchy indie pop with samples and witty lyrics to create a sound that's both nostalgic and darkly humorous.",
    },
    {
        name: "Tyler, The Creator", 
        pic: "tylerthecreator.jpg",
        genre: "Rap",
        album: "Igor",
        song: "See You Again",
        favorite: ["I THINK", "She", "Best Interest"],
        biography: "Tyler, the Creator, a multifaceted artist, rose from internet buzz to Grammy winner with his innovative hip-hop, fashion lines, and vibrant music festivals.",
    },
    {
        name: "Lana Del Ray", 
        pic: "lana.jpg",
        genre: "Pop",
        album: "Born to Die",
        song: "Summertime Sadness",
        favorite: ["West Coast", "Video Games", "Let The Light In"],
        biography: "Born Elizabeth Woolridge Grant, Lana Del Rey is a singer-songwriter known for her melancholic pop music and vintage Hollywood aesthetic.",
    },
    {
        name: "Summer Walker", 
        pic: "summer.jpg",
        genre: "R&B",
        album: "Over It",
        song: "Hell N Back",
        favorite: ["Girls Need Love", "Ex For A Reason", "Insane"],
        biography: "Rising R&B star Summer Walker, born in Atlanta and known for her relatable heartbreak anthems, rose to fame after being discovered by a record label through her social media posts.",
    },
    {
        name: "Ariana Grande", 
        pic: "ariana.jpg",
        genre: "Pop",
        album: "Eternal Sunshine",
        song: "we can't be friends (wait for your love)",
        favorite: ["bloodline", "boyfriend", "7 Rings"],
        biography: "Rising to fame on Nickelodeon before becoming a pop icon known for her powerful vocals and hit songs like 'The Way' and 'Thank U, Next,' Ariana Grande is a multi-talented entertainer.",
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
