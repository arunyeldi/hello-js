// Promises are useful to handle async operations in JS

// cart  = ["watches", "shoes", "pants"];

// createOrder(cart, function (orderId) {
//     proceedToPayment(orderId);
// });

// const promise = createOrder(cart);

// promise.then(function (orderId) {
//     proceedToPayment(orderId);
// });


const cart = ["watches", "shirts", "pants"];

createOrder(cart, function() {
    proceedToPayment(orderId, function(paymentInfo) {
        showOrderSummary(paymentInfo, function() {
            updateWalletBalance();
        });
    });
});

createOrder(cart)
.then((orderId) => proceedToPayment(orderId))
.then((paymentInfo) => showOrderSummary(paymentInfo))
.then((paymentInfo) => updateWalletBalance(paymentInfo));