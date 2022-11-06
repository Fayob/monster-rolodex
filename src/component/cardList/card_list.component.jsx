import { Component } from 'react'
import CardItem from './card'
import './card_list.styles.css'

class CardList extends Component {
  render() {
    const { filterMonsters } = this.props
    return (
        <div className='card-list'>
        {filterMonsters.map((monster) => {
          const { id, name, email } = monster
          return <CardItem id={id} name={name} email={email} />
        })}
      </div>
    );
    
  }

}

export default CardList