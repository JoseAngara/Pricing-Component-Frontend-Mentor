let prices = [
    { pageviews: "10K", price: 8 },
    { pageviews: "50K", price: 12 },
    { pageviews: "100K", price: 16 },
    { pageviews: "500K", price: 24 },
    { pageviews: "1M", price: 36 }
];

let pageviews = document.getElementById("pageviews") as HTMLElement;
let price = document.getElementById("price") as HTMLElement;
let planSlider = document.getElementById("planSlider") as HTMLInputElement;
let billing = document.getElementById("billing") as HTMLInputElement;

function loadData(): void {
    let planInfo = prices[planSlider.value];
    pageviews.innerText = `${planInfo.pageviews} PAGEVIEWS`;
    price.innerText = billing.checked ? `$${planInfo.price * 0.75}.00` : `$${planInfo.price}.00`;
}