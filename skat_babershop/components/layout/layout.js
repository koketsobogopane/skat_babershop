//NextJS toolkit
import { Fragment } from "react";

//My components
import MainNavigation from "./main-navigation";

export default function Layout(props) {
  return (
    <Fragment>
        <MainNavigation />
        {props.children}
    </Fragment>
  )
}
