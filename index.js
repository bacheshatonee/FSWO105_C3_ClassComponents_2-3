import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import PropTypes from 'prop-types';
///*
let key = 0;

class Default extends Component {
  render(){
    let displayList = this.props.items;
    const numToShow = parseInt(this.props.numberToShow);
    while (numToShow < displayList.length) {
        displayList.pop();
    }
    const listItems = this.props.items.map(lineItem => <li key={key++}>{lineItem}</li>);
    return(
      <ul>
        {listItems}
      </ul>
    );
  }
}

Default.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  numberToShow: PropTypes.string.isRequired
};

class Ascending extends Component {
  render(){
    let displayList = this.props.items;
    displayList = displayList.sort();
    const numToShow = parseInt(this.props.numberToShow);
    while (numToShow < displayList.length) {
        displayList.pop();
    }
    const listItems = this.props.items.map(lineItem => <li key={key++}>{lineItem}</li>);

    return(
      <ul>
        {listItems}
      </ul>
    );
  }
}

Ascending.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  numberToShow: PropTypes.string.isRequired
};


class Descending extends Component {
  render(){
    let displayList = this.props.items;
    displayList = displayList.reverse();
    const numToShow = parseInt(this.props.numberToShow);
    while (numToShow < displayList.length) {
        displayList.pop();
    }
    const listItems = this.props.items.map(lineItem => <li key={key++}>{lineItem}</li>);

    return(
      <ul>
        {listItems}
      </ul>
    );
  }
}

Descending.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  numberToShow: PropTypes.string.isRequired
};

class TodoList extends Component {
  render() {
    const ORDER = this.props.order;

    return(
      <ul>
        <li key={key++}>Title: {this.props.title}</li>
        <ul>
          <ORDER items={this.props.items} numberToShow={this.props.numberToShow}/>
        </ul>
      </ul>
    );
  }
}

TodoList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  numberToShow: PropTypes.string.isRequired,
  order: PropTypes.func.isRequired
};

class List extends Component {
  render(){
    const TYPE = this.props.listType;
    const divStyle = {
      backgroundColor: 'lightBlue',
      border: '5px solid black',
    };
    return(
      <div style={divStyle}>
        <TYPE order={this.props.order} numberToShow={this.props.numberToShow} title={this.props.title} items={this.props.items}/>
      </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  numberToShow: PropTypes.string.isRequired,
  order: PropTypes.func.isRequired,
  listType: PropTypes.func.isRequired
};

render(<List listType={TodoList} order={Default} numberToShow="3" title="Student todo" items={['Sign up for code review', 'Finish TodoList component', 'Get lots of sleep']}/>,
 document.getElementById('root'))
