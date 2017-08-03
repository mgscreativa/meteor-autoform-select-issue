import { Mongo } from 'meteor/mongo';
import DocumentsSchema from './DocumentsSchema';

const Documents = new Mongo.Collection('Documents');

Documents.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Documents.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Documents.attachSchema(DocumentsSchema);

export default Documents;
