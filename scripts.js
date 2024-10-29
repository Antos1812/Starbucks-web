document.addEventListener("DOMContentLoaded", function() {
    var MoreIsland = document.getElementsByClassName("IslandMore")[0];

    document.getElementById("starbucksSearchForm").addEventListener("submit", function(event){
        event.preventDefault();
        const location = document.getElementById("InputId").value;
        const query = `https://www.google.com/maps/search/Starbucks+${encodeURIComponent(location)}`;
        window.open(query, "_blank");
    });

    function navigateToMain(url) {
        window.open(url);
        console.log("Przejście na stronę");
    }

    function navigateTo(url) {
        window.location.href = url;
    }

    function openMore() {
        if (MoreIsland) {
            MoreIsland.style.display = "block";
            console.log("Opening More section");
        }
    }

    function closeMore() { 
        if (MoreIsland) {
            MoreIsland.style.display = "none";
            console.log("Closing More section");
        }
    }
});
