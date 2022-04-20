
import React from 'react';
import { Formik, Form } from 'formik';
import {useState} from 'react';


function MyTextInput({label, ...props}) {
  const [field, useValue] = useState(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {useValue.touched && useValue.error ? (
        <div className="error">{useValue.error}</div>
      ) : null}
    </>
  );
}

function MySelect({ label, ...props }) {
  const [field, useValue] = useState(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {useValue.touched && useValue.error ? (
        <div className="error">{useValue.error}</div>
      ) : null}
    </div>
  );
}


export default function Clothes () {
 
    return (
    <div>
      <Formik
        initialValues={{
          name: '',
          description: '',
          price: '',
          type:'',
          email: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          }, 300);
          }}
      >
        <Form>
          <MyTextInput
            label="Name:"
            name="name" 
            placeholder="MarkFormelle" 
          />
  
          <MyTextInput
            label="Description: red, black..." 
            name="description" 
            placeholder="Black" 
          />
          <MySelect
            label="Price:"
            name="price" 
            placeholder="50...500" 
          >
           <option value="">-</option>
           <option value="50$">50$</option>
           <option value="100$">100$</option>
           <option value="200$">200$</option>
           <option value="400$">400$</option> 
           <option value="500$">500$</option> 
          </MySelect>

          <MySelect
            label="Type:"  
            name="type" 
            placeholder="Blouse" 
          >
           <option value="">-</option>
           <option value="blouse">blouse</option>
           <option value="t-shirt">t-shirt</option>
           <option value="dress">dress</option> 
          </MySelect>

          <MyTextInput
            label="Contacts:"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

