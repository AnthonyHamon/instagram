let instagramPost = [
    {
        "profil_image": "img/yellow_doctor.jpg",
        "author": "Aquarium_World",
        "location": "Zu Hause",
        "content": "img/fisch.jpg",
        "like_counter": "569",
        "description": "Das ist mein neuer Fisch, wie findet ihr den?",
        "comment_author": ['Christelle:', 'Patrick:'],
        "comment": ['Mandarinfisch richtig? er sieht richtig schön aus!',
            'sehr schön, was für ein Futter benötigt er?']
    },
    {
        "profil_image": "img/icons/DA_Logo.png",
        "author": "Developer_Akademie",
        "location": "München",
        "content": "img/development.jpg",
        "like_counter": "2023",
        "description": "werde auch Du! Software Entwickler!",
        "comment_author": ['Junus:', 'Manuel:'],
        "comment": ['Quereinstieg in die IT dank unsere Weiterbildung ist möglich! Werde Teil der DA Community!', 'Danke für die Werbung!'],
    },
    {
        "profil_image": "img/camera.jpg",
        "author": "Photography",
        "location": "",
        "content": "img/water_photo.jpg",
        "like_counter": "111",
        "description": "Winter is such a great season for ice/snow photography!",
        "comment_author": ['Jean-Paul:'],
        "comment": ['Schönes Bild!'],
    },
    {
        "profil_image": "img/univers.jpg",
        "author": "My_univers",
        "location": "Milky Way",
        "content": "img/galaxy.jpg",
        "like_counter": "88",
        "description": "are we alone in the univers? I don't think so, and you?",
        "comment_author": ['Thierry:', 'Anthony:', 'Harry:'],
        "comment": ['with so much stars and galaxy, we cannot be alone!', "@Thierry, you're right!", "sure, and they are already living with us right? XD"],
    },
    {
        "profil_image": "img/gamer_World.jpg",
        "author": "GamerWorld",
        "location": "Virtual Reality World",
        "content": "img/super_mario.jpg",
        "like_counter": "41",
        "description": "Kultes video Spiel, und jetzt auch noch ein Film, geht nocht was?",
        "comment_author": ['Mario:', 'Luigi:', 'Die Prinzessin:', 'Pilz:'],
        "comment": ["I'm a great actor!", "me too!", 'warum bin ich die Prinzessin? ich wollte doch ein Prinz werden...', "Mich kann man nicht essen! Ich bin giftig!"],
    },
    {
        "profil_image": "img/tattoo_world.jpg",
        "author": "Tattoo4Everybody",
        "location": "Nicht in Thailand",
        "content": "img/tattoo_idea.jpg",
        "like_counter": "139",
        "description": "habt ihr schon ein Tattoo? Ich überlege noch...",
        "comment_author": ['David:', 'Sina:'],
        "comment": ['Natürlich', 'klar! sogar mehr als ein!'],
    },
    {
        "profil_image": "img/funny.jpg",
        "author": "Fun & Funniest",
        "location": "in your fantasy",
        "content": "img/funny_monkey.jpg",
        "like_counter": "333",
        "description": "Schreibt ein Witz in den kommentaren!",
        "comment_author": ['Chuck Norris:', 'Mario Bart:', 'Torsten Sträter:', 'Johann König:'],
        "comment": ['Chuck Norris hat nicht Geburtstag. Er war schon immer da', 'Fahrstühle riechen anders für kleine Menschen', 'Was haben Frauen und Tornados gemeinsam: Erst feucht, dann stürmisch und hinterher ist das Haus weg.', 'Was haben Verkehr und Bungee-Jumping gemeinsam? Reißt das Gummi, hört der Spaß auf.'],
    },
]

