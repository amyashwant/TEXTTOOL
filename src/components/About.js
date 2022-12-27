import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //     color: 'black',
  //     backgroundColor: 'white'
  // })
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "grey" : "white",
  };

  return (
    <div className="container">
      <h1
        className="my-3"
        style={{ color: props.mode === "dark" ? "green" : "#042743" }}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your text </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              TextUtils reports the number of words and characters. Thus it is
              suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// export default About;
















// import React from "react";
// //import { Link } from "react-router-dom";

// import PropTypes from "prop-types";
// export function Navbar(props) {
//   let mystyle = {
//     color: "orange",
//   };

//   return (
//     <>
//       <nav
//         className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
//       >
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/" style={mystyle}>
//             {props.title}
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a
//                   className="nav-a active"
//                   aria-current="page"
//                   href="/"
//                   style={mystyle}
//                 >
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-a" href="/about" style={mystyle}>
//                   {props.about}
//                 </a>
//               </li>
//             </ul>
//             <div
//               className={`form-check form-switch text-${
//                 props.mode === "light" ? "dark" : "light"
//               }`}
//             >
//               <input
//                 className="form-check-input"
//                 type="checkbox"
//                 //role="switch"
//                 id="flexSwitchCheckDefault"
//                 onClick={props.changed}
//               />
//               <label
//                 className="form-check-label"
//                 htmlFor="flexSwitchCheckDefault"
//                 //style={mystyle}
//               >
//                 {props.name}
//               </label>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// Navbar.propTypes = {
//   title: PropTypes.string,
//   about: PropTypes.string,
// };

// Navbar.defaultProps = {
//   title: "TextUtilsf",
//   about: "About",
// };
// export default Navbar;