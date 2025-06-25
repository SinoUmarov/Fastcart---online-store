import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { cretaeAccount } from '../../entities/reducerc/Products';

const schema = yup.object().shape({
  userName: yup.string().required('NAME ERROR'),
  userPhone: yup
    .string()
    .matches(/^\+?\d{7,15}$/, 'telephone is error')
    .required('telephone must much'),
  userEmail: yup.string().email('notFound email').required('Email error'),
  userPassword: yup.string().min(6, 'min 6 symbol').required('parol error'),
  userConfigPass: yup
    .string()
    .oneOf([yup.ref('userPassword')], 'Passwords must match')
    .required('Confirm password is required'),
});

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await dispatch(
        cretaeAccount({
          userName: data.userName,
          phoneNumber: data.userPhone,
          email: data.userEmail,
          password: data.userPassword,
          confirmPassword: data.userConfigPass,
        })
      ).unwrap();
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 p-4 w-[90%] md:w-[28%] m-auto"
      >
        <h1 className="text-3xl font-medium">Create an account</h1>
        <p className="text-base mb-5 font-normal">Enter your details below</p>

       
        {Object.values(errors).length > 0 && (
          <div className=" border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
            <ul className=" list-inside list-none text-center text-sm space-y-1">
              {Object.values(errors).map((error, index) => (
                <li className='font-bold text-xl' key={index}>{error.message}</li>
              ))}
            </ul>
          </div>
        )}

        <input
          {...register('userName')}
          placeholder="Name"
          className="p-2 border border-[#ccc] rounded"
        />

        <input
          {...register('userPhone')}
          placeholder="Phone Number"
          className="p-2 border border-[#ccc] rounded"
        />

        <input
          {...register('userEmail')}
          type="email"
          placeholder="Email"
          className="p-2 border border-[#ccc] rounded"
        />

        <input
          {...register('userPassword')}
          type="password"
          placeholder="Password"
          className="p-2 border border-[#ccc] rounded"
        />

        <input
          {...register('userConfigPass')}
          type="password"
          placeholder="Confirm Password"
          className="p-2 border border-[#ccc] rounded"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#DB4444] text-white mt-5 p-2 font-medium rounded"
        >
          {isSubmitting ? 'Creating...' : 'Create Account'}
        </button>

        <div className="flex flex-row items-center justify-center py-2 gap-6 px-2 border border-[#ccc] rounded mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
          />
          <p>Sign up with Google</p>
        </div>

        <div className="flex flex-row items-center justify-center gap-5 mt-5">
          <p className="text-base font-normal text-[#4D4D4D]">Already have an account?</p>
          <Link
            to="/login"
            className="text-base font-medium border-b border-[#808080] text-[#4D4D4D]"
          >
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
