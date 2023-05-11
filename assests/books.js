let books;


async function renderbooks(filter) {
    const booksWrapper = document.querySelector('.books');

    booksWrapper.classList += " books__loading"

    if(!books){
    books = await getBooks();
}
    booksWrapper.classList.remove("books__loading")

    if(filter === 'LOW_TO_HIGH') {
    books.sort ((a,b) => (a.salesPrice || a.originalPrice) - (b.salesPrice || b.originalPrice));
}
    else if(filter === 'HIGH_TO_LOW') {
    books.sort ((a,b) => (b.salesPrice || b.originalPrice) - (a.salesPrice || a.originalPrice));
}
    else if(filter === 'RATING') {
    books.sort ((a,b) => b.rating - a.rating);
}



    const booksHtml = books.map((book) => {
        return ` <div class = "book">
                <figure class="book__img--wrapper">
                    <img class="book__img" src= "${book.url}" alt="">
                </figure>
                <div class="book__title">
                   ${book.title}
                </div>
                <div class="book__ratings">
                    ${ratingsHTML(book.rating)}
                </div>
                <div class="book__price">
                ${priceHTML(book.originalPrice.toFixed(2), book.salesPrice.toFixed(2))}
                    
                </div>
            </div>`
    }).join("")

    booksWrapper.innerHTML = booksHtml;
}

function priceHTML (originalPrice,salesPrice){
    if (!salesPrice){
        return `$${originalPrice.toFixed(2)}`
    }
    else {
   return  `<span class="book__price--normal">$${originalPrice}</span> $${salesPrice}`
    }
    console.log(originalPrice,salesPrice)
}
 




function ratingsHTML(rating){

let ratingHtml = " ";
for (let i = 0; i < Math.floor(rating); ++i){
    ratingHtml += '<i class="fas fa-star"></i>\n';
}
if (!Number.isInteger(rating)){
    ratingHtml += '<i class="fas fa-star-half-alt"></i>\n';
}
return ratingHtml;
}


function filterBooks(event){
   event.target.value === 'LOW_TO_HIGH'
    renderbooks(event.target.value)
   }

setTimeout(() => {
    renderbooks();
})


function getBooks(){
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(
                [
                    {
                        id: 1,
                        title:  "The 50th Law",
                        url: "assests/img/bk1.jpg",
                        originalPrice: 40.95,
                        salesPrice: 71,
                        rating: 4
                    },
                    {
                        id: 2,
                        title:  "The Laws of Human Nature",
                        url: "assests/img/bk2.jpg",
                        originalPrice: 35.95,
                        salesPrice: 110,
                        rating: 2.5
                    },
                    {
                        id: 3,
                        title:  "Daily Laws",
                        url: "assests/img/bk3.jpg",
                        originalPrice: 27.95,
                        salesPrice: 14.95,
                        rating: 3.5
                    },
                    {
                        id: 4,
                        title:  "The Art of Seduction",
                        url: "assests/img/bk4.jpg",
                        originalPrice: 4.95,
                        salesPrice: 32.95,
                        rating: 5 
                    },
                    {
                        id: 5,
                        title:  "The Work book",
                        url: "assests/img/bk5.jpg",
                        originalPrice: 29.95,
                        salesPrice: 24.95,
                        rating: 4
                    },
                    {
                        id: 6,
                        title:  "The 33 Trategies",
                        url: "assests/img/bk6.jpg",
                        originalPrice: 49.95,
                        salesPrice: 14,
                        rating: 4.5
                    },
                    {
                        id: 7,
                        title:  "The 50th Law",
                        url: "assests/img/bk1.jpg",
                        originalPrice: 39.95,
                        salesPrice: 17.95,
                        rating: 4
                    },
                    {
                        id: 8,
                        title:  "The Laws of Human Nature",
                        url: "assests/img/bk2.jpg",
                        originalPrice: 50.95,
                        salesPrice: 12.65,
                        rating: 3.5
                    },
                    {
                        id: 9,
                        title:  "Daily Laws",
                        url: "assests/img/bk3.jpg",
                        originalPrice: 49,
                        salesPrice: 7,
                        rating: 4
                    },
                    {
                        id: 10,
                        title:  "The Art of Seduction",
                        url: "assests/img/bk4.jpg",
                        originalPrice: 71,
                        salesPrice: 14,
                        rating: 5
                    }
                ]
            )

        }, 1000)

    })
   
}