import { InputHTMLAttributes, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as S from './Form.styled';

import IconDiscord from '../../../assets/icons/discord.svg?react';
import IconMetamask from '../../../assets/icons/metamask.svg?react';
import PALLETTE from '../../../helpers/pallette';

export type InputWithErrors = InputHTMLAttributes<'error'> & {
  error: boolean;
};

interface FormValues {
  discordUsername: string;
  metamaskWallet: string;
}

function Form() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onBlur' });

  const [btnText, setBtnText] = useState('Mint');

  useEffect(() => {
    if (errors?.metamaskWallet || errors?.discordUsername) {
      setBtnText('Error');
    } else {
      setBtnText('Mint');
    }
  }, [errors?.discordUsername, errors?.metamaskWallet]);

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log('Send data logic');
    console.log(data);
    toast.success('Thanks! Our manager will contact you ');
    setBtnText('Minted');
    reset();
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Label>
        <S.Span>
          <IconDiscord fill={PALLETTE.iconDiscord} width={24} height={24} />
        </S.Span>

        <S.Input
          type="text"
          placeholder="@username"
          {...register('discordUsername', {
            required: 'Required field',
            pattern: {
              value: /^@[a-zA-Z0-9_-]{2,31}$/,
              message: 'Wrong username',
            },
          })}
          error={!!errors?.discordUsername}
        />

        <S.Error fs="10px" lh="1.2" talign="right" color={PALLETTE.accent}>
          {errors?.discordUsername &&
            errors.discordUsername?.message?.toString()}
        </S.Error>
      </S.Label>

      <S.Label>
        <S.Span>
          <IconMetamask width={24} height={24} />
        </S.Span>

        <S.Input
          type="text"
          placeholder="Wallet address"
          {...register('metamaskWallet', {
            required: 'Required field',
            pattern: {
              value: /^1x[a-f0-9]{17}$/i,
              message: 'Wrong wallet id',
            },
          })}
          error={!!errors?.metamaskWallet}
        />

        <S.Error fs="10px" lh="1.2" talign="right" color={PALLETTE.accent}>
          {errors?.metamaskWallet && errors.metamaskWallet?.message?.toString()}
        </S.Error>
      </S.Label>

      <S.Button>{btnText}</S.Button>
    </S.Form>
  );
}

export default Form;
