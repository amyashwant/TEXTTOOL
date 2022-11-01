import React from "react";

export const Alert = (props) => {
  let capitalize = (word) => {
    let lower = word.toLowerCase();

    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>
      )}
    </div>
  );
};

export default Alert;

/**
 * <Router>
<Navbar
  title={"textutils"}
  about="About"
  mode={mode}
  changed={changed}
  name={name}
/>
<Alert alert={alert} />

<div className="container">
  <Switch>
    <Route path="/about">
      <About />
    </Route>

    <Route path="/">
      <TextForm
        heading="enter your text here"
        mode={mode}
        showalert={showalert}
      />
    </Route>
  </Switch>
</div>
</Router>










<Navbar
        title={"textutils"}
        about="About"
        mode={mode}
        changed={changed}
        name={name}
      />
      <Alert />
      <TextForm
        heading="enter your text here"
        mode={mode}
        showalert={showalert}
      />

      <About />
 */