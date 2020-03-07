var items = {
    Neerdosa: 40,
    Korrigassi: 35,
    KundapuraKoliSaaru: 90,
    MysoreMasalaDosa: 45,
    Allugedda: 25,
    MysorePak: 20,
    CoorgPandiCurry: 60,
    Haalbai: 30,
    BisiBeleBath: 25,
    RavaKesari: 20,
    MangaloreanBiryani: 100,
    KaneRavaFry: 40,
    UdupiSambar: 30,
    MangoChutney: 30,
    MysoreBonda: 25,
    Sagu: 20,
    Ennegai: 25,
    JoladaRotti: 10,
    RagiMudde: 25,
    Gojju: 15,
    KharaPongal: 30,
    Chitranna: 25,
    TatteIdli: 20,
    Chiroti: 30,
    MaddurVada: 25,
    PoriUrundai: 50,
};

var flexBox1 = document.getElementById("flexBox1")
var qty = document.getElementById("qty")
var sub = document.getElementById("sub")
var gridBox1 = document.getElementById("gridBox1")
var Qt = document.getElementById("Qt")
var foodItemName = document.getElementById("foodItemName")
var price = document.getElementById("price")
var tax = document.getElementById("tax")
var finalAmount = document.getElementById("finalAmount")
var totalDiv = document.getElementById("total")
var total = document.getElementById('tot')
var totalBeforeDiscount = document.getElementById('totBeforeDiscount')
var discount = document.getElementById('dis')
var tipButton = document.getElementById('tip')
var tip = Number(document.getElementById("btn").value)

var finalArr = []
function createTable() {
    var val = document.getElementById("foodName").value
    for (key in items) {
        if (key == val) {

            var item1Qt = document.createElement("p")
            Qt.appendChild(item1Qt)
            item1Qt.textContent = qty.value

            var item1Fname = document.createElement("p")
            foodItemName.appendChild(item1Fname)
            item1Fname.textContent = val

            var item1Price = document.createElement("p")
            price.appendChild(item1Price)
            item1Price.textContent = items[key]

            var item1Tax = document.createElement("p")
            tax.appendChild(item1Tax)
            item1Tax.textContent = "5%"


            var item1FinalAmount = document.createElement("p")
            finalAmount.appendChild(item1FinalAmount)
            item1FinalAmount.setAttribute('class', 'final')
            var fin = (items[key] * qty.value) + ((items[key] * 5 / 100) * qty.value)
            item1FinalAmount.textContent = fin


            finalArr.push(fin)
            console.log(finalArr)

            var totalAmount = 0
            for (i = 0; i < finalArr.length; i++) {
                totalAmount = totalAmount + finalArr[i]
            }
            console.log(totalAmount)

            var dis = document.createElement('p')
            discount.appendChild(dis)
            
            var totalBefore = document.createElement('p')
                totalBefore.setAttribute('class', 'ttl')
                totalBefore.textContent = totalAmount + tip + ' Rs'
                totalBeforeDiscount.append(totalBefore)

                function upadteFinalPrice() {
                    totalBefore.remove()
                }
                sub.addEventListener('click', upadteFinalPrice)

            if (totalAmount > 300) {
                var d = Number(totalAmount * (10 / 100))
                dis.textContent = d + " Rs"

                var totalPriceAfterDiscount = document.createElement('p')
                totalPriceAfterDiscount.setAttribute('class', 'ttl')
                totalPriceAfterDiscount.textContent = (totalAmount - d)+ tip + ' Rs'
                total.append(totalPriceAfterDiscount)

                function upadteFinalPrice() {
                    totalPriceAfterDiscount.remove()
                }
                sub.addEventListener('click', upadteFinalPrice)
            } else {
                var totalPriceAfterDiscount = document.createElement('p')
                totalPriceAfterDiscount.setAttribute('class', 'ttl')
                totalPriceAfterDiscount.textContent = totalAmount + tip + ' Rs'
                total.append(totalPriceAfterDiscount)

                function upadteFinalPrice() {
                    totalPriceAfterDiscount.remove()
                }
                sub.addEventListener('click', upadteFinalPrice)
            }
            function updateDiscount() {
                dis.remove()
            }
            sub.addEventListener('click', updateDiscount)
        }
    }
}
sub.addEventListener('click', createTable)

