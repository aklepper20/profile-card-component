console.log(document.body.innerHTML)

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

// How do I change the text color of the name to green?
// How do I access the name?
// How do I change the style?
// How do I change the value of the style?
// console.log(document.getElementById('name').style.color = "yellow")
// document.getElementsByClassName('profile')[0].src = dog.profileImg;

document.getElementById('name').innerHTML = dog.name;

document.getElementsByTagName('p')[0].innerHTML = dog.location;


document.getElementsByClassName('footer-number')[0].innerHTML = dog.stats.followers;
document.getElementsByClassName('footer-number')[1].innerHTML = dog.stats.likes;
document.getElementsByClassName('footer-number')[2].innerHTML = dog.stats.posts;
document.getElementsByClassName('age')[0].innerHTML = dog.age;
