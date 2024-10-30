import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Error 404</h1>
          <p className="py-6">UPS Parece que la página no existe</p>
          <Link to={"/"} className="btn btn-primary">
            Volvamos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
