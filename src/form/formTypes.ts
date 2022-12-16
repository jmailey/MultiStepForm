export interface formInterface {
    name: string;
    email: string;
    address: string;
    number: string;
  }
  
  export type currentFormInterface = {
    values: formInterface;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errors: formError;
    setErrors: (errors: formError) => void;
    setStep: () => void;
    handleMainSubmit: () => void;
  };
  
  export type formError = { _errors: string[]; [key: string]: any };