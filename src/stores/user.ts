import * as Realm from "realm-web";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { useStorage } from "@vueuse/core";

const APP_PROJECT_ID = "blog-web-app-ddtvo";

const app = new Realm.App({ id: APP_PROJECT_ID });

const { BSON } = Realm;

console.log("Realm ObjectID : ", new BSON.ObjectID().toString());

async function realmEmailPasswordLogin(
  email: string,
  password: string
): Promise<Object> {
  const credentials = Realm.Credentials.emailPassword(email, password);
  try {
    const user = await app.logIn(credentials);
    return user;
  } catch (error: any) {
    return error;
  }
}

export const useUserStore = defineStore("user", () => {
  const isThereUserConfirmError: Ref<Boolean> = ref(false);
  const isUserSignUpConfirmed: Ref<Boolean> = ref(false);
  const userSignUpErrorLog: Ref<string> = ref("");
  const signUpUserEmail: Ref<string> = ref("");
  const loginUserEmail: Ref<string> = ref("");

  async function userLogin(email: string, password: string): Promise<String> {
    const user: any = await realmEmailPasswordLogin(email, password);
    console.log("user Login ", user);
    if (user?.statusCode === 401) {
      return "loginError";
    } else {
      loginUserEmail.value = email;
      localStorage.clear();
      const isUserAuthenticated: any = useStorage(
        "isUserLogin",
        false,
        localStorage
      );
      isUserAuthenticated.value = true;
      return "loginSuccess";
    }
  }

  async function resendConfirmationEmail() {
    try {
      const resendEmailStatus =
        await app.emailPasswordAuth.resendConfirmationEmail({
          email: signUpUserEmail?.value,
        });
    } catch (err) {
      console.log(err);
    }
  }

  async function userSignUp(email: string, password: string): Promise<any> {
    try {
      const newUser = await app.emailPasswordAuth.registerUser({
        email,
        password,
      });

      signUpUserEmail.value = email;
      userSignUpErrorLog.value = "success";
    } catch (err: any) {
      if (err.error) {
        userSignUpErrorLog.value = err.error;
      }
      console.log(err);
    }
  }

  async function confirmUserSignUp(token: string, tokenId: string) {
    try {
      const confirmStatus = await app.emailPasswordAuth.confirmUser({
        token,
        tokenId,
      });
      isUserSignUpConfirmed.value = true;
      return confirmStatus;
    } catch (error) {
      console.log(error);
      isThereUserConfirmError.value = true;
      return error;
    }
  }

  return {
    userLogin,
    userSignUp,
    isThereUserConfirmError,
    signUpUserEmail,
    loginUserEmail,
    confirmUserSignUp,
    resendConfirmationEmail,
    isUserSignUpConfirmed,
    userSignUpErrorLog,
  };
});
