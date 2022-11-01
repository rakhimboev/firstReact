import React, {Component} from 'react'
import del from '../img/delete.jpg'
import './Products.css'

class Products extends Component {
    constructor(props){
        super(props)
        this.state = {
            count1: 1,
            price: this.props.flower.price,
            total: this.props.flower.price
        }
    }
    render() {
        const plus = () => {
            this.setState({
                count1: this.state.count1 + 1,
                total: this.state.price * (this.state.count1 + 1)})
        }

        const minus = () => {
            this.setState({
                count1: this.state.count1 - 1,
                total: this.state.price / (this.state.count1 - 1)})
        }
        return(
            <div className='box'>
                <div className="products">
                    <div className="picture">
                        <img src={this.props.flower.img} alt='img' width={70} />
                    </div>
                    <div className="titles">
                        <h3>{this.props.flower.name}</h3>
                        <p>SKU: {this.props.flower.sku}</p>
                    </div>
                </div>
                <div className="price">${this.state.price}</div>
                <div className="quantity">
                    <button onClick={minus}>-</button>
                    <p>{this.state.count1}</p>
                    <button onClick={plus}>+</button>
                </div>
                <div className="total">${this.state.total}</div>
                <img className='delete' src={del} alt="del" height={30} />
            </div>
        )
    }
}

export default Products