import { Meteor } from 'meteor/meteor';
import React from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import Documents from '../../../api/Documents/Documents';
import NotFound from '../NotFound/NotFound';
import DocumentEditorAutoform from '../../components/DocumentEditorAutoform/DocumentEditorAutoform';
import Loading from '../../components/Loading';

const EditDocumentAutoform = ({ loading, doc, history }) => {
  if (loading) { return <Loading />; }

  return (
    doc ? (
      <div className="EditDocument">
        <h4 className="page-header">{`Editing "${doc.title}"`}</h4>
        <DocumentEditorAutoform doc={doc} history={history} />
      </div>
    ) : <NotFound />
  );
};

EditDocumentAutoform.propTypes = {
  loading: PropTypes.bool.isRequired,
  doc: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default createContainer(({ match }) => {
  const documentId = match.params._id;
  const subscription = Meteor.subscribe('documents.view', documentId);

  return {
    loading: !subscription.ready(),
    doc: Documents.findOne(documentId),
  };
}, EditDocumentAutoform);
