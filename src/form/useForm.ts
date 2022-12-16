import { useState } from "react";
import { formError, formInterface } from "./formTypes";

export default function useForm(
  formInitialValues: formInterface,
  steps: number
) {
  const [values, setValues] = useState<formInterface>(formInitialValues);
  const [errors, setErrors] = useState<formError>({ _errors: [] });
  const [step, setStep] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSetError = (errors: formError) => {
    setErrors(errors);
  };

  const handleSetStep = () => {
    setStep((prev) => {
      if (prev >= steps - 1) {
        return prev;
      } else {
        setErrors({ _errors: [] });
        return prev + 1;
      }
    });
  };

  const back = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const resetForm = () => {
    setValues(formInitialValues);
    setStep(0);
  };

  return {
    values,
    errors,
    step,
    handleChange,
    handleSetError,
    handleSetStep,
    back,
    resetForm,
  };
}
