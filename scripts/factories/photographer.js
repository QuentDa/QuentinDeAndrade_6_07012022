function photographerFactory(data) {
    const { name, portrait, id, city,  country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const a = document.createElement('a');
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const span = document.createElement('span')
        const p = document.createElement('p')
        const spanPrice = document.createElement('span')
        spanPrice.classList.add('indexprice')
        spanPrice.textContent = price + '€/jour'
        p.textContent = tagline
        span.textContent = city + ', ' + country
        span.classList.add('cityCountry')
        img.classList.add('round')
        img.setAttribute("src", picture)
        img.setAttribute("alt", name)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        a.href = 'photographer.html?id='+id
        a.appendChild(article);
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(span)
        article.appendChild(p)
        article.appendChild(spanPrice)
        return a;
    }
    return { name, picture, getUserCardDOM }
}