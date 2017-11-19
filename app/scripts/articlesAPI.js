const articlesAPI = {
  articles: [
    { id: 1, description: 'this is the article 1'},
    { id: 2, description: 'this is the article 2'},
    { id: 3, description: 'this is the article 3'},
  ],
  all: function () { return this.articles},
  get: function (id) {
    return this.articles.find(a => a.id == id)
  }
}

export default articlesAPI
