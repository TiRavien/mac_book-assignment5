document.getElementById('memory-8GB').addEventListener('click', function () {
    updateValue('extraMemory-cost', 0)
});
document.getElementById('memory-16GB').addEventListener('click', function () {
    updateValue('extraMemory-cost', 180)
});
document.getElementById('storage-256GB').addEventListener('click', function () {
    updateValue('extraStorage-cost', 0);
});
document.getElementById('storage-512GB').addEventListener('click', function () {
    updateValue('extraStorage-cost', 100);
});
document.getElementById('storage-1TB').addEventListener('click', function () {
    updateValue('extraStorage-cost', 180);
});
document.getElementById('delivery-free').addEventListener('click', function () {
    updateValue('delivery-charge', 0);
});
document.getElementById('delivery-cost').addEventListener('click', function () {
    updateValue('delivery-charge', 20);
});

function updateValue(id, value) {
    var extraCost = document.getElementById(id);
    extraCost.innerText = value;

    let bestPriceElement = document.getElementById('best-price');
    let bestPrice = parseInt(bestPriceElement.innerText);

    let memoryCostElement = document.getElementById('extraMemory-cost');
    let memoryCost = parseInt(memoryCostElement.innerText);

    let storageCostElement = document.getElementById('extraStorage-cost');
    let storageCost = parseInt(storageCostElement.innerText);

    let deliveryChargeElement = document.getElementById('delivery-charge');
    let deliveryCharge = parseInt(deliveryChargeElement.innerText);

    let extraTotalPrice = bestPrice + memoryCost + storageCost + deliveryCharge;

    let extraTotalElement = document.getElementById('total-price');
    let totalElement = document.getElementById('total');
    extraTotalElement.innerText = extraTotalPrice;
    totalElement.innerText = extraTotalPrice;
};

document.getElementById('applyPromo-code').addEventListener('click', function () {
    let extraTotalElement = document.getElementById('total-price');
    let totalElement = document.getElementById('total');
    let promoInput = document.getElementById('promo-code');
    let codeValue = promoInput.value;
    let totalPrice = parseInt(extraTotalElement.innerText);

    if (codeValue = 'stevekaku') {
        let discount = (totalPrice / 100) * 20;
        totalElement.innerText = totalPrice - discount;
    }
    promoInput.value = '';
});
