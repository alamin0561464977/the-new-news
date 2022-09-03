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
        div.innerHTML = `
            <h3 onclick="lodeNews('${category.category_id}')">${category_name}</h3>
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
    console.log(newsContainer)
    news.forEach(news => {
        console.log(news)
    })
}


