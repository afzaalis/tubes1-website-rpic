document.addEventListener("DOMContentLoaded", () => {
    const historyTableBody = document.querySelector("#historyTable tbody");

    const orderData = JSON.parse(localStorage.getItem("orderData")) || [];

    orderData.forEach(order => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${order.date}</td>
            <td>${order.time || "N/A"}</td> <!-- You might want to capture time in your order data -->
            <td>${order.pcNumber} (${order.type})</td>
            <td>${order.status}</td>
        `;
        historyTableBody.appendChild(row);
    });
});
