import React from 'react'
import Articles from './CatalogArticles'
import requester from '../../Services/requester'

export default class Catalog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: []
    }
  }

  getArticles = () => {
    requester.get('appdata', 'posts', '')
      .then(articles =>
        this.setState({ articles })
      )
      .catch(console.log)
  }

  componentDidMount() {
    this.getArticles()
  }

  render() {
    return (
      <section id='viewCatalog'>
        <Articles articles={this.state.articles} />
      </section>
    )
  }
}
