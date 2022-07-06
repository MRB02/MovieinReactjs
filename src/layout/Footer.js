import React from 'react'

export default function Footer() {
  return (
    <footer className="page-footer #00796b teal darken-2">
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">Movie</a>
            </div>
          </div>
        </footer>
            
  )
}
