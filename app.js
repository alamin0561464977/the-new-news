const lodeNewsCategory = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`)
    const data = await res.json();
    const category = data.data.news_category;
    displayNewsCategory(category);
    // console.log(data.data.news_category);
};
lodeNewsCategory();

const displayNewsCategory = async (category) => {
    category.forEach(category => {
        // console.log(category);
        const { category_name } = category;
        const categorySection = document.getElementById('categorySection');
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
            <h6 class="" onclick="lodeNews('${category.category_id}')">${category_name}</h6>
        `;
        categorySection.appendChild(div);
    });

};
const lodeNews = async (category_id) => {
    // console.log(category_id);
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    const res = await fetch(url)
    const data = await res.json()
    displayNews(data.data)
};
const displayNews = (news) => {
    const newsContainer = document.getElementById('newsContainer');
    news.forEach(news => {
        console.log(news);
        const { image_url, title, details, author, total_view } = news;
        const { name, img, published_date } = author;
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('card', 'mb-3')
        newsDiv.innerHTML = `
        <div class="row g-0">
            <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                <img style="height: 100%;" src="${image_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                <div class="card-body">
                    <h3 class="card-title">${title}</h3>
                    <p class="card-text">${details.slice(0, 220)}...</p>
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-5 col-lg-5 d-flex">
                            <img style="max-width: 50px; height: 50px ;" src="${img}" class="img-fluid rounded-circle" alt="...">
                            <div class="mx-2">
                                <p class="mb-0">${name}</p>
                                <p>${published_date}</p>
                            </div>
                        </div>
                        <div class="col-2">
                            <p><img style="max-width: 20px; height: 30px ;" src="https://iconarchive.com/download/i83709/custom-icon-design/mono-general-4/eye.ico" class="img-fluid rounded-circle" alt="..."> ${total_view}</p>
                        </div>
                        <div class="col-3">
                            <img style="max-width: 100%; height: 60px ;" src="https://static.vecteezy.com/system/resources/thumbnails/003/355/389/small/five-5-star-rank-sign-illustration-free-vector.jpg" class="img-fluid rounded-circle" alt="...">
                        </div>
                        <div class="col-2">
                            <img style="max-width: 100px; height: 80px ;" src="https://www.freeiconspng.com/thumbs/white-arrow-png/white-arrow-png-17.png" class="img-fluid rounded-circle" alt="...">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        newsContainer.appendChild(newsDiv);
    })
}


