import React from "react";
import { useFormik, Formik } from "formik";
import * as Yup from "yup";

const FormikLogin = () => {
  const Formiks = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dob: "",
    },
    onSubmit: (values) => {
      console.log("submit:", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(16, "to many words")
        .min(2, "not enough words")
        .required("first Name is required"),
      lastName: Yup.string()
        .max(16, "to many words")
        .min(2, "not enough words")
        .required("last Name is required"),
      dob: Yup.string()
        .max(16, "to many words")
        .min(2, "not enough words")
        .required("dob is required"),
    }),
  });

  return (
    <div>
      <form onSubmit={Formiks.handleSubmit}>
        <label htmlFor="id1">FirstName:</label>
        <input
          type="text"
          className="id1 border border-orange-700 m-5"
          {...Formiks.getFieldProps("firstName")}
          value={Formiks.values.firstName}
        />
        {Formiks.touched.firstName && Formiks.errors.firstName ? (
          <div>{Formiks.errors.firstName}</div>
        ) : null}
        <br />
        <label htmlFor="id2">LastName:</label>
        <input
          type="text "
          className="id2 border border-orange-700 m-5"
          {...Formiks.getFieldProps("lastName")}
          value={Formiks.values.lastName}
        />
        {Formiks.touched.lastName && Formiks.errors.lastName ? (
          <div>{Formiks.errors.lastName}</div>
        ) : null}
        <br />
        <label htmlFor="id1">DOB:</label>
        <input
          type="date"
          className="id3 border border-orange-700 m-5"
          {...Formiks.getFieldProps("dob")}
          value={Formiks.values.dob}
        />
        {Formiks.touched.dob && Formiks.errors.dob ? (
          <div>{Formiks.errors.dob}</div>
        ) : null}
        <br />
        <button type="submit">Submit</button>
      </form>

      <br />
      <form>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            dob: "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(16, "to many words")
              .min(2, "not enough words")
              .required("first Name is required"),
            lastName: Yup.string()
              .max(16, "to many words")
              .min(2, "not enough words")
              .required("last Name is required"),
            dob: Yup.string()
              .max(16, "to many words")
              .min(2, "not enough words")
              .required("dob is required"),
          })}
          onSubmit={(values) => {
            console.log("submit:", values);
          }}
        ></Formik>
      </form>
    </div>
  );
};

export default FormikLogin;
