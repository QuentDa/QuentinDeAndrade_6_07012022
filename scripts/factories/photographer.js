function photographerFactory(data) {
    const { name, portrait, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const a = document.createElement('a');
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        a.href = 'photographer.html?id='+id
        a.appendChild(article);
        article.appendChild(img);
        article.appendChild(h2);
        return a;
    }
    return { name, picture, getUserCardDOM }
}