import React from "react"
import Header from "./Header"
import Footer from "./Footer"

export default class DefaultLayout extends React.Component {
    render() {
        return (
            <div >
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}