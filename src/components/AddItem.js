import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productOwnername:"",
      productPrice: 0,
      productEmail:"",
      productImg:'',
    };
  }
  render() {
    return (
      <form
        className="row mb-6 "
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addItem(this.state.productOwnername,this.state.productName,Number(this.state.productPrice),this.state.productEmail,this.state.productDesc,);
        }}
      >
        <div className="mb-4 col-2">
          <label htmlFor="inputOwnername" className="form-label">
            OwnerName
          </label>
          <input
            type="text"
            className="form-control"
            id="inputOwnername"
            aria-describedby="Ownername"
            name="productOwnername"
            onChange={(e) => {
              this.setState({ productOwnername: e.currentTarget.value });
            }}
            value={this.state.productOwnername}
          />
        </div>
        <div className="mb-4 col-2">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productName"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>
        
        <div className="mb-4 col-2">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice: e.currentTarget.value });
            }}
            value={this.state.productPrice}
          />
        </div>
        <div className="mb-4 col-2">
          <label htmlFor="inputEmail" className="form-label">
            Email-address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputemail"
            aria-describedby="name"
            name="productEmail"
            onChange={(e) => {
              this.setState({ productEmail: e.currentTarget.value });
            }}
            value={this.state.productEmail}
          />
        </div>
        <div className="mb-4 col-2 ">
          <label htmlFor="inputDesc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="inputimg"
            aria-describedby="desc"
            name="productdesc"
            onChange={(e) => {
              this.setState({ productDesc: e.currentTarget.value });
            }}
            value={this.state.productDesc}
          />
        </div>
        <button type="submit" className="btn btn-primary col-2">
          Add to Sell
        </button>
      </form>
    );
  }
}

export default AddItem;