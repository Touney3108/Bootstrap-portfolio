//copy text on click
document.querySelector("#mailModalBtn").addEventListener("click", function () {
    document.querySelector("#mailAddress").parentElement.parentElement.querySelector("p").classList.remove("d-none");
    console.log(document.querySelector("#mailAddress").parentElement.parentElement.querySelector("p").classList)
    navigator.clipboard.writeText(document.querySelector("#mailAddress").value);
})
document.querySelector("#wappModalBtn").addEventListener("click", function () {
    document.querySelector("#wappNumber").parentElement.parentElement.querySelector("p").classList.remove("d-none");
    
    navigator.clipboard.writeText(document.querySelector("#wappNumber").value);
})

//refresh notification message after modal is closed
document.querySelector("#mailModal").addEventListener("hidden.bs.modal", function () {
    if (!document.querySelector("#mailAddress").parentElement.parentElement.querySelector("p").classList.contains("d-none")) {
    document.querySelector("#mailAddress").parentElement.parentElement.querySelector("p").classList.add("d-none");
    }
})
document.querySelector("#wappModal").addEventListener("hidden.bs.modal", function () {
    if (!document.querySelector("#wappNumber").parentElement.parentElement.querySelector("p").classList.contains("d-none")) {
    document.querySelector("#wappNumber").parentElement.parentElement.querySelector("p").classList.add("d-none");
    }
})