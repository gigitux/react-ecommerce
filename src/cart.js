import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

export default class Cart extends Component {
  render () {
    console.log("stoincart")
      if (sessionStorage.cart == null) {
      return (
        <div>
          Ancora devi aggiungere niente al carello
        </div>
      );
      } else {
        var array_cart = JSON.parse(sessionStorage.cart);
        return (
          <BootstrapTable data={array_cart} striped hover>
            <TableHeaderColumn isKey dataField='model'>Modello</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Prezzo</TableHeaderColumn>
          </BootstrapTable>
        );
      }
  }
}
