import React from 'react';
import PropTypes from 'prop-types';
import DocumentEditorAutoform from '../../components/DocumentEditorAutoform/DocumentEditorAutoform';

const NewDocumentAutoform = ({ history }) => (
  <div className="NewDocument">
    <h4 className="page-header">New Document</h4>
    <DocumentEditorAutoform history={history} />
  </div>
);

NewDocumentAutoform.propTypes = {
  history: PropTypes.object.isRequired,
};

export default NewDocumentAutoform;
