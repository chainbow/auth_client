import { NextPage } from "next";
import useHandlerWallet3 from "../../hooks/login/useHandlerWallet3";
import useHandlerMetamask from "../../hooks/login/useHandlerMetamask";
import useHandlerEmail from "../../hooks/login/useHandlerEmail";
import useHandlerTwitter from "../../hooks/login/useHandlerTwitter";
import useHandlerGoogle from "../../hooks/login/useHandlerGoogle";
import { useEffect, useState } from "react";
import EmailModal from "./Modal";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";


interface LoginMethod {
  name: string,
  img: string,
  handler: any
}


const LoginListView: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  const injectedConnector = new InjectedConnector({supportedChainIds: [1, 5]});
  const {activate, account} = useWeb3React<Web3Provider>();
  const loginMethod: LoginMethod[] = [
    {name: "Wallet3", img: "", handler: useHandlerWallet3()},
    {name: "Metamask", img: "", handler: useHandlerMetamask()},
    {name: "Email", img: "", handler: useHandlerEmail()},
    {name: "Twitter", img: "", handler: useHandlerTwitter()},
    {name: "Google", img: "", handler: useHandlerGoogle()},
  ];

  useEffect(() => {
    activate(injectedConnector);
  }, [account]);

  const onLogin = async (loginItem: LoginMethod) => {
    const params = {} as any;

    if (loginItem.name === "Email") {
      setShowModal(true);
      return;
    }
    const executeHandler = loginItem.handler;
    await executeHandler(params);
  };


  return (
    <>
      { showModal && <EmailModal show={ true } onCallback={ (show) => setShowModal(show) }/> }
      { loginMethod.map((loginItem) => {
        return <div
          key={ `login_item_${ loginItem.name }` }
          style={ {display: "flex", justifyContent: "center", alignItems: "center", height: "100px", width: "100px", backgroundColor: "black"} }>
          <button className="rounded-md w-20 h-10 bg-green-500 from-gray-50 cursor-pointer transform hover:bg-green-400 active:bg-green-600 text-white" onClick={ () => onLogin(loginItem) }>
            { loginItem.name }
          </button>
        </div>;
      }) }

    </>
  );
};

export default LoginListView;

