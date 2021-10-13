import styles from "./Auth.module.scss";

import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import * as rootSlice from "../../features/root/rootSlice";

export const Auth = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    const { email, password } = data;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      reset();
    } catch (e) {
      dispatch(
        rootSlice.handleAnnounce({
          type: "error",
          text: "メールアドレスかパスワードが間違っています",
        })
      );
    }
    reset({ email: data.email, password: "" });
  };

  return (
    <div className={styles.auth}>
      <form onSubmit={handleSubmit(handleLogin)} className={styles.auth_inner}>
        <h1 className={styles.auth_head}>管理画面</h1>

        <div>
          <input
            type="text"
            className={`${styles.auth_input} ${
              errors.email && styles.auth_input_error
            }`}
            placeholder="メールアドレス"
            {...register("email", {
              required: {
                value: true,
                message: "メールアドレスを入力してください",
              },
              pattern: {
                value:
                  /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/,
                message: "メールアドレスを正しい形式で入力してください",
              },
            })}
          />
          <span className={styles.auth_error}>{errors.email?.message}</span>
        </div>

        <div>
          <input
            type="password"
            className={`${styles.auth_input} ${
              errors.password && styles.auth_input_error
            }`}
            placeholder="パスワード"
            {...register("password", {
              required: {
                value: true,
                message: "パスワードを入力してください",
              },
              minLength: {
                value: 8,
                message: "パスワードを8文字以上で入力してください",
              },
            })}
          />
          <span className={styles.auth_error}>{errors.password?.message}</span>
        </div>

        <button type="submit" className={styles.auth_btn}>
          ログイン
        </button>
      </form>
    </div>
  );
};
