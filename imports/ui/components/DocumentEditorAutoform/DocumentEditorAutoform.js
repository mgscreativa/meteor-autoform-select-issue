/* eslint-disable max-len, no-return-assign */

import React from 'react';
import PropTypes from 'prop-types';
import { AutoForm, TextField, LongTextField, SelectField, SubmitField } from 'uniforms-bootstrap3';
import DevicesSchema from '../../../api/Documents/DocumentsSchema';

class DocumentEditorAutoform extends React.Component {
  handleSubmit(data) {
    console.log(data);
  }

  render() {
    const { doc } = this.props;

    return (
      <div>
        <AutoForm
          schema={DevicesSchema}
          model={doc}
          onSubmit={data => this.handleSubmit(data)}
        >
          <div className="row">
            <TextField
              className="col-sm-6"
              name="title"
              label="Title"
              placeholder="Document title"
              showInlineError
            />

            <LongTextField
              className="col-sm-6"
              name="body"
              label="Body"
              placeholder="Document Body"
              showInlineError
            />

            <SelectField
              className="col-sm-6"
              name="type"
              label="Type"
              placeholder="Please select document type"
            />
          </div>

          <div className="super-special-class">
            <SubmitField className="super-special-class-with-suffix" />
          </div>
        </AutoForm>

        <AutoForm
          schema={DevicesSchema}
          model={doc}
          onSubmit={data => this.handleSubmit(data)}
        />
      </div>
    );
  }
}

DocumentEditorAutoform.defaultProps = {
  doc: {},
};

DocumentEditorAutoform.propTypes = {
  doc: PropTypes.object,
  history: PropTypes.object.isRequired,
};

export default DocumentEditorAutoform;
