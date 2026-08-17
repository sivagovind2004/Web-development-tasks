// Get HTML elements

const blogForm = document.getElementById("blogForm");

const titleInput = document.getElementById("title");

const authorInput = document.getElementById("author");

const contentInput = document.getElementById("content");

const blogContainer = document.getElementById("blogContainer");


// Get saved blogs from localStorage

let blogs = JSON.parse(localStorage.getItem("blogs")) || [];


// Display blogs when page loads

displayBlogs();


// Form Submit

blogForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get values

    const title = titleInput.value.trim();

    const author = authorInput.value.trim();

    const content = contentInput.value.trim();


    // Check if values are empty

    if (title === "" || author === "" || content === "") {

        alert("Please fill all fields.");

        return;
    }


    // Create new blog object

    const newBlog = {

        id: Date.now(),

        title: title,

        author: author,

        content: content

        date: new Date().toLocaleDateString()

    };


    // Add blog to array

    blogs.push(newBlog);


    // Save blogs

    saveBlogs();


    // Display blogs

    displayBlogs();


    // Clear form

    blogForm.reset();


    alert("Blog published successfully!");

});


// Display Blogs Function

function displayBlogs() {

    blogContainer.innerHTML = "";


    // Check if there are no blogs

    if (blogs.length === 0) {

        blogContainer.innerHTML =
            "<p>No blogs published yet.</p>";

        return;
    }


    // Display each blog

    blogs.forEach(function(blog) {

        const blogCard = document.createElement("div");

        blogCard.className = "blog-card";


        blogCard.innerHTML = `

            <h3>${blog.title}</h3>

            <p class="blog-author">
                Written by: ${blog.author}
            </p>

            <p class="blog-content">
                ${blog.content}
            </p>

            <p>Published on: ${blog.date}</p>

            <button
                class="edit-btn"
                onclick="editBlog(${blog.id})">
                Edit
            </button>

            <button
                class="delete-btn"
                onclick="deleteBlog(${blog.id})">
                Delete
            </button>

        `;


        blogContainer.appendChild(blogCard);

    });

}


// Save Blogs

function saveBlogs() {

    localStorage.setItem(
        "blogs",
        JSON.stringify(blogs)
    );

}


// Delete Blog

function deleteBlog(id) {

    const confirmDelete =
        confirm("Are you sure you want to delete this blog?");


    if (!confirmDelete) {

        return;
    }


    blogs = blogs.filter(function(blog) {

        return blog.id !== id;

    });


    saveBlogs();

    displayBlogs();

}


// Edit Blog

function editBlog(id) {

    const blog = blogs.find(function(blog) {

        return blog.id === id;

    });


    if (!blog) {

        return;
    }


    // Put old values into form

    titleInput.value = blog.title;

    authorInput.value = blog.author;

    contentInput.value = blog.content;


    // Delete old blog

    blogs = blogs.filter(function(blog) {

        return blog.id !== id;

    });


    saveBlogs();

    displayBlogs();


    // Scroll to form

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}