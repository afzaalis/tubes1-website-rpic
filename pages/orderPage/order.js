document.addEventListener("DOMContentLoaded", () => {
    const orderList = document.querySelector(".order-list");
    const selectedPCs = JSON.parse(localStorage.getItem("selectedPCs")) || [];
    const totalElement = document.querySelector(".order-total span");
    const buyBtn = document.querySelector(".buy-btn");
    const receiptModal = document.getElementById("receiptModal");
    const closeButton = document.querySelector(".close-button");
    const receiptDetails = document.querySelector(".receipt-details");
    const totalPriceElement = document.getElementById("totalPrice");
    const confirmBtn = document.getElementById("confirmPurchase"); 

    let totalPrice = 0;

    selectedPCs.forEach(pc => {
        const orderItem = document.createElement("div");
        orderItem.className = "order-item";
        orderItem.innerHTML = `
            <input type="checkbox" class="order-checkbox" checked>
            <img src="../../images/pc${pc.type.toLowerCase()}.png" alt="PC Image" class="order-image">
            <div class="order-details">
                <h2 class="order-title">${pc.number} (${pc.type})</h2>
                <p class="order-price">Rp. ${pc.price.toLocaleString()}</p>
                <p>WAKTU MULAI: <input type="time" class="order-time"></p>
                <p>DURASI (jam): <input type="number" class="order-duration" min="1" value="1"></p>
            </div>
        `;
        orderList.appendChild(orderItem);
        totalPrice += pc.price; // Add the price of the selected PC
    });

    totalElement.textContent = totalPrice.toLocaleString();

    // Update price based on duration input
    const orderItems = document.querySelectorAll(".order-item");
    orderItems.forEach(item => {
        const durationInput = item.querySelector(".order-duration");
        const priceElement = item.querySelector(".order-price");
        const checkbox = item.querySelector(".order-checkbox");

        // Function to update the price based on duration and checkbox
        const updatePrice = () => {
            if (checkbox.checked) {
                const duration = parseInt(durationInput.value) || 1;
                const pcPrice = selectedPCs.find(pc => pc.number === item.querySelector(".order-title").textContent.split(' ')[0]).price;
                const price = pcPrice * duration;
                priceElement.textContent = `Rp. ${price.toLocaleString()}`;
            } else {
                priceElement.textContent = `Rp. 0`;
            }
            calculateTotal(); 
        };

        // Add event listeners
        durationInput.addEventListener("input", updatePrice);
        checkbox.addEventListener("change", updatePrice);
        updatePrice(); // Initialize price
    });

    // Calculate the total price based on individual item prices
    function calculateTotal() {
        totalPrice = 0; // Reset total price
        orderItems.forEach(item => {
            const price = parseInt(item.querySelector(".order-price").textContent.replace(/[^\d]/g, '')) || 0;
            totalPrice += price; // Accumulate total price
        });
        totalElement.textContent = totalPrice.toLocaleString();
    }

    buyBtn.addEventListener("click", () => {
        // Clear previous receipt details
        receiptDetails.innerHTML = ''; 
        selectedPCs.forEach(pc => {
            const detailItem = document.createElement("div");
            detailItem.textContent = `${pc.number} (${pc.type}) - Rp. ${pc.price.toLocaleString()}`;
            receiptDetails.appendChild(detailItem);
        });
        totalPriceElement.textContent = `Rp. ${totalPrice.toLocaleString()}`; // Ini total price

        // Show payment methods and hide receipt details
        receiptDetails.innerHTML = ''; // Clear previous details

        // Menampilkan metode pembayaran
        const paymentMethodsHTML = `
            <h3>Pilih Metode Pembayaran:</h3>
            <div>
                <input type="radio" id="gopay" name="payment" value="Gopay">
                <label for="gopay"><img src="../../img/gopay.png" alt="Gopay" style="width: 20px; margin-right: 5px;"> Gopay</label>
            </div>
            <div>
                <input type="radio" id="dana" name="payment" value="Dana">
                <label for="dana"><img src="../../img/dana.png" alt="Dana" style="width: 20px; margin-right: 5px;"> Dana</label>
            </div>
            <div>
                <input type="radio" id="bank" name="payment" value="Bank">
                <label for="bank"><img src="../../img/bank.png" alt="Bank" style="width: 20px; margin-right: 5px;"> Bank</label>
            </div>
        `;
        receiptDetails.innerHTML = paymentMethodsHTML; 

        // Show the modal
        receiptModal.style.display = "block"; // Show the modal
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener("click", () => {
        receiptModal.style.display = "none";
    });

    confirmBtn.addEventListener("click", () => {
        const selectedPayment = document.querySelector('input[name="payment"]:checked');
        if (!selectedPayment) {
            alert("Pilih metode pembayaran sebelum melanjutkan.");
            return;
        }

        const paymentMethod = selectedPayment.value; // Ambil metode pembayaran yang dipilih

        // Prepare order data
        const orderData = selectedPCs.map(pc => ({
            date: new Date().toLocaleString(),
            pcNumber: pc.number,
            type: pc.type,
            status: "Completed",
            paymentMethod: paymentMethod // Simpan metode pembayaran
        }));

        // Save order data to local storage
        const existingOrders = JSON.parse(localStorage.getItem("orderData")) || []; // Get existing orders
        existingOrders.push(...orderData); // Add new orders to existing
        localStorage.setItem("orderData", JSON.stringify(existingOrders)); // Save back to local storage

        // Redirect to history page
        window.location.href = "../history/history.html"; 
    });

    localStorage.removeItem("selectedPCs");
    localStorage.removeItem("orderData");
});
