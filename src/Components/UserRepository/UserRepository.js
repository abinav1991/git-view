import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar, Breadcrumb, Card, Col, Icon, PageHeader, Row } from 'antd';
import { GithubActions } from '../../actions/github.actions';
import moment from 'moment';
import './UserRepository.css';

const { Meta } = Card;

/* eslint eqeqeq: 0 */
export class UserRepository extends Component {

  componentWillMount() {
    const { match, dispatch } = this.props;
    let user = match.params.user;
    dispatch(GithubActions.getUserRepository(user));
  }

  render() {
    const {match, repos} = this.props;
    let user = match.params.user;
    return (
      <div className="container-fluid app-body user-repository">
        <Row className="page-breadcrumb">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/dashboard">Dashboard</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="/users">User</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                {user}
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
            {repos.length > 0 && repos.map((repo, key) => (
            <Col key = {key} xs={24} sm={24} md={12} lg={6} xl={6}>
              <Card className="card"
              actions={[<a href={repo.html_url} rel="noopener noreferrer" target="_blank"><Icon style={{width: '20%' }} type="github"/></a>]}>
                  <Meta style={{ height: 160 }}
                  avatar={<Avatar src={repo.owner.avatar_url} />}
                  title={<span><b>Title:</b> {repo.name}</span>}
                  description={
                  <div>
                      <span><b>Description:</b> {repo.description}</span>
                      <br/>
                      <span><b>Language:</b> {repo.language}</span>
                      <br/>
                      <span><b>Created Date:</b> {moment(repo.created_at).format('DD/MM/YYYY')}</span>
                      <br/>
                  </div>
                  }
                  />
              </Card>
            </Col>
            ))}
            {repos.length === 0 &&
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <PageHeader style={{width: '100%', textAlign: 'center'}} title="Sorry, there are no repository!"/>
            </Col>
            }
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    repos: state.github.userRepos
  };
}

export default connect(mapStateToProps)(UserRepository);