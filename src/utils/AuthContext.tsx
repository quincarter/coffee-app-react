import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ID, Models } from "appwrite";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../appwriteConfig";
import { IGlobalNotificationProps } from "../components/GlobalNotification";

export interface ICredentials {
  email: string;
  password: string;
}

export interface IRegistrationCredentials extends ICredentials {
  firstName: string;
  lastName: string;
  password2: string;
  phone: string;
}

export interface IAuthContext {
  user: any;
  errors: any;
  globalNotification: IGlobalNotificationProps;
  handleUserLogin: (
    e: React.FormEvent<HTMLFormElement>,
    credentials: ICredentials
  ) => {};
  handleUserRegister: (e: any, credentials: IRegistrationCredentials) => {};
  handleUserLogout: () => {};
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
    null
  );
  const [errors, setErrors] = useState<any>([]);
  const [globalNotification, setGlobalNotification] =
    useState<IGlobalNotificationProps>({
      severity: "info",
      message: "",
      title: "",
      canClose: false,
    });

  const lottieStyles = {
    height: "10rem",
  };

  useEffect(() => {
    getUserOnLoad();
  }, []);

  const getUserOnLoad = async () => {
    try {
      const accountDetails = await account.get();
      setUser(accountDetails);
      setErrors([]);
    } catch (e) {
      console.warn(e);
    }
    setLoading(false);
  };

  const handleUserLogin = async (
    e: React.FormEvent<HTMLFormElement>,
    credentials: ICredentials
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      await account.createEmailPasswordSession(
        credentials.email,
        credentials.password
      );

      const accountDetails = await account.get();

      setUser(accountDetails);

      setLoading(false);
      navigate("/");
    } catch (e: any) {
      console.error(e);
      setErrors((prevState: any) => {
        if (!prevState.includes(e.message)) {
          return [...prevState, e.message];
        }
        return prevState;
      });
      setLoading(false);
    }
  };

  const handleUserLogout = async () => {
    account.deleteSession("current");
    setUser(null);
  };

  const handleUserRegister = async (
    e: any,
    credentials: IRegistrationCredentials
  ) => {
    e.preventDefault();
    if (credentials.password !== credentials.password2) {
      alert("Passwords do not match!");
      return;
    }

    const phone = `+${credentials.phone.replaceAll(/[\D]/g, "")}`;

    try {
      setLoading(true);
      await account.create(
        ID.unique(),
        credentials.email,
        credentials.password,
        `${credentials.firstName} ${credentials.lastName}`
      );

      await account.createEmailPasswordSession(
        credentials.email,
        credentials.password
      );
      const accountDetails = await account.get();
      setUser(accountDetails);
      navigate("/");
      setupPhoneNumber(phone, credentials.password);
      setLoading(false);
    } catch (e: any) {
      console.error(e);
      setErrors((prevState: any) => {
        if (!prevState.includes(e.message)) {
          return [...prevState, e.message];
        }
        return prevState;
      });
      setLoading(false);
      console.log("errors here", errors);
    }
  };

  const contextData: IAuthContext = {
    user,
    errors,
    globalNotification,
    handleUserLogin,
    handleUserLogout,
    handleUserRegister,
  };

  const setupPhoneNumber = async (phone: string, pass: string) => {
    try {
      await account.updatePhone(phone, pass);
      setGlobalNotification({
        severity: "success",
        variant: "filled",
        message: "Phone Number Updated Successfully!",
        title: "Success!",
        canClose: true,
      });
    } catch (e: any) {
      console.log("e.title?", e.title);
      setGlobalNotification({
        severity: "error",
        message: e.message,
        title: "Phone Number not updated",
        canClose: true,
      });
    }
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? (
        <div className="loading-container">
          <DotLottieReact
            style={lottieStyles}
            autoResizeCanvas
            loop
            autoplay
            src="https://lottie.host/97cffe08-0f93-48d2-8c04-76cca5a863ee/rBeYF4yeqV.lottie"
          />
          <h3>Can you taste it yet?</h3>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
