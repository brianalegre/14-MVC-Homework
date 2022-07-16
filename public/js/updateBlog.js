// Target
const modal = document.getElementById("myModal");
const btn = document.getElementById("edit-btn");
const span = document.getElementsByClassName("close")[0];
const cancelBtn = document.getElementById("cancel-btn")

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// When the user clicks on cancel, close the modal
cancelBtn.onclick = function () {
    modal.style.display = "none";
}

// SEND PUT
const modalSection = document.querySelector('.modal-footer');
const updateBtn = document.querySelector('#update-btn')

// Update Blog Post
const updateHandler = async (id) => {
    // event.preventDefault();

    const blog_title = document.querySelector('#blogTitle').value.trim();
    const blog_content = document.querySelector('#blogContent').value.trim();
    // const blog_post_date = '2022-03-30'
    const blog_id = id;

    // Check all form variables
    if (blog_title && blog_content) {
        try {
            const response = await fetch('/api/blogs', {
                method: 'PUT',
                body: JSON.stringify({
                    blog_id,
                    blog_title,
                    blog_content,
                    // blog_post_date,
                    // user_id,
                }),
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                document.location.reload();
            }
        } catch (err) {
            console.log(err);
        }
    }
}

if (updateBtn) {
    const blog_id = updateBtn.dataset.id;
    updateBtn.addEventListener('click', () => {
        updateHandler(blog_id);
        // setTimeout(() => location.reload(), 2500);
    });
}
