import React, { FormEvent } from "react";
import { z } from "zod";
import { currentFormInterface } from "./formTypes";
const FormValidation = z.object({
  address: z.string().min(1, { message: "address can not be empty " }),
  number: z.string().min(1, { message: "number can not be empty " }),
});

type FormValidationType = z.infer<typeof FormValidation>;
export default function FieldSetTwo({
  values,
  handleChange,
  setStep,
  setErrors,
  errors,
  handleMainSubmit,
}: currentFormInterface) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validation = FormValidation.safeParse({
      address: values.address,
      number: values.number,
    });

    if (validation.success) {
      setStep();
      handleMainSubmit();
    } else {
      setErrors(validation.error.format());
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={values.address}
            onChange={handleChange}
          />
        </div>
        <p> {errors.address?._errors && errors.address._errors}</p>

        <div>
          <label htmlFor="number">number</label>
          <input
            type="number"
            name="number"
            value={values.number}
            onChange={handleChange}
          />
        </div>
        <p> {errors.number?._errors && errors.number._errors}</p>
      </fieldset>
      <button type="submit">Next</button>
    </form>
  );
}
