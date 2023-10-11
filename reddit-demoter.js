// Target the infinite scroll area.
let focusableDiv = document.querySelector("#SHORTCUT_FOCUSABLE_DIV");

// Wait for promoted posts to be loaded and delete them.
let observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type !== "childList") {
            return
        }
        let promotedPost = mutation.target.closest('[data-testid="post-container"]');
        if (promotedPost === null || !promotedPost.classList.contains("promotedlink")) {
            return
        }

        let promotedPostContainer = promotedPost.parentElement.parentElement.parentElement;
        promotedPostContainer.remove();
    });
});

observer.observe(focusableDiv, {
    childList: true,
    characterData: true,
    subtree : true,
});
