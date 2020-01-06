import Head from "next/head";
import Font from "../components/font";

export default () => (
  <div className="main bg-dark text-light">
    <Head>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </Head>
    <div className="jumbotron text-center bg-dark">
      <h1 className="display-4">CKV portfolio Vigo</h1>
    </div>
    <div className="container">
      <h1>Alfabet Collage</h1>
      <img src="static/abc.png" className="img-fluid"></img>
      <h1 className="mt-5">Font Job en Vigo</h1>
      <img src="static/abc.jpg" className="img-fluid"></img>
      <h1 className="mt-5">Font Job en Vigo</h1>
      <img src="static/blad.png" className="img-fluid"></img>
    </div>
  </div>
);
