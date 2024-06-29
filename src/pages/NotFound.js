import React from 'react'
import { Link } from 'react-router-dom';

const urlNotFound = 'https://cdn.svgator.com/images/2024/04/detective-animation-404-error-page.gif'
const NotFound = () => {
    return (
        <div className="flex items-center justify-center">
          <div className="text-center">

            <img src={urlNotFound}  height={'85%'}  width={'80%'} alt='404' />
            {/* <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <p className="mt-4 text-xl text-gray-600">Page not found</p> */}
            <Link to="/" className="mt-10 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Go back home
            </Link>
          </div>
        </div>
      );
}

export default NotFound