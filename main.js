let root = document.documentElement,
checkbox = document.getElementById("dark");



checkbox.addEventListener("input", function () {
    root.className.toggle("dark")
});