import React, { PureComponent } from 'react'

export default class Navbar extends PureComponent {
  render() {
    return (
      <div>
            <nav class="navbar bg-dark" data-bs-theme = "dark">
                <div class="container-fluid">
                    <a class="navbar-brand">Expo</a>
                    <form class="d-flex" role="search">
                            <button class="btn btn-outline-danger" type="submit">LogOut</button>
                    </form>
                </div>
            </nav>
      </div>
    )
  }
}
