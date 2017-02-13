import React, { Component } from 'react';
import { Tabs, Tab, FormGroup, FormControl, Button } from 'react-bootstrap';

export default class InfoProduct extends Component {
  constructor (props) {
    super(props);
    this.state = {
      comment: ''
    };
    this.handleChangeComment = this.handleChangeComment.bind(this);
  }

  handleChangeComment (e) {
    this.setState({ comment: e.target.value });
  }
  render () {
    console.log(this.props.email)
    const list_reviews=this.props.reviews.map((review) =>
      <div key={review._id}>
      {review.review}
        <br />
      </div>
  );
    return (
      <div className="col-md-8">
        <div className="product-content-right">
          <div className="row">
            <div className="col-sm-6">
              <div className="product-images">
                <div className="product-main-img">
                  <img src={this.props.images[0]} alt="" />
                </div>

                <div className="product-gallery">
                  <img src={this.props.images[0]} alt="" />
                  <img src={this.props.images[1]} alt="" />
                  <img src={this.props.images[2]} alt="" />
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="product-inner">
                <h2 className="product-name">{this.props.model}</h2>
                <div className="product-inner-price">
                  <ins>{this.props.price}</ins>
                </div>

                <form action="" className="cart">
                  <button className="add_to_cart_button" type="submit" onClick={() => this.props.addtocart(this.props.model, this.props.price)}>Aggiungi al carello</button>
                </form>

                <div className="tab-content">
                  <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Descrizione Prodotto">{this.props.description}</Tab>
                    <Tab eventKey={2} title="Recensioni">{list_reviews}</Tab>
                  </Tabs>
                  {this.props.email == null ? "" :
                    <div className="submit-review">
                      <form>
                        <FormGroup
                          controlId="Userna"
                        >
                          <FormControl
                            type="text"
                            value={this.state.comment}
                            placeholder="Inserisci Commento"
                            onChange={this.handleChangeComment}
                          />
                          <Button bsStyle="primary" onClick={() => this.props.addcomment(this.props.model, this.props.email, this.state.comment)}>Invia</Button>
                        </FormGroup>
                      </form>
                    </div>
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
