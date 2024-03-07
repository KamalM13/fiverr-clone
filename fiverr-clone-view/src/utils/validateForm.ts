// formValidation.ts

interface FormState {
    name: string;
    username: string;
    email: string;
    password: string;
    country: string;
}



export const validateForm = (formState: FormState):string[] => {
    const errors:string[] = [];

    // Name validation
    if (!formState.name) errors.push("Name is required");

    // Username validation
    if (!formState.username) errors.push("Username is required");

    // Email validation
    if (!formState.email) errors.push("Email is required");
    else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formState.email)) {
            errors.push("Email is invalid");
        }
    }

    // Country validation
    if (!formState.country) errors.push("Country is required");

    // Password strength validation
    if (!formState.password) errors.push("Password is required");
    else {
        const passwordRequirements = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/;
        if (!passwordRequirements.test(formState.password)) {
            errors.push("Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character");    
        }
    }

    return errors;
};
