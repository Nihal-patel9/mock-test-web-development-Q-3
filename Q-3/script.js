       const postsContainer = document.getElementById("posts");

        // Display skeleton loader
        for (let i = 0; i < 5; i++) {
            const skeleton = document.createElement("div");
            skeleton.classList.add("skeleton");
            postsContainer.appendChild(skeleton);
        }

        // Fetch data from JSONPlaceholder API
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(posts => {
                // Remove skeleton loader
                postsContainer.innerHTML = "";

                // Display fetched data
                posts.forEach(post => {
                    const postElement = document.createElement("div");
                    postElement.textContent = post.title;
                    postsContainer.appendChild(postElement);
                });
            })
            .catch(error => {
                console.log(error);
            });