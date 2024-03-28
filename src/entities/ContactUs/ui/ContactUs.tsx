import React from 'react';
import s from './ContactUs.module.scss';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { Controller, useForm } from 'react-hook-form';
import { schema } from '@/entities/ContactUs/ui/ContactUs.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Ellipse from '@/shared/assets/images/ellipse.svg';

export const ContactUs: React.FC = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
    },
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const onSubmit = async () => {
    console.log('onSubmit');
    toast.success('Form submitted successfully!');
    reset();
  };

  return (
    <div className={s.ContactUs}>
      <ToastContainer position={'bottom-center'} />
      <h2>An enterprise template to ramp up your company website</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, name, value }, fieldState: { error } }) => (
            <Input
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={error}
              placeholder="Your email address"
              type="email"
              autoComplete="email"
            />
          )}
        />
        <Button
          type={'submit'}
          variant={'filled-green'}
        >
          Start now
        </Button>
      </form>
    </div>
  );
};
