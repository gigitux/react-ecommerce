import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as Actions from './actions/actions.js';

class Checkout extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: undefined,
      surname: undefined,
      andress: undefined,
      postcode: undefined,
      country: undefined
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSurname = this.handleChangeSurname.bind(this);
    this.handleChangeAndress = this.handleChangeAndress.bind(this);
    this.handleChangePostCode = this.handleChangePostCode.bind(this);
    this.handleChangeCountry = this.handleChangeCountry.bind(this);
    this.verifyandsubmit = this.verifyandsubmit.bind(this);
  }
  componentWillMount () {
    if (sessionStorage.getItem('user') === null) {
      return null;
    } else {
      this.setState({user: JSON.parse(sessionStorage.getItem('user'))});
      this.setState({device: JSON.parse(sessionStorage.getItem('cart'))});
    }
  }
  verifyandsubmit () {
    if (this.state.name === undefined) {
      alert("Campo obbligatorio")
    } else {
      this.props.checkout(this.state.device);
    }
  }
  handleChangeName (e) {
    this.setState({name: e.target.value});
  }
  handleChangeSurname (e) {
    this.setState({surname: e.target.value});
  }
  handleChangeAndress (e) {
    this.setState({andress: e.target.value});
  }
  handleChangePostCode (e) {
    this.setState({postcode: e.target.value});
  }
  handleChangeCountry (e) {
    this.setState({country: e.target.value});
  }
  render () {
    if (sessionStorage.getItem('user') === null) {
      return (
        <div>
          Registrati per poter procedere al checkout
        </div>
      );
    } else {
      var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
      ,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
      ,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
      ,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
      ,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
      ,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
      ,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
      ,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
      ,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
      ,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
      ,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
      ,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
      ,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
      ,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)"
      ,"Yemen","Zambia","Zimbabwe"];
      var country = country_list.map(function (country) {
        return <option value={country}>{country}</option>;
      });
      return (
        <form>
          <FormGroup
           >
            <ControlLabel>Seleziona Paese</ControlLabel>
            <FormControl componentClass="select" placeholder="select" defaultValue={this.state.country} onChange={this.handleChangeCountry} >
              <option value="select">Italia</option>
              {country}
            </FormControl>
            <br />
            <FormControl
              type="text"
              value={this.state.name}
              placeholder="Inserisci Nome"
              onChange={this.handleChangeName}
            />
            <br />
            <FormControl
              type="text"
              value={this.state.surname}
              placeholder="Inserisci Cognome"
              onChange={this.handleChangeSurname}
            />
            <br />
            <FormControl
              type="text"
              value={this.state.andress}
              placeholder="Inserisci Indirizzo"
              onChange={this.handleChangeAndress}
            />
            <br />
            <FormControl
              type="text"
              value={this.state.postcode}
              placeholder="Inserisci PostCode"
              onChange={this.handleChangePostCode}
            />
          </FormGroup>
          <Button bsStyle="success" onClick={() => this.verifyandsubmit()}>Invia</Button>
        </form>
       );
    }
  }
}

function mapDispatchToProps (dispatch) {
  return {
    checkout: (device) => {
      dispatch(Actions.checkout(device));
    }
  };
}

export default connect(null, mapDispatchToProps)(Checkout);
