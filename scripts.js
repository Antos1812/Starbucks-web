var MoreIsland = document.getElementsByClassName("IslandMore")[0];

function navigateToMain(url) {
    window.open(url);
    console.log("Przejście na stronę");
}

function navigateTo(url) {
    window.location.href = url;
}

function openMore() {
    MoreIsland.style.display = "block";
    console.log("Opening More section");
}

function closeMore() { 
    MoreIsland.style.display = "none";
    console.log("Closing More section");
}
