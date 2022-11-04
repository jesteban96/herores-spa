import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";

export const Herores = () => {
  
  return (
    <AuthProvider>

      <AppRouter/>
      
    </AuthProvider>  
  );
}
