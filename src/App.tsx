import "./App.css";
import Details from "./form/Details";
import FieldSetTwo from "./form/FieldSetTwo";
import { formInterface } from "./form/formTypes";
import useForm from "./form/useForm";

const formInitialValues: formInterface = {
  name: "",
  email: "",
  address: "",
  number: "",
};

function App() {
  const FormSteps = [Details, FieldSetTwo];
  const {
    values,
    errors,
    step,
    handleChange,
    handleSetError,
    handleSetStep,
    back,
    resetForm,
  } = useForm(formInitialValues, FormSteps.length);

  const CurrentForm = FormSteps[step];

  const handleMainSubmit = () => {
    console.table(values);
    alert(JSON.stringify(values))
  };

  return (
    <div className="App">
      <p>
        Step: {step + 1} of {FormSteps.length}
      </p>
      <CurrentForm
        handleChange={handleChange}
        values={values}
        errors={errors}
        setErrors={handleSetError}
        setStep={handleSetStep}
        handleMainSubmit={handleMainSubmit}
      />
      <button type="button" onClick={back}>
        Back
      </button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </div>
  );
}

export default App;
