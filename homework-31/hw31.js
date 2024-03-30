const btnSearch = document.querySelector('.btn-search');
btnSearch.addEventListener('click', () => {
    const postId = document.getElementById('post-id').value;
    const btnComments = document.createElement('button');
    if (postId < 1 || postId > 100) {
        alert('Post ID must be between 1 and 100!');
        return;
    }
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => {
            if (!res.ok) {
                throw Error('Error fetching posts');
            }
            return res.json();
        })
        .then(res => {
            const blockPost = document.querySelector('.block-post');
            const blockPostLi = document.querySelectorAll('.block-post li');
            blockPostLi[0].innerHTML = `<strong>Title:</strong> ${res.title}`;
            blockPostLi[1].innerHTML = `<strong>Body:</strong> ${res.body}`;
            blockPost.appendChild(btnComments);
            btnComments.textContent = 'Get comments';

            btnComments.addEventListener('click', () => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                    .then(res => {
                        if (!res.ok) {
                            throw Error('Error fetching comments');
                        }
                        return res.json();
                    })
                    .then(res => {
                        const blockComments = document.querySelector('.block-comments');
                        res.forEach(comment => {
                            blockComments.innerHTML += `
                            <div>
                                <p><strong>Name:</strong> ${comment.name}</p>
                                <p><strong>Email:</strong> ${comment.email}</p>
                                <p><strong>Body:</strong> ${comment.body}</p>
                            </div>`;
                        })
                    })
                    .catch(err => {
                        alert(Error(err.message));
                    });
            });
        })
        .catch(err => {
            alert(Error(err.message));
        });
});
