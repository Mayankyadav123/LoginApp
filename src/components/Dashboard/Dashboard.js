import React, { Component, Fragment } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  getData() {
    var products = [
      //      { id: 1, name: "Methane", rate: 2, quality: [1, 2, 3] },
      { id: 1, name: "Methane", rate: 2, quality: 1 },
      { id: 2, name: "Ethanol", rate: 3, quality: 3 },
      { id: 3, name: "Phenol", rate: 2, quality: 2 },
      { id: 4, name: "Propane", rate: 3, quality: 2 },
      { id: 5, name: "Butane", rate: 1, quality: 1 }
    ];
    return products;
  }

  render() {
    return (
      <Fragment>
        <div className="login">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                {this.props.username ? (
                  <Fragment>
                    <p className="lead text-center">
                      Welcome {this.props.username}
                    </p>
                    <BootstrapTable data={this.getData()}>
                      <TableHeaderColumn isKey dataField="id">
                        ID
                      </TableHeaderColumn>
                      <TableHeaderColumn dataField="name">
                        Name
                      </TableHeaderColumn>
                      <TableHeaderColumn dataField="rate">
                        rate
                      </TableHeaderColumn>
                      <TableHeaderColumn dataField="quality">
                        Quanlity
                      </TableHeaderColumn>
                    </BootstrapTable>
                  </Fragment>
                ) : (
                  <Link className="btn btn-info btn-block mt-4 " to="/login">
                    Go Back To LogIn
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
