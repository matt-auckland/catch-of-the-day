import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  static propTypes = {
    updateFish: PropTypes.func.isRequired,
    index: PropTypes.string.isRequired,
    deleteFish: PropTypes.func.isRequired,
    fish: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    }).isRequired
  };

  handleChange = event => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          name="name"
          value={this.props.fish.name}
          onChange={this.handleChange}
          ref={this.nameRef}
          type="text"
          placeholder="Name"
        />
        <input
          name="price"
          value={this.props.fish.price}
          onChange={this.handleChange}
          ref={this.priceRef}
          type="text"
          placeholder="Price"
        />
        <select
          name="status"
          value={this.props.fish.status}
          onChange={this.handleChange}
          ref={this.statusRef}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>

        <textarea
          name="desc"
          value={this.props.fish.desc}
          onChange={this.handleChange}
          ref={this.descRef}
          placeholder="Desc"
        />
        <input
          name="image"
          value={this.props.fish.image}
          onChange={this.handleChange}
          ref={this.imageRef}
          type="text"
          placeholder="Image"
        />
        <button type="submit">+ Add Fish</button>
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
