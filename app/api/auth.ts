import {createEffect} from "effector";
import toast from "react-hot-toast";
import {ISignInFx, ISignUpFx} from "@/types/auth";
import api from '../axiosClient'

export const signUpFx = createEffect(
  async ({url, username, password, email}: ISignUpFx) => {

    const {data} = await api.post(url, {username, password, email});

    if (data.warningMessage) {
      toast.error(data.warningMessage,{duration:4000});
      return
    }

    toast.success('Успешная регистрация')
    return data;
  }
)


export const signInFx = createEffect(
  async ({url, username, password}: ISignInFx) => {

    const {data} = await api.post(url, {username, password});

    toast.success('Вход выполнен')
    return data;
  }
)


