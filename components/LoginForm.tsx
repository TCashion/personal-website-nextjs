import {
  useState,
  ChangeEvent,
  FormEvent,
  ChangeEventHandler,
  FormEventHandler,
} from 'react';
import Card from './Card';
import Button from './Button';
// import userService from '../../services/userService'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);

  const errorStyles = {
    inputBorder: error ? 'red' : '',
    messageDisplay: error ? 'block' : 'none',
  };

  const handleChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    e.preventDefault();
    setError(false);
    const newData: any = {};
    newData[e.target.name] = e.target.value;
    setFormData({
      ...formData,
      ...newData,
    });
  };

  const handleSubmit: FormEventHandler = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log(formData);
    // try {
    //     await userService.login(this.state);
    //     this.props.handleSignupOrLogin();
    //     this.props.history.push('/');
    // } catch (err) {
    //     setError(true)
    // }
  };

  const validateForm = (): boolean => {
    return !(formData.email && formData.password);
  };

  return (
    <Card extraClasses="w-full max-w-xs shadow-light">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            onChange={handleChange}
            type="text"
            value={formData.email}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            onChange={handleChange}
            style={{ borderColor: errorStyles.inputBorder }}
            type="password"
            value={formData.password}
          />
          <p
            className="text-red-500 text-xs italic"
            style={{ display: errorStyles.messageDisplay }}
          >
            Please Enter a password.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <Button disabled={validateForm()} innerText="Sign In" type="submit" />
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Travis Cashion.
      </p>
    </Card>
  );
};

export default LoginForm;
