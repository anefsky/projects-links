import React, {Component} from 'react';

class DisplayLinks extends Component {

  render() {

    const bodyRows = this.props.data.map(item =>
        <tr key={item.name}>
            <td>{item.name}</td>
            <td><a target="_blank" href={item.source}>github &#8599;</a></td>
            <td><a target="_blank" href={item.hosted}>app &#8599;</a></td>
            <td>{item.description}</td>
        </tr>
    );

    const headings = [
      'Name',
      'Source code',
      'Demo',
      'Description'
    ];

    const headingRow = headings.map(item =>
      <th key={item}>{item}</th>  
    );

    return (
      <div className="displayLinks">
        <div>
          <h2 className="table-title">Links to Andrew's javascript projects</h2>
          <table>
              <thead>
                <tr>
                  {headingRow}
                </tr>
              </thead>
              <tbody>
                  {bodyRows}
              </tbody>
          </table>
        </div>
      </div>
    );

  }
}

export default DisplayLinks;