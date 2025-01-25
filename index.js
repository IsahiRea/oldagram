const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainContainer = document.getElementById("main-container");

for (let index = 0; index < posts.length; index++) {
    const post = posts[index];
    
    // Create post element
    createPost(post);
}

function createPost(post) {
    //TODO: Write HTML to create a post element    

    mainContainer.innerHTML += `
    <section class="post-container">
        <div class="post-header">
            <img src="${post.avatar}" alt="avatar" class="avatar">
            <div class="user-info">
                <h3>${post.name}</h3>
                <p>${post.location}</p>
            </div>
        </div>
        <img src="${post.post}" alt="post" class="post">
        <div class="post-footer">
            <div class="interactions">
                <img src="images/icon-heart.png" alt="Like icon" class="icon">
                <img src="images/icon-comment.png" alt="Comment Icon" class="icon">
                <img src="images/icon-dm.png" alt="Direct Message Icon" class="icon">
            </div>
            <p class="bold">${post.likes} likes</p>
            <p><span class="bold">${post.username}</span> ${post.comment}</p>
        </div>
    </section>
    `
}

