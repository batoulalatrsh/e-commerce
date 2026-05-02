export default function formValidation(cusomerData) {
  const errors = {};

  if (!cusomerData.firstName) {
    errors.firstName = "First name is required";
  } else if (cusomerData.firstName.length < 4) {
    errors.firstName = "First name must be at least 4 characters";
  }

  if (!cusomerData.lastName) {
    errors.lastName = "Last name is required";
  } else if (cusomerData.lastName.length < 4) {
    errors.lastName = "Last name must be at least 4 characters";
  }

  if (!cusomerData.address) {
    errors.address = "Address is required";
  }

  if (!cusomerData.city) {
    errors.city = "City is required";
  }

  if (!cusomerData.postalCode) {
    errors.postalCode = "Postal code is required";
  }

  if (!cusomerData.phoneNumber) {
    errors.phoneNumber = "Phone number is required";
  } else if (!/^(\+?\d{10,15})$/.test(cusomerData.phoneNumber)) {
    errors.phoneNumber = "Invalid phone number";
  }

  if (!cusomerData.payment) {
    errors.payment = "Please select a payment method";
  }

  return errors;
}
