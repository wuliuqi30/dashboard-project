projectBox = document.querySelector(".projects-box");


let projIconSrc = ["icons/favorite.svg","icons/eye.svg", "icons/share.svg"];

let cardsContent = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt velit unde doloremque tenetur itaque veniam magnam est accusamus asperiores!",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt velit unde doloremque tenetur itaque veniam magnam est accusamus asperiores!",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt velit unde doloremque tenetur itaque veniam magnam est accusamus asperiores!",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt velit unde doloremque tenetur itaque veniam magnam est accusamus asperiores!",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt velit unde doloremque tenetur itaque veniam magnam est accusamus asperiores!",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt velit unde doloremque tenetur itaque veniam magnam est accusamus asperiores!"
]


function createProjectCard(title, content){
    
    const card = document.createElement("div");
    card.classList.add("card");

    const cardTitle = document.createElement("p");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = title;
    card.appendChild(cardTitle);

    const cardContent = document.createElement("p");
    cardContent.classList.add("card-content");
    cardContent.textContent = content;
    card.appendChild(cardContent);

    const cardActions = document.createElement("ul");
    cardActions.classList.add("card-actions");
   

    // Lower Right-hand buttons
    const favLi = document.createElement("li");
    const fav = document.createElement("img");
    fav.src = projIconSrc[0];
    fav.alt = "Favorite This icon";
    favLi.appendChild(fav);
    cardActions.appendChild(favLi);


    const eyeLi = document.createElement("li");
    const eye = document.createElement("img");
    eye.src = projIconSrc[1];
    eye.alt = "Put on watch list icon";
    eyeLi.appendChild(eye);
    cardActions.appendChild(eyeLi);

    const shareLi = document.createElement("li");
    const share = document.createElement("img");
    share.src = projIconSrc[2];
    share.alt = "Share icon";
    shareLi.appendChild(share);
    cardActions.appendChild(shareLi);

    card.appendChild(cardActions);

    projectBox.appendChild(card);
}


for (i = 0; i <= cardsContent.length; i++) {
        createProjectCard(`Title ${i}`, cardsContent[i]);
}