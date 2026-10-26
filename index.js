// 1. Create an async function to fetch and display posts
async function displayPosts() {
  try {
    // Fetch data from the JSONPlaceholder API using async/await
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();

    // Select the container where posts will be displayed (adjust selector to match your HTML, e.g., an <ul> or container element)
    const postsContainer = document.querySelector("#posts-container") || document.body;

    // Optional: clear container if needed
    // postsContainer.innerHTML = "";

    // 2. Loop through the posts list
    posts.forEach(post => {
      // 3. Within the loop: Create an <li> tag and an <h1> tag (or appropriate tags matching your lab/HTML structure)
      const listItem = document.createElement("li");
      const titleHeading = document.createElement("h1");

      // Set content for the elements
      titleHeading.textContent = post.title;
      
      // You can also add body content if needed
      const bodyParagraph = document.createElement("p");
      bodyParagraph.textContent = post.body;

      // Append elements together and add to the DOM container
      listItem.appendChild(titleHeading);
      listItem.appendChild(bodyParagraph);
      postsContainer.appendChild(listItem);
    });

  } catch (error) {
    console.error("Error fetching or displaying posts:", error);
  }
}

// Invoke the function when the script runs or DOM is loaded
displayPosts();

// Export for testing frameworks like Jest if required by your template
if (typeof module !== "undefined" && module.exports) {
  module.exports = { displayPosts };
}