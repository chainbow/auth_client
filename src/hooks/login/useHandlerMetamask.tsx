import { useWeb3React } from "@web3-react/core";
// import type { Web3Provider } from "@ethersproject/providers";
import { api } from "../../utils/api";

const useHandlerMetamask = () => {
  // const {library, account} = useWeb3React<Web3Provider>();
  return async () => {
    // try {
    //   if (!library) return null;
    //   const web3Library: any = library;
    //   const signMessage = await web3Library.getSigner(account).signMessage("message");
    //   console.info(`[当前的signMessage]`, signMessage);
    //   const address = await api.login.signMessage.useQuery({text: account ?? ""});
    //   console.info(`[当前的address]`, address);
    //   // await router.push("/success");
    //   return null;
    // } catch (error: any) {
    //   return null;
    // }
  };
};

export default useHandlerMetamask;
