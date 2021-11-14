console.log('hi')
let dog = {
    name: "Steve",
    age: 1,
    location: "Japan",
    profileImg: "https://images.unsplash.com/photo-1613410180211-106788bd2d94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80",
    bannerImg: "url('https://thumbs.dreamstime.com/b/green-polka-dot-background-25383307.jpg')",
    backgroundColor: "#00FFFF",
    stats: {
        followers: "1.2M",
        likes: "8M",
        posts: "2K"
    }
};

let cat = {
    name: "Mochi",
    age: 1,
    location: "Philippines",
    profileImg: "https://images.unsplash.com/photo-1621780030440-71c9ace78fa3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG9yYW5nZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    bannerImg: "url('https://www.teahub.io/photos/full/159-1595602_chevron-desktop-wallpapers-hd-blue-striped-wallpaper-hd.jpg')",
    backgroundColor: "#FFD580",
    stats: {
        followers: "4.5M",
        likes: "12M",
        posts: "8K"
    },

    speak() {
        return "meow meow"
    }
}

let name = document.getElementById('name');
let age = document.getElementsByClassName('age')[0];
let locationOf = document.getElementsByTagName('p')[0];
let bannerImg = document.getElementsByClassName('profile-image')[0];
let profileImg = document.getElementsByClassName('profile-pic')[0];
let backgroundColor = document.body;
let followers = document.getElementsByClassName('footer-number')[0];
let likes = document.getElementsByClassName('footer-number')[1];
let posts = document.getElementsByClassName('footer-number')[2];

function dogProfile() {
    name.innerHTML = dog.name;
    age.innerHTML = dog.age;
    locationOf.innerHTML = dog.location;
    bannerImg.style.backgroundImage = 'none';
    bannerImg.style.backgroundImage = dog.bannerImg;
    profileImg.style.backgroundImage = `url(${dog.profileImg})`;
    backgroundColor.style.backgroundColor = dog.backgroundColor;
    backgroundColor.style.backgroundImage = 'none';
    followers.innerHTML = dog.stats.followers;
    likes.innerHTML = dog.stats.likes;
    posts.innerHTML = dog.stats.posts;
}

function catProfile() {
    name.innerHTML = cat.name;
    age.innerHTML = cat.age;
    locationOf.innerHTML = cat.location;
    bannerImg.style.backgroundImage = 'none';
    bannerImg.style.backgroundImage = cat.bannerImg;
    profileImg.style.backgroundImage = `url(${cat.profileImg})`;
    backgroundColor.style.backgroundColor = cat.backgroundColor;
    backgroundColor.style.backgroundImage = 'none';
    followers.innerHTML = cat.stats.followers;
    likes.innerHTML = cat.stats.likes;
    posts.innerHTML = cat.stats.posts;
}

catProfile();

let container = document.body;
let switchBtn = document.createElement("button");
switchBtn.innerHTML = 'SWITCH PROFILES!';
container.appendChild(switchBtn);
switchBtn.style.margin = '10px 50px';
switchBtn.style.padding = '8px';
switchBtn.style.borderRadius = '6px';
switchBtn.style.border = 'none';
switchBtn.style.backgroundColor = '#cbb2fe';
container.style.display = 'flex';
container.style.flexDirection = 'column';

switchBtn.addEventListener('click', function() {
    name.innerHTML == cat.name ? dogProfile() : catProfile();
});

// switchBtn.addEventListener('click', function() {
//     if (document.getElementById('name').innerHTML == cat.name) {
//         dogProfile(dog);
//     } else {
//         catProfile(cat);
//     }
// });

// function styleBtn() {
//   console.log('hi')
//   btn.className == 'btn' ? btn.className = 'toggle-red' : btn.className = 'btn';
// }

// textChange.addEventListener('click', function() {
//     if (textChange.style.color == 'black') {
//         textChange.style.color = 'green'
//     } else {
//         textChange.style.color = 'black'
//     }
// })

// textChange.addEventListener('click', function() {
//     textChange.style.color == 'black' ? textChange.style.color = 'green' : textChange.style.color = 'black';
// });
