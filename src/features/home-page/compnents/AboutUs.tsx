import "./AboutUs.scss";
import React, { FC } from "react";
import AboutLogo from "../../../assets/images/pictures/about-logo.png";
import downloadAppContent, {
  DownloadAppBtnProps,
} from "../../../utils/constants/downloadAppNav";

const Text = () => (
  <>
    <p className="about-text s-mt">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam unde
      suscipit alias facilis eligendi iure a commodi doloremque et provident,
      voluptatem eius, eum deserunt! Cupiditate qui quos fugit iure eius!
    </p>
    <p className="about-text s-mt">
      Vitae dicta adipisci laudantium officia nemo iusto quos neque quas
      voluptate similique eos soluta, atque nisi voluptatibus nihil, eum culpa.
      Doloribus neque nostrum voluptatibus veritatis id atque magni similique
      quis.
    </p>
  </>
);

const DownloadAppBtn: FC<DownloadAppBtnProps> = ({
  icon,
  downloadTxt,
  appName,
  cb,
}: DownloadAppBtnProps) => (
  <div className="store" onClick={(e) => cb()}>
    <img src={icon} alt={appName} />
    <p>
      <span>{downloadTxt}</span>
      <br />
      {appName}
    </p>
  </div>
);

const DownloadAppBtns = () => (
  <div className="app-download-container s-mt">
    {downloadAppContent.map(({ icon, downloadTxt, appName, cb }, i) => (
      <DownloadAppBtn
        key={i}
        icon={icon}
        downloadTxt={downloadTxt}
        appName={appName}
        cb={cb}
      />
    ))}
  </div>
);

const AboutUs = () => (
  <section className="bgc-light m-mt">
    <div className="about-container inner-container">
      <div className="about-text-box">
        <h2 className="text-uppercase">About Us:</h2>
        <Text />
        <DownloadAppBtns />
      </div>
      <img className="s-mt" id="logo" src={AboutLogo} alt="about" />
    </div>
  </section>
);

export default AboutUs;
