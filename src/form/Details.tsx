import { FormEvent } from "react";
import { z } from "zod";
import { currentFormInterface } from "./formTypes";

const FormValidation = z.object({
  name: z.string().min(1, { message: "name can not be empty " }),
  email: z.string().email(),
});

type FormValidationType = z.infer<typeof FormValidation>;

export default function Details({
  values,
  handleChange,
  errors,
  setErrors,
  setStep,
}: currentFormInterface) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validation = FormValidation.safeParse({
      name: values.name,
      email: values.email,
    });

    if (validation.success) {
      setStep();
    } else {
      setErrors(validation.error.format());
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <p> {errors.name?._errors && errors.name._errors}</p>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <p> {errors.email?._errors && errors.email._errors}</p>
        </div>
      </fieldset>
      <button type="submit">Next</button>
    </form>
  );
}
