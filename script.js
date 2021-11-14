
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

catProfile(cat);

function dogProfile(dog) {
    document.getElementById('name').innerHTML = dog.name;
    document.getElementsByClassName('age')[0].innerHTML = dog.age;
    document.getElementsByTagName('p')[0].innerHTML = dog.location;
    document.getElementsByClassName('profile-image')[0].style.backgroundImage = 'none';
    document.getElementsByClassName('profile-image')[0].style.backgroundImage = dog.bannerImg;
    document.getElementsByClassName('profile-pic')[0].style.backgroundImage = `url(${dog.profileImg})`;
    document.body.style.backgroundColor = dog.backgroundColor;
    document.body.style.backgroundImage = 'none';
    document.getElementsByClassName('footer-number')[0].innerHTML = dog.stats.followers;
    document.getElementsByClassName('footer-number')[1].innerHTML = dog.stats.likes;
    document.getElementsByClassName('footer-number')[2].innerHTML = dog.stats.posts;
}

function catProfile(cat) {
    document.getElementById('name').innerHTML = cat.name;
    document.getElementsByClassName('age')[0].innerHTML = cat.age;
    document.getElementsByTagName('p')[0].innerHTML = cat.location;
    document.getElementsByClassName('profile-image')[0].style.backgroundImage = 'none';
    document.getElementsByClassName('profile-image')[0].style.backgroundImage = cat.bannerImg;
    document.getElementsByClassName('profile-pic')[0].style.backgroundImage = `url(${cat.profileImg})`;
    document.body.style.backgroundColor = cat.backgroundColor;
    document.body.style.backgroundImage = 'none';
    document.getElementsByClassName('footer-number')[0].innerHTML = cat.stats.followers;
    document.getElementsByClassName('footer-number')[1].innerHTML = cat.stats.likes;
    document.getElementsByClassName('footer-number')[2].innerHTML = cat.stats.posts;
}

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
    document.getElementById('name').innerHTML == cat.name ? dogProfile(dog) : catProfile(cat);
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
