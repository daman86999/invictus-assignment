import React, {Component} from 'react';
import Dropzone from 'react-dropzone';

class DropFile extends Component {
  constructor() {
    super();
    this.onDrop = (files) => {
      this.setState({files})
    };
    this.state = {
      files: []
    };
  }

  
  render() {
    const dropzoneStyle = {
        width  : "100%",
        height : "20%",
        border : "1px solid black"
    };

    const files = this.state.files.map(file => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));

    return (
      <Dropzone className="" onDrop={this.onDrop}>
        {({getRootProps, getInputProps}) => (
            <div style={{dropzoneStyle}}>
          <section className="container">
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside>
              <h4>Files</h4>
              <ul>{files}</ul>
            </aside>
          </section>
          </div>
        )}
      </Dropzone>
    );
  }
}


export default DropFile;