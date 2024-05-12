//NextJS toolkit
import { Fragment } from 'react';

//My components
import MainNavigation from './main-navigation';
import Footer from './footer';

export default function Layout(props) {
  return (
    <Fragment >
      <MainNavigation />
      {props.children}
      <Footer />
    </Fragment>
  );
}
