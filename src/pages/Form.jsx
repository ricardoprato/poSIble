import { useEffect } from "react";
import { FormComponent } from "../components/FormComponent";
import { useConnect } from "../hooks/useConnect";

export const Form = () => {
  const { publicKey, connect } = useConnect();
  useEffect(() => {
    if (localStorage.getItem("previouslyConnected") === "true") connect();
  }, [connect]);

  return (
    <div className="bg-complementary min-h-screen">
      {publicKey ? (
        <FormComponent />
      ) : (
        <div className="flex flex-col gap-4  items-center ">
          <div class="px-4 py-3 text-white bg-primary w-full">
            <p class="text-sm font-medium text-center">
              Necesitas conectar tu wallet de Metamask
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
