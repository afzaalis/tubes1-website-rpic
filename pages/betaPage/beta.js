document.addEventListener("DOMContentLoaded", () => {
    const gridItems = document.querySelectorAll(".grid-item");
    const pcDisplay = document.querySelector(".pc-display");
    const confirmBtn = document.querySelector(".confirm-btn");
    let selectedPCs = [];

    gridItems.forEach(item => {
        item.addEventListener("click", () => {
            const pcNumber = item.textContent;
            const pcType = "Beta"; // Set PC type
            const price = 10000; // Set price for Beta

            const pcObject = { number: pcNumber, type: pcType, price: price };

            if (selectedPCs.find(pc => pc.number === pcNumber)) {
                selectedPCs = selectedPCs.filter(pc => pc.number !== pcNumber);
                item.style.backgroundColor = "white";
            } else if (selectedPCs.length < 3) {
                selectedPCs.push(pcObject);
                item.style.backgroundColor = "purple";
            }

            pcDisplay.textContent = selectedPCs.length > 0 ? selectedPCs.map(pc => pc.number).join(", ") : "--";
        });
    });

    confirmBtn.addEventListener("click", () => {
        if (selectedPCs.length > 0) {
            localStorage.setItem("selectedPCs", JSON.stringify(selectedPCs));
            window.location.href = "/pages/orderPage/order.html"; // Update path as needed
        } else {
            alert("Pilih minimal 1 PC sebelum konfirmasi.");
        }
    });
});
