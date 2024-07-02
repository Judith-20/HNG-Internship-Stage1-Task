document.addEventListener("DOMContentLoaded", function() {

    //Function to update UTC time and day
    function updateTimeAndDay() {
        const now = new Date();
        const utcTime = now.toUTCString().split(" ")[4];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const day = days[now.getUTCDay()];

        document.getElementById("utcTime").textContent = utcTime;
        document.getElementById("currentday").textContent = day;
    }
    // Update the time and day immediately and every second
    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
});