function returnPosts(post, i) {
    return `
    <div class="post">
    <div class="flex_post_icons">
        <div class="post_title">
            <img src="${post['profil_image']}" alt="author_image">
            <div>
                <div id="author${i}">${post['author']}</div>
                <span>${post['location']}</span>
            </div>
        </div>
        <img src="img/icons/edit.svg" alt="post_edit">
    </div>

    <div class="post_image">
        <img src="${post['content']}" alt="post_image">
    </div>
    <div>
        <div>
            <div class="flex_post_icons">
                <div class="post_icons">
                    <div>
                        <img onclick="liked(${i})" id="likeHeart${i}" src="img/icons/heart.png" alt="like_heart">
                        <img onclick="liked(${i})" class="toggle_img" id="filledLikeHeart${i}" src="img/icons/filled_heart.png" alt="filled_like_heart">
                        </div>
                    <img src="img/icons/comment.png" alt="comment_image">
                    <img src="img/icons/share.svg" alt="share">
                </div>
                <div class="post_icons">
                    <img onclick="postSaved(${i})" id="saved${i}" src="img/icons/save.png" alt="save">
                    <img onclick="postSaved(${i})" id="filledSaved${i}" class="toggle_img" src="img/icons/filled_save.png" alt="save">
                </div>
            </div>
            <div class="like_counter">Gefällt <span id="like_counter${i}">${post['like_counter']}</span> Mal</div>
        </div>
    </div>
    <div>
        <p>${post['description']}</p>
    </div>
    <div class="commentCtn">
        <div class="commentCtn" id="commentCtn${i}"></div>
        <div class="posting_comment">
            <input id="comment_input${i}" class="comment_input" type="text" placeholder="kommentieren...">
            <button onclick="addComment(${i})" id="button${i}" class="posting_button">Posten</button>
            </div>
            <hr class="post_separator">
    </div>

</div>
`;
}


function renderPost() {
    let posts = document.getElementById('post');
    for (let i = 0; i < instagramPost.length; i++) {
        const post = instagramPost[i];
        posts.innerHTML += returnPosts(post, i);
    }
    renderComment();
}

function liked(i) {
    let likeHeart = document.getElementById(`likeHeart${i}`);
    likeHeart.classList.toggle('toggle_img');
    let filledLikeHeart = document.getElementById(`filledLikeHeart${i}`);
    filledLikeHeart.classList.toggle('toggle_img');
    filledLikeHeart.classList.toggle('red_heart');
    let likeCounter = document.getElementById(`like_counter${i}`);
    if (likeHeart.classList.contains('toggle_img')) {
        likeCounter.innerHTML = +likeCounter.innerHTML + 1;
    } else {
        likeCounter.innerHTML = +likeCounter.innerHTML - 1;
    }
}

function postSaved(i) {
    let save = document.getElementById(`saved${i}`);
    save.classList.toggle('toggle_img');
    let filledSave = document.getElementById(`filledSaved${i}`);
    filledSave.classList.toggle('toggle_img');
    filledSave.classList.toggle('blue_save');

    let author = document.getElementById(`author${i}`).innerHTML;
    if (save.classList.contains('toggle_img')) {
        alert("Du folgst jetzt " + author + ".");
    } else {
        alert("Du hast " + author + " erfolgreicht entfolgt.");
    }
}


function renderComment() {
    getLocalStorage();
    for (let i = 0; i < instagramPost.length; i++) {
        let commentCtn = document.getElementById(`commentCtn${i}`);
        commentCtn.innerHTML = '';
        const post = instagramPost[i];
        for (let j = 0; j < post['comment'].length; j++) {
            document.getElementById(`commentCtn${i}`).innerHTML += returnComment(i, post, j);      
        } 
    }
    
}

function returnComment(i, post, j) {
    return `
    <div class="post_Comment">
        <span id="commentAuthor${i}">${post['comment_author'][j]}</span>
        <text id="comment${j}">${post['comment'][j]}</text>
    </div>
`;
}

function addComment(i) {
    const array = instagramPost[i];
    let name = document.getElementById(`commentAuthor${i}`);
    name.innerHTML = "Ich:";
    array['comment_author'].push(name.innerHTML);
    let comment = document.getElementById(`comment_input${i}`);
    if (comment.value == '') {
        alert("schreibt bitte einen kommentar");
    } else {
        array['comment'].push(comment.value);
    }
    comment.value = '';
    setLocalStorage();
    renderComment();
}

function setLocalStorage(){
    let post = instagramPost;
    postAsText = JSON.stringify(post);
    localStorage.setItem('post', postAsText);
}

function getLocalStorage(){
    let post = instagramPost;
    let postAsText = localStorage.getItem('post');
    if(postAsText){
        post = JSON.parse(postAsText);
        instagramPost = post;
    }
}


// function getLocalStorage(i){
//     let array = instagramPost[i];
//     let comment = array['comment'];
//     let commentAsText = localStorage.getItem('comment');
//     if(commentAsText){
//         comment = JSON.parse(commentAsText);
//         array['comment'] = comment;
//     }
//     let author = array['comment_author'];
//     let authorAsText = localStorage.getItem('author')
//     if(authorAsText){
//         author = JSON.parse(authorAsText);
//         array['comment_author'] = author;
//     }
// }


