import React from 'react'

export default class Content extends React.Component {
  render() {
    const qty = this.props.page.perPage - 1
    const page = this.props.page.page
    const itens = this.props.itens.slice(qty * page - qty + page - 1, page * qty + page)
  
    const content = itens.map(item => {
      return (
        /* 
        How each item should be rendered in the browser.
        */
      )
    })

    const Holder = () => {
      return (
        <React.Fragment>
          {content}
        </React.Fragment>
      )
    }
    return (<Holder />)
  }
}