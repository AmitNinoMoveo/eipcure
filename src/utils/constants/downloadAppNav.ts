import GoogleIcon from "../../assets/images/icons/google-icon.svg";
import AppleIcon from "../../assets/images/icons/apple-icon.svg";

export type DownloadAppBtnProps = {
    icon: string;
    downloadTxt: string;
    appName: string;
    cb: () => void;
  };

const downloadAppContent: DownloadAppBtnProps[] = [
    {
      icon: AppleIcon,
      downloadTxt: "Download on the",
      appName: "App Store",
      cb: () => console.log("Download from Apple"),
    },
    {
      icon: GoogleIcon,
      downloadTxt: "Get it on",
      appName: "Google Play",
      cb: () => console.log("Download from Google"),
    },
  ];

  export default downloadAppContent;