import React from 'react';
import { BookstoreServiceConsumer } from '../BooksStoreServiceContext';

const WithBookstoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreService) => {
            return (<Wrapped {...props}
                     bookstoreService={bookstoreService}/>);
          }
        }
      </BookstoreServiceConsumer>
    );
  }
};

export default WithBookstoreService;