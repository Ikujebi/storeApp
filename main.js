const body = document.querySelector("body");
const div = document.createElement("div")


const store = async () => {
    const taye = await fetch("https://fakestoreapi.com/products")
    const data = await taye.json()
    console.log(data);
    data.map(element => {
        const card = document.createElement("div")
        const img = document.createElement("img")
        const h3 = document.createElement("h3")
        const p = document.createElement("p")

        card.classList.add("card");

        img.setAttribute('src', element.image);
        h3.textContent = element.title;
        p.textContent = element.price;
        card.append(img, h3, p);
        div.append(card);

        img.style.width = "5rem"
        h3.style.maxWidth = "12rem"
        card.style.background = "rgba(185, 156, 161, 0.322)"
        div.style.maxWidth = "100%"
        div.style.display = "grid"
        div.style.gridTemplateColumns = "1fr 1fr 1fr 1fr"
        div.style.gap ="20px"
        div.style.width = "100%"
        card.style.borderRadius = "0.6rem"
        card.style.display = "grid"
        card.style.placeContent = "center"
        card.style.width = "100%"



       

    });
}
    



store()
body.append(div)
    