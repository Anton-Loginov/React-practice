import React, {Component} from 'react';
import CommentList from './CommentList';
import PropTypes from 'prop-types';

export default class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    // this.handleOpen = this.handleOpen.bind(this);
  }
  handleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  getBody() {
    if (!this.state.isOpen) return null;
    const {article} = this.props;
    return (
      <section className="section">
        {article.text}
        <CommentList comments={article.comments} />
      </section>)
  }

  render() {
    const {article} = this.props;
    const {isOpen} = this.state;
    return (
      <div>
        <h3 className="title">{article.title}</h3>
        <button onClick={this.handleOpen} className="btn">
          {isOpen ? 'open': 'close'}
        </button>
        {this.getBody()}
      </div>
    )
  }
}

