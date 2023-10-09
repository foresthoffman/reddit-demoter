let scrollerParent = document.querySelectorAll("[data-scroller-first]")[0].parentElement;
scrollerParent.addEventListener("DOMNodeInserted", (e) => {
    if (e.target.tagName != "SPAN") {
        return;
    }
    let closestPostContainer = e.target.closest('[data-testid="post-container"]');
    if (closestPostContainer.classList.contains("promotedlink") || closestPostContainer.classList.contains("promotedLink")) {
        // console.log("AHHA!", closestPostContainer.parentElement.parentElement.parentElement);
        closestPostContainer.parentElement.parentElement.parentElement.remove();
        return;
    }
});
