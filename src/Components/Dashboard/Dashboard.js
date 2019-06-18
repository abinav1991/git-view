import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AutoComplete, Button, Col, Row } from 'antd';
import { GithubActions } from '../../actions/github.actions';
import './Dashboard.css';

/* eslint eqeqeq: 0 */
export class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        login: ''
      },
      showUserData: false
    }
  }

  renderOption = (item) => {
    return (
      <AutoComplete.Option key={item.id} text={item.login}>
        <img alt={item.login} className="github-user-image" src={item.avatar_url}/>
        <div className="github-user-data">
          <p>{item.login}</p>
        </div>
      </AutoComplete.Option>
    );
  }

  handleSearch = (value) => {
    const { dispatch } = this.props;
    let {user} = this.state;
    user = {
      login: value
    }
    this.setState({user})
    dispatch(GithubActions.searchUserNames(value));
  };

  onSelect = () => {
    let {dataSource} = this.props;
    let user = dataSource[0];
    this.setState({user, showUserData: true});
  };

  addUser = () => {
    const { dispatch } = this.props;
    let {user} = this.state;
    dispatch(GithubActions.addUser(user)).then(function(res){
      user = {
        login: ''
      }
      this.setState({user, showUserData: false})
    }.bind(this));
  }

  render() {
    return (
      <div className="container-fluid app-body dashboard">
        <div className="row bottom-padded-row">
          <Row>
            <Col xs={2} sm={4} md={2} lg={4} xl={4}></Col>
            <Col xs={20} sm={16} md={20} lg={16} xl={16}>
              <div className="product-search-box">
                <div className="product-search-label">
                  Search Github Username
                </div>
                <div className="product-search-content">
                  <AutoComplete
                    dataSource={this.props.dataSource.map(this.renderOption)}
                    style={{ width: '100%' }}
                    onSelect={this.onSelect}
                    onSearch={this.handleSearch}
                    value={this.state.user.login}
                    placeholder="Type to Search"/>
                </div>
              </div>
            </Col>
            <Col xs={2} sm={4} md={2} lg={4} xl={4}></Col>
          </Row>
          {
            this.state.showUserData &&
            <Row>
              <Col xs={2} sm={4} md={8} lg={8} xl={8}></Col>
              <Col xs={20} sm={16} md={8} lg={8} xl={8}>
                <div className="product-selected-box">
                  <Row className="product-selected-row">
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <label>User Name</label>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <p className="user-data-name">{this.state.user.id && this.state.user.login}</p>
                      <img className="user-data-image" alt={this.state.user.login} src = {this.state.user.avatar_url}/>
                    </Col>
                  </Row>
                  <Row className="product-selected-row">
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <Button type="primary" onClick={this.addUser}>Add User</Button>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xs={2} sm={4} md={8} lg={8} xl={8}></Col>
            </Row>
          }
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dataSource: state.github.searchlist
  };
}

export default connect(mapStateToProps)(Dashboard);