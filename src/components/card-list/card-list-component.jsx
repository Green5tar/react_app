import { Component } from "react";
import './card-list.style.css';

class CardList extends Component{
    render() {
        console.log("this.props", this.props)

        const { monsters } = this.props;

        return(
            <div className="card-list">
                {monsters.map((monster, index) => {
                    const {email, name, id} = monster
                    return(
                    <div key={index} className="card-container">
                       <img src={`https://robohash.org/${id}/?set=set2&size=180x180`} alt={`monster ${name}`} /> 

                        <h2>{name}</h2>
                        <p>{email}</p>
                    </div>
                    )
                    }
                )
                }
            </div>
        )
    }
}

export default CardList;
