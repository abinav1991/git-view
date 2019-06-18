import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar, Breadcrumb, Card, Col, Icon, Row, Input } from 'antd';
import { GithubActions } from '../../actions/github.actions';
import { history } from '../../helpers';

import './Users.css';

const { Meta } = Card;

/* eslint eqeqeq: 0 */
export class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      userGettingEdited: {}
    }
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(GithubActions.getUsers());
  }

  deleteUser = (user) => {
    const { dispatch } = this.props;
    dispatch(GithubActions.deleteUser(user.id)).then(function(res){
      dispatch(GithubActions.getUsers());
    });
  }

  startEditingUser = (user) => {
    user.isEditing = true;
    this.setState({userGettingEdited: user});
  }

  userChange = (e, user, params) => {
    let value = e.target.value;
    user[params] = value;
    this.setState({userGettingEdited: user});
  }

  editUser = () => {
    const { userGettingEdited } = this.state;
    const { dispatch } = this.props;
    dispatch(GithubActions.editUser(userGettingEdited.id, userGettingEdited)).then(function(res){
      dispatch(GithubActions.getUsers());
    });
  }

  goToUserRepo = (user) => {
    history.push(`users/${user.login}/user-repository`);
  }

  render() {
    const {users} = this.props;
    return (
      <div className="container-fluid app-body users">
        <div className="row bottom-padded-row">
          <Row className="page-breadcrumb">
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/dashboard">Dashboard</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  User
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row>
              {users.map((user, key) => (
              <Col key = {key} xs={24} sm={24} md={12} lg={6} xl={6}>
                <Card className="card"
                    cover={
                    <img
                        alt="example"
                        src={user.avatar_url}
                    />
                    }
                    actions={[<span onClick={() => this.goToUserRepo(user)}>Repositories</span>, user.isEditing ? <Icon type="save" onClick={() => this.editUser()}/>: <Icon type="edit" onClick={() => this.startEditingUser(user)}/>, <Icon type="delete" onClick={() => this.deleteUser(user)}/>]}
                >
                  <Meta
                    avatar={<Avatar src={user.avatar_url} />}
                    title={!user.isEditing ? user.login: <Input value={user.login} onChange={(e)=>this.userChange(e, user, 'login')}></Input>}
                    description={user.type}
                  />
                </Card>
              </Col>
              ))}
          </Row>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.github.users
  };
}

export default connect(mapStateToProps)(Users);