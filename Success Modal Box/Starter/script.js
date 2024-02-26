const btns = document.querySelectorAll(".btn");
const modals = document.querySelectorAll(".modal");
const modalBtn = document.querySelectorAll(".modal-btn");


btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        modals.forEach((modal) => {
            if (modal.classList[0].split("-")[0] === btn.classList[1].split("-")[0]) {
                modal.classList.add("open");
            }
            modalBtn.forEach(modalBtn => {
                modalBtn.addEventListener("click", () => {
                    modal.classList.remove("open");
                })
            })
        })
    })
})