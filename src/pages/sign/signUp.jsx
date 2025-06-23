import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { cretaeAccount } from '../../entities/reducerc/Products';

const schema = yup.object().shape({
  userName: yup.string().required('Имя обязательно'),
  userPhone: yup
    .string()
    .matches(/^\+?\d{7,15}$/, 'Неверный формат телефона')
    .required('Телефон обязателен'),
  userEmail: yup.string().email('Неверный email').required('Email обязателен'),
  userPassword: yup.string().min(6, 'Минимум 6 символов').required('Пароль обязателен'),
  userConfigPass: yup
    .string()
    .oneOf([yup.ref('userPassword')], 'Пароли не совпадают')
    .required('Подтверждение пароля обязательно'),
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

        <input
          {...register('userName')}
          placeholder="Name"
          className="p-2 border border-[#ccc] rounded"
        />
        {errors.userName && (
          <p className="text-red-500 text-sm">{errors.userName.message}</p>
        )}

        <input
          {...register('userPhone')}
          placeholder="Phone Number"
          className="p-2 border border-[#ccc] rounded"
        />
        {errors.userPhone && (
          <p className="text-red-500 text-sm">{errors.userPhone.message}</p>
        )}

        <input
          {...register('userEmail')}
          type="email"
          placeholder="Email"
          className="p-2 border border-[#ccc] rounded"
        />
        {errors.userEmail && (
          <p className="text-red-500 text-sm">{errors.userEmail.message}</p>
        )}

        <input
          {...register('userPassword')}
          type="password"
          placeholder="Password"
          className="p-2 border border-[#ccc] rounded"
        />
        {errors.userPassword && (
          <p className="text-red-500 text-sm">{errors.userPassword.message}</p>
        )}

        <input
          {...register('userConfigPass')}
          type="password"
          placeholder="Confirm Password"
          className="p-2 border border-[#ccc] rounded"
        />
        {errors.userConfigPass && (
          <p className="text-red-500 text-sm">{errors.userConfigPass.message}</p>
        )}

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
          >
          </svg>
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